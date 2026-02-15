/**
 * 联合国官方语言代码 (UN Official Languages)
 * 中文, English, Français, Русский, Español, العربية
 */
export type LocaleCode =
  | 'zh'
  | 'en'
  | 'fr'
  | 'ru'
  | 'es'
  | 'ar';

export const LOCALE_LABELS: Record<LocaleCode, string> = {
  zh: '中文',
  en: 'English',
  fr: 'Français',
  ru: 'Русский',
  es: 'Español',
  ar: 'العربية',
};

export type TranslationKeys =
  | 'nav.home'
  | 'nav.research'
  | 'nav.project'
  | 'nav.about'
  | 'nav.contact';

export type Translations = Record<TranslationKeys, string>;
