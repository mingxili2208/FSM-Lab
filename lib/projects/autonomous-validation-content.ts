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
    feat2Li1: 'Deploying 1/28 scale robotic vehicles to test physical dynamics and latency.',
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
    feat2Li1: '部署 1/28 比例机器人车辆，测试物理动力学与延迟。',
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

const contentFr: AVPageContent = {
  hero: {
    titleLine1: 'Plateforme virtuelle-physique intégrée pour',
    titleLine2: 'les tests de sécurité multi-échelle et la validation de sécurité des véhicules autonomes',
    badge: 'Projet de recherche du FSM Lab de CityU',
    intro1: 'La transition du niveau 2 ADAS vers le niveau 4 de conduite entièrement autonome est actuellement bloquée par un manque critique de confiance. Bien que les modèles d\'IA modernes performent exceptionnellement dans des conditions standard, ils restent des « boîtes noires » vulnérables.',
    intro2: 'Nous construisons la première plateforme de validation virtuelle-physique intégrée au monde. En transformant l\'incertitude numérique en normes de sécurité réelles et vérifiées, nous garantissons que les systèmes autonomes peuvent survivre à la fois au chaos de la nature et à la malveillance des cybermenaces.',
    cta: 'Explorer l\'architecture',
    dept: 'Département d\'informatique',
    org: 'City University of Hong Kong',
  },
  motivation: {
    heading: 'Les doubles menaces pesant sur l\'autonomie de l\'IA',
    sub: 'Une précision de 99,9 % en simulation est une illusion fatale. Les 0,1 % restants représentent la frontière entre un trajet sûr et une défaillance catastrophique. Nous classons ces défauts fatals en deux domaines distincts.',
    safetyTitle: 'Sécurité : La « longue traîne » invisible',
    safetyBadge: 'Cas limites naturels',
    safetyDesc: 'Les véhicules autonomes sont entraînés sur des millions de kilomètres de données de conduite « normales ». Cependant, le monde réel est chaotique. Les conditions météorologiques extrêmes, les comportements piétons imprévisibles, les zones de construction complexes et les anomalies d\'éclairage rares forment une « longue traîne » de cas limites.',
    safetyLi1: 'Dégradation des capteurs : Pluie intense ou brouillard aveuglant le LiDAR et les caméras.',
    safetyLi2: 'Confusion sémantique : Interpréter les reflets sur les routes mouillées comme des obstacles physiques.',
    safetyLi3: 'Agents chaotiques : Trajectoires imprévisibles de piétons traversant hors des clous ou de conducteurs erratiques.',
    securityTitle: 'Sécurité : L\'IA « weaponisée »',
    securityBadge: 'Attaques adversariales',
    securityDesc: 'Au-delà du chaos naturel, les systèmes de perception IA sont très susceptibles aux manipulations malveillantes intentionnelles. Les attaques adversariales peuvent subtilement altérer l\'environnement physique pour aveugler ou induire complètement en erreur les algorithmes de décision du véhicule.',
    securityLi1: 'Fantôme caméra : Patchs adversariaux rendant les panneaux stop invisibles pour l\'IA.',
    securityLi2: 'Usurpation LiDAR : Injection de fausses impulsions laser pour créer des véhicules « fantômes ».',
    securityLi3: 'Empoisonnement des données : Corruption du pipeline d\'entraînement pour introduire des portes dérobées cachées.',
  },
  innovation: {
    heading: 'Le cadre du Bouclier Unifié',
    sub: 'Pour conquérir les menaces naturelles et malveillantes, nous avons conçu une architecture holistique. Elle fournit une validation synchrone de la sécurité à travers un spectre continu — de la simulation logicielle pure au déploiement sur véhicule physique.',
    silTitle: 'SIL : Évolutivité infinie',
    silDesc: 'Des millions de kilomètres sont simulés en une nuit. Nous testons les algorithmes contre des cas limites synthétiques générés en continu dans un environnement logiciel pur, assurant une itération rapide et une robustesse de base.',
    hilTitle: 'HIL : Réalité de calcul',
    hilDesc: 'Les algorithmes sont déployés sur de vrais contrôleurs de domaine de conduite autonome (ex. NVIDIA Orin). Cela valide la latence du système, le bridage thermique et les vulnérabilités spécifiques au matériel sous contrainte.',
    vilTitle: 'VIL : Vérité physique',
    vilDesc: 'La dernière frontière. Le logiciel conduit un véhicule physique sur une piste d\'essai, réagissant à des injections de réalité mixte (piétons virtuels projetés dans des capteurs physiques) pour combler le fossé simulation-réel.',
  },
  capabilities: {
    heading: 'Capacités techniques fondamentales',
    sub: 'Ingénierie de la sécurité et de la protection par vérification virtuelle-physique multi-échelle.',
    feat1Badge: '01. Génération de jumeaux numériques',
    feat1Title: 'Découverte de scénarios par IA',
    feat1Desc: 'Nous ne nous appuyons pas sur la création manuelle de scénarios. Notre plateforme utilise une IA avancée pour découvrir et générer automatiquement les cas de test les plus critiques susceptibles de provoquer une défaillance système.',
    feat1Li1: 'Génération au niveau de l\'apparence : Utilisation du 3D Gaussian Splatting et du NeRF pour reconstruire des géométries d\'intersection photoréalistes et complexes, et des effets météorologiques rares à partir de données réelles éparses.',
    feat1Li2: 'Génération au niveau comportemental : Utilisation de l\'apprentissage par renforcement (RL) pour entraîner des agents adversariaux (autres voitures, piétons) qui recherchent activement les vulnérabilités dans les algorithmes de planification du véhicule ego.',
    feat2Badge: '02. Transfert simulation-réel',
    feat2Title: 'Test en bac à sable de réalité mixte',
    feat2Desc: 'Avant de risquer des véhicules à grande échelle, nous validons les algorithmes dans un bac à sable physique de réalité mixte hautement contrôlé. Cela comble le fossé entre la simulation pure et les tests physiques à grande échelle.',
    feat2Li1: 'Déploiement de véhicules robotiques à l\'échelle 1/28 pour tester la dynamique physique et la latence.',
    feat2Li2: 'Injection de capteurs : Synchronisation du bac à sable physique avec un simulateur en boucle fermée (comme CARLA). Les obstacles virtuels sont injectés directement dans le flux de données des capteurs du robot physique en temps réel, le forçant à réagir à des menaces physiques inexistantes.',
    feat3Badge: '03. Validation physique',
    feat3Title: 'Prototypes urbains à grande échelle',
    feat3Desc: 'Notre recherche ne s\'arrête pas en laboratoire. Nous maintenons des prototypes à grande échelle de 1ère et 2ème génération à haute fidélité, équipés de suites de capteurs industriels pour la validation en conditions réelles.',
    feat3Li1: 'Suites de capteurs industriels : Équipés de LiDARs 128 canaux, caméras automobiles 4K et radars à ondes millimétriques, reproduisant exactement le matériel utilisé par les OEM de premier rang.',
    feat3Li2: 'Terrains de test urbains : Tests rigoureux dans des environnements urbains complexes et des terrains de test désignés pour valider les algorithmes défensifs contre des accessoires adversariaux physiques (ex. panneaux de signalisation falsifiés).',
  },
  impact: {
    heading: 'Impact mondial et alliances industrielles',
    sub: 'Notre laboratoire relie l\'excellence académique à l\'application industrielle, établissant des références mondiales pour les normes de sécurité des véhicules autonomes.',
    stat1Title: 'Premier rang',
    stat1Sub: 'Championnats du monde',
    stat1Desc: 'Défis Argoverse & Waymo Open Dataset',
    stat2Title: '15+',
    stat2Sub: 'Brevets fondamentaux accordés',
    stat2Desc: 'Protection de la propriété intellectuelle US & CN',
    stat3Title: '>20M$',
    stat3Sub: 'Financement de recherche',
    stat3Desc: 'Accélération de la R&D et de la commercialisation',
    supportedBy: 'Vérification expérimentale conjointe soutenue par',
  },
  business: {
    heading: 'Commercialisation et stratégie de marché',
    sub: 'Le marché mondial des tests et de la validation de véhicules autonomes devrait atteindre 25 milliards de dollars d\'ici 2030. Notre plateforme ouvre cette frontière axée sur la confiance dans plusieurs secteurs à haute valeur ajoutée.',
    targetTitle: 'Segments clients cibles',
    seg1Title: 'Régulateurs gouvernementaux',
    seg1Desc: 'Fourniture de critères de sécurité scientifiques et quantifiables ainsi que de cadres de test standardisés pour l\'homologation des VA, la conformité et la planification des infrastructures de villes intelligentes.',
    seg2Title: 'OEM et équipementiers Tier 1',
    seg2Desc: 'Réduction des cycles de R&D en remplaçant les tests réels coûteux par une simulation SIL/HIL haute fidélité, prévenant les rappels coûteux après lancement.',
    seg3Title: 'Instituts de recherche et STEM',
    seg3Desc: 'Accélération de la recherche académique et fourniture de kits de bac à sable de sécurité IA en réalité mixte pratiques pour l\'enseignement universitaire et la formation professionnelle.',
    chartTitle: 'Répartition prévisionnelle des revenus',
    chartSub: 'Chiffres en millions HK$ (estimés)',
    chartEnterprise: 'Entreprise',
    chartEducation: 'Éducation',
    chartGovGrants: 'Subventions gov.',
    streamsTitle: 'Sources de revenus diversifiées',
    rev1Title: 'Solutions entreprise',
    rev1Tag: 'SaaS + frais NRE',
    rev1Desc: 'Infrastructure de test complète pour les OEM développant des systèmes autonomes de niveau 3+.',
    rev1Li1: 'Plateforme de simulation (SaaS annuel)',
    rev1Li2: 'Bancs HIL/SIL matériels clé en main',
    rev1Li3: 'Modélisation personnalisée des cas limites',
    rev1Price: 'HK$ 500k',
    rev2Title: 'Réglementation & Cert.',
    rev2Tag: 'Frais de service',
    rev2Desc: 'Rapports de validation et de certification de sécurité indépendants et tiers pour la conformité.',
    rev2Li1: 'Rapports de validation de sécurité',
    rev2Li2: 'Conseil en politique et normes',
    rev2Li3: 'Accès aux jeux de données standardisés',
    rev2Price: 'HK$ 200k',
    rev3Title: 'Éducation STEM',
    rev3Tag: 'Matériel + Licences',
    rev3Desc: 'Autonomiser la prochaine génération d\'ingénieurs avec des outils de sécurité IA accessibles et pratiques.',
    rev3Li1: 'Kits VA bac à sable à l\'échelle 1/10',
    rev3Li2: 'Programmes IA/Robotique',
    rev3Li3: 'Services d\'installation de laboratoire universitaire',
    rev3Price: 'HK$ 100k',
  },
  footer: {
    heading: 'Établir la référence pour une autonomie de confiance',
    sub: 'Nous recherchons activement des partenariats stratégiques avec des OEM, des organismes de réglementation et des investisseurs pour déployer notre plateforme de validation à l\'échelle mondiale.',
    cta: 'Devenir partenaire',
    copyright: '© 2026 CityU HK - Département d\'informatique. Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    publications: 'Publications de recherche',
  },
};

const contentRu: AVPageContent = {
  hero: {
    titleLine1: 'Интегрированная виртуально-физическая платформа для',
    titleLine2: 'многомасштабного тестирования безопасности и верификации защищённости автономных транспортных средств',
    badge: 'Исследовательский проект лаборатории FSM, CityU',
    intro1: 'Переход от уровня 2 ADAS к уровню 4 полностью автономного вождения в настоящее время тормозится критическим недостатком доверия. Современные модели ИИ показывают исключительные результаты в стандартных условиях, однако остаются уязвимыми «чёрными ящиками».',
    intro2: 'Мы создаём первую в мире интегрированную виртуально-физическую платформу валидации. Преобразуя цифровую неопределённость в верифицированные реальные стандарты безопасности, мы гарантируем, что автономные системы способны выдержать как хаос природы, так и злой умысел киберугроз.',
    cta: 'Изучить архитектуру',
    dept: 'Департамент информатики',
    org: 'City University of Hong Kong',
  },
  motivation: {
    heading: 'Двойные угрозы автономии ИИ',
    sub: 'Точность 99,9 % в симуляции — смертельная иллюзия. Оставшиеся 0,1 % представляют собой границу между безопасной поездкой и катастрофическим отказом. Мы разделяем эти смертельные недостатки на два отдельных домена.',
    safetyTitle: 'Безопасность: «Невидимый» длинный хвост',
    safetyBadge: 'Естественные граничные случаи',
    safetyDesc: 'Автономные транспортные средства обучаются на миллионах миль данных «нормального» вождения. Однако реальный мир хаотичен. Экстремальные погодные условия, непредсказуемое поведение пешеходов, сложные строительные зоны и редкие световые аномалии формируют «длинный хвост» граничных случаев.',
    safetyLi1: 'Деградация датчиков: Сильный дождь или туман, ослепляющий лидар и камеры.',
    safetyLi2: 'Семантическая путаница: Восприятие отражений на мокрых дорогах как физических препятствий.',
    safetyLi3: 'Хаотичные агенты: Непредсказуемые траектории нарушителей ПДД или водителей с непредсказуемым поведением.',
    securityTitle: 'Защищённость: «Вооружённый» ИИ',
    securityBadge: 'Состязательные атаки',
    securityDesc: 'Помимо природного хаоса, системы восприятия ИИ крайне уязвимы к преднамеренным злоумышленным манипуляциям. Состязательные атаки могут тонко изменять физическую среду, полностью ослепляя или вводя в заблуждение алгоритмы принятия решений транспортного средства.',
    securityLi1: 'Призрак камеры: Состязательные патчи, делающие знаки «Стоп» невидимыми для ИИ.',
    securityLi2: 'Спуфинг лидара: Инъекция фальшивых лазерных импульсов для создания «фантомных» транспортных средств.',
    securityLi3: 'Отравление данных: Порча обучающего конвейера для внедрения скрытых бэкдоров.',
  },
  innovation: {
    heading: 'Унифицированная система «Щит»',
    sub: 'Для борьбы как с природными, так и со злоумышленными угрозами мы создали целостную архитектуру. Она обеспечивает синхронную валидацию безопасности в непрерывном спектре — от чистой программной симуляции до развёртывания на физическом транспортном средстве.',
    silTitle: 'SIL: Безграничная масштабируемость',
    silDesc: 'Миллионы миль симулируются за одну ночь. Мы тестируем алгоритмы против непрерывно генерируемых синтетических граничных случаев в чистой программной среде, обеспечивая быструю итерацию и базовую устойчивость.',
    hilTitle: 'HIL: Вычислительная реальность',
    hilDesc: 'Алгоритмы развёртываются на реальных контроллерах домена автономного вождения (например, NVIDIA Orin). Это валидирует задержку системы, тепловое дросселирование и уязвимости, специфичные для оборудования, под нагрузкой.',
    vilTitle: 'VIL: Физическая истина',
    vilDesc: 'Последний рубеж. Программное обеспечение управляет физическим транспортным средством на испытательном треке, реагируя на инъекции смешанной реальности (виртуальные пешеходы, проецируемые в физические датчики), чтобы преодолеть разрыв между симуляцией и реальностью.',
  },
  capabilities: {
    heading: 'Основные технические возможности',
    sub: 'Инженерная безопасность и защита посредством многомасштабной виртуально-физической верификации.',
    feat1Badge: '01. Генерация цифровых двойников',
    feat1Title: 'ИИ-обнаружение сценариев',
    feat1Desc: 'Мы не полагаемся на ручное создание сценариев. Наша платформа использует передовой ИИ для автоматического обнаружения и генерации наиболее критических тест-кейсов, способных привести к отказу системы.',
    feat1Li1: 'Генерация на уровне внешнего вида: Использование 3D Gaussian Splatting и NeRF для реконструкции фотореалистичных, высокосложных геометрий перекрёстков и редких погодных эффектов из разреженных реальных данных.',
    feat1Li2: 'Генерация на уровне поведения: Применение обучения с подкреплением (RL) для обучения состязательных агентов (другие автомобили, пешеходы), которые активно ищут уязвимости в алгоритмах планирования ego-транспортного средства.',
    feat2Badge: '02. Перенос из симуляции в реальность',
    feat2Title: 'Тестирование в «песочнице» смешанной реальности',
    feat2Desc: 'Прежде чем рисковать полноразмерными транспортными средствами, мы валидируем алгоритмы в строго контролируемой физической «песочнице» смешанной реальности. Это преодолевает разрыв между чистой симуляцией и полноразмерным физическим тестированием.',
    feat2Li1: 'Развёртывание роботизированных транспортных средств в масштабе 1/28 для тестирования физической динамики и задержки.',
    feat2Li2: 'Инъекция датчиков: Синхронизация физической «песочницы» с симулятором замкнутого цикла (например, CARLA). Виртуальные препятствия в реальном времени вводятся напрямую в поток данных датчиков физического робота, вынуждая его реагировать на несуществующие физические угрозы.',
    feat3Badge: '03. Физическая валидация',
    feat3Title: 'Полноразмерные городские прототипы',
    feat3Desc: 'Наше исследование не останавливается в лаборатории. Мы поддерживаем высокоточные прототипы первого и второго поколения в натуральную величину, оснащённые промышленными сенсорными комплектами для валидации в реальных условиях.',
    feat3Li1: 'Промышленные сенсорные комплекты: Оснащены 128-канальными лидарами, автомобильными камерами 4K и радарами миллиметрового диапазона, точно воспроизводящими оборудование, используемое ведущими OEM.',
    feat3Li2: 'Городские испытательные полигоны: Проведение строгих испытаний в сложных городских средах и специально отведённых полигонах для валидации защитных алгоритмов против физических состязательных реквизитов (например, поддельных дорожных знаков).',
  },
  impact: {
    heading: 'Глобальное воздействие и отраслевые альянсы',
    sub: 'Наша лаборатория соединяет академическое превосходство с промышленным применением, устанавливая мировые ориентиры для стандартов безопасности автономных транспортных средств.',
    stat1Title: 'Высший уровень',
    stat1Sub: 'Мировые чемпионаты',
    stat1Desc: 'Соревнования Argoverse & Waymo Open Dataset',
    stat2Title: '15+',
    stat2Sub: 'Основных патентов выдано',
    stat2Desc: 'Защита интеллектуальной собственности в США и Китае',
    stat3Title: '>20 млн $',
    stat3Sub: 'Исследовательское финансирование',
    stat3Desc: 'Ускорение НИОКР и коммерциализации',
    supportedBy: 'Совместная экспериментальная верификация при поддержке',
  },
  business: {
    heading: 'Коммерциализация и рыночная стратегия',
    sub: 'По прогнозам, глобальный рынок тестирования и валидации автономных транспортных средств достигнет 25 млрд долларов к 2030 году. Наша платформа открывает этот рубеж, движимый доверием, в нескольких высокодоходных секторах.',
    targetTitle: 'Целевые клиентские сегменты',
    seg1Title: 'Государственные регуляторы',
    seg1Desc: 'Предоставление научных, поддающихся количественной оценке критериев безопасности и стандартизированных систем тестирования для лицензирования АТС, соответствия требованиям и планирования инфраструктуры умных городов.',
    seg2Title: 'OEM и Tier 1 поставщики',
    seg2Desc: 'Сокращение циклов НИОКР путём замены дорогостоящего реального тестирования высокоточной симуляцией SIL/HIL, предотвращая дорогостоящие отзывы после запуска.',
    seg3Title: 'Научно-исследовательские институты и STEM',
    seg3Desc: 'Ускорение академических исследований и предоставление практических наборов «песочницы» безопасности ИИ в смешанной реальности для университетского образования и профессиональной подготовки.',
    chartTitle: 'Прогнозируемая структура доходов',
    chartSub: 'Суммы в млн гонконгских долларов (оценка)',
    chartEnterprise: 'Корпоративный',
    chartEducation: 'Образование',
    chartGovGrants: 'Госгранты',
    streamsTitle: 'Диверсифицированные источники доходов',
    rev1Title: 'Корпоративные решения',
    rev1Tag: 'SaaS + NRE-сборы',
    rev1Desc: 'Комплексная тестовая инфраструктура для OEM, разрабатывающих автономные системы уровня 3+.',
    rev1Li1: 'Платформа симуляции (ежегодный SaaS)',
    rev1Li2: 'Готовые стенды HIL/SIL',
    rev1Li3: 'Моделирование пользовательских граничных случаев',
    rev1Price: 'HK$ 500k',
    rev2Title: 'Регулирование и сертификация',
    rev2Tag: 'Сервисные сборы',
    rev2Desc: 'Независимые сторонние отчёты о валидации безопасности и сертификации для соответствия требованиям.',
    rev2Li1: 'Отчёты по валидации безопасности',
    rev2Li2: 'Консультации по политике и стандартам',
    rev2Li3: 'Доступ к стандартизированным наборам данных',
    rev2Price: 'HK$ 200k',
    rev3Title: 'STEM-образование',
    rev3Tag: 'Оборудование + лицензирование',
    rev3Desc: 'Вооружение следующего поколения инженеров доступными практическими инструментами безопасности ИИ.',
    rev3Li1: 'Наборы для «песочницы» АТС в масштабе 1/10',
    rev3Li2: 'Курсы по ИИ/робототехнике',
    rev3Li3: 'Услуги по оснащению университетских лабораторий',
    rev3Price: 'HK$ 100k',
  },
  footer: {
    heading: 'Установка ориентира для надёжной автономности',
    sub: 'Мы активно ищем стратегические партнёрства с OEM, регулирующими органами и инвесторами для масштабирования нашей платформы валидации на глобальном уровне.',
    cta: 'Стать партнёром',
    copyright: '© 2026 CityU HK - Департамент информатики. Все права защищены.',
    privacy: 'Политика конфиденциальности',
    publications: 'Научные публикации',
  },
};

const contentEs: AVPageContent = {
  hero: {
    titleLine1: 'Plataforma virtual-física integrada para',
    titleLine2: 'pruebas de seguridad multiescala y validación de seguridad de vehículos autónomos',
    badge: 'Proyecto de investigación del FSM Lab de CityU',
    intro1: 'La transición del nivel 2 ADAS al nivel 4 de conducción completamente autónoma está actualmente bloqueada por una falta crítica de confianza. Si bien los modelos de IA modernos se desempeñan excepcionalmente bien en condiciones estándar, siguen siendo "Cajas Negras" vulnerables.',
    intro2: 'Estamos construyendo la primera Plataforma de Validación Virtual-Física Integrada del mundo. Al transformar la incertidumbre digital en estándares de seguridad reales y verificados, garantizamos que los sistemas autónomos pueden sobrevivir tanto al caos de la naturaleza como a la malicia de las ciberamenazas.',
    cta: 'Explorar la arquitectura',
    dept: 'Departamento de Ciencias de la Computación',
    org: 'City University of Hong Kong',
  },
  motivation: {
    heading: 'Las dobles amenazas a la autonomía de la IA',
    sub: 'Un 99,9 % de precisión en simulación es una ilusión fatal. El 0,1 % restante representa la frontera entre un viaje seguro y un fallo catastrófico. Categorizamos estos fallos fatales en dos dominios distintos.',
    safetyTitle: 'Seguridad: La "larga cola" invisible',
    safetyBadge: 'Casos límite naturales',
    safetyDesc: 'Los vehículos autónomos se entrenan con millones de millas de datos de conducción "normal". Sin embargo, el mundo real es caótico. Las condiciones meteorológicas extremas, el comportamiento impredecible de los peatones, las zonas de construcción complejas y las anomalías de iluminación raras forman una "larga cola" de casos límite.',
    safetyLi1: 'Degradación de sensores: Lluvia intensa o niebla que ciega el LiDAR y las cámaras.',
    safetyLi2: 'Confusión semántica: Interpretar reflexiones en carreteras mojadas como obstáculos físicos.',
    safetyLi3: 'Agentes caóticos: Trayectorias impredecibles de peatones que cruzan fuera del paso o conductores erráticos.',
    securityTitle: 'Ciberseguridad: La IA "militarizada"',
    securityBadge: 'Ataques adversariales',
    securityDesc: 'Más allá del caos natural, los sistemas de percepción de IA son muy susceptibles a la manipulación maliciosa intencional. Los ataques adversariales pueden alterar sutilmente el entorno físico para cegar o engañar completamente a los algoritmos de toma de decisiones del vehículo.',
    securityLi1: 'Fantasma de cámara: Parches adversariales que hacen que las señales de stop sean invisibles para la IA.',
    securityLi2: 'Suplantación de LiDAR: Inyección de pulsos láser falsos para crear vehículos "fantasma".',
    securityLi3: 'Envenenamiento de datos: Corrupción del pipeline de entrenamiento para introducir puertas traseras ocultas.',
  },
  innovation: {
    heading: 'El marco del Escudo Unificado',
    sub: 'Para conquistar tanto las amenazas naturales como las maliciosas, hemos diseñado una arquitectura holística. Proporciona validación sincrónica de seguridad a través de un espectro continuo, desde la simulación de software puro hasta el despliegue en vehículo físico.',
    silTitle: 'SIL: Escalabilidad infinita',
    silDesc: 'Millones de millas se simulan durante la noche. Probamos algoritmos contra casos límite sintéticos generados continuamente en un entorno de software puro, asegurando una iteración rápida y una robustez de referencia.',
    hilTitle: 'HIL: Realidad computacional',
    hilDesc: 'Los algoritmos se despliegan en controladores de dominio de conducción autónoma reales (p. ej., NVIDIA Orin). Esto valida la latencia del sistema, el estrangulamiento térmico y las vulnerabilidades específicas del hardware bajo estrés.',
    vilTitle: 'VIL: Verdad física',
    vilDesc: 'La última frontera. El software conduce un vehículo físico en una pista de prueba, reaccionando a inyecciones de realidad mixta (peatones virtuales proyectados en sensores físicos) para cerrar la brecha entre simulación y realidad.',
  },
  capabilities: {
    heading: 'Capacidades técnicas fundamentales',
    sub: 'Ingeniería de seguridad y protección a través de verificación virtual-física multiescala.',
    feat1Badge: '01. Generación de gemelos digitales',
    feat1Title: 'Descubrimiento de escenarios por IA',
    feat1Desc: 'No dependemos de la creación manual de escenarios. Nuestra plataforma utiliza IA avanzada para descubrir y generar automáticamente los casos de prueba más críticos que probablemente causen fallos del sistema.',
    feat1Li1: 'Generación a nivel de apariencia: Utilización de 3D Gaussian Splatting y NeRF para reconstruir geometrías de intersección fotorrealistas y muy complejas, y efectos meteorológicos raros a partir de datos del mundo real escasos.',
    feat1Li2: 'Generación a nivel de comportamiento: Empleo de Aprendizaje por Refuerzo (RL) para entrenar agentes adversariales (otros coches, peatones) que buscan activamente las vulnerabilidades en los algoritmos de planificación del vehículo ego.',
    feat2Badge: '02. Transferencia de simulación a realidad',
    feat2Title: 'Pruebas en sandbox de realidad mixta',
    feat2Desc: 'Antes de arriesgar vehículos a escala completa, validamos algoritmos en un sandbox físico de realidad mixta altamente controlado. Esto cierra la brecha entre la simulación pura y las pruebas físicas a escala completa.',
    feat2Li1: 'Despliegue de vehículos robóticos a escala 1/28 para probar la dinámica física y la latencia.',
    feat2Li2: 'Inyección de sensores: Sincronización del sandbox físico con un simulador de bucle cerrado (como CARLA). Los obstáculos virtuales se inyectan directamente en el flujo de datos de sensores del robot físico en tiempo real, forzándolo a reaccionar ante amenazas físicas inexistentes.',
    feat3Badge: '03. Validación física',
    feat3Title: 'Prototipos urbanos a escala completa',
    feat3Desc: 'Nuestra investigación no se detiene en el laboratorio. Mantenemos vehículos prototipo de alta fidelidad de 1ª y 2ª generación a escala completa, equipados con suites de sensores de grado industrial para validación en el mundo real.',
    feat3Li1: 'Suites de sensores industriales: Equipados con LiDARs de 128 canales, cámaras automotrices 4K y radares de onda milimétrica, que reproducen exactamente el hardware utilizado por los OEM de primer nivel.',
    feat3Li2: 'Polígonos de prueba urbanos: Realización de pruebas rigurosas en entornos urbanos complejos y polígonos de prueba designados para validar algoritmos defensivos contra accesorios adversariales físicos (p. ej., señales de tráfico falsificadas).',
  },
  impact: {
    heading: 'Impacto global y alianzas industriales',
    sub: 'Nuestro laboratorio conecta la excelencia académica con la aplicación industrial, estableciendo referencias globales para los estándares de seguridad de vehículos autónomos.',
    stat1Title: 'Primer nivel',
    stat1Sub: 'Campeonatos mundiales',
    stat1Desc: 'Desafíos Argoverse & Waymo Open Dataset',
    stat2Title: '15+',
    stat2Sub: 'Patentes clave concedidas',
    stat2Desc: 'Protección de propiedad intelectual en EE. UU. y CN',
    stat3Title: '>20M$',
    stat3Sub: 'Financiamiento de investigación',
    stat3Desc: 'Acelerando I+D y comercialización',
    supportedBy: 'Verificación experimental conjunta apoyada por',
  },
  business: {
    heading: 'Comercialización y estrategia de mercado',
    sub: 'Se proyecta que el mercado global de pruebas y validación de vehículos autónomos alcance los 25.000 millones de dólares para 2030. Nuestra plataforma desbloquea esta frontera impulsada por la confianza en múltiples sectores de alto valor.',
    targetTitle: 'Segmentos de clientes objetivo',
    seg1Title: 'Reguladores gubernamentales',
    seg1Desc: 'Provisión de criterios de seguridad científicos y cuantificables, y marcos de prueba estandarizados para la licencia, el cumplimiento y la planificación de infraestructura de ciudades inteligentes de VA.',
    seg2Title: 'OEM de vehículos y Tier 1',
    seg2Desc: 'Acortamiento de ciclos de I+D reemplazando las pruebas del mundo real costosas con simulación SIL/HIL de alta fidelidad, previniendo costosas retiradas post-lanzamiento.',
    seg3Title: 'Institutos de investigación y STEM',
    seg3Desc: 'Aceleración de la investigación académica y provisión de kits de sandbox de seguridad IA en realidad mixta prácticos para educación universitaria y formación profesional.',
    chartTitle: 'Mezcla de ingresos proyectada',
    chartSub: 'Cifras en millones HK$ (estimadas)',
    chartEnterprise: 'Empresarial',
    chartEducation: 'Educación',
    chartGovGrants: 'Subvenciones gov.',
    streamsTitle: 'Fuentes de ingresos diversificadas',
    rev1Title: 'Soluciones empresariales',
    rev1Tag: 'SaaS + honorarios NRE',
    rev1Desc: 'Infraestructura de prueba integral para OEM que desarrollan sistemas autónomos de Nivel 3+.',
    rev1Li1: 'Plataforma de simulación (SaaS anual)',
    rev1Li2: 'Equipos HIL/SIL llave en mano',
    rev1Li3: 'Modelado personalizado de casos límite',
    rev1Price: 'HK$ 500k',
    rev2Title: 'Regulación y Certificación',
    rev2Tag: 'Honorarios de servicio',
    rev2Desc: 'Informes independientes de terceros de validación de seguridad y certificación para cumplimiento.',
    rev2Li1: 'Informes de validación de seguridad',
    rev2Li2: 'Consultoría de política y normas',
    rev2Li3: 'Acceso a conjuntos de datos estandarizados',
    rev2Price: 'HK$ 200k',
    rev3Title: 'Educación STEM',
    rev3Tag: 'Hardware + Licencias',
    rev3Desc: 'Empoderando a la próxima generación de ingenieros con herramientas de seguridad IA accesibles y prácticas.',
    rev3Li1: 'Kits de VA sandbox a escala 1/10',
    rev3Li2: 'Currículo de IA/Robótica',
    rev3Li3: 'Servicios de configuración de laboratorio universitario',
    rev3Price: 'HK$ 100k',
  },
  footer: {
    heading: 'Estableciendo el estándar para la autonomía de confianza',
    sub: 'Buscamos activamente asociaciones estratégicas con OEM, organismos reguladores e inversores para escalar nuestra plataforma de validación a nivel global.',
    cta: 'Asóciese con nosotros',
    copyright: '© 2026 CityU HK - Departamento de Ciencias de la Computación. Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    publications: 'Publicaciones de investigación',
  },
};

const contentAr: AVPageContent = {
  hero: {
    titleLine1: 'منصة افتراضية-فيزيائية متكاملة لـ',
    titleLine2: 'اختبار السلامة متعدد النطاقات والتحقق من أمان المركبات الذاتية',
    badge: 'مشروع بحثي لمختبر FSM، CityU',
    intro1: 'يعاني الانتقال من المستوى 2 لأنظمة ADAS إلى المستوى 4 من القيادة الذاتية الكاملة من أزمة ثقة حادة. فرغم الأداء الاستثنائي لنماذج الذكاء الاصطناعي الحديثة في الظروف الاعتيادية، تبقى "صناديق سوداء" هشّة وقابلة للاختراق.',
    intro2: 'نبني أول منصة تحقق افتراضية-فيزيائية متكاملة في العالم. بتحويل عدم اليقين الرقمي إلى معايير سلامة حقيقية وموثّقة، نضمن قدرة الأنظمة الذاتية على الصمود أمام فوضى الطبيعة وخبث التهديدات السيبرانية.',
    cta: 'استكشف البنية المعمارية',
    dept: 'قسم علوم الحاسوب',
    org: 'City University of Hong Kong',
  },
  motivation: {
    heading: 'التهديدات المزدوجة لاستقلالية الذكاء الاصطناعي',
    sub: 'دقة 99.9 % في المحاكاة وهمٌ قاتل. الـ0.1 % المتبقية تمثّل الحد الفاصل بين رحلة آمنة وفشل كارثي. نُصنّف هذه العيوب القاتلة في مجالَين متمايزَين.',
    safetyTitle: 'السلامة: "الذيل الطويل" الخفي',
    safetyBadge: 'الحالات الحدية الطبيعية',
    safetyDesc: 'تُدرَّب المركبات ذاتية القيادة على ملايين الأميال من بيانات القيادة "الاعتيادية". غير أن العالم الحقيقي فوضوي؛ فالظروف الجوية القاسية والسلوك غير المتوقع للمشاة والمناطق الإنشائية المعقدة والشذوذات الإضاءية النادرة تُشكّل "ذيلاً طويلاً" من الحالات الحدية.',
    safetyLi1: 'تدهور أداء المستشعرات: الأمطار الغزيرة أو الضباب الذي يُعمي الليدار والكاميرات.',
    safetyLi2: 'الالتباس الدلالي: تفسير انعكاسات الضوء على الطرق المبللة كعوائق فيزيائية.',
    safetyLi3: 'العوامل الفوضوية: مسارات عشوائية لمشاة يخترقون الإشارات أو لسائقين غير منضبطين.',
    securityTitle: 'الأمان: الذكاء الاصطناعي "المُسلَّح"',
    securityBadge: 'الهجمات التعكيسية',
    securityDesc: 'بعيداً عن الفوضى الطبيعية، تُعدّ أنظمة إدراك الذكاء الاصطناعي عرضةً لتلاعب خبيث ومتعمد. إذ تستطيع الهجمات التعكيسية تعديل البيئة الفيزيائية بخفاء تام لإعماء خوارزميات صنع القرار في المركبة أو تضليلها كلياً.',
    securityLi1: 'تشبيح الكاميرا: رقعات تعكيسية تجعل إشارات التوقف غير مرئية للذكاء الاصطناعي.',
    securityLi2: 'انتحال الليدار: حقن نبضات ليزر مزيفة لإنشاء مركبات "وهمية".',
    securityLi3: 'تسميم البيانات: إفساد خط أنابيب التدريب لزرع ثغرات خفية.',
  },
  innovation: {
    heading: 'إطار الدرع الموحّد',
    sub: 'للتصدي للتهديدات الطبيعية والخبيثة على حدٍّ سواء، صمّمنا بنية معمارية شاملة توفر تحققاً متزامناً من السلامة والأمان عبر طيف متواصل، من المحاكاة البرمجية الصرف إلى النشر على المركبة الفيزيائية.',
    silTitle: 'SIL: قابلية توسع لا محدودة',
    silDesc: 'تُحاكَى ملايين الأميال طوال الليل. نختبر الخوارزميات في مواجهة حالات حدية اصطناعية مُولَّدة باستمرار ضمن بيئة برمجية صرف، مما يضمن تكرارات سريعة ومتانة أساسية.',
    hilTitle: 'HIL: واقعية الحوسبة',
    hilDesc: 'تُنشر الخوارزميات على وحدات تحكم المجال الفعلية للقيادة الذاتية (مثل NVIDIA Orin)، للتحقق من زمن استجابة النظام وخنق الحرارة والثغرات الخاصة بالعتاد تحت الضغط.',
    vilTitle: 'VIL: الحقيقة الفيزيائية',
    vilDesc: 'الحاجز الأخير: يقود البرنامج مركبة فيزيائية حقيقية على مضمار اختبار، مستجيباً لحقن الواقع المختلط (مشاة افتراضيون يُسقَطون في مستشعرات فيزيائية) لردم الهوة بين المحاكاة والواقع.',
  },
  capabilities: {
    heading: 'القدرات التقنية الأساسية',
    sub: 'هندسة السلامة والأمان عبر التحقق الافتراضي-الفيزيائي متعدد النطاقات.',
    feat1Badge: '01. توليد التوأم الرقمي',
    feat1Title: 'اكتشاف السيناريوهات بالذكاء الاصطناعي',
    feat1Desc: 'لا نعتمد على إنشاء السيناريوهات يدوياً؛ إذ تستخدم منصتنا ذكاءً اصطناعياً متقدماً لاكتشاف وتوليد أكثر حالات الاختبار حرجاً التي يُرجَّح أن تُسبب فشل النظام تلقائياً.',
    feat1Li1: 'توليد على مستوى المظهر: استخدام 3D Gaussian Splatting وNeRF لإعادة بناء هندسة تقاطعات عالية الواقعية والتعقيد وتأثيرات طقسية نادرة من بيانات حقيقية شحيحة.',
    feat1Li2: 'توليد على مستوى السلوك: توظيف التعلم المعزَّز (RL) لتدريب عوامل تعكيسية (سيارات أخرى، مشاة) تبحث بفاعلية عن ثغرات خوارزميات التخطيط في المركبة الأساسية.',
    feat2Badge: '02. نقل المحاكاة إلى الواقع',
    feat2Title: 'اختبار صندوق الرمل بالواقع المختلط',
    feat2Desc: 'قبل المجازفة بمركبات بالحجم الكامل، نتحقق من الخوارزميات في صندوق رمل فيزيائي بالواقع المختلط مُتحكَّم فيه بدقة عالية، لردم الهوة بين المحاكاة الصرف والاختبار الفيزيائي بالحجم الكامل.',
    feat2Li1: 'نشر مركبات روبوتية بمقياس 1/28 لاختبار الديناميكيات الفيزيائية وزمن الاستجابة.',
    feat2Li2: 'حقن المستشعرات: مزامنة صندوق الرمل الفيزيائي مع محاكٍ ذي حلقة مغلقة (كـCARLA)، بحيث تُحقن العوائق الافتراضية مباشرةً في تدفق بيانات مستشعرات الروبوت الفيزيائي في الوقت الحقيقي، مُجبِرةً إياه على الاستجابة لتهديدات فيزيائية غير موجودة.',
    feat3Badge: '03. التحقق الفيزيائي',
    feat3Title: 'نماذج أولية حضرية بالحجم الكامل',
    feat3Desc: 'لا يتوقف بحثنا عند جدران المختبر؛ إذ نمتلك نماذج أولية عالية الدقة من الجيلَين الأول والثاني بالحجم الكامل، مجهّزة بأطقم مستشعرات صناعية للتحقق في ظروف العالم الحقيقي.',
    feat3Li1: 'أطقم مستشعرات صناعية: مزوَّدة بليدارات 128 قناة وكاميرات سيارات 4K ورادارات موجات مليمترية، مطابقةً تماماً للعتاد المستخدم لدى كبرى شركات OEM.',
    feat3Li2: 'ميادين اختبار حضرية: إجراء اختبارات صارمة في بيئات حضرية معقدة وميادين اختبار مخصصة للتحقق من الخوارزميات الدفاعية في مواجهة الدعائم التعكيسية الفيزيائية (كإشارات المرور المزوّرة).',
  },
  impact: {
    heading: 'التأثير العالمي والتحالفات الصناعية',
    sub: 'يجمع مختبرنا التميز الأكاديمي بالتطبيق الصناعي، واضعاً مرجعيات عالمية لمعايير سلامة وأمان المركبات ذاتية القيادة.',
    stat1Title: 'المستوى الأعلى',
    stat1Sub: 'بطولات عالمية',
    stat1Desc: 'تحديات Argoverse و Waymo Open Dataset',
    stat2Title: '+15',
    stat2Sub: 'براءات اختراع أساسية ممنوحة',
    stat2Desc: 'حماية الملكية الفكرية في الولايات المتحدة والصين',
    stat3Title: '>20 مليون دولار',
    stat3Sub: 'تمويل بحثي',
    stat3Desc: 'تسريع البحث والتطوير والتسويق التجاري',
    supportedBy: 'التحقق التجريبي المشترك بدعم من',
  },
  business: {
    heading: 'التسويق التجاري واستراتيجية السوق',
    sub: 'يُتوقع أن يبلغ سوق اختبار والتحقق من المركبات ذاتية القيادة 25 مليار دولار عالمياً بحلول 2030. تفتح منصتنا هذه الحدود القائمة على الثقة في قطاعات متعددة عالية القيمة.',
    targetTitle: 'شرائح العملاء المستهدفة',
    seg1Title: 'الجهات التنظيمية الحكومية',
    seg1Desc: 'توفير معايير سلامة علمية وقابلة للقياس وأُطر اختبار موحّدة لترخيص المركبات ذاتية القيادة والامتثال التنظيمي وتخطيط بنية المدن الذكية.',
    seg2Title: 'مصنّعو المركبات وشركاء المستوى الأول',
    seg2Desc: 'تقليص دورات البحث والتطوير باستبدال الاختبارات الميدانية المكلفة بمحاكاة SIL/HIL عالية الدقة، تفادياً لعمليات السحب المكلفة بعد الإطلاق.',
    seg3Title: 'معاهد البحث ومنظومة STEM',
    seg3Desc: 'تسريع البحث الأكاديمي وتوفير أطقم صناديق رمل السلامة بالذكاء الاصطناعي للواقع المختلط بصورة تطبيقية للتعليم الجامعي والتدريب المهني.',
    chartTitle: 'التوزيع التقديري للإيرادات',
    chartSub: 'الأرقام بالمليون دولار هونغ كونغ (تقديري)',
    chartEnterprise: 'المؤسسات',
    chartEducation: 'التعليم',
    chartGovGrants: 'منح حكومية',
    streamsTitle: 'مصادر إيرادات متنوعة',
    rev1Title: 'حلول المؤسسات',
    rev1Tag: 'SaaS + رسوم NRE',
    rev1Desc: 'بنية تحتية اختبارية متكاملة لشركات OEM التي تطوّر أنظمة ذاتية من المستوى الثالث فأعلى.',
    rev1Li1: 'منصة المحاكاة (SaaS سنوي)',
    rev1Li2: 'منصات HIL/SIL جاهزة للتشغيل',
    rev1Li3: 'نمذجة مخصصة للحالات الحدية',
    rev1Price: 'HK$ 500k',
    rev2Title: 'التنظيم والاعتماد',
    rev2Tag: 'رسوم الخدمة',
    rev2Desc: 'تقارير مستقلة من طرف ثالث للتحقق من السلامة والاعتماد لأغراض الامتثال.',
    rev2Li1: 'تقارير التحقق من السلامة',
    rev2Li2: 'استشارات السياسات والمعايير',
    rev2Li3: 'الوصول إلى مجموعات البيانات المعيارية',
    rev2Price: 'HK$ 200k',
    rev3Title: 'تعليم STEM',
    rev3Tag: 'عتاد + ترخيص',
    rev3Desc: 'تمكين الجيل القادم من المهندسين بأدوات سلامة الذكاء الاصطناعي التطبيقية والمتاحة.',
    rev3Li1: 'أطقم المركبات الذاتية بصندوق الرمل بمقياس 1/10',
    rev3Li2: 'مناهج الذكاء الاصطناعي والروبوتيات',
    rev3Li3: 'خدمات إعداد مختبرات الجامعات',
    rev3Price: 'HK$ 100k',
  },
  footer: {
    heading: 'وضع المعيار للاستقلالية الموثوقة',
    sub: 'نسعى بفاعلية إلى شراكات استراتيجية مع شركات OEM والهيئات التنظيمية والمستثمرين لتوسيع نطاق منصة التحقق لدينا على المستوى العالمي.',
    cta: 'شاركنا في هذا المسعى',
    copyright: '© 2026 CityU HK - قسم علوم الحاسوب. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    publications: 'المنشورات البحثية',
  },
};

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
