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
