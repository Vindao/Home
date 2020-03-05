import axios from 'axios';
import { END_POINT } from '../../../../config/main';
// types
import { UserStateI, UserI } from '../../types/Store/User';
import { RegisterBodyI, LoginBodyI } from '../../../../types/User';
import { LangCodeT } from '../../../../types/language';
import { getText } from 'src/lib/helpers/language';

const defaultUserObject: UserI = {
  _id: '',
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
    user: defaultUserObject,
    language: 'en'
  },
  getters: {
    user: (state: UserStateI) => state.user,
    loggedIn: (state: UserStateI) => {
      if (state.user) {
        return state.user.loggedIn;
      }
    },
    language: (state: UserStateI): LangCodeT => state.language,
    text: (state: UserStateI) => getText(state.language)
  },
  actions: {
    //@ts-ignore
    signup: ({ commit }, data: RegisterBodyI) => {
      console.log(data);
      axios
        .post(END_POINT + '/register', data, { withCredentials: true })
        .then((res: any) => {
          console.log(res.data);
          if (res.data.success && res.data.user && res.data.authenticated) {
            console.log('login');
            commit('login', res.data.user);
          } else {
            console.error('signup error');
          }
        })
        .catch((err: any) => {
          console.log('signup error');
          console.error(err);
        });
    },
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
      commit('changeLang', lang);
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
        .get(END_POINT + '/user', { withCredentials: true })
        .then((res: any) => {
          if (
            res &&
            res.data &&
            res.data.success &&
            res.data.user &&
            res.data.authenticated &&
            res.data.user.loggedIn
          ) {
            commit('login', res.data.user);
          } else if (
            res.data.success &&
            res.data.user &&
            res.data.user.language
          ) {
            commit('changeUserLang', res.data.user.language);
          }
        })
        .catch((err: any) => {
          console.error(Object.keys(err));
          console.log(err);
        });
    }
  },

  mutations: {
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
    },
    changeLang: (state: UserStateI, lang: LangCodeT) => {
      state.language = lang;
    }
  }
};
