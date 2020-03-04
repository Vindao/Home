import express from "express";

import { generate } from "generate-password";
import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { v4 as uuid } from "uuid";

// config
import {
  endPoints,
  maxConfMailTokenAge,
  BaseClientUrl
} from "../../../config/main";

import { encryptionKey } from "../../../config/secrets";
// types
import { RegisterBodyI, SessionUserI, DBUserI } from "../../../../types/User";

// helpers
import {
  validateRequest,
  createRegisterBody,
  createSessionUser
} from "../../../lib/helpers";
import { sendConfMail } from "../../../lib/mail";

// mongoDB
import User from "../../../models/user";

export const initSession = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.session) {
    if (!req.session.user) {
      const id = uuid();
      console.log(id);
      req.session.user = createSessionUser({
        id: id,
        language: req.body.language,
        loggedIn: false
      });
      console.log(req.session);
      res.locals.session = req.session;
    }
    next();
  }
};

export const register = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request

  if (!validateRequest(endPoints.register.requires, req.body)) {
    res.status(401).send({ success: false, error: "Bad Request" });
    return;
  }

  if (!(req.session && req.session.user)) {
    res.status(403).send({ success: false, error: "BAD REQUEST" });
    return;
  }
  const Body: RegisterBodyI = req.body;

  // hash pwd

  const SALT_ROUNDS = 10;
  console.log(Body);
  hash(Body.password, SALT_ROUNDS)
    .then((hash: string) => {
      const newUser: RegisterBodyI = createRegisterBody({
        ...Body,
        password: hash,
        //@ts-ignore
        id: req.session.user.id
      });
      User.create(newUser)
        .then(user => {
          if (user) {
            //@ts-ignore
            res.locals.registered = user.id;
            next();
          } else {
            res
              .status(500)
              .send({ success: false, error: "could not create user" });
          }
        })
        .catch(err => res.status(500).send({ success: false, error: err }));
    })
    .catch((err: any) => {
      res.status(500).send({ success: false, error: err });
    });
  // check user exists
};

export const checkEmailExists = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request
  if (!validateRequest(endPoints.emailExists.requires, req.body)) {
    res.status(403).send({ success: false, error: "Bad Request" });
    return;
  }
  const { email } = req.body;

  User.findOne({ email: email })
    .then((user: any) => {
      if (user) {
        res.status(200).send({
          email: "EXISTS",
          success: false
        });
      } else {
        res.locals.email = "NOEXIST";
        next();
      }
    })
    .catch((err: any) => res.status(500).send({ success: false, error: err }));
};

export const login = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request
  if (!validateRequest(endPoints.login.requires, req.body)) {
    res.status(401).send({ success: false, error: "Bad Request" });
    return;
  }
  const Body: RegisterBodyI = req.body;

  User.findOne({ email: Body.email })
    .then((user: any) => {
      if (user) {
        // validate password
        compare(Body.password, user.password, (err: any, success: boolean) => {
          if (success === true) {
            const UserInfo = createSessionUser(user);
            console.log(UserInfo);

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

export const checkLoggedIn = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.session && req.session.user && req.session.user.loggedIn) {
    res.locals.loggedIn = true;
    res.locals.user = req.session.user;
    next();
  } else {
    res.locals.loggedIn = false;
    next();
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
    return;
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

export const changeLanguage = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const Body = req.body;
  if (!validateRequest(endPoints.changeLanguage.requires, Body)) {
    res.status(401).send({ success: false, error: "Bad Request" });
    return;
  }
  if (!(req.session && req.session.user)) {
    res.status(403).send({ success: false, error: "BAD REQUEST" });
    return;
  }
  if (res.locals.user && res.locals.user._id) {
    User.findById(res.locals.user._id)
      .then((user: any) => {
        if (user && Body.language) {
          user.language = Body.language;
          user.save((err: any) => {
            if (err) {
              console.error(err);
              res.status(500).send({
                success: false,
                error: { ...err, code: "updateLanguage" }
              });
            } else if (req.session && req.session.user) {
              res.locals.newLanguage = Body.language;
              res.locals.user = createSessionUser(user);
              next();
            }
          });
        } else {
          res.status(500).send({ success: false, error: "Authentication" });
        }
      })
      .catch((err: any) => {
        console.error(err);

        res
          .status(500)
          .send({ success: false, error: { ...err, code: "updateLanguage" } });
      });
  } else {
    res.locals.changeLanguageMongo = "NOREG";
    //@ts-ignore
    req.session.user.language = Body.language;
    res.locals.session = req.session;
    next();
  }
};

export const sendResponse = (req: express.Request, res: express.Response) => {
  res.status(200).send({ success: true, ...res.locals });
};
