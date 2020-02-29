import { LangCodeT, LanguagesObject } from '../../../../../types/language';
import axios from 'axios';

export const initializeUser = async () => {
  const endPoint =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/api/user/loggedin'
      : 'https://vindaoapi.herokuapp.com/api/user/loggedin';

  await axios
    .get(endPoint)
    .then((res: any) => {
      if (res) {
        if (res.user && res.user.loggedIn) {
          return res.user;
        }
      }
      return false;
    })
    .catch((err: any) => {
      console.error(err);
      return false;
    });
  return false;
};

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
  if (process.browser) {
    if (localStorage) {
      if (
        localStorage.userLanguage &&
        ['de', 'en', 'nl'].includes(localStorage.userLanguage)
      ) {
        console.log(localStorage.userLang);
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
  }
  return 'en';
};
