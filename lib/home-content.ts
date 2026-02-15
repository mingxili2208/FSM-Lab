/**
 * 首页文案与配置（可在此修改）
 */

export const HOME_CONTENT = {
  hero: {
    title: 'Redefining Future Mobility',
    titleHighlight: 'with Intelligent Control',
    subtitle:
      'Bridging the gap between Control Theory and Autonomous Driving to create safer, smarter, and more efficient transportation ecosystems.',
    cta: 'Explore Our Research',
    ctaContact: 'Contact Us',
    hiring: 'We are hiring PhD students & RAs! Join us.',
  },
  showcase: {
    heading: 'Research Showcase',
    /**
     * 展示框列表：图片放 public/showcase，此处填以 /showcase/ 开头的路径。
     * projectId 对应 lib/data 中项目（决定卡片下方标题、分类）；可增加项目或在 data 里改标题。
     * type: 'image' 为图片，'video' 为视频（可选 poster 封面）。
     */
    items: [
      { projectId: 'lab-showcase', type: 'image' as const, src: '/showcase/2023workshop.jpg', alt: '2023 Workshop' },
      { projectId: 'lab-showcase', type: 'image' as const, src: '/showcase/DSC04423.jpg', alt: 'Lab Activity' },
      { projectId: 'lab-showcase', type: 'image' as const, src: '/showcase/F1Award.jpg', alt: 'F1 Award' },
      { projectId: 'lab-showcase', type: 'image' as const, src: '/showcase/fsmlab240613.jpg', alt: 'FSM Lab' },
      { projectId: 'lab-showcase', type: 'image' as const, src: '/showcase/Zikang_Award.jpg', alt: 'Zikang Award' },
      { projectId: 'lab-showcase', type: 'image' as const, src: '/showcase/zikang_wang.jpg', alt: 'Zikang Wang' },
    ],
  },
  research: {
    heading: 'Research Focus',
    items: [
      {
        title: 'Networked Control Systems',
        desc: 'Developing robust algorithms for complex systems where communication, computation, and control are tightly coupled.',
        iconKey: 'network' as const,
      },
      {
        title: 'Connected & Autonomous Vehicles',
        desc: 'Enabling vehicles to talk to each other (V2V) and infrastructure (V2I) for cooperative driving safety.',
        iconKey: 'car' as const,
      },
      {
        title: 'Cyber-Physical Systems',
        desc: 'Integrating sensing, computation, and control into physical infrastructure to connect digital and real worlds.',
        iconKey: 'cpu' as const,
      },
    ],
  },
  pi: {
    name: 'Prof. Jianping WANG',
    /** 个人主页（头像、姓名、下方图标均可点击跳转） */
    homepageUrl: 'https://www.cs.cityu.edu.hk/~jianwang/index.html',
    /** CityU Scholars 页面 */
    scholarUrl: 'https://scholars.cityu.edu.hk/en/persons/jianwang/',
    /** Google Scholar 页面 */
    googleScholarUrl: 'https://scholar.google.com/citations?user=bow_liAAAAAJ&hl=zh-CN',
    /** 头像图片路径，放在 public 下即可，如 public/pi/jianping-wang.jpg 则填 '/pi/jianping-wang.jpg'；不填则显示占位文字 */
    portrait: '/prof_Wang.png',
    role: 'Dean of College of Computing / Chair Professor, Department of Computer Science',
    org: 'City University of Hong Kong (CityU)',
    /** 单位主页链接（org 文字可点击跳转） */
    orgUrl: 'https://www.cityu.edu.hk/',
    bio: [
      'Prof. Jianping Wang is a Chair Professor of Computer Science and the Dean of College of Computing at City University of Hong Kong. Her research has been sponsored by various funding agencies and industry companies. She is a Fellow of IEEE and a Fellow of AAIA, and is among the top 2% in the Stanford list of the world\'s most-cited scientists (2020–2024).',
      'Her research interests include autonomous driving, edge computing, cloud computing, and optical networking.',
    ],
    tags: ['IEEE Fellow', 'AAIA Fellow', 'Stanford Top 2%', 'Autonomous Driving'],
  },
  projects: {
    heading: 'Featured Projects',
    subheading: 'Exploring the frontiers of technology.',
    viewAll: 'View All Projects',
    comingSoon: 'Coming Soon',
  },
};
