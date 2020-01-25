// types
import { LanguageStateI, LanguageT, LangCodeT } from 'src/types/language';
// helpers
import { initLangState } from '../../lib/helpers/initializer';

export default {
  namespaced: true,
  state: initLangState(),
  getters: {
    getCurrentLocale: (state: LanguageStateI) => state.locale
  },
  actions: {
    //@ts-ignore
    changeLanguage: ({ commit }, lang: LanguageT) => {
      commit('changeLanguage', lang);
    }
  },

  mutations: {
    changeLanguage: (state: LanguageStateI, lang: LangCodeT) => {
      state.locale = lang;

      localStorage.setItem('userLanguage', lang);
    }
  }
};
