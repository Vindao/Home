import axios from 'axios';
import { END_POINT } from '../../../../config/main';
// types
import { UserStateI, UserI } from '../../types/Store/User';
import { RegisterBodyI, LoginBodyI } from '../../../../types/User';
import { initUserLang } from 'src/lib/store/language';
import { LangCodeT } from '../../../../types/language';

const defaultUserObject: UserI = {
  _id: 'string',
  language: 'en',
  name: '',
  email: '',
  messages: [],
  company: '',
  phone: '',
  confirmed: false,
  loggedIn: false
};

export default {
  state: {
    user: defaultUserObject
  },
  getters: {
    user: (state: UserStateI) => state.user,
    loggedIn: (state: UserStateI) => {
      if (state.user) {
        return state.user.loggedIn;
      }
    },
    userLang: (state: UserStateI) => {
      if (state.user) {
        return state.user.language;
      } else {
        return 'en'; //initUserLang();
      }
    }
  },
  actions: {
    //@ts-ignore
    login: ({ commit }, data: LoginBodyI) => {
      return axios
        .post(END_POINT + '/login', data, { withCredentials: true })
        .then((res: any) => {
          if (res.data && res.data.success) {
            const user = res.data.user;
            console.log(user);
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
          if (res.data.success) {
            commit('logout');
          }
        })
        .catch(err => console.error(err));
    },
    //@ts-ignore
    changeUserLang: ({ commit }, lang: LangCodeT) => {
      console.log('changing language to :' + lang);
      axios
        .post(
          END_POINT + '/changelanguage',
          { language: lang },
          { withCredentials: true }
        )
        .then((res: any) => {
          commit('changeUserLang', lang);
        })
        .catch(err => console.error(err));
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
      state.user = defaultUserObject;
    },
    loggedIn: (state: UserStateI, user: UserI) => {
      state.user = user;
    },
    changeUserLang: (state: UserStateI, lang: LangCodeT) => {
      state.user.language = lang;
    }
  }
};
