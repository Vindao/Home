// types
import { UserStateI } from '../../types/Store/User';
import { RegisterBodyI } from '../../../../types/User';

// lib
import { initializeUser } from '../../lib/store/user';
import { signupUser } from '../../lib/store/user';

export default {
  state: { user: initializeUser(), error: null },
  getters: {
    user: (state: UserStateI) => state.user,
    loggedIn: (state: UserStateI) => {
      if (state.user) {
        return state.user.loggedIn;
      }
    }
  },
  actions: {},

  mutations: {
    signup: (state: UserStateI, data: RegisterBodyI) => {
      signupUser(data)
        .then((res: any) => {
          console.log(res);
          if (res.data) {
            if (res.data.success && res.data.user) {
              state.user = res.data.user;
            }
          }
        })
        .catch((err: any) => {
          console.error(err);
          state.error = 'signup';
        });
    }
  }
};
