const path = require('path');

const languageSrc = path.resolve(__dirname, '../language');

export const Languages = {
  de: {
    code: 'de',
    name: 'Deutsch',
    srcPath: path.resolve(languageSrc, 'de/index.ts')
  },
  nl: {
    code: 'nl',
    name: 'Nederlands',
    srcPath: path.resolve(languageSrc, 'nl/index.ts')
  },
  en: {
    code: 'en',
    name: 'English',
    srcPath: path.resolve(languageSrc, 'en/index.ts')
  }
};
