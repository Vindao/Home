import express from 'express';

// api
import { register, sendConfirmationMail, login } from './api';

const router = express.Router();

// SETUP

export const endPoints = {
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

router.post('/register', register, sendConfirmationMail, login);

router.post('/login', login);

export default router;
