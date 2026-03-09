import type { LocaleCode } from '@/lib/i18n/types';
import type { ProjectDetailUI } from '@/components/ProjectDetailPage';

export type RealtimeMapContent = {
  title: string;
  category: string;
  period: string;
  status: string;
  description: string[];
  ui: Partial<ProjectDetailUI>;
};

const en: RealtimeMapContent = {
  title: 'Real-time Map Construction and Utilization: An End-to-End Framework for Autonomous Driving',
  category: 'Autonomous Driving / Mapping',
  period: 'Jan 2025 – present',
  status: 'Active',
  description: [
    'In recent years, the convergence of advanced sensor technologies and machine learning algorithms has propelled autonomous driving (AD) closer to large-scale deployment, heralding a safer, more efficient, and accessible era of urban mobility. The architecture of AD, pivoting around critical modules such as perception, prediction, and planning, can have its efficacy significantly augmented with accurate map information. However, this brings forth two main challenges: 1) ensuring the availability of real-time accurate maps for AD modules, and 2) optimizing the utilization of map information across these modules.',
    'Concerning availability, map information can be sourced from offline maps provided by map providers or generated online by the perception task. While offline High-Definition (HD) maps offer detailed geometric and semantic insights, their generation and maintenance are expensive and labor-intensive. Conversely, online maps provide real-time solutions but may lack accuracy due to occlusions and perception limitations. The dynamic urban environments further challenge the sole reliance on either map type for achieving the desired accuracy in AD tasks.',
    'Regarding optimal map information usage, existing AD approaches often treat maps as auxiliary inputs across various modules, lacking a unified map-centric representation for different AD tasks. This fragmented approach leads to separated optimization of map information utilization for each AD task, potentially compromising the system-level driving performance.',
    'To address the two major challenges, we propose a map-centric framework, embodying an end-to-end approach from encoding offline map data to motion planning. Specifically, we tackle the first challenge by developing advanced machine learning algorithms for a sequence of tasks: 1) encoding the offline map into a graph representation, 2) merging this graph with real-time sensing inputs to generate a real-time scene graph, and 3) further utilizing both graphs to construct an accurate and real-time online map graph. For the second challenge, we propose to develop a unified map-centric graph representation for different AD tasks, ensuring consistent and coherent map information utilization across the perception, prediction, and planning modules. This unification fosters a holistic optimization of system-level driving performance, aiming to significantly enhance each module\'s accuracy, efficiency, and safety towards achieving safe, efficient, and rule-compliant autonomous vehicles (AVs).',
    'In conclusion, our proposal presents a robust framework to address fundamental challenges in AD technology. By fostering seamless interaction and real-time updates among the mapping, perception, prediction, and planning modules, we plan to enhance AVs\' accuracy, efficiency, and safety, accelerating the transition towards smart urban mobility and contributing to smart city initiatives.',
  ],
  ui: {
    backToProjects: 'Back to Projects',
    projectOverview: 'Project Overview',
    grantDetails: 'Grant Details',
    labelProjectNumber: 'Project Number',
    labelGrantType: 'Grant Type',
    labelStatus: 'Status',
    labelPeriod: 'Period',
    labelPI: 'Principal Investigator',
    labelCoI: 'Co-Investigator',
    labelDept: 'Dept. of Computer Science, CityUHK',
    viewOnScholars: 'View on CityUHK Scholars',
    fingerprintTitle: 'Research Fingerprint',
    fingerprintSub: 'Key topics covered by this project, weighted by relevance.',
    outputsTitle: 'Selected Research Outputs',
    outputsSub: (n) => `${n} publication${n > 1 ? 's' : ''} associated with this project.`,
    ctaTitle: 'Explore This Project',
    ctaBody: 'View the full project profile, all publications, and collaborator information on CityUHK Scholars.',
    ctaButton: 'View Full Profile on CityUHK Scholars',
  },
};

const zh: RealtimeMapContent = {
  title: '实时地图构建与利用：自动驾驶端到端框架',
  category: '自动驾驶 / 地图构建',
  period: '2025年1月至今',
  status: '进行中',
  description: [
    '近年来，先进传感器技术与机器学习算法的融合推动自动驾驶（AD）加速迈向大规模部署，开启了更安全、更高效、更普惠的城市出行新时代。自动驾驶架构围绕感知、预测与规划等核心模块展开，精准的地图信息可显著提升各模块的效能。然而，这也带来两大主要挑战：1) 确保自动驾驶模块实时获取精准地图；2) 优化地图信息在各模块间的利用方式。',
    '在地图可用性方面，地图信息既可来自地图服务商提供的离线地图，也可由感知任务在线生成。离线高精度（HD）地图虽能提供详细的几何与语义信息，但其生成与维护成本高昂且劳动密集；在线地图虽能提供实时解决方案，却可能因遮挡与感知局限而精度不足。动态变化的城市环境进一步加剧了单独依赖任一地图类型所带来的精度挑战。',
    '在地图信息利用方面，现有自动驾驶方案通常将地图作为各模块的辅助输入，缺乏面向不同自动驾驶任务的统一地图中心表示。这种碎片化方式导致各任务对地图信息的利用分别优化，可能损害系统级驾驶性能。',
    '为应对上述两大挑战，我们提出一种以地图为中心的框架，涵盖从离线地图数据编码到运动规划的端到端方法。具体而言，我们通过开发先进的机器学习算法解决第一项挑战，依次完成：1) 将离线地图编码为图表示；2) 将该图与实时传感输入融合以生成实时场景图；3) 进一步利用两类图构建精准的实时在线地图图。针对第二项挑战，我们提出开发面向不同自动驾驶任务的统一地图中心图表示，确保感知、预测与规划模块间地图信息利用的一致性与连贯性，以系统级整体优化为目标，大幅提升各模块的精度、效率与安全性，推动自动驾驶车辆实现安全、高效、合规行驶。',
    '综上，本项目提出的鲁棒框架旨在解决自动驾驶技术的根本性挑战。通过促进地图、感知、预测与规划模块间的无缝交互与实时更新，我们将提升自动驾驶车辆的精度、效率与安全性，加速向智慧城市出行转型，助力智慧城市建设。',
  ],
  ui: {
    backToProjects: '返回项目列表',
    projectOverview: '项目概述',
    grantDetails: '资助信息',
    labelProjectNumber: '项目编号',
    labelGrantType: '资助类型',
    labelStatus: '状态',
    labelPeriod: '周期',
    labelPI: '首席研究员',
    labelCoI: '共同研究员',
    labelDept: '计算机科学系，香港城市大学',
    viewOnScholars: '在 CityUHK Scholars 查看',
    fingerprintTitle: '研究指纹',
    fingerprintSub: '本项目涵盖的关键主题，按相关性加权显示。',
    outputsTitle: '精选研究成果',
    outputsSub: (n) => `本项目共关联 ${n} 篇论文。`,
    ctaTitle: '深入了解本项目',
    ctaBody: '在 CityUHK Scholars 上查看完整项目简介、所有论文及合作者信息。',
    ctaButton: '在 CityUHK Scholars 查看完整资料',
  },
};

const fr: RealtimeMapContent = {
  title: 'Construction et utilisation de cartes en temps réel : un cadre de bout en bout pour la conduite autonome',
  category: 'Conduite autonome / Cartographie',
  period: 'janv. 2025 – présent',
  status: 'Actif',
  description: [
    'Ces dernières années, la convergence des technologies de capteurs avancés et des algorithmes d\'apprentissage automatique a propulsé la conduite autonome (CA) vers un déploiement à grande échelle, annonçant une ère de mobilité urbaine plus sûre, plus efficace et plus accessible. L\'architecture de la CA, articulée autour de modules critiques tels que la perception, la prédiction et la planification, peut voir son efficacité considérablement augmentée grâce à des informations cartographiques précises. Cela soulève néanmoins deux défis majeurs : 1) garantir la disponibilité de cartes précises et en temps réel pour les modules de CA, et 2) optimiser l\'utilisation des informations cartographiques dans ces modules.',
    'Concernant la disponibilité, les informations cartographiques peuvent provenir de cartes hors ligne fournies par des prestataires ou être générées en ligne par la tâche de perception. Les cartes Haute-Définition (HD) hors ligne offrent des informations géométriques et sémantiques détaillées, mais leur génération et leur maintenance sont coûteuses et laborieuses. À l\'inverse, les cartes en ligne fournissent des solutions en temps réel mais peuvent manquer de précision en raison des occlusions et des limites de la perception. Les environnements urbains dynamiques remettent en question la dépendance exclusive à l\'un ou l\'autre type de carte.',
    'Concernant l\'utilisation optimale des informations cartographiques, les approches actuelles de CA traitent souvent les cartes comme des entrées auxiliaires dans divers modules, sans représentation unifiée centrée sur la carte pour différentes tâches. Cette approche fragmentée conduit à une optimisation séparée de l\'utilisation des informations cartographiques pour chaque tâche, compromettant potentiellement les performances de conduite au niveau système.',
    'Pour relever ces deux défis majeurs, nous proposons un cadre centré sur la carte, incarnant une approche de bout en bout depuis l\'encodage des données de carte hors ligne jusqu\'à la planification de mouvement. Nous développons des algorithmes d\'apprentissage automatique pour : 1) encoder la carte hors ligne en représentation graphique, 2) fusionner ce graphe avec les entrées de capteurs en temps réel pour générer un graphe de scène en temps réel, et 3) utiliser les deux graphes pour construire un graphe de carte en ligne précis et en temps réel. Pour le second défi, nous proposons une représentation graphique unifiée centrée sur la carte pour différentes tâches de CA, assurant une utilisation cohérente des informations cartographiques dans les modules de perception, prédiction et planification.',
    'En conclusion, notre proposition présente un cadre robuste pour relever les défis fondamentaux de la technologie de CA. En favorisant des interactions fluides et des mises à jour en temps réel entre les modules de cartographie, perception, prédiction et planification, nous visons à améliorer la précision, l\'efficacité et la sécurité des véhicules autonomes, accélérant la transition vers une mobilité urbaine intelligente.',
  ],
  ui: {
    backToProjects: 'Retour aux projets',
    projectOverview: 'Aperçu du projet',
    grantDetails: 'Détails du financement',
    labelProjectNumber: 'Numéro de projet',
    labelGrantType: 'Type de financement',
    labelStatus: 'Statut',
    labelPeriod: 'Période',
    labelPI: 'Investigateur principal',
    labelCoI: 'Co-investigateur',
    labelDept: 'Dép. d\'informatique, CityUHK',
    viewOnScholars: 'Voir sur CityUHK Scholars',
    fingerprintTitle: 'Empreinte de recherche',
    fingerprintSub: 'Sujets clés couverts par ce projet, pondérés par pertinence.',
    outputsTitle: 'Publications sélectionnées',
    outputsSub: (n) => `${n} publication${n > 1 ? 's' : ''} associée${n > 1 ? 's' : ''} à ce projet.`,
    ctaTitle: 'Explorer ce projet',
    ctaBody: 'Consultez le profil complet du projet, toutes les publications et les informations sur les collaborateurs sur CityUHK Scholars.',
    ctaButton: 'Voir le profil complet sur CityUHK Scholars',
  },
};

const ru: RealtimeMapContent = {
  title: 'Построение и использование карт в реальном времени: сквозная система для автономного вождения',
  category: 'Автономное вождение / Картография',
  period: 'янв. 2025 – н.в.',
  status: 'Активен',
  description: [
    'В последние годы конвергенция передовых сенсорных технологий и алгоритмов машинного обучения приближает автономное вождение к масштабному развёртыванию, открывая эпоху более безопасной, эффективной и доступной городской мобильности. Архитектура автономного вождения, опирающаяся на ключевые модули — восприятие, прогнозирование и планирование, — может значительно выиграть от точных картографических данных. Однако это ставит два главных вызова: 1) обеспечение доступности точных карт в реальном времени для модулей автономного вождения; 2) оптимизация использования картографических данных в этих модулях.',
    'Что касается доступности, картографическая информация может поступать из офлайн-карт поставщиков или генерироваться онлайн задачей восприятия. Офлайн-карты высокого разрешения обеспечивают детальную геометрическую и семантическую информацию, однако их создание и обслуживание дороги и трудоёмки. Онлайн-карты дают решения в реальном времени, но могут страдать от неточностей из-за окклюзий и ограничений восприятия. Динамичная городская среда осложняет полагание лишь на один тип карт.',
    'В части использования картографических данных существующие подходы к автономному вождению нередко рассматривают карты лишь как вспомогательные входные данные, не имея единого картоцентричного представления для разных задач. Такая фрагментация ведёт к раздельной оптимизации использования карт и может снижать системный уровень вождения.',
    'Для решения обоих вызовов мы предлагаем картоцентричную систему, охватывающую сквозной подход — от кодирования офлайн-карт до планирования движения. Алгоритмы машинного обучения последовательно: 1) кодируют офлайн-карту в граф; 2) объединяют граф с сенсорными данными реального времени для создания сцен-графа; 3) используют оба графа для построения точного онлайн-граф-карты. Для второго вызова предлагается единое картоцентричное представление для всех задач, обеспечивающее согласованное использование картографических данных в модулях восприятия, прогнозирования и планирования.',
    'В итоге предложенная система решает фундаментальные задачи технологии автономного вождения. Благодаря бесшовному взаимодействию и обновлениям в реальном времени между модулями картографии, восприятия, прогнозирования и планирования планируется повысить точность, эффективность и безопасность автономных транспортных средств, ускоряя переход к умной городской мобильности.',
  ],
  ui: {
    backToProjects: 'Назад к проектам',
    projectOverview: 'Обзор проекта',
    grantDetails: 'Данные гранта',
    labelProjectNumber: 'Номер проекта',
    labelGrantType: 'Тип гранта',
    labelStatus: 'Статус',
    labelPeriod: 'Период',
    labelPI: 'Руководитель исследования',
    labelCoI: 'Со-исследователь',
    labelDept: 'Департамент информатики, CityUHK',
    viewOnScholars: 'Смотреть на CityUHK Scholars',
    fingerprintTitle: 'Тематический профиль',
    fingerprintSub: 'Ключевые темы проекта, взвешенные по релевантности.',
    outputsTitle: 'Избранные публикации',
    outputsSub: (n) => `${n} публикаци${n === 1 ? 'я' : n < 5 ? 'и' : 'й'}, связанных с проектом.`,
    ctaTitle: 'Подробнее о проекте',
    ctaBody: 'Полный профиль проекта, все публикации и информация о сотрудниках доступны на CityUHK Scholars.',
    ctaButton: 'Полный профиль на CityUHK Scholars',
  },
};

const es: RealtimeMapContent = {
  title: 'Construcción y utilización de mapas en tiempo real: un marco de extremo a extremo para la conducción autónoma',
  category: 'Conducción autónoma / Cartografía',
  period: 'ene. 2025 – presente',
  status: 'Activo',
  description: [
    'En los últimos años, la convergencia de tecnologías avanzadas de sensores y algoritmos de aprendizaje automático ha impulsado la conducción autónoma (CA) hacia un despliegue a gran escala, anunciando una era de movilidad urbana más segura, eficiente y accesible. La arquitectura de CA, centrada en módulos críticos como percepción, predicción y planificación, puede ver su eficacia significativamente aumentada con información cartográfica precisa. Sin embargo, esto plantea dos desafíos principales: 1) garantizar la disponibilidad de mapas precisos en tiempo real para los módulos de CA, y 2) optimizar la utilización de la información cartográfica en dichos módulos.',
    'En cuanto a la disponibilidad, la información cartográfica puede provenir de mapas sin conexión de proveedores o generarse en línea por la tarea de percepción. Los mapas de Alta Definición (HD) sin conexión ofrecen información geométrica y semántica detallada, pero su generación y mantenimiento son costosos y laboriosos. Por el contrario, los mapas en línea proporcionan soluciones en tiempo real pero pueden carecer de precisión debido a oclusiones y limitaciones de percepción. Los entornos urbanos dinámicos desafían la dependencia exclusiva de cualquiera de los dos tipos de mapas.',
    'Respecto al uso óptimo de la información cartográfica, los enfoques actuales de CA suelen tratar los mapas como entradas auxiliares en varios módulos, sin una representación unificada centrada en el mapa para diferentes tareas. Este enfoque fragmentado lleva a una optimización separada del uso de la información cartográfica para cada tarea, comprometiendo potencialmente el rendimiento de conducción a nivel del sistema.',
    'Para abordar estos dos desafíos, proponemos un marco centrado en el mapa que abarca un enfoque de extremo a extremo desde la codificación de datos de mapas sin conexión hasta la planificación de movimientos. Desarrollamos algoritmos de aprendizaje automático para: 1) codificar el mapa sin conexión en una representación gráfica, 2) fusionar este grafo con entradas de sensores en tiempo real para generar un grafo de escena en tiempo real, y 3) utilizar ambos grafos para construir un grafo de mapa en línea preciso y en tiempo real. Para el segundo desafío, proponemos una representación gráfica unificada centrada en el mapa para diferentes tareas de CA, asegurando una utilización coherente de la información cartográfica en los módulos de percepción, predicción y planificación.',
    'En conclusión, nuestra propuesta presenta un marco robusto para abordar los desafíos fundamentales de la tecnología de CA. Al fomentar interacciones fluidas y actualizaciones en tiempo real entre los módulos de cartografía, percepción, predicción y planificación, planeamos mejorar la precisión, eficiencia y seguridad de los vehículos autónomos, acelerando la transición hacia una movilidad urbana inteligente.',
  ],
  ui: {
    backToProjects: 'Volver a proyectos',
    projectOverview: 'Descripción general',
    grantDetails: 'Detalles del financiamiento',
    labelProjectNumber: 'Número de proyecto',
    labelGrantType: 'Tipo de financiamiento',
    labelStatus: 'Estado',
    labelPeriod: 'Período',
    labelPI: 'Investigador principal',
    labelCoI: 'Co-investigador',
    labelDept: 'Dep. de Ciencias de la Computación, CityUHK',
    viewOnScholars: 'Ver en CityUHK Scholars',
    fingerprintTitle: 'Huella de investigación',
    fingerprintSub: 'Temas clave del proyecto, ponderados por relevancia.',
    outputsTitle: 'Publicaciones seleccionadas',
    outputsSub: (n) => `${n} publicación${n > 1 ? 'es' : ''} asociada${n > 1 ? 's' : ''} a este proyecto.`,
    ctaTitle: 'Explorar este proyecto',
    ctaBody: 'Vea el perfil completo del proyecto, todas las publicaciones e información de colaboradores en CityUHK Scholars.',
    ctaButton: 'Ver perfil completo en CityUHK Scholars',
  },
};

const ar: RealtimeMapContent = {
  title: 'بناء الخرائط واستخدامها في الوقت الحقيقي: إطار شامل من البداية إلى النهاية للقيادة الذاتية',
  category: 'القيادة الذاتية / بناء الخرائط',
  period: 'يناير 2025 – الآن',
  status: 'نشط',
  description: [
    'في السنوات الأخيرة، دفعت التقنيات المتقدمة للاستشعار وخوارزميات التعلم الآلي القيادةَ الذاتية نحو نشر واسع النطاق، مبشّرةً بعصر تنقل حضري أكثر أماناً وكفاءةً وإتاحةً. تعتمد بنية القيادة الذاتية على وحدات محورية كالإدراك والتنبؤ والتخطيط، ويمكن لمعلومات الخرائط الدقيقة أن تُعزّز كفاءة هذه الوحدات بشكل ملحوظ. غير أن ذلك يطرح تحديَّين رئيسيَّين: 1) ضمان توافر خرائط دقيقة في الوقت الحقيقي لوحدات القيادة الذاتية، و2) تحسين استخدام معلومات الخرائط عبر هذه الوحدات.',
    'فيما يخص التوافر، يمكن الحصول على معلومات الخرائط من خرائط غير متصلة يوفرها مزودو الخرائط، أو توليدها عبر الإنترنت من خلال مهمة الإدراك. توفر الخرائط عالية الدقة (HD) غير المتصلة معلومات هندسية ودلالية تفصيلية، لكن إنتاجها وصيانتها مكلفان وكثيفا العمل. في المقابل، توفر الخرائط الآنية حلولاً في الوقت الفعلي لكنها قد تفتقر إلى الدقة بسبب الانسدادات وقيود الإدراك. كما تُضاف صعوبة الاعتماد الكلي على نوع واحد من الخرائط في ظل البيئات الحضرية الديناميكية.',
    'فيما يتعلق بالاستخدام الأمثل لمعلومات الخرائط، تتعامل المقاربات الحالية للقيادة الذاتية مع الخرائط كمدخلات مساعدة في وحدات متفرقة، مفتقرةً إلى تمثيل موحّد يمحور الخريطة في صلب المهام المختلفة، مما يؤدي إلى تحسين منفصل لكل مهمة وقد يُضرّ بأداء القيادة على مستوى النظام.',
    'لمعالجة هذين التحديَّين، نقترح إطاراً محورياً للخريطة يجسّد نهجاً شاملاً من ترميز بيانات الخرائط غير المتصلة وصولاً إلى تخطيط الحركة. يشمل ذلك: 1) ترميز الخريطة غير المتصلة في تمثيل بياني، 2) دمج هذا البيان مع مدخلات الاستشعار الآنية لتوليد بيان مشهد في الوقت الحقيقي، 3) استخدام كلا البيانَين لبناء بيان خريطة آني دقيق. وللتحدي الثاني، نقترح تمثيلاً بيانياً موحداً يُشكّل الخريطة محوراً لجميع المهام، مما يضمن تناسقاً في استخدام معلومات الخرائط عبر وحدات الإدراك والتنبؤ والتخطيط.',
    'خلاصةً، يقدم إطارنا المقترح منظومةً متكاملةً لمعالجة التحديات الجوهرية في تقنية القيادة الذاتية، من خلال تعزيز التفاعل السلس والتحديث الآني بين وحدات الخرائط والإدراك والتنبؤ والتخطيط، سعياً لتحقيق تنقل حضري ذكي وآمن وفعّال.',
  ],
  ui: {
    backToProjects: 'العودة إلى المشاريع',
    projectOverview: 'نظرة عامة على المشروع',
    grantDetails: 'تفاصيل المنحة',
    labelProjectNumber: 'رقم المشروع',
    labelGrantType: 'نوع المنحة',
    labelStatus: 'الحالة',
    labelPeriod: 'الفترة',
    labelPI: 'الباحث الرئيسي',
    labelCoI: 'الباحث المشارك',
    labelDept: 'قسم علوم الحاسوب، CityUHK',
    viewOnScholars: 'عرض على CityUHK Scholars',
    fingerprintTitle: 'البصمة البحثية',
    fingerprintSub: 'الموضوعات الرئيسية التي يغطيها هذا المشروع، مرجَّحةً حسب الأهمية.',
    outputsTitle: 'مخرجات بحثية مختارة',
    outputsSub: (n) => `${n} منشور${n > 1 ? 'ات' : ''} مرتبطة بهذا المشروع.`,
    ctaTitle: 'استكشف هذا المشروع',
    ctaBody: 'اطلع على الملف الكامل للمشروع وجميع المنشورات ومعلومات المتعاونين على CityUHK Scholars.',
    ctaButton: 'عرض الملف الكامل على CityUHK Scholars',
  },
};

export function getRealtimeMapContent(locale: LocaleCode): RealtimeMapContent {
  switch (locale) {
    case 'zh': return zh;
    case 'fr': return fr;
    case 'ru': return ru;
    case 'es': return es;
    case 'ar': return ar;
    default:   return en;
  }
}
