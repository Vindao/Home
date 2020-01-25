import { LangCodeT } from '../../types/language';

export const initLangState = () => {
  return {
    locale: initLanguage()
  };
};

export const initLanguage = (): LangCodeT => {
  if (localStorage) {
    if (
      localStorage.userLanguage &&
      ['de', 'en', 'nl'].includes(localStorage.userLanguage)
    ) {
      return localStorage.userLanguage;
    } else {
      const lang = navigator.language.substring(0, 2);
      console.log(lang);
      if (lang === 'nl' || lang === 'de') {
        localStorage.setItem('userLanguage', lang);
        return lang;
      } else {
        localStorage.setItem('userLanguage', 'en');
        return 'en';
      }
    }
  }
  return 'en';
};
