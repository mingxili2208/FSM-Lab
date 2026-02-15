import type { LocaleCode, Translations } from './types';

/**
 * 全局文案字典 - 联合国六种官方语言
 */
export const translations: Record<LocaleCode, Translations> = {
  zh: {
    'nav.home': '首页',
    'nav.research': '研究',
    'nav.project': '项目',
    'nav.about': '关于',
    'nav.contact': '联系我们',
  },
  en: {
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.project': 'Project',
    'nav.about': 'About',
    'nav.contact': 'Contact Us',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.research': 'Recherche',
    'nav.project': 'Projet',
    'nav.about': 'À propos',
    'nav.contact': 'Nous contacter',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.research': 'Исследования',
    'nav.project': 'Проект',
    'nav.about': 'О нас',
    'nav.contact': 'Связаться с нами',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.research': 'Investigación',
    'nav.project': 'Proyecto',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contáctenos',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.research': 'البحث',
    'nav.project': 'المشروع',
    'nav.about': 'عنا',
    'nav.contact': 'اتصل بنا',
  },
};
