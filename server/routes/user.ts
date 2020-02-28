import express from 'express';
import cors from 'cors';
import { genSalt, compare, hash } from 'bcryptjs';

// helpers
import { arrayIncludes } from '../lib/helpers';
import { validate } from '../../lib/formVal';
import { sendConfMail } from '../lib/mail';

// mongoDB
import User from '../models/user';

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
  }
};

router.get('/', (req: express.Request, res: express.Response) => {
  res.send(endPoints);
});

// Register

router.post('/register', (req: express.Request, res: express.Response) => {
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

  interface BodyI {
    name: string;
    email: string;
    password: string;
    confPassword: string;
    company: string;
    phone: string;
    language: string;
  }

  const Body: BodyI = req.body;
  //@ts-ignore
  const Session = req.session;
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

      interface DBUserI {
        name: string;
        email: string;
        password: string;
        confPassword: string;
        company: string;
        phone: string;
        language: string;
      }

      hash(Body.password, SALT_ROUNDS)
        .then((hash: string) => {
          const DBUser: DBUserI = { ...Body, password: hash };
          delete DBUser.confPassword;

          User.create(DBUser)
            .then(user => {
              // Login User
              //@ts-ignore
              Session.user = { email: user.email, name: user.name };

              // send confirmation Mail
              //@ts-ignore
              sendConfMail(user.email, 'google.com', 'de')
                .then(result => res.send(result))
                .catch(err => console.error(err));
            })
            .catch(err => res.status(500).send({ error: err }));
        })
        .catch((err: any) => {
          res.status(500).send({ error: err });
        });
    }
  });

  // res.status(200).send('all good');
});

export default router;
