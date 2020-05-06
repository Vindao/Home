// language data
import languages from '../language';
// initializers
import initLanguage from '@/utils/initLanguage';

// types
import { LangCodeT } from '../types/language';
import { LanguageStateI } from '../types/store/language';

export default {
  namespaced: true,
  state: (): LanguageStateI => ({
    lang: initLanguage()
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
