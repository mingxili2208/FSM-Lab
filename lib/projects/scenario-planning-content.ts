import type { LocaleCode } from '@/lib/i18n/types';
import type { ProjectDetailUI } from '@/components/ProjectDetailPage';

export type ScenarioPlanningContent = {
  title: string;
  category: string;
  period: string;
  status: string;
  description: string[];
  ui: Partial<ProjectDetailUI>;
};

const en: ScenarioPlanningContent = {
  title: 'Scenario-driven Motion Planning Model Selection in Autonomous Driving Systems',
  category: 'Autonomous Driving / Motion Planning',
  period: 'Jan 2024 – present',
  status: 'Active',
  description: [
    'As an essential module in autonomous driving systems, motion planning is responsible for generating a collision-free, kinematic feasible, and comfortable driving trajectory given the inputs from environment perception, prediction, and global routing. With safety as the top concern, motion planning models need to generate a feasible trajectory in a timely manner and be responsive to changing traffic scenarios.',
    'Many motion planning models have been developed in recent years with the aim to provide the best average performance under all possible scenarios where performance is usually evaluated from the ego vehicle\'s perspective, referred to as microscopic performance. The current research development in motion planning cannot address the following challenges in adopting motion planning models for real autonomous driving systems. Firstly, due to the complexity of traffic scenarios, it is impossible to develop a one-size-fits-all model for all traffic scenarios. On the other hand, it is not necessary to adopt only one motion planning model either. The challenge from this perspective is how to select the most appropriate motion planning models according to traffic scenarios. Secondly, when evaluating motion planning models, we should consider not only the performance of the ego vehicle, but also its impact on traffic flow, referred to as macroscopic performance. The challenge from this perspective is how to evaluate the impact of a motion planning model on its current traffic scenario, predict its impact on the following traffic scenarios, and proactively incorporate such impact into global routing.',
    'To address the aforementioned challenges, this project will by no means develop another motion planning model, but consolidate the existing efforts in motion planning to select the right motion planning models for different scenarios. To this end, we will first develop a framework to comprehensively evaluate the microscopic and macroscopic performance of existing models and recommend the most appropriate model for any given scenario. To capture the impact of motion planning model selection on traffic scenarios in the following lane segments, we will develop a traffic scenario prediction model to predict the traffic flow in each following lane segment, which will be used as the input of existing routing algorithms so that microscopic and macroscopic performances can be better aligned. To ensure the responsiveness of motion planning, we will develop an online motion planning model selection framework to handle the cases where the pre-selected motion planning model cannot generate a feasible trajectory in a timely manner due to changing traffic scenarios.',
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

const zh: ScenarioPlanningContent = {
  title: '自动驾驶系统中场景驱动的运动规划模型选择',
  category: '自动驾驶 / 运动规划',
  period: '2024年1月至今',
  status: '进行中',
  description: [
    '运动规划作为自动驾驶系统的核心模块，负责根据环境感知、预测与全局路由的输入，生成无碰撞、运动学可行且舒适的驾驶轨迹。以安全为首要目标，运动规划模型需及时生成可行轨迹，并对不断变化的交通场景保持响应性。',
    '近年来，研究人员开发了大量运动规划模型，旨在所有可能场景下提供最佳平均性能——该性能通常从自车视角进行评估，称为微观性能。然而，现有研究进展仍无法解决将运动规划模型应用于真实自动驾驶系统时面临的以下挑战：其一，由于交通场景的复杂性，不可能开发出一种适用于所有场景的通用模型，但也无需仅采用一种运动规划模型，挑战在于如何根据交通场景选择最合适的模型；其二，在评估运动规划模型时，不应仅考量自车的性能，还应考量其对交通流的影响（即宏观性能），挑战在于如何评估模型对当前交通场景的影响、预测其对后续场景的影响，并主动将该影响融入全局路由。',
    '为应对上述挑战，本项目并非开发另一种运动规划模型，而是整合现有运动规划研究成果，为不同场景选择合适的模型。为此，我们将首先建立一个框架，全面评估现有模型的微观与宏观性能，并为任意给定场景推荐最合适的模型。为捕捉运动规划模型选择对后续路段交通场景的影响，我们将开发交通场景预测模型，预测各后续路段的交通流，并将其作为现有路由算法的输入，以更好地协调微观与宏观性能。为保证运动规划的响应性，我们将开发在线运动规划模型选择框架，以应对预选模型因交通场景变化而无法及时生成可行轨迹的情况。',
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

const fr: ScenarioPlanningContent = {
  title: 'Sélection de modèles de planification de mouvement guidée par scénarios dans les systèmes de conduite autonome',
  category: 'Conduite autonome / Planification de mouvement',
  period: 'janv. 2024 – présent',
  status: 'Actif',
  description: [
    'En tant que module essentiel des systèmes de conduite autonome, la planification de mouvement est responsable de la génération d\'une trajectoire de conduite sans collision, cinématiquement réalisable et confortable, en fonction des entrées de la perception environnementale, de la prédiction et du routage global. Avec la sécurité comme préoccupation principale, les modèles de planification de mouvement doivent générer une trajectoire réalisable en temps opportun et répondre aux scénarios de trafic changeants.',
    'De nombreux modèles de planification de mouvement ont été développés ces dernières années pour fournir les meilleures performances moyennes dans tous les scénarios possibles, évaluées du point de vue du véhicule hôte, appelées performances microscopiques. Le développement actuel ne peut pas résoudre les défis suivants. Premièrement, en raison de la complexité des scénarios de trafic, il est impossible de développer un modèle universel. Le défi est de sélectionner les modèles les plus appropriés selon les scénarios. Deuxièmement, lors de l\'évaluation, nous devons considérer non seulement les performances du véhicule hôte, mais aussi son impact sur le flux de trafic (performances macroscopiques). Le défi est d\'évaluer l\'impact sur les scénarios actuels et futurs, et d\'incorporer cet impact dans le routage global.',
    'Pour relever ces défis, ce projet ne développera pas un autre modèle de planification mais consolidera les efforts existants pour sélectionner les bons modèles selon les scénarios. Nous développerons un cadre d\'évaluation complète des performances microscopiques et macroscopiques des modèles existants et recommanderons le modèle le plus approprié pour chaque scénario. Un modèle de prédiction de scénarios de trafic prévoira le flux dans les segments de voie suivants. Un cadre de sélection en ligne gérera les cas où le modèle pré-sélectionné ne peut générer une trajectoire réalisable en temps voulu.',
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

const ru: ScenarioPlanningContent = {
  title: 'Выбор модели планирования движения на основе сценариев в системах автономного вождения',
  category: 'Автономное вождение / Планирование движения',
  period: 'янв. 2024 – н.в.',
  status: 'Активен',
  description: [
    'Как ключевой модуль систем автономного вождения, планирование движения отвечает за генерацию бесколлизионной, кинематически реализуемой и комфортной траектории на основе данных восприятия, прогнозирования и глобальной маршрутизации. С учётом приоритета безопасности модели планирования должны своевременно генерировать реализуемую траекторию и реагировать на изменения дорожных ситуаций.',
    'В последние годы разработано множество моделей планирования движения, нацеленных на максимальную среднюю производительность во всех сценариях — оцениваемую с точки зрения ego-автомобиля (микроскопическая производительность). Однако существующие разработки не решают ряд ключевых задач. Во-первых, из-за сложности дорожных ситуаций невозможно создать универсальную модель; при этом использование лишь одной модели также не является необходимым. Задача — выбрать наиболее подходящую модель для конкретной ситуации. Во-вторых, оценка модели должна учитывать не только поведение ego-автомобиля, но и влияние на транспортный поток (макроскопическая производительность): необходимо оценивать влияние на текущую и последующие ситуации и проактивно включать его в глобальную маршрутизацию.',
    'Проект не создаёт новую модель планирования, а консолидирует существующие подходы для выбора правильных моделей в разных ситуациях. Будет разработана система комплексной оценки микро- и макроскопической производительности с рекомендацией наиболее подходящей модели для каждой ситуации. Модель прогнозирования сценариев позволит предсказывать трафик на последующих участках. Механизм онлайн-выбора обеспечит переключение, когда предвыбранная модель не успевает генерировать траекторию.',
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

const es: ScenarioPlanningContent = {
  title: 'Selección de modelos de planificación de movimiento basada en escenarios en sistemas de conducción autónoma',
  category: 'Conducción autónoma / Planificación de movimiento',
  period: 'ene. 2024 – presente',
  status: 'Activo',
  description: [
    'Como módulo esencial en los sistemas de conducción autónoma, la planificación de movimiento es responsable de generar una trayectoria de conducción libre de colisiones, cinematicamente factible y cómoda, dado los inputs de percepción ambiental, predicción y enrutamiento global. Con la seguridad como principal preocupación, los modelos de planificación de movimiento necesitan generar una trayectoria viable de manera oportuna y ser receptivos a los cambiantes escenarios de tráfico.',
    'Muchos modelos de planificación de movimiento han sido desarrollados en años recientes con el objetivo de proporcionar el mejor rendimiento promedio en todos los escenarios posibles, donde el rendimiento se evalúa desde la perspectiva del vehículo ego (rendimiento microscópico). El desarrollo actual no puede abordar los siguientes desafíos. Primero, debido a la complejidad de los escenarios de tráfico, es imposible desarrollar un modelo universal. El desafío es cómo seleccionar los modelos más apropiados según los escenarios. Segundo, al evaluar modelos, debemos considerar no solo el rendimiento del vehículo ego, sino también su impacto en el flujo de tráfico (rendimiento macroscópico). El desafío es evaluar el impacto en el escenario actual, predecir su impacto en escenarios siguientes e incorporar este impacto en el enrutamiento global.',
    'Para abordar estos desafíos, este proyecto no desarrollará otro modelo de planificación, sino que consolidará los esfuerzos existentes para seleccionar los modelos correctos para diferentes escenarios. Desarrollaremos un marco para evaluar comprehensivamente el rendimiento microscópico y macroscópico de modelos existentes y recomendar el más apropiado para cada escenario. Un modelo de predicción de escenarios de tráfico predecirá el flujo en segmentos de carril siguientes. Un marco de selección en línea manejará los casos donde el modelo preseleccionado no pueda generar una trayectoria factible oportunamente.',
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

const ar: ScenarioPlanningContent = {
  title: 'اختيار نموذج تخطيط الحركة المُوجَّه بالسيناريوهات في أنظمة القيادة الذاتية',
  category: 'القيادة الذاتية / تخطيط الحركة',
  period: 'يناير 2024 – الآن',
  status: 'نشط',
  description: [
    'يُعدّ تخطيط الحركة وحدةً جوهريةً في أنظمة القيادة الذاتية، إذ يتولى توليد مسار قيادة خالٍ من الاصطدامات وقابلٍ للتنفيذ حركياً ومريح، انطلاقاً من مدخلات الإدراك البيئي والتنبؤ والتوجيه العام. مع الأمان بوصفه الأولوية القصوى، يجب أن تُنتج نماذج تخطيط الحركة مساراً قابلاً للتنفيذ في الوقت المناسب، مع الاستجابة لتغيرات سيناريوهات المرور.',
    'طُوِّرت في السنوات الأخيرة نماذج عديدة لتخطيط الحركة بهدف تحقيق أفضل أداء متوسط في جميع السيناريوهات المحتملة، حيث يُقاس الأداء عادةً من منظور مركبة الأنا (الأداء المجهري). غير أن المسيرة البحثية الراهنة لا تستطيع معالجة التحديات التالية: أولاً، يستحيل تطوير نموذج يصلح لجميع سيناريوهات المرور، والتحدي هو كيفية اختيار النماذج الأنسب وفق السيناريو؛ ثانياً، يجب عند تقييم النماذج مراعاة تأثيرها على تدفق المرور (الأداء الكلي)، والتحدي هو كيفية قياس هذا التأثير على السيناريوهات الحالية والمستقبلية وإدماجه في التوجيه العام.',
    'لمعالجة هذه التحديات، لن يطوّر هذا المشروع نموذجاً جديداً لتخطيط الحركة، بل سيُوحّد الجهود القائمة لاختيار النموذج الصحيح لكل سيناريو. سنبني أولاً إطاراً شاملاً لتقييم الأداء المجهري والكلي للنماذج الموجودة، وتوصية النموذج الأنسب لأي سيناريو. وسيُطوَّر نموذج لتنبؤ السيناريوهات المرورية للتنبؤ بالتدفق في قطاعات المسارب اللاحقة. أما إطار الاختيار الآني فسيتولى معالجة حالات فشل النموذج المُختار مسبقاً في توليد مسار قابل للتنفيذ في الوقت المناسب.',
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

export function getScenarioPlanningContent(locale: LocaleCode): ScenarioPlanningContent {
  switch (locale) {
    case 'zh': return zh;
    case 'fr': return fr;
    case 'ru': return ru;
    case 'es': return es;
    case 'ar': return ar;
    default:   return en;
  }
}
