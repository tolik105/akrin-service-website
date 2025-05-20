import en from './en';
import ja from './ja';

export type Locale = 'en' | 'ja';

export function getDictionary(locale: Locale) {
  switch (locale) {
    case 'ja':
      return ja;
    case 'en':
    default:
      return en;
  }
}
