import express from 'express';
import cors from 'cors';

const user = express.Router();

user.get('/', (req: express.Request, res: express.Response) => {
  const endPoints = {
    register: {
      path: 'api/user/register',
      requires: ['name', 'email', 'password', 'company', 'phone'],
      responses: {}
    }
  };

  res.send(endPoints);
});

// Register

user.post('/register');

export default user;
