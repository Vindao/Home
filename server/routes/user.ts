import express from 'express';
import cors from 'cors';
import { genSalt, compare, hash } from 'bcryptjs';

// helpers
import { arrayIncludes } from '../lib/helpers';
import { validate } from '../../lib/formVal';

const user = express.Router();

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

user.get('/', (req: express.Request, res: express.Response) => {
  res.send(endPoints);
});

// Register

user.post('/register', (req: express.Request, res: express.Response) => {
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

  const User = req.body;
  // hash pwd

  const SALT_ROUNDS = 10;

  hash(User.password, SALT_ROUNDS)
    .then((hash: string) => {
      const DBUser = { ...User, password: hash };
      delete DBUser.confPassword;
      console.log(DBUser);
    })
    .catch((err: any) => {
      res.status(500).send({ error: 'passwordHash' });
    });

  res.status(200).send('all good');
});

export default user;
