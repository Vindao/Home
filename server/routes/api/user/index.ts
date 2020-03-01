import express from "express";

import { generate } from "generate-password";
import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

// config
import {
  endPoints,
  maxConfMailTokenAge,
  BaseClientUrl
} from "../../../config/main";

import { encryptionKey } from "../../../config/secrets";
// types
import { RegisterBodyI, CreateUserI } from "../../../../types/User";

// helpers
import { validateRequest } from "../../../lib/helpers";
import { sendConfMail } from "../../../lib/mail";
import { validate } from "../../../../lib/formVal";

// mongoDB
import User from "../../../models/user";

export const register = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request

  if (!validateRequest(endPoints.register.requires, req.body)) {
    res.status(401).send({ success: false, error: "Bad Request" });
  } else {
    const Body: RegisterBodyI = req.body;

    // check user exists
    User.findOne({ email: Body.email })
      .then((user: any) => {
        if (user) {
          res.status(401).send({
            error: "Email",
            success: false
          });
        } else {
          // hash pwd

          const SALT_ROUNDS = 10;

          hash(Body.password, SALT_ROUNDS)
            .then((hash: string) => {
              const newUser: CreateUserI = {
                ...Body,
                password: hash
              };

              User.create(newUser)
                .then(user => {
                  if (user) {
                    next();
                  } else {
                    res
                      .status(500)
                      .send({ success: false, error: "could not create user" });
                  }
                })
                .catch(err =>
                  res.status(500).send({ success: false, error: err })
                );
            })
            .catch((err: any) => {
              res.status(500).send({ success: false, error: err });
            });
        }
      })
      .catch((err: any) =>
        res.status(500).send({ success: false, error: err })
      );
  }
};

export const login = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request
  if (!validateRequest(endPoints.login.requires, req.body)) {
    res.status(401).send({ success: false, error: "Bad Request" });
  }

  const Body: RegisterBodyI = req.body;

  User.findOne({ email: Body.email })
    .then((user: any) => {
      if (user) {
        // validate password
        compare(Body.password, user.password, (err: any, success: boolean) => {
          if (success === true) {
            const UserInfo = {
              _id: user._id,
              name: user.name,
              email: user.email,
              messages: user.messages,
              company: user.company,
              phone: user.phone,
              confirmed: user.confirmed,
              loggedIn: true
            };
            //@ts-ignore
            req.session.user = UserInfo;

            res.locals.user = UserInfo;

            next();
          } else {
            res.status(401).send({ success: false, error: "credentials" });
          }
        });
      }
    })
    .catch((err: any) => res.status(500).send({ success: false, error: err }));
};

export const checkLoggedIn = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.session && req.session.user && req.session.user.loggedIn) {
    res.locals.user = req.session.user;
    next();
  } else {
    res.status(401).send({ success: false, error: "user not logged in" });
  }
};

export const logout = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.session) {
    req.session.destroy((err: any) => {
      if (err) {
        res.status(500).send({ success: false, error: err });
      } else {
        res.locals.loggedOut = true;
        next();
      }
    });
  }
};

export const sendConfirmationMail = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request
  const Body = req.body;
  if (!validateRequest(endPoints.sendConfirmationMail.requires, Body)) {
    res.status(401).send({ success: false, error: "Bad Request" });
  }
  User.findOne({ email: Body.email })
    .then((user: any) => {
      if (user) {
        const code = generate({
          length: 8,
          numbers: true,
          symbols: false,
          lowercase: false,
          uppercase: false
        });
        const token = sign(
          {
            exp: maxConfMailTokenAge,
            data: {
              name: user.name,
              email: user.email,
              language: user.language
            }
          },
          encryptionKey
        );
        hash(code, 10)
          .then((hash: string) => {
            if (hash) {
              user.confMail = { code: hash };
              user.save((err: any) => {
                if (err) {
                  res.status(500).send({ success: false, error: err });
                } else {
                  const link =
                    req.protocol +
                    "://" +
                    req.get("host") +
                    "/api/user/confirmaccount/" +
                    token;
                  sendConfMail(
                    {
                      link: link,
                      code: code,
                      email: user.email,
                      name: user.name
                    },
                    user.language
                  )
                    .then(result => {
                      if (result.status === 201) {
                        res.locals.confMail = {
                          date: result.headers.date,
                          to: Body.email
                        };
                        next();
                      } else {
                        res
                          .status(500)
                          .send({ success: false, error: "confMailError" });
                      }
                    })
                    .catch(err =>
                      res.status(500).send({ success: false, error: err })
                    );
                }
              });
            } else {
              res
                .status(500)
                .send({ success: false, error: "could not hash code" });
            }
          })
          .catch((err: any) => {
            res.status(500).send({ success: false, error: err });
          });
      } else {
        res.status(401).send({ success: false, error: "not existing" });
      }
    })
    .catch((err: any) => res.status(500).send({ success: false, error: err }));
};

export const confirmAccount = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(req.params);
  verify(req.params.token, encryptionKey, (err: any, decoded: any) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        // TODO: setup clientside handler for expired token
        res.status(401).redirect(BaseClientUrl + "?error=cmtkexp");
      }
    } else if (decoded) {
      User.findOne({ email: decoded.data.email }).then((user: any) => {
        if (user) {
          user.confirmed = true;
          user.save((err: any) => {
            if (err) {
              res
                .status(500)
                .send({ success: false, error: "could not mutate user" });
            } else {
              // res.locals.confirmed = { name: user.name, email: user.email };
              res.redirect(BaseClientUrl);
            }
          });
        } else {
          res.status(401).send({ success: false, error: "user doesnt exist" });
        }
      });
    } else {
      res.status(401).send({ success: false, error: "invalid token" });
    }
  });
};

export const sendResponse = (req: express.Request, res: express.Response) => {
  res.status(200).send({ success: true, ...res.locals });
};
