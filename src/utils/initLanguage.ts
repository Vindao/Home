// types
import { LangCodeT } from '@/types/language';

export default (): LangCodeT => {
  const langRaw = navigator.language.toLowerCase();
  if (langRaw === 'de-de') {
    console.log('german');
  }
  switch (langRaw) {
    case 'nl':
    case 'nl-be':
      return 'nl';
    case 'de':
    case 'de-at':
    case 'de-de':
    case 'de-li':
    case 'de-lu':
    case 'de-ch':
      return 'de';
    default:
      return 'en';
  }
};
