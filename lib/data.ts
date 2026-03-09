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
  /** 若有独立详情页，填路由 slug，链接为 /projects/[slug] */
  slug?: string;
  /** 外部链接 — 若设置，卡片将以新标签页打开此 URL */
  externalUrl?: string;
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
 * 判断项目是否可点击（published 或有 externalUrl 的均可点击）
 */
export function isProjectClickable(project: Project): boolean {
  return project.status === 'published' || !!project.externalUrl;
}

/**
 * 项目详情链接：优先 externalUrl，其次 /projects/[slug]，再次 /projects#id
 */
export function getProjectHref(project: Project): string {
  if (project.externalUrl) return project.externalUrl;
  return project.slug ? `/projects/${project.slug}` : `/projects#${project.id}`;
}

/** 模拟数据库：项目列表 */
export const projects: Project[] = [
  {
    id: 'autonomous-validation-platform',
    title: {
      zh: '自动驾驶多尺度安全测试与安全验证一体化虚拟-物理平台',
      en: 'Integrated Virtual-Physical Platform for Multi-scale Safety Testing and Security Validation of Autonomous Vehicles',
    },
    category: 'Autonomous Driving / Security',
    coverImage: '/projects/autonomous-validation/hero-bridging-the-gap.png',
    status: 'published',
    slug: 'autonomous-validation',
  },
  {
    id: 'realtime-map',
    title: {
      zh: '实时地图构建与利用：自动驾驶端到端框架',
      en: 'Real-time Map Construction and Utilization: An End-to-End Framework for Autonomous Driving',
    },
    category: 'Autonomous Driving / Mapping',
    coverImage: '/projects/others/R/cover.png',
    status: 'published',
    slug: 'realtime-map',
  },
  {
    id: 'remote-driving',
    title: {
      zh: '自动驾驶车辆多级远程驾驶框架',
      en: 'A Multi-Level Remote Driving Framework for Autonomous Vehicles',
    },
    category: 'Autonomous Driving / Teleoperation',
    coverImage: '/projects/others/A/cover.png',
    status: 'published',
    slug: 'remote-driving',
  },
  {
    id: 'scenario-planning',
    title: {
      zh: '自动驾驶系统中场景驱动的运动规划模型选择',
      en: 'Scenario-driven Motion Planning Model Selection in Autonomous Driving Systems',
    },
    category: 'Autonomous Driving / Motion Planning',
    coverImage: '/projects/others/S/__image_1.png',
    status: 'published',
    slug: 'scenario-planning',
  },
  {
    id: 'uncertainty-handling',
    title: {
      zh: '自动驾驶系统中不确定性的建模与处理',
      en: 'Modelling and Handling Uncertainties in Autonomous Driving Systems',
    },
    category: 'Autonomous Driving / Safety',
    coverImage: '/projects/others/M/cover.png',
    status: 'published',
    slug: 'uncertainty-handling',
  },
  {
    id: 'more-projects',
    title: {
      zh: '查看更多项目 →',
      en: 'View More Projects →',
      fr: 'Voir plus de projets →',
      ru: 'Смотреть больше проектов →',
      es: 'Ver más proyectos →',
      ar: '← عرض المزيد من المشاريع',
    },
    category: 'CityUHK Scholars',
    coverImage: '/images/coming_soon2.png',
    status: 'published',
    externalUrl: 'https://scholars.cityu.edu.hk/en/persons/jianwang/projects/',
  },
];
