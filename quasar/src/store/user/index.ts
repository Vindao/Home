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
      return axios
        .post(END_POINT + '/login', data)
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
      axios.get(END_POINT + '/logout').then((res: any) => {
        console.log(res);
        commit('logout');
      });
    },
    //@ts-ignore
    checkLoggedIn: ({ commit }) => {
      return axios
        .get(END_POINT + '/loggedin', { withCredentials: true })
        .then((res: any) => {
          console.log(res);
          commit('loggedIn', res.data);
        })
        .catch((err: any) => {
          console.error(err);
        });
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
    },
    logout: (state: UserStateI) => {
      state.user = null;
    },
    loggedIn: (state: UserStateI, user: UserI) => {
      state.user = user;
    }
  }
};
