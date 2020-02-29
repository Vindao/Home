export interface LanguageStateI {
  userLang: LangCodeT;
  language: Object;
}

export type LangCodeT = 'en' | 'nl' | 'de';

export type LanguageT = 'english' | 'deutsch' | 'nederlands';

export interface LanguagesObject {
  en: Object;
  de: Object;
  nl: Object;
}

export interface LanguagesI {
  en: 'English';
  de: 'Deutsch';
  nl: 'Nederlands';
}

export interface LanguagesFilteredI {
  en?: 'English';
  de?: 'Deutsch';
  nl?: 'Nederlands';
}

export interface LanguagesShortI {
  en: 'en';
  de: 'de';
  nl: 'nl';
}
