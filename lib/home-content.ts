/**
 * 首页非文案配置（文案已迁至 lib/i18n/translations）
 * 展示项列表、PI 链接与头像路径等与语言无关或仅作结构使用
 */

/** Showcase 单项：图片或视频，供类型推断与 page 中使用 */
export type ShowcaseItem =
  | { projectId: string; type: 'image'; src: string; alt: string }
  | { projectId: string; type: 'video'; src: string; alt: string; poster?: string };

/** 展示框列表：图片放 public/showcase。projectId 对应 lib/data；标题由 getProjectTitle + locale 决定 */
export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  { projectId: 'lab-showcase', type: 'image', src: '/showcase/2023workshop.jpg', alt: '2023 Workshop' },
  { projectId: 'lab-showcase', type: 'image', src: '/showcase/DSC04423.jpg', alt: 'Lab Activity' },
  { projectId: 'lab-showcase', type: 'image', src: '/showcase/F1Award.jpg', alt: 'F1 Award' },
  { projectId: 'lab-showcase', type: 'image', src: '/showcase/fsmlab240613.jpg', alt: 'FSM Lab' },
  { projectId: 'lab-showcase', type: 'image', src: '/showcase/Zikang_Award.jpg', alt: 'Zikang Award' },
  { projectId: 'lab-showcase', type: 'image', src: '/showcase/zikang_wang.jpg', alt: 'Zikang Wang' },
];

/** 研究板块三项：标题与描述使用 t('home.research.itemN.title/desc')，iconKey 固定 */
export const RESEARCH_ITEMS: { iconKey: 'network' | 'car' | 'cpu' }[] = [
  { iconKey: 'network' },
  { iconKey: 'car' },
  { iconKey: 'cpu' },
];

/** PI 信息：姓名/职位/单位/简介/标签由 t() 提供；链接与头像路径固定 */
export const PI_CONFIG = {
  homepageUrl: 'https://www.cs.cityu.edu.hk/~jianwang/index.html',
  scholarUrl: 'https://scholars.cityu.edu.hk/en/persons/jianwang/',
  researchPublicationsUrl: 'https://scholars.cityu.edu.hk/en/persons/jianwang/publications/',
  googleScholarUrl: 'https://scholar.google.com/citations?user=bow_liAAAAAJ&hl=zh-CN',
  portrait: '/prof_Wang.png',
  orgUrl: 'https://www.cityu.edu.hk/',
} as const;
