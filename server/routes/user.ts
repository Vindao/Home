import express from 'express';

// config
import { endPoints } from '../config/main';

// api
import {
  register,
  sendConfirmationMail,
  login,
  sendResponse
} from './api/user';

const router = express.Router();

// SETUP

router.get('/', (req: express.Request, res: express.Response) => {
  res.send(endPoints);
});

router.post('/sendconfmail', sendConfirmationMail, sendResponse);

router.post('/register', register, sendConfirmationMail, login, sendResponse);

router.post('/login', login, sendResponse);

export default router;
