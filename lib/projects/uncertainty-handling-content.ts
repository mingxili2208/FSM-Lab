import type { LocaleCode } from '@/lib/i18n/types';
import type { ProjectDetailUI } from '@/components/ProjectDetailPage';

export type UncertaintyHandlingContent = {
  title: string;
  category: string;
  period: string;
  status: string;
  description: string[];
  ui: Partial<ProjectDetailUI>;
};

const en: UncertaintyHandlingContent = {
  title: 'Modelling and Handling Uncertainties in Autonomous Driving Systems',
  category: 'Autonomous Driving / Safety',
  period: 'Jan 2023 – present',
  status: 'Active',
  description: [
    'The cornerstone of an autonomous vehicle is driving safety, which is jointly determined by perception, prediction, motion planning, and control in an autonomous driving system. The performance of the above modules is highly subject to various uncertainties caused by adverse weather or imperfect deep machine learning algorithms. Moreover, the impact of uncertainties may propagate from an upstream task to its downstream tasks. In the literature, uncertainties are modelled separately in different tasks, which cannot capture uncertainties coherently, leading to either over-optimistic or over-conservative driving decisions.',
    'This project tackles the above critical problem by developing a unified framework to handle uncertainties in an end-to-end manner. In particular, uncertainties from perception and prediction will be quantified and represented in a unified format as a probabilistic occupancy map. To smoothly integrate existing motion planning algorithms into our framework, we will extend existing motion planning algorithms into their robust versions. In particular, for mathematical-based motion planning, we will derive probabilistic constraints from the probabilistic occupancy map so that traditional optimization approaches can handle uncertainties by planning the optimal trajectory satisfying the probabilistic constraints. For learning-based motion planning, we will derive potential collision probability from the probabilistic occupancy map and add it into the loss function of learning-based motion planning.',
    'In addition, to achieve a good balance between robustness and other performance metrics, we enable the motion planning task to output a safe driving corridor so that the control task can find the optimal commands to constitute the running trajectory bounded by the given safe driving corridor. To evaluate the robustness of an autonomous driving system as a whole as well as the robustness of individual tasks, we plan to develop a benchmark suite consisting of typical traffic scenarios in different weather conditions, feasible alternative trajectories, and safety metrics.',
    'In summary, the project will provide (1) a unified representation for different types of uncertainties which can be used across the pipeline of an autonomous driving system, (2) a new interface between upstream tasks and downstream tasks to inherit uncertainty consideration, (3) a generic approach to incorporate uncertainty awareness into existing motion planning and control algorithms, and (4) a benchmark suite tailored for robustness evaluation. This project will improve the robustness of autonomous driving systems and relieve the safety concern of the public towards autonomous vehicles.',
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

const zh: UncertaintyHandlingContent = {
  title: '自动驾驶系统中不确定性的建模与处理',
  category: '自动驾驶 / 安全性',
  period: '2023年1月至今',
  status: '进行中',
  description: [
    '自动驾驶车辆的核心是驾驶安全，其由自动驾驶系统中的感知、预测、运动规划与控制共同决定。上述模块的性能高度依赖于各种不确定性因素，这些不确定性可能源于恶劣天气或深度机器学习算法的缺陷。此外，不确定性的影响可能从上游任务传播至下游任务。现有文献中，不确定性在各任务中被分别建模，无法连贯地捕捉不确定性，导致驾驶决策要么过于乐观，要么过于保守。',
    '本项目通过开发统一框架，以端到端方式处理上述关键问题中的不确定性。具体而言，来自感知与预测的不确定性将被量化并以统一格式表示为概率占用图。为将现有运动规划算法顺畅集成到框架中，我们将把现有算法扩展为其鲁棒版本：对于基于数学的运动规划，我们将从概率占用图中推导出概率约束，使传统优化方法能够通过规划满足概率约束的最优轨迹来处理不确定性；对于基于学习的运动规划，我们将从概率占用图中推导出潜在碰撞概率，并将其加入学习型运动规划的损失函数中。',
    '此外，为在鲁棒性与其他性能指标之间取得良好平衡，我们使运动规划任务能够输出安全驾驶走廊，从而让控制任务在给定安全走廊边界内找到最优控制指令构成运行轨迹。为评估自动驾驶系统整体及各任务的鲁棒性，我们计划开发包含不同天气条件下典型交通场景、可行替代轨迹及安全指标的基准测试套件。',
    '综上，本项目将提供：(1) 可跨自动驾驶系统流水线使用的不同类型不确定性统一表示；(2) 上游任务与下游任务间用于传递不确定性考量的新接口；(3) 将不确定性感知融入现有运动规划与控制算法的通用方法；(4) 专为鲁棒性评估定制的基准测试套件。本项目将提升自动驾驶系统的鲁棒性，缓解公众对自动驾驶车辆的安全顾虑。',
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

const fr: UncertaintyHandlingContent = {
  title: 'Modélisation et gestion des incertitudes dans les systèmes de conduite autonome',
  category: 'Conduite autonome / Sécurité',
  period: 'janv. 2023 – présent',
  status: 'Actif',
  description: [
    'La pierre angulaire d\'un véhicule autonome est la sécurité de conduite, déterminée conjointement par la perception, la prédiction, la planification de mouvement et le contrôle. Les performances de ces modules sont soumises à diverses incertitudes causées par des conditions météorologiques défavorables ou des algorithmes d\'apprentissage profond imparfaits. De plus, l\'impact des incertitudes peut se propager des tâches en amont vers les tâches en aval. Dans la littérature, les incertitudes sont modélisées séparément dans différentes tâches, ce qui ne permet pas de les capturer de manière cohérente, conduisant à des décisions de conduite soit trop optimistes, soit trop conservatrices.',
    'Ce projet aborde ce problème en développant un cadre unifié pour gérer les incertitudes de bout en bout. Les incertitudes de perception et de prédiction seront quantifiées et représentées dans un format unifié sous forme de carte d\'occupation probabiliste. Pour intégrer les algorithmes existants, nous les étendrons vers des versions robustes. Pour la planification mathématique, nous dériverons des contraintes probabilistes de la carte d\'occupation. Pour la planification basée sur l\'apprentissage, nous dériverons une probabilité de collision potentielle et l\'ajouterons dans la fonction de perte.',
    'De plus, pour équilibrer robustesse et autres métriques de performance, nous permettrons à la planification de mouvement de produire un couloir de conduite sûr, permettant au contrôle de trouver les commandes optimales. Pour évaluer la robustesse, nous développerons une suite de référence comprenant des scénarios de trafic typiques dans différentes conditions météorologiques, des trajectoires alternatives réalisables et des métriques de sécurité.',
    'En résumé, le projet fournira : (1) une représentation unifiée pour différents types d\'incertitudes utilisable dans tout le pipeline, (2) une nouvelle interface entre tâches amont et aval, (3) une approche générique pour incorporer la conscience de l\'incertitude dans les algorithmes existants, et (4) une suite de référence pour l\'évaluation de la robustesse. Ce projet améliorera la robustesse des systèmes de conduite autonome.',
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

const ru: UncertaintyHandlingContent = {
  title: 'Моделирование и обработка неопределённостей в системах автономного вождения',
  category: 'Автономное вождение / Безопасность',
  period: 'янв. 2023 – н.в.',
  status: 'Активен',
  description: [
    'Краеугольным камнем автономного транспортного средства является безопасность вождения, которая совместно определяется восприятием, прогнозированием, планированием движения и управлением. Производительность этих модулей в значительной мере зависит от различных неопределённостей, обусловленных неблагоприятными погодными условиями или несовершенством алгоритмов глубокого обучения. Кроме того, влияние неопределённостей может распространяться от вышестоящих задач к нижестоящим. В литературе неопределённости моделируются отдельно в разных задачах, что не позволяет фиксировать их согласованно и ведёт к чрезмерно оптимистичным или чрезмерно консервативным решениям.',
    'Проект решает эту проблему путём создания единой системы сквозной обработки неопределённостей. Неопределённости восприятия и прогнозирования будут квантифицированы и представлены в едином формате вероятностной карты занятости. Для интеграции существующих алгоритмов планирования они будут расширены до их робастных версий: для математического планирования из карты занятости выводятся вероятностные ограничения; для обучаемого планирования потенциальная вероятность коллизии добавляется в функцию потерь.',
    'Для баланса между робастностью и другими метриками планирование движения будет выводить безопасный коридор, в рамках которого управление ищет оптимальные команды. Для оценки робастности планируется разработать эталонный набор, включающий типичные сценарии в разных погодных условиях, допустимые альтернативные траектории и метрики безопасности.',
    'В итоге проект предоставит: (1) единое представление неопределённостей для всего конвейера; (2) новый интерфейс передачи учёта неопределённостей между задачами; (3) универсальный подход к добавлению осведомлённости о неопределённостях в существующие алгоритмы; (4) эталонный набор для оценки робастности. Проект повысит надёжность систем автономного вождения и снимет опасения общества.',
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

const es: UncertaintyHandlingContent = {
  title: 'Modelado y manejo de incertidumbres en sistemas de conducción autónoma',
  category: 'Conducción autónoma / Seguridad',
  period: 'ene. 2023 – presente',
  status: 'Activo',
  description: [
    'La piedra angular de un vehículo autónomo es la seguridad de conducción, determinada conjuntamente por percepción, predicción, planificación de movimiento y control. El rendimiento de estos módulos está sujeto a diversas incertidumbres causadas por condiciones meteorológicas adversas o algoritmos de aprendizaje profundo imperfectos. Además, el impacto de las incertidumbres puede propagarse de tareas upstream a downstream. En la literatura, las incertidumbres se modelan separadamente en diferentes tareas, sin capturarlas coherentemente, conduciendo a decisiones de conducción excesivamente optimistas o conservadoras.',
    'Este proyecto aborda el problema desarrollando un marco unificado para manejar incertidumbres de extremo a extremo. Las incertidumbres de percepción y predicción serán cuantificadas y representadas en un formato unificado como mapa de ocupación probabilístico. Para integrar algoritmos existentes, los extenderemos a versiones robustas: para planificación matemática, derivaremos restricciones probabilísticas del mapa de ocupación; para planificación basada en aprendizaje, derivaremos probabilidad potencial de colisión y la añadiremos a la función de pérdida.',
    'Además, para equilibrar robustez con otras métricas, habilitaremos la planificación de movimiento para producir un corredor de conducción seguro, permitiendo al control encontrar comandos óptimos dentro de dicho corredor. Para evaluar la robustez, desarrollaremos una suite de benchmarking con escenarios típicos en diferentes condiciones meteorológicas, trayectorias alternativas factibles y métricas de seguridad.',
    'En resumen, el proyecto proporcionará: (1) representación unificada para diferentes tipos de incertidumbres usable en todo el pipeline, (2) nueva interfaz entre tareas upstream y downstream, (3) enfoque genérico para incorporar conciencia de incertidumbre en algoritmos existentes, y (4) suite de benchmarking para evaluación de robustez. Este proyecto mejorará la robustez de los sistemas de conducción autónoma y aliviará las preocupaciones de seguridad del público.',
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

const ar: UncertaintyHandlingContent = {
  title: 'نمذجة عدم اليقين ومعالجته في أنظمة القيادة الذاتية',
  category: 'القيادة الذاتية / السلامة',
  period: 'يناير 2023 – الآن',
  status: 'نشط',
  description: [
    'يرتكز جوهر المركبة ذاتية القيادة على سلامة القيادة، التي تتحدد مشتركةً عبر وحدات الإدراك والتنبؤ وتخطيط الحركة والتحكم في نظام القيادة الذاتية. يتأثر أداء هذه الوحدات تأثراً بالغاً بأنواع شتى من عدم اليقين الناجم عن الأحوال الجوية السيئة أو قصور خوارزميات التعلم العميق. فضلاً عن ذلك، قد يتفشى تأثير عدم اليقين من المهام الأعلى مستوىً إلى نظيراتها الأدنى. وفي الأدبيات، يُنمذَج عدم اليقين بصورة منفصلة في المهام المختلفة، مما يعيق رصده بشكل متسق ويُفضي إلى قرارات قيادة إما متفائلة بشكل مفرط أو محافظة بشكل مبالغ فيه.',
    'يعالج هذا المشروع هذه الإشكالية الجوهرية بتطوير إطار موحّد للتعامل مع عدم اليقين من البداية إلى النهاية. ستُكمَّ عدم اليقينات الناجمة عن الإدراك والتنبؤ وتُمثَّل بصيغة موحدة على هيئة خريطة احتلال احتمالية. ولإدماج خوارزميات تخطيط الحركة القائمة في الإطار بسلاسة، سنُطوّر نسخاً مقاومة منها: بالنسبة للتخطيط الرياضي، ستُشتق قيود احتمالية من خريطة الاحتلال لتسمح بتحديد المسار الأمثل الملبّي لهذه القيود؛ وللتخطيط المعتمد على التعلم، ستُشتق احتمالية التصادم المحتمل وتُضاف إلى دالة الخسارة.',
    'إضافةً إلى ذلك، لتحقيق توازن مثالي بين المقاومة وسائر مقاييس الأداء، ستُمكَّن وحدة تخطيط الحركة من إخراج ممر قيادة آمن، يُتيح لوحدة التحكم إيجاد أوامر مثلى ضمن حدوده. ولتقييم مقاومة النظام ككل ومقاومة كل مهمة على حدة، نخطط لبناء مجموعة اختبار معيارية تضم سيناريوهات مرورية نموذجية في أحوال جوية متباينة، ومسارات بديلة قابلة للتنفيذ، ومقاييس للسلامة.',
    'خلاصةً، سيُقدّم المشروع: (1) تمثيلاً موحداً لأنواع مختلفة من عدم اليقين قابلاً للاستخدام عبر مسار النظام كاملاً، (2) واجهة جديدة بين المهام الأعلى والأدنى مستوىً لتوريث اعتبارات عدم اليقين، (3) نهجاً عاماً لإدماج الوعي بعدم اليقين في خوارزميات تخطيط الحركة والتحكم الحالية، (4) مجموعة اختبار معيارية مخصصة لتقييم المقاومة. سيُحسّن هذا المشروع من متانة أنظمة القيادة الذاتية ويُخفف من مخاوف الجمهور تجاه المركبات ذاتية القيادة.',
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

export function getUncertaintyHandlingContent(locale: LocaleCode): UncertaintyHandlingContent {
  switch (locale) {
    case 'zh': return zh;
    case 'fr': return fr;
    case 'ru': return ru;
    case 'es': return es;
    case 'ar': return ar;
    default:   return en;
  }
}
