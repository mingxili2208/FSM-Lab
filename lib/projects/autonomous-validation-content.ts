/**
 * 自动驾驶安全验证项目详情页多语言文案
 * 除 en/zh 外其余语言回退到 en
 */

import type { LocaleCode } from '@/lib/i18n/types';

export type AVPageContent = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    badge: string;
    intro1: string;
    intro2: string;
    cta: string;
    dept: string;
    org: string;
  };
  motivation: {
    heading: string;
    sub: string;
    safetyTitle: string;
    safetyBadge: string;
    safetyDesc: string;
    safetyLi1: string;
    safetyLi2: string;
    safetyLi3: string;
    securityTitle: string;
    securityBadge: string;
    securityDesc: string;
    securityLi1: string;
    securityLi2: string;
    securityLi3: string;
  };
  innovation: {
    heading: string;
    sub: string;
    silTitle: string;
    silDesc: string;
    hilTitle: string;
    hilDesc: string;
    vilTitle: string;
    vilDesc: string;
  };
  capabilities: {
    heading: string;
    sub: string;
    feat1Badge: string;
    feat1Title: string;
    feat1Desc: string;
    feat1Li1: string;
    feat1Li2: string;
    feat2Badge: string;
    feat2Title: string;
    feat2Desc: string;
    feat2Li1: string;
    feat2Li2: string;
    feat3Badge: string;
    feat3Title: string;
    feat3Desc: string;
    feat3Li1: string;
    feat3Li2: string;
  };
  impact: {
    heading: string;
    sub: string;
    stat1Title: string;
    stat1Sub: string;
    stat1Desc: string;
    stat2Title: string;
    stat2Sub: string;
    stat2Desc: string;
    stat3Title: string;
    stat3Sub: string;
    stat3Desc: string;
    supportedBy: string;
  };
  business: {
    heading: string;
    sub: string;
    targetTitle: string;
    seg1Title: string;
    seg1Desc: string;
    seg2Title: string;
    seg2Desc: string;
    seg3Title: string;
    seg3Desc: string;
    chartTitle: string;
    chartSub: string;
    chartEnterprise: string;
    chartEducation: string;
    chartGovGrants: string;
    streamsTitle: string;
    rev1Title: string;
    rev1Tag: string;
    rev1Desc: string;
    rev1Li1: string;
    rev1Li2: string;
    rev1Li3: string;
    rev1Price: string;
    rev2Title: string;
    rev2Tag: string;
    rev2Desc: string;
    rev2Li1: string;
    rev2Li2: string;
    rev2Li3: string;
    rev2Price: string;
    rev3Title: string;
    rev3Tag: string;
    rev3Desc: string;
    rev3Li1: string;
    rev3Li2: string;
    rev3Li3: string;
    rev3Price: string;
  };
  footer: {
    heading: string;
    sub: string;
    cta: string;
    copyright: string;
    privacy: string;
    publications: string;
  };
};

const contentEn: AVPageContent = {
  hero: {
    titleLine1: 'Integrated Virtual-Physical Platform for',
    titleLine2: 'Multi-scale Safety Testing and Security Validation of Autonomous vehicles',
    badge: 'CityU FSM Lab Research Project',
    intro1: 'The transition from Level 2 ADAS to Level 4 fully autonomous driving is currently bottlenecked by a critical lack of trust. While modern AI models perform exceptionally well in standard conditions, they remain vulnerable "Black Boxes."',
    intro2: 'We are building the world\'s first Integrated Virtual-Physical Validation Platform. By transforming digital uncertainty into verified, real-world safety standards, we ensure autonomous systems can survive both the chaos of nature and the malice of cyber threats.',
    cta: 'Explore The Architecture',
    dept: 'Department of Computer Science',
    org: 'City University of Hong Kong',
  },
  motivation: {
    heading: 'The Dual Threats to AI Autonomy',
    sub: '99.9% accuracy in simulation is a fatal illusion. The remaining 0.1% represents the boundary between a safe journey and a catastrophic failure. We categorize these fatal flaws into two distinct domains.',
    safetyTitle: 'Safety: The "Invisible" Long-Tail',
    safetyBadge: 'Natural Corner Cases',
    safetyDesc: 'Autonomous vehicles are trained on millions of miles of "normal" driving data. However, the real world is chaotic. Extreme weather conditions, unpredictable pedestrian behavior, complex construction zones, and rare lighting anomalies form a "long tail" of edge cases.',
    safetyLi1: 'Sensor Degradation: Heavy rain or fog blinding LiDAR and cameras.',
    safetyLi2: 'Semantic Confusion: Misinterpreting reflections on wet roads as physical obstacles.',
    safetyLi3: 'Chaotic Agents: Unpredictable trajectories of jaywalkers or erratic drivers.',
    securityTitle: 'Security: The "Weaponized" AI',
    securityBadge: 'Adversarial Attacks',
    securityDesc: 'Beyond natural chaos, AI perception systems are highly susceptible to intentional, malicious manipulation. Adversarial attacks can subtly alter the physical environment to completely blind or mislead the vehicle\'s decision-making algorithms.',
    securityLi1: 'Camera Ghosting: Adversarial patches that make stop signs invisible to AI.',
    securityLi2: 'LiDAR Spoofing: Injecting fake laser pulses to create "phantom" vehicles.',
    securityLi3: 'Data Poisoning: Corrupting the training pipeline to introduce hidden backdoors.',
  },
  innovation: {
    heading: 'The Unified Shield Framework',
    sub: 'To conquer both natural and malicious threats, we have engineered a holistic architecture. It provides synchronous safety and security validation across a continuous spectrum—from pure software simulation to physical vehicle deployment.',
    silTitle: 'SIL: Infinite Scalability',
    silDesc: 'Millions of miles are simulated overnight. We test algorithms against continuously generated synthetic corner cases in a pure software environment, ensuring rapid iteration and baseline robustness.',
    hilTitle: 'HIL: Compute Reality',
    hilDesc: 'Algorithms are deployed onto actual autonomous driving domain controllers (e.g., NVIDIA Orin). This validates system latency, thermal throttling, and hardware-specific vulnerabilities under stress.',
    vilTitle: 'VIL: Physical Truth',
    vilDesc: 'The final frontier. The software drives a physical vehicle on a test track, reacting to mixed-reality injections (virtual pedestrians projected into physical sensors) to bridge the sim-to-real gap.',
  },
  capabilities: {
    heading: 'Core Technical Capabilities',
    sub: 'Engineering Safety and Security through Multi-Scale Virtual-Physical Verification.',
    feat1Badge: '01. Digital Twin Generation',
    feat1Title: 'AI Scenario Discovery',
    feat1Desc: 'We do not rely on manual scenario creation. Our platform utilizes advanced AI to automatically discover and generate the most critical test cases that are likely to cause system failure.',
    feat1Li1: 'Appearance-Level Generation: Utilizing 3D Gaussian Splatting and NeRF to reconstruct photorealistic, highly complex intersection geometries and rare weather effects from sparse real-world data.',
    feat1Li2: 'Behavior-Level Generation: Employing Reinforcement Learning (RL) to train adversarial agents (other cars, pedestrians) that actively seek out the vulnerabilities in the ego-vehicle\'s planning algorithms.',
    feat2Badge: '02. Sim-to-Real Transfer',
    feat2Title: 'Mixed-Reality Sandbox Testing',
    feat2Desc: 'Before risking full-scale vehicles, we validate algorithms in a highly controlled, mixed-reality physical sandbox. This bridges the gap between pure simulation and full-scale physical testing.',
    feat2Li1: 'Miniature Fleet: Deploying 1/10th scale robotic vehicles equipped with real compute boards (NVIDIA Jetson) and scaled sensors to test physical dynamics and latency.',
    feat2Li2: 'Sensor Injection: Synchronizing the physical sandbox with a closed-loop simulator (like CARLA). Virtual obstacles are injected directly into the physical robot\'s sensor data stream in real-time, forcing it to react to non-existent physical threats.',
    feat3Badge: '03. Physical Validation',
    feat3Title: 'Full-Scale Urban Prototypes',
    feat3Desc: 'Our research does not stop in the lab. We maintain high-fidelity 1st and 2nd generation full-scale prototype vehicles equipped with industrial-grade sensor suites for real-world validation.',
    feat3Li1: 'Industrial Sensor Suites: Equipped with 128-channel LiDARs, 4K automotive cameras, and millimeter-wave radars, mirroring the exact hardware used by top-tier OEMs.',
    feat3Li2: 'Urban Proving Grounds: Conducting rigorous testing in complex urban environments and designated proving grounds to validate defensive algorithms against physical adversarial props (e.g., spoofed traffic signs).',
  },
  impact: {
    heading: 'Global Impact & Industry Alliances',
    sub: 'Our lab bridges academic excellence with industrial application, setting global benchmarks for autonomous vehicle safety and security standards.',
    stat1Title: 'Top Tier',
    stat1Sub: 'World Championships',
    stat1Desc: 'Argoverse & Waymo Open Dataset Challenges',
    stat2Title: '15+',
    stat2Sub: 'Core Patents Granted',
    stat2Desc: 'US & CN Intellectual Property Protection',
    stat3Title: '>$20M',
    stat3Sub: 'Research Funding',
    stat3Desc: 'Accelerating R&D and Commercialization',
    supportedBy: 'Joint Experimental Verification Supported By',
  },
  business: {
    heading: 'Commercialization & Market Strategy',
    sub: 'The global autonomous vehicle testing and validation market is projected to reach $25B by 2030. Our platform unlocks this trust-driven frontier across multiple high-value sectors.',
    targetTitle: 'Target Customer Segments',
    seg1Title: 'Government Regulators',
    seg1Desc: 'Providing scientific, quantifiable safety criteria and standardized testing frameworks for AV licensing, compliance, and smart city infrastructure planning.',
    seg2Title: 'Vehicle OEMs & Tier 1s',
    seg2Desc: 'Shortening R&D cycles by replacing expensive real-world testing with high-fidelity SIL/HIL simulation, preventing costly post-launch recalls.',
    seg3Title: 'Research Institutes & STEM',
    seg3Desc: 'Accelerating academic research and providing hands-on mixed-reality AI safety sandbox kits for university education and workforce training.',
    chartTitle: 'Projected Revenue Mix',
    chartSub: 'Figures in HK$ Million (Estimated)',
    chartEnterprise: 'Enterprise',
    chartEducation: 'Education',
    chartGovGrants: 'Gov Grants',
    streamsTitle: 'Diversified Revenue Streams',
    rev1Title: 'Enterprise Solutions',
    rev1Tag: 'SaaS + NRE Fees',
    rev1Desc: 'Comprehensive testing infrastructure for OEMs developing Level 3+ autonomous systems.',
    rev1Li1: 'Simulation Platform (Annual SaaS)',
    rev1Li2: 'Turnkey HIL/SIL Hardware Rigs',
    rev1Li3: 'Custom Corner Case Modeling',
    rev1Price: 'HK$ 500k',
    rev2Title: 'Regulatory & Cert',
    rev2Tag: 'Service Fees',
    rev2Desc: 'Independent, third-party safety validation and certification reports for compliance.',
    rev2Li1: 'Safety Validation Reports',
    rev2Li2: 'Policy & Standard Consultancy',
    rev2Li3: 'Standardized Dataset Access',
    rev2Price: 'HK$ 200k',
    rev3Title: 'STEM Education',
    rev3Tag: 'Hardware + Licensing',
    rev3Desc: 'Empowering the next generation of engineers with accessible, hands-on AI safety tools.',
    rev3Li1: '1/10th Scale Sandbox AV Kits',
    rev3Li2: 'AI/Robotics Courseware',
    rev3Li3: 'University Lab Setup Services',
    rev3Price: 'HK$ 100k',
  },
  footer: {
    heading: 'Setting the Benchmark for Trusted Autonomy',
    sub: 'We are actively seeking strategic partnerships with OEMs, regulatory bodies, and investors to scale our validation platform globally.',
    cta: 'Partner With Us',
    copyright: '© 2026 CityU HK - Department of Computer Science. All rights reserved.',
    privacy: 'Privacy Policy',
    publications: 'Research Publications',
  },
};

const contentZh: AVPageContent = {
  hero: {
    titleLine1: '面向多尺度安全测试与安全验证的',
    titleLine2: '自动驾驶一体化虚拟-物理平台',
    badge: '城大 FSM 实验室研究项目',
    intro1: '从 L2 辅助驾驶到 L4 完全自动驾驶的过渡，目前正因缺乏可信验证而受阻。现代 AI 在标准场景下表现优异，却仍是易受攻击的「黑箱」。',
    intro2: '我们正在打造全球首个一体化虚拟-物理验证平台。将数字不确定性转化为可验证的实车安全标准，让自动驾驶系统既能应对自然界的复杂场景，也能抵御恶意网络威胁。',
    cta: '探索架构',
    dept: '计算机科学系',
    org: '香港城市大学',
  },
  motivation: {
    heading: 'AI 自动驾驶面临的双重威胁',
    sub: '仿真中 99.9% 的准确率是一种致命的错觉。剩余的 0.1% 恰恰是安全行驶与灾难性失败之间的边界。我们将这些致命缺陷归纳为两大领域。',
    safetyTitle: '安全：「看不见」的长尾',
    safetyBadge: '自然极端场景',
    safetyDesc: '自动驾驶系统在数百万英里的「正常」驾驶数据上训练，但真实世界充满不确定性。极端天气、不可预测的行人行为、复杂施工区与罕见光照等构成边缘场景的「长尾」。',
    safetyLi1: '传感器退化：暴雨或雾霾导致激光雷达与摄像头失效。',
    safetyLi2: '语义混淆：将湿滑路面反射误判为真实障碍物。',
    safetyLi3: '混沌主体：闯红灯行人或异常驾驶者的不可预测轨迹。',
    securityTitle: '安全：「武器化」的 AI',
    securityBadge: '对抗攻击',
    securityDesc: '除自然混沌外，AI 感知系统极易遭受有意的恶意操纵。对抗攻击可细微改变物理环境，使车辆的决策算法完全失明或误判。',
    securityLi1: '摄像头致盲：对抗补丁使停止标志对 AI 不可见。',
    securityLi2: '激光雷达欺骗：注入虚假激光脉冲生成「幽灵」车辆。',
    securityLi3: '数据投毒：污染训练流程以植入隐藏后门。',
  },
  innovation: {
    heading: '统一盾牌框架',
    sub: '为同时应对自然与恶意威胁，我们设计了一体化架构，在从纯软件仿真到实车部署的连续谱上提供同步的安全与安保验证。',
    silTitle: 'SIL：无限可扩展',
    silDesc: '一夜之间仿真数百万英里。在纯软件环境中针对持续生成的合成极端场景测试算法，确保快速迭代与基线鲁棒性。',
    hilTitle: 'HIL：算力现实',
    hilDesc: '将算法部署到真实自动驾驶域控制器（如 NVIDIA Orin）上，验证系统延迟、热 throttling 及硬件特定漏洞。',
    vilTitle: 'VIL：物理真实验证',
    vilDesc: '最后一关。软件在试验场驱动真实车辆，通过混合现实注入（将虚拟行人投射到物理传感器）弥合仿真到现实的鸿沟。',
  },
  capabilities: {
    heading: '核心技术能力',
    sub: '通过多尺度虚拟-物理验证实现安全与安保。',
    feat1Badge: '01. 数字孪生生成',
    feat1Title: 'AI 场景发现',
    feat1Desc: '我们不依赖人工编写场景。平台利用先进 AI 自动发现并生成最可能引发系统失效的关键测试用例。',
    feat1Li1: '外观级生成：利用 3D Gaussian Splatting 与 NeRF 从稀疏真实数据重建高真实感、高复杂路口几何与罕见天气。',
    feat1Li2: '行为级生成：利用强化学习训练对抗智能体（其他车辆、行人），主动寻找自车规划算法的漏洞。',
    feat2Badge: '02. 仿真到现实迁移',
    feat2Title: '混合现实沙盒测试',
    feat2Desc: '在冒险进行全尺寸车辆测试前，我们在高度可控的混合现实物理沙盒中验证算法，弥合纯仿真与全尺寸物理测试之间的鸿沟。',
    feat2Li1: '微型车队：部署 1/10 比例机器人车辆，配备真实计算板（NVIDIA Jetson）与缩放传感器，测试物理动力学与延迟。',
    feat2Li2: '传感器注入：将物理沙盒与闭环仿真器（如 CARLA）同步，虚拟障碍物实时注入物理机器人的传感器数据流，迫使其对不存在的物理威胁做出反应。',
    feat3Badge: '03. 物理验证',
    feat3Title: '全尺寸城市原型车',
    feat3Desc: '研究不止于实验室。我们保有高保真一代与二代全尺寸原型车，配备工业级传感器套件，用于实车验证。',
    feat3Li1: '工业级传感器套件：128 线激光雷达、4K 车载相机与毫米波雷达，与一线主机厂硬件一致。',
    feat3Li2: '城市试验场：在复杂城市环境与指定试验场进行严格测试，验证防御算法对物理对抗道具（如伪造交通标志）的鲁棒性。',
  },
  impact: {
    heading: '全球影响与产业联盟',
    sub: '实验室连接学术卓越与产业应用，为自动驾驶安全与安保标准树立全球标杆。',
    stat1Title: '顶尖',
    stat1Sub: '世界冠军',
    stat1Desc: 'Argoverse 与 Waymo 开放数据集挑战',
    stat2Title: '15+',
    stat2Sub: '核心专利授权',
    stat2Desc: '美国与中国知识产权保护',
    stat3Title: '>2000 万美元',
    stat3Sub: '研发资助',
    stat3Desc: '加速研发与商业化',
    supportedBy: '联合实验验证支持方',
  },
  business: {
    heading: '商业化与市场策略',
    sub: '全球自动驾驶测试与验证市场预计到 2030 年将达 250 亿美元。我们的平台在多个高价值领域打开这一信任驱动的前沿。',
    targetTitle: '目标客户群体',
    seg1Title: '政府监管机构',
    seg1Desc: '为自动驾驶许可、合规与智慧城市基础设施规划提供科学、可量化的安全标准与标准化测试框架。',
    seg2Title: '整车厂与 Tier 1',
    seg2Desc: '以高保真 SIL/HIL 仿真替代昂贵的实车测试，缩短研发周期，避免上市后召回。',
    seg3Title: '科研机构与 STEM',
    seg3Desc: '加速学术研究，为大学教育与人才培训提供动手式混合现实 AI 安全沙盒套件。',
    chartTitle: '预计收入构成',
    chartSub: '单位：百万港元（估算）',
    chartEnterprise: '企业',
    chartEducation: '教育',
    chartGovGrants: '政府资助',
    streamsTitle: '多元化收入来源',
    rev1Title: '企业解决方案',
    rev1Tag: 'SaaS + NRE 费用',
    rev1Desc: '为开发 L3+ 自动驾驶系统的整车厂提供完整测试基础设施。',
    rev1Li1: '仿真平台（年度 SaaS）',
    rev1Li2: 'HIL/SIL 硬件台架交钥匙',
    rev1Li3: '定制极端场景建模',
    rev1Price: '50 万港元',
    rev2Title: '监管与认证',
    rev2Tag: '服务费',
    rev2Desc: '独立第三方安全验证与认证报告，满足合规要求。',
    rev2Li1: '安全验证报告',
    rev2Li2: '政策与标准咨询',
    rev2Li3: '标准化数据集访问',
    rev2Price: '20 万港元',
    rev3Title: 'STEM 教育',
    rev3Tag: '硬件 + 授权',
    rev3Desc: '以易用的动手式 AI 安全工具赋能下一代工程师。',
    rev3Li1: '1/10 比例沙盒自动驾驶套件',
    rev3Li2: 'AI/机器人课程',
    rev3Li3: '高校实验室建设服务',
    rev3Price: '10 万港元',
  },
  footer: {
    heading: '树立可信自动驾驶的标杆',
    sub: '我们正积极寻求与整车厂、监管机构及投资者的战略合作，将验证平台推向全球。',
    cta: '与我们合作',
    copyright: '© 2026 香港城大 - 计算机科学系。保留所有权利。',
    privacy: '隐私政策',
    publications: '研究发表',
  },
};

const heroTitleFr = { titleLine1: 'Plateforme virtuelle-physique intégrée pour', titleLine2: 'les tests de sécurité multi-échelle et la validation de sécurité des véhicules autonomes' };
const heroTitleRu = { titleLine1: 'Интегрированная виртуально-физическая платформа для', titleLine2: 'многомасштабного тестирования безопасности и верификации защищённости автономных транспортных средств' };
const heroTitleEs = { titleLine1: 'Plataforma virtual-física integrada para', titleLine2: 'pruebas de seguridad multiescala y validación de seguridad de vehículos autónomos' };
const heroTitleAr = { titleLine1: 'منصة افتراضية-فيزيائية متكاملة لـ', titleLine2: 'اختبار السلامة متعدد النطاقات والتحقق من أمان المركبات الذاتية' };

const contentFr: AVPageContent = { ...contentEn, hero: { ...contentEn.hero, ...heroTitleFr } };
const contentRu: AVPageContent = { ...contentEn, hero: { ...contentEn.hero, ...heroTitleRu } };
const contentEs: AVPageContent = { ...contentEn, hero: { ...contentEn.hero, ...heroTitleEs } };
const contentAr: AVPageContent = { ...contentEn, hero: { ...contentEn.hero, ...heroTitleAr } };

const byLocale: Record<string, AVPageContent> = {
  zh: contentZh,
  en: contentEn,
  fr: contentFr,
  ru: contentRu,
  es: contentEs,
  ar: contentAr,
};

export function getAutonomousValidationContent(locale: LocaleCode): AVPageContent {
  return byLocale[locale] ?? contentEn;
}
