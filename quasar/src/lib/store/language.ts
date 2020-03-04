import { LangCodeT, LanguagesObject } from '../../../../types/language';

export const initLangState = (lang: LanguagesObject) => {
  const userLang = initUserLang();
  const language = lang[userLang];
  return {
    userLang: userLang,
    language: language
  };
};

export const initUserLang = (): LangCodeT => {
  //@ts-ignore

  const lang = navigator.language.substring(0, 2);
  console.log(lang);
  if (lang === 'nl' || lang === 'de') {
    return lang;
  }
  return 'en';
};
