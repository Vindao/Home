import axios from 'axios';
import { END_POINT } from '../../../../config/main';
// types
import { UserStateI, UserI } from '../../types/Store/User';
import { RegisterBodyI, LoginBodyI, DBUserI } from '../../../../types/User';

// lib
import { initializeUser } from '../../lib/store/user';

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
  actions: {
    //@ts-ignore
    login: ({ commit }, data: LoginBodyI) => {
      let user = false;
      axios
        .post(END_POINT + '/login', data)
        .then((res: any) => {
          console.log(res);
          if (res.data && res.data.success) {
            user = res.data.user;
            commit('login', user);
          }
        })
        .catch((err: any) => console.error(err));
      return user;
    }
  },

  mutations: {
    signup: (state: UserStateI, data: RegisterBodyI) => {
      axios
        .post(END_POINT + '/register', data)
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
    },
    login: (state: UserStateI, user: UserI) => {
      if (user.loggedIn) {
        state.user = user;
      }
    }
  }
};
