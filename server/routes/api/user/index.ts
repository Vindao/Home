import express from 'express';

import { compare, hash } from 'bcryptjs';

// config
import { endPoints } from '../../../config/main';

// types
import { RegisterBodyI, CreateUserI } from '../../../../types/User';

// helpers
import { arrayIncludes } from '../../../lib/helpers';
import { validate } from '../../../../lib/formVal';
import { sendConfMail } from '../../../lib/mail';

// mongoDB
import User from '../../../models/user';

const validateRequest = (required: string[], body: any) => {
  if (!arrayIncludes(required, Object.keys(body))) {
    return false;
  }

  for (const [index, val] of body) {
    if (!validate(index, val)) {
      return false;
    }
  }
  return true;
};

export const register = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request
  if (!validateRequest(endPoints.register.requires, req.body)) {
    res.status(401).send({ success: false, error: 'Bad Request' });
  }

  const Body: RegisterBodyI = req.body;

  // check user exists
  User.findOne({ email: Body.email })
    .then((user: any) => {
      if (user) {
        res.status(401).send({
          error: 'Email',
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
            delete newUser.confPassword;

            User.create(newUser)
              .then(user => {
                if (user) {
                  next();
                } else {
                  res
                    .status(500)
                    .send({ success: false, error: 'could not create user' });
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
    .catch((err: any) => res.status(500).send({ success: false, error: err }));
};

export const login = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request
  if (!validateRequest(endPoints.login.requires, req.body)) {
    res.status(401).send({ success: false, error: 'Bad Request' });
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
              confirmed: user.confirmed
            };
            //@ts-ignore
            req.session.user = UserInfo;
            //@ts-ignore
            req.session.loggedIn = true;
            res.locals.user = UserInfo;

            next();
          } else {
            res.status(401).send({ success: false, error: 'credentials' });
          }
        });
      }
    })
    .catch((err: any) => res.status(500).send({ success: false, error: err }));
};

export const sendConfirmationMail = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request
  const Body = req.body;
  if (!validateRequest(endPoints.sendConfirmationMail.requires, Body)) {
    res.status(401).send({ success: false, error: 'Bad Request' });
  }
  User.findOne({ email: Body.email })
    .then((user: any) => {
      if (user) {
        sendConfMail(Body.email, 'google.com', user.language)
          .then(result => {
            if (result.status === 201) {
              res.locals.confMail = {
                date: result.headers.date,
                to: Body.email
              };
              next();
            } else {
              res.status(500).send({ success: false, error: 'confMailError' });
            }
          })
          .catch(err => res.status(500).send({ success: false, error: err }));
      } else {
        res.status(401).send({ success: false, error: 'not existing' });
      }
    })
    .catch((err: any) => res.status(500).send({ success: false, error: err }));
};

export const sendResponse = (req: express.Request, res: express.Response) => {
  res.status(200).send({ success: true, ...res.locals });
};
