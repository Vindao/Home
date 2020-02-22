// types
import { LanguageStateI, LanguageT, LangCodeT } from 'src/types/language';
// helpers
import { initLangState } from '../../lib/helpers/initializer';

// languages
import en from '../../language/en';
import de from '../../language/de';
import nl from '../../language/nl';

const lang = {
  en: en,
  de: de,
  nl: nl
};

export default {
  state: initLangState(lang),
  getters: {
    userLang: (state: LanguageStateI) => state.userLang,
    language: (state: LanguageStateI) => state.language
  },
  actions: {
    //@ts-ignore
    changeLanguage: ({ commit }, lang: LanguageT) => {
      commit('changeLanguage', lang);
    }
  },

  mutations: {
    changeLanguage: (state: LanguageStateI, langCode: LangCodeT) => {
      state.userLang = langCode;

      localStorage.setItem('userLanguage', langCode);
      state.language = lang[langCode];
    }
  }
};
