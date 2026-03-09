import type { LocaleCode } from '@/lib/i18n/types';
import type { ProjectDetailUI } from '@/components/ProjectDetailPage';

export type RemoteDrivingContent = {
  title: string;
  category: string;
  period: string;
  status: string;
  description: string[];
  ui: Partial<ProjectDetailUI>;
};

const en: RemoteDrivingContent = {
  title: 'A Multi-Level Remote Driving Framework for Autonomous Vehicles',
  category: 'Autonomous Driving / Teleoperation',
  period: 'Jan 2026 – present',
  status: 'Active',
  description: [
    'Autonomous driving is revolutionizing the future of transportation and has garnered significant attention from sectors beyond academia, including industry and government. Despite substantial progress, there remains a long way to go before autonomous vehicles can operate independently on open roads. According to the 2024 edition of the Code of Practice issued by the Transport Department of Hong Kong, each autonomous vehicle must be equipped with a remote driving system that allows a remote backup operator to take control via a wireless network when the vehicle encounters complex or unforeseen scenarios. Existing solutions for remote driving of autonomous vehicles are sparse and basic, facing several challenges and flaws. First, the vehicle streams videos of its surroundings to the operator, but these videos are often low-definition or stutter due to limited network bandwidth. Second, there is network latency between when the vehicle captures and sends videos to the operator and when it receives the control commands from the operator. Third, remote driving is more demanding than traditional in-vehicle driving, which can quickly lead to operator fatigue. Each of these issues can directly contribute to traffic accidents during remote driving.',
    'In this project, we propose the first remote driving framework that employs a three-level strategy, with each level addressing one of the aforementioned flaws to significantly enhance remote driving safety. Level 1 optimizes bandwidth allocation for video streaming, improving video quality. We will develop dynamic mechanisms that allocate higher bandwidth during challenging driving scenarios or when capturing important content. Additionally, we will design adaptive bitrate streaming to determine the optimal bitrate for each video. Level 2 compensates for network delay, enhancing operational accuracy. We will predict the future positions of nearby obstacles, enabling the operator to issue commands in advance. Besides, a buffering mechanism will be implemented to ensure commands are executed on time and at a constant rate, despite network fluctuations. Level 3 mitigates the operator\'s workload. We will provide the operator with recommended trajectories and actions, allowing them to follow suggestions rather than always making decisions. Furthermore, we will develop methods to generate explanations for the rationale behind each recommendation, ensuring effective oversight of the vehicle.',
    'Our solutions will be tested not only in the lab but also in a real autonomous vehicle operating at the Foxconn Campus (Longhua, Shenzhen), addressing potential gaps between laboratory and real-world settings, thereby enhancing the impact of our research.',
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

const zh: RemoteDrivingContent = {
  title: '自动驾驶车辆多级远程驾驶框架',
  category: '自动驾驶 / 远程操控',
  period: '2026年1月至今',
  status: '进行中',
  description: [
    '自动驾驶正在革新交通运输的未来，已吸引学术界以外的产业界与政府的广泛关注。尽管已取得重大进展，在开放道路上实现完全自主驾驶仍任重道远。根据香港运输署2024年发布的《实务守则》，每辆自动驾驶车辆须配备远程驾驶系统，使远程备用驾驶员能在车辆遭遇复杂或意外情况时通过无线网络接管控制权。现有的自动驾驶车辆远程驾驶方案稀少且基础薄弱，面临多项挑战与缺陷：其一，车辆向驾驶员流式传输周围环境视频，但受网络带宽限制，视频画质往往较低或出现卡顿；其二，车辆捕捉并发送视频至驾驶员以及接收驾驶员控制指令之间存在网络延迟；其三，远程驾驶较传统车内驾驶更为复杂，极易导致驾驶员疲劳。上述任一问题都可能直接引发远程驾驶过程中的交通事故。',
    '本项目提出首个采用三级策略的远程驾驶框架，每一级分别针对上述缺陷之一，大幅提升远程驾驶安全性。第一级优化视频流带宽分配，改善视频质量：我们将开发动态机制，在驾驶难度较高的场景或捕获重要内容时分配更高带宽；同时设计自适应码率流，为每段视频确定最优码率。第二级补偿网络延迟，提升操控精度：我们将预测周边障碍物的未来位置，使驾驶员能够提前发出指令；此外，通过实现缓冲机制，确保指令在网络波动时仍能按时且匀速执行。第三级减轻驾驶员工作负荷：我们将向驾驶员提供推荐轨迹与操作建议，使其能够参考建议而非始终自主决策；并开发生成每项推荐背后原因说明的方法，确保驾驶员对车辆实施有效监督。',
    '我们的方案不仅在实验室中验证，还将在深圳龙华富士康园区运营的真实自动驾驶车辆上进行测试，以弥合实验室与真实场景之间的差距，从而提升研究成果的实际影响力。',
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

const fr: RemoteDrivingContent = {
  title: 'Un cadre de conduite à distance multi-niveaux pour les véhicules autonomes',
  category: 'Conduite autonome / Téléopération',
  period: 'janv. 2026 – présent',
  status: 'Actif',
  description: [
    'La conduite autonome révolutionne l\'avenir des transports et a attiré une attention considérable au-delà de l\'académie, incluant l\'industrie et les gouvernements. Malgré des progrès substantiels, il reste encore beaucoup à accomplir avant que les véhicules autonomes puissent circuler indépendamment sur routes ouvertes. Selon l\'édition 2024 du Code de pratique publié par le Département des transports de Hong Kong, chaque véhicule autonome doit être équipé d\'un système de conduite à distance permettant à un opérateur de secours distant de prendre le contrôle via un réseau sans fil lorsque le véhicule rencontre des scénarios complexes ou imprévus. Les solutions existantes sont rares et basiques, confrontées à plusieurs défis. Premièrement, le véhicule diffuse des vidéos de son environnement à l\'opérateur, mais ces vidéos sont souvent en basse définition ou saccadées en raison d\'une bande passante limitée. Deuxièmement, il existe une latence réseau entre la capture des vidéos et la réception des commandes de contrôle. Troisièmement, la conduite à distance est plus exigeante que la conduite traditionnelle, pouvant rapidement entraîner la fatigue de l\'opérateur.',
    'Dans ce projet, nous proposons le premier cadre de conduite à distance utilisant une stratégie à trois niveaux, chaque niveau adressant l\'un des défauts susmentionnés. Le Niveau 1 optimise l\'allocation de bande passante pour la diffusion vidéo, améliorant la qualité vidéo. Nous développerons des mécanismes dynamiques allouant plus de bande passante lors de scénarios de conduite difficiles, et concevrons un débit binaire adaptatif pour déterminer le débit optimal pour chaque vidéo. Le Niveau 2 compense le délai réseau, améliorant la précision opérationnelle. Nous prédirons les positions futures des obstacles proches, permettant à l\'opérateur d\'émettre des commandes à l\'avance, avec un mécanisme de mise en tampon assurant l\'exécution des commandes en temps voulu. Le Niveau 3 atténue la charge de travail de l\'opérateur. Nous fournirons des trajectoires et actions recommandées, et développerons des méthodes pour générer des explications sur la justification de chaque recommandation.',
    'Nos solutions seront testées non seulement en laboratoire, mais aussi sur un vrai véhicule autonome opérant au Campus Foxconn (Longhua, Shenzhen), comblant les écarts potentiels entre les paramètres de laboratoire et réels.',
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

const ru: RemoteDrivingContent = {
  title: 'Многоуровневая система дистанционного управления автономными транспортными средствами',
  category: 'Автономное вождение / Дистанционное управление',
  period: 'янв. 2026 – н.в.',
  status: 'Активен',
  description: [
    'Автономное вождение революционизирует будущее транспорта и привлекает значительное внимание не только академического сообщества, но и промышленности и правительств. Несмотря на существенный прогресс, до полноценной самостоятельной езды автономных транспортных средств на открытых дорогах ещё далеко. Согласно Кодексу практики Транспортного департамента Гонконга 2024 года, каждое автономное ТС обязано быть оснащено системой дистанционного управления, позволяющей оператору резервного управления взять контроль через беспроводную сеть при возникновении сложных или непредвиденных ситуаций. Существующие решения немногочисленны и примитивны: видеопоток с низким качеством из-за ограниченной пропускной способности, сетевые задержки между получением видео и передачей команд, а также высокая когнитивная нагрузка на оператора — каждый из этих факторов может напрямую привести к дорожным происшествиям.',
    'В данном проекте предлагается первая система дистанционного управления с трёхуровневой стратегией, где каждый уровень устраняет один из указанных недостатков. Уровень 1 оптимизирует распределение пропускной способности для видеостриминга: динамические механизмы выделяют больший канал в сложных сценариях, адаптивный битрейт выбирает оптимальное качество для каждого видео. Уровень 2 компенсирует задержку: система прогнозирует будущие позиции препятствий, позволяя оператору заблаговременно отдавать команды; механизм буферизации обеспечивает своевременное и равномерное исполнение команд. Уровень 3 снижает нагрузку на оператора: предоставляются рекомендуемые траектории и пояснения к ним, что позволяет одному оператору контролировать несколько ТС без перегрузки.',
    'Решения будут протестированы как в лаборатории, так и на реальном автономном транспортном средстве на заводе Foxconn в Лунхуа (Шэньчжэнь), что позволит устранить разрыв между лабораторными и реальными условиями.',
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

const es: RemoteDrivingContent = {
  title: 'Un marco de conducción remota multinivel para vehículos autónomos',
  category: 'Conducción autónoma / Teleoperación',
  period: 'ene. 2026 – presente',
  status: 'Activo',
  description: [
    'La conducción autónoma está revolucionando el futuro del transporte y ha captado atención significativa más allá de la academia, incluyendo la industria y el gobierno. A pesar del progreso sustancial, queda un largo camino antes de que los vehículos autónomos puedan operar independientemente en carreteras abiertas. Según la edición 2024 del Código de Práctica del Departamento de Transporte de Hong Kong, cada vehículo autónomo debe estar equipado con un sistema de conducción remota que permita a un operador de respaldo tomar el control a través de una red inalámbrica cuando el vehículo encuentre escenarios complejos o imprevistos. Las soluciones existentes son escasas y básicas, con varios desafíos: los videos son frecuentemente de baja definición o con interrupciones debido al ancho de banda limitado; existe latencia de red entre la captura del video y la recepción de comandos; y la conducción remota es más exigente que la tradicional, conduciendo rápidamente a fatiga del operador.',
    'En este proyecto, proponemos el primer marco de conducción remota que emplea una estrategia de tres niveles, abordando cada uno de los defectos mencionados. El Nivel 1 optimiza la asignación de ancho de banda para la transmisión de video, mejorando la calidad. Desarrollaremos mecanismos dinámicos que asignen mayor ancho de banda durante escenarios difíciles, y diseñaremos transmisión de tasa de bits adaptativa. El Nivel 2 compensa el retardo de red, mejorando la precisión operacional. Predeciremos posiciones futuras de obstáculos cercanos para que el operador emita comandos con anticipación; un mecanismo de búfer asegurará ejecución oportuna. El Nivel 3 mitiga la carga de trabajo del operador: proporcionaremos trayectorias y acciones recomendadas, y desarrollaremos métodos para generar explicaciones de la lógica de cada recomendación.',
    'Nuestras soluciones serán probadas no solo en el laboratorio sino también en un vehículo autónomo real operando en el Campus Foxconn (Longhua, Shenzhen), abordando las brechas potenciales entre entornos de laboratorio y del mundo real.',
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

const ar: RemoteDrivingContent = {
  title: 'إطار قيادة عن بُعد متعدد المستويات للمركبات ذاتية القيادة',
  category: 'القيادة الذاتية / التشغيل عن بُعد',
  period: 'يناير 2026 – الآن',
  status: 'نشط',
  description: [
    'تُحدث القيادة الذاتية ثورةً في مستقبل النقل، وقد استقطبت اهتماماً واسعاً يتجاوز الأوساط الأكاديمية ليشمل الصناعة والحكومات. ورغم التقدم الكبير المُحرَز، لا يزال الطريق طويلاً قبل أن تتمكن المركبات ذاتية القيادة من السير باستقلالية تامة على الطرق العامة. وفقاً لمدونة الممارسات الصادرة عن إدارة النقل في هونغ كونغ عام 2024، يجب تزويد كل مركبة ذاتية القيادة بنظام قيادة عن بُعد يُمكّن مشغّلاً احتياطياً من الاستيلاء على التحكم عبر شبكة لاسلكية حين تواجه المركبة سيناريوهات معقدة أو غير متوقعة. الحلول القائمة في هذا المجال شحيحة وأولية، وتعاني عدة إشكاليات: جودة الفيديو المنخفضة بسبب محدودية النطاق الترددي، والتأخير الشبكي بين التقاط الفيديو وتلقّي أوامر التحكم، وارتفاع الجهد المعرفي للمشغّل مقارنةً بالقيادة التقليدية مما يُفضي سريعاً إلى الإرهاق — وكل ذلك قد يُسهم مباشرةً في وقوع حوادث مرورية.',
    'يقترح هذا المشروع أول إطار للقيادة عن بُعد يعتمد استراتيجية ثلاثية المستويات، يعالج كل مستوى أحد العيوب المذكورة. المستوى الأول: يُحسّن تخصيص النطاق الترددي لبث الفيديو عبر آليات ديناميكية تُعطي الأولوية للمشاهد الصعبة، وتقنية بث معدل بيانات تكيفية تُحدد أمثل جودة لكل مقطع. المستوى الثاني: يعوّض تأخير الشبكة بالتنبؤ بالمواضع المستقبلية للعوائق القريبة ليُصدر المشغّل أوامره مسبقاً، مع آلية تخزين مؤقت تضمن تنفيذ الأوامر في وقتها وبمعدل ثابت. المستوى الثالث: يُخفف عبء المشغّل بتزويده بمسارات وإجراءات موصى بها مع تفسيرات للمنطق الكامن وراء كل توصية.',
    'ستُختبر الحلول المقترحة في المختبر وعلى مركبة ذاتية القيادة فعلية في مجمع فوكسكون (لونغهوا، شنتشن)، لسدّ الفجوات المحتملة بين البيئتين المعملية والواقعية.',
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

export function getRemoteDrivingContent(locale: LocaleCode): RemoteDrivingContent {
  switch (locale) {
    case 'zh': return zh;
    case 'fr': return fr;
    case 'ru': return ru;
    case 'es': return es;
    case 'ar': return ar;
    default:   return en;
  }
}
