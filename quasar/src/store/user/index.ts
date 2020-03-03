import axios from 'axios';
import { END_POINT } from '../../../../config/main';
// types
import { UserStateI, UserI } from '../../types/Store/User';
import { RegisterBodyI, LoginBodyI } from '../../../../types/User';

export default {
  state: { user: null, error: null },
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
      return axios
        .post(END_POINT + '/login', data, { withCredentials: true })
        .then((res: any) => {
          console.log(res);
          if (res.data && res.data.success) {
            const user = res.data.user;
            commit('login', user);
            return true;
          } else {
            return false;
          }
        })
        .catch((err: any) => console.error(err));
    },
    //@ts-ignore
    logout: ({ commit }) => {
      axios
        .get(END_POINT + '/logout', { withCredentials: true })
        .then((res: any) => {
          console.log(res);
          commit('logout');
        });
    },
    //@ts-ignore
    initializeUser: ({ commit }) => {
      axios
        .get(END_POINT + '/loggedin', { withCredentials: true })
        .then((res: any) => {
          if (
            res &&
            res.data &&
            res.data.success &&
            res.data.user &&
            res.data.loggedIn &&
            res.data.user.loggedIn
          ) {
            commit('login', res.data.user);
          }
        })
        .catch((err: any) => {
          console.error(Object.keys(err));
          console.log(err);
        });
    }
  },

  mutations: {
    signup: (state: UserStateI, data: RegisterBodyI) => {
      axios
        .post(END_POINT + '/register', data, { withCredentials: true })
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
    },
    logout: (state: UserStateI) => {
      state.user = null;
    },
    loggedIn: (state: UserStateI, user: UserI) => {
      state.user = user;
    }
  }
};
