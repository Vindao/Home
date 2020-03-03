import axios from 'axios';

import { END_POINT } from '../../../../config/main';

export const checkEmail = async (email: string) => {
  return await axios
    .post(END_POINT + '/emailexists', { email: email })
    .then(res => {
      if (res.data.success) {
        return true;
      } else {
        return 'Email already exists';
      }
    })
    .catch(err => console.error(err));
};

export const checkLoggedIn = async () => {
  return await axios
    .get(END_POINT + '/loggedin', { withCredentials: true })
    .then((res: any) => {
      if (res.data.user && res.data.loggedIn) {
        return res.data.user;
      } else {
        return null;
      }
    })
    .catch((err: any) => {
      console.error(Object.keys(err));
      console.log(err);
    });
};
