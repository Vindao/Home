// language data
import languages from '../language';

// types
import { LangCodeT } from '../types/language';
import { LanguageStateI } from '../types/store/language';

export default {
  namespaced: true,
  state: (): LanguageStateI => ({
    lang: 'en'
  }),
  getters: {
    text: (state: LanguageStateI) => languages[state.lang],
    language: (state: LanguageStateI) => state.lang
  },
  mutations: {
    changeLanguage: async (state: LanguageStateI, newLang: LangCodeT) => {
      state.lang = newLang;
    }
  }
};
