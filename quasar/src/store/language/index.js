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
        userLang: (state) => state.userLang,
        language: (state) => state.language
    },
    actions: {
        //@ts-ignore
        changeLanguage: ({ commit }, lang) => {
            commit('changeLanguage', lang);
        }
    },
    mutations: {
        changeLanguage: (state, langCode) => {
            state.userLang = langCode;
            state.language = lang[langCode];
            localStorage.setItem('userLanguage', langCode);
        }
    }
};
//# sourceMappingURL=index.js.map