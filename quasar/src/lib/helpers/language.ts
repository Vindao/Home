// constatns
import Languages from '../../language';

// types
import { LangCodeT } from '../../../../types/language';

export const getText = (lang: LangCodeT) => Languages[lang];
