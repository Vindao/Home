import express from 'express';
import { compare, hash } from 'bcryptjs';

// types
import { DBUserI, RegisterBodyI } from '../../types/User';

// helpers
import { arrayIncludes } from '../lib/helpers';
import { validate } from '../../lib/formVal';
import { sendConfMail } from '../lib/mail';

// mongoDB
import User from '../models/user';
import { userInfo } from 'os';

const router = express.Router();

// SETUP

const endPoints = {
  register: {
    path: 'api/user/register',
    requires: [
      'name',
      'email',
      'password',
      'confPassword',
      'company',
      'phone',
      'language'
    ],
    responses: {}
  },
  login: {
    path: 'api/user/login',
    requires: ['email', 'password']
  }
};

router.get('/', (req: express.Request, res: express.Response) => {
  res.send(endPoints);
});

// Register

const register = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // validate request
  if (!arrayIncludes(endPoints.register.requires, Object.keys(req.body))) {
    res.status(400).send({ error: 'bad request', dev: 'require' });
    return;
  }

  for (const [index, val] of req.body) {
    if (!validate(index, val)) {
      res.status(400).send({ error: 'bad request' });
    }
  }

  const Body: RegisterBodyI = req.body;

  // check user exists

  User.findOne({ email: Body.email }).then((user: any) => {
    if (user) {
      res.status(200).send({
        error: 'Email',
        success: false
      });
    } else {
      // hash pwd

      const SALT_ROUNDS = 10;

      hash(Body.password, SALT_ROUNDS)
        .then((hash: string) => {
          const DBUser: DBUserI = { ...Body, password: hash };
          delete DBUser.confPassword;

          User.create(DBUser)
            .then(user => {
              res.locals.user = user;
              // send confirmation Mail
              next();
            })
            .catch(err => res.status(500).send({ error: err }));
        })
        .catch((err: any) => {
          res.status(500).send({ error: err });
        });
    }
  });
};

const sendConfirmationMail = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  sendConfMail(res.locals.user.email, 'google.com', 'de')
    .then(result => {
      if (result.status === 201) {
        res.locals.confMail = { send: result.headers.date };
        next();
      } else {
        res.status(500).send({ error: 'confMailError' });
      }
    })
    .catch(err => console.error(err));
};

const login = (req: express.Request, res: express.Response) => {
  // validate request
  if (!arrayIncludes(endPoints.login.requires, Object.keys(req.body))) {
    res.status(400).send({ error: 'bad request', dev: 'require' });
    return;
  }

  for (const [index, val] of req.body) {
    if (!validate(index, val)) {
      res.status(400).send({ error: 'bad request' });
    }
  }

  const Body: RegisterBodyI = req.body;

  User.findOne({ email: Body.email }).then((user: any) => {
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
          res.status(200).send({
            success: true,
            user: UserInfo,
            confMail: res.locals.confMail
          });
        } else {
          res.status(401).send({ success: false, error: 'credentials' });
        }
      });
    } else {
      res.status(401).send({ success: false, error: 'credentials' });
    }
  });
};

router.post('/register', register, sendConfirmationMail, login);

router.post('/login', login);

export default router;
