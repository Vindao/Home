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
import {
  RegisterBodyI,
  RegisterObjectI,
  SessionUserI
} from "../../../../types/User";

// helpers
import { validateRequest, createSessionUser } from "../../../lib/helpers";
import { sendConfMail } from "../../../lib/mail";

const addToRespond = (res: express.Response, object: any) => {
  res.locals = { ...res.locals, ...object };
};

// mongoDB
import User from "../../../models/user";

export const register = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request

  if (!validateRequest(endPoints.register.requires, req.body)) {
    res.status(403).send({ success: false, error: "Bad Request" });
    return;
  }

  const Body: RegisterBodyI = req.body;

  // hash pwd

  const SALT_ROUNDS = 10;
  hash(Body.password, SALT_ROUNDS)
    .then((hash: string) => {
      let newUser: RegisterObjectI = {
        ...Body,
        password: hash,
        //@ts-ignore
        confirmed: false
      };
      if (req.session && req.session.user) {
        newUser.id = req.session.user.id;
      }
      User.create(newUser)
        .then(user => {
          if (user) {
            //@ts-ignore
            addToRespond(res, { registered: user.id });

            next();
          } else {
            res
              .status(500)
              .send({ success: false, error: "could not create user" });
          }
        })
        .catch(err => {
          console.error(err);
          console.error(err, "createUser");

          res.status(500).send({ success: false, error: err });
        });
    })
    .catch((err: any) => {
      console.error(err, "hash");

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
        addToRespond(res, { error: "EMAILEXISTS" });
      } else {
        addToRespond(res, { email: "VALID" });
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
            const UserInfo = {
              ID: user.id,
              language: user.language,
              loggedIn: true,
              name: user.name,
              email: user.email,
              company: user.company,
              phone: user.phone,
              confirmed: user.confirmed
            } as SessionUserI;
            //@ts-ignore
            req.session.user = UserInfo;
            //@ts-ignore
            req.session.authenticated = true;
            addToRespond(res, { authenticated: true, user: UserInfo });
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
        console.error(err);
        res.status(500).send({ success: false, error: err });
      } else {
        addToRespond(res, { loggedOut: true });
        next();
      }
    });
  }
};

export const getUser = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  //@ts-ignore

  if (req.session && req.session.user) {
    if (req.session.authenticated) {
      addToRespond(res, { authenticated: true });
    } else {
      addToRespond(res, { authenticated: false });
    }
  } else if (req.session) {
    const Acceptslanguage = req.acceptsLanguages(["en", "de", "nl"]);
    req.session.user = {
      ID: uuid(),
      loggedIn: false,
      language: Acceptslanguage || "en"
    };
    addToRespond(res, { info: { newSession: true } });
  } else {
    addToRespond(res, { error: "NOSESSION" });
  }
  //@ts-ignore
  addToRespond(res, { user: req.session.user });

  next();
};

export const authenticate = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.session && req.session.user && req.session.authenticated) {
    addToRespond(res, { authenticated: true, user: req.session.user });
    next();
  } else {
    res.status(401).send({ success: false, error: "AUTH" });
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
                        addToRespond(res, {
                          confMail: {
                            date: result.headers.date,
                            to: Body.email
                          }
                        });

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
  if (req.session) {
    addToRespond(res, { newLang: Body.language });

    if (req.session.user && req.session.user.id && req.session.authenticated) {
      User.findById(req.session.user.id)
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
              } else {
                const newSessionUser = createSessionUser(user);
                addToRespond(res, { user: newSessionUser });
                //@ts-ignore
                req.session.user = newSessionUser;
                next();
              }
            });
          } else {
            res.status(500).send({ success: false, error: "Authentication" });
          }
        })
        .catch((err: any) => {
          console.error(err);

          res.status(500).send({
            success: false,
            error: { ...err, code: "updateLanguage" }
          });
        });
    } else {
      addToRespond(res, { changeLangMongo: "NOREG" });
      req.session.user = createSessionUser({
        ID: uuid(),
        language: Body.language,
        loggedIn: false
      });
      next();
    }
  }
};

export const sendResponse = (req: express.Request, res: express.Response) => {
  res.status(200).send({ success: true, ...res.locals });
};
