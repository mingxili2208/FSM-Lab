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
  | 'projects.pageTitle'
  | 'projects.pageSubtitle'
  | 'projects.viewDetails'
  | 'projects.comingSoon'
  | 'footer.labName'
  | 'footer.department'
  | 'footer.quickLinks'
  | 'footer.contact'
  | 'footer.address'
  | 'footer.copyright'
  | 'aria.switchLanguage'
  | 'aria.openMenu'
  | 'aria.closeMenu'
  | 'home.hero.title'
  | 'home.hero.titleHighlight'
  | 'home.hero.subtitle'
  | 'home.hero.cta'
  | 'home.hero.ctaAutonomous'
  | 'home.hero.ctaContact'
  | 'home.showcase.heading'
  | 'home.research.heading'
  | 'home.research.item1.title'
  | 'home.research.item1.desc'
  | 'home.research.item2.title'
  | 'home.research.item2.desc'
  | 'home.research.item3.title'
  | 'home.research.item3.desc'
  | 'home.pi.principalInvestigator'
  | 'home.pi.name'
  | 'home.pi.role'
  | 'home.pi.org'
  | 'home.pi.bio1'
  | 'home.pi.bio2'
  | 'home.pi.tag1'
  | 'home.pi.tag2'
  | 'home.pi.tag3'
  | 'home.pi.tag4'
  | 'home.projects.heading'
  | 'home.projects.subheading'
  | 'home.projects.viewAll'
  | 'home.projects.comingSoon'
  | 'home.projects.viewCaseStudy'
  | 'home.projects.briefDesc'
  | 'home.fallback.media'
  | 'research.pageTitle'
  | 'research.pagePlaceholder'
  | 'about.pageTitle'
  | 'about.intro'
  | 'about.mission'
  | 'about.contactHeading'
  | 'about.emailLabel'
  | 'about.addressLabel'
  | 'about.piProfile';

export type Translations = Record<TranslationKeys, string>;
