// types
import {
  LanguageStateI,
  LanguageT,
  LangCodeT
} from '../../../../types/language';
// helpers
import { initLangState } from '../../lib/store/language';

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
    // userLang: (state: LanguageStateI) => state.userLang,
    language: (state: LanguageStateI) => state.language
  }
};
