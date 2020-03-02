import axios from 'axios';

import { RegisterBodyI } from '../../../../types/User';

const END_POINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/user'
    : 'https://vindaoapi.herokuapp.com/api/user';

export const signupUser = (data: RegisterBodyI) => {
  return axios.post(END_POINT + '/register', data);
};

export const checkEmail = async (email: string) => {
  const response = await axios
    .post(END_POINT + '/emailexists', { email: email })
    .then(res => {
      if (res.data.success) {
        return true;
      } else {
        return 'Email already exists';
      }
    })
    .catch(err => console.error(err));

  return response;
};

export const initializeUser = async () => {
  await axios
    .get(END_POINT + '/loggedin')
    .then((res: any) => {
      if (res) {
        if (res.user && res.user.loggedIn) {
          return res.user;
        }
      }
      return false;
    })
    .catch((err: any) => {
      console.error(err);
      return false;
    });
  return false;
};
