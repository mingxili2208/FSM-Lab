/**
 * 模拟数据库 - 项目数据结构
 * 适用于静态托管，无服务端运行时
 */

import type { LocaleCode } from '@/lib/i18n/types';

/** 项目发布状态：已发布可点击，敬请期待不可点击 */
export type ProjectStatus = 'published' | 'coming_soon';

/** 多语言标题 */
export type LocalizedTitle = Partial<Record<LocaleCode, string>>;

export interface Project {
  id: string;
  /** 多语言标题对象 */
  title: LocalizedTitle;
  category: string;
  coverImage: string;
  status: ProjectStatus;
}

/**
 * 获取项目在指定语言下的标题，回退到英文或首个可用
 */
export function getProjectTitle(project: Project, locale: LocaleCode): string {
  return (
    project.title[locale] ??
    project.title.en ??
    Object.values(project.title)[0] ??
    project.id
  );
}

/**
 * 判断项目是否可点击（仅 published 可点击）
 */
export function isProjectClickable(project: Project): boolean {
  return project.status === 'published';
}

/** 模拟数据库：项目列表 */
export const projects: Project[] = [
  {
    id: 'lab-showcase',
    title: {
      zh: '实验室展示平台',
      en: 'Lab Showcase Platform',
      fr: 'Plateforme de présentation du laboratoire',
      ru: 'Платформа витрины лаборатории',
      es: 'Plataforma de presentación del laboratorio',
      ar: 'منصة عرض المختبر',
    },
    category: 'platform',
    coverImage: '/images/placeholder-published.jpg',
    status: 'published',
  },
  {
    id: 'coming-soon-1',
    title: {
      zh: '敬请期待项目 A',
      en: 'Coming Soon Project A',
      fr: 'Projet à venir A',
      ru: 'Скоро проект A',
      es: 'Proyecto próximamente A',
      ar: 'قريباً المشروع أ',
    },
    category: 'research',
    coverImage: '/images/placeholder-coming.jpg',
    status: 'coming_soon',
  },
  {
    id: 'coming-soon-2',
    title: {
      zh: '敬请期待项目 B',
      en: 'Coming Soon Project B',
      fr: 'Projet à venir B',
      ru: 'Скоро проект B',
      es: 'Proyecto próximamente B',
      ar: 'قريباً المشروع ب',
    },
    category: 'demo',
    coverImage: '/images/placeholder-coming.jpg',
    status: 'coming_soon',
  },
];
