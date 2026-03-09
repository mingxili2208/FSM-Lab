'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { getUncertaintyHandlingContent } from '@/lib/projects/uncertainty-handling-content';

export default function UncertaintyHandlingPage() {
  const { locale } = useLanguage();
  const c = getUncertaintyHandlingContent(locale);
  return (
    <ProjectDetailPage
      accentColor="emerald"
      title={c.title}
      category={c.category}
      grantNumber="9043338"
      grantType="GRF"
      status={c.status}
      period={c.period}
      pi="WANG, Jianping"
      cityyuUrl="https://scholars.cityu.edu.hk/en/projects/modelling-and-handling-uncertainties-in-autonomous-driving-system/"
      description={c.description}
      themes={[
        { label: 'Autonomous Driving', pct: 100 },
        { label: 'Motion Planning', pct: 56 },
        { label: 'Handling Uncertainty', pct: 37 },
        { label: 'Autonomous Vehicles', pct: 28 },
        { label: 'Prediction Model', pct: 25 },
        { label: 'Probabilistic Framework', pct: 22 },
        { label: 'Robustness Evaluation', pct: 18 },
        { label: 'Sensor Fusion', pct: 15 },
      ]}
      outputs={[
        {
          title: 'CoDynTrust: Robust Asynchronous Collaborative Perception via Dynamic Feature Trust Modulus',
          authors: 'Xu, Y., Li, L., Wang, J., Yang, B., Wu, Z., Chen, X. & Wang, J.',
          venue: '2025 IEEE International Conference on Robotics and Automation (ICRA), p. 336–342',
          year: 2025,
        },
        {
          title: 'Dynamic Defense for Car-Borne LiDAR Vehicle Detection',
          authors: 'Xu, Y., Guo, D., Song, Q., Lou, Y., Zhu, Y., Wang, J., Qiao, C. & Tan, R.',
          venue: 'MobiSys \'25 – Proceedings of the 23rd ACM International Conference on Mobile Systems, Applications, and Services, p. 431–444',
          year: 2025,
        },
        {
          title: 'VI-Planning: Infrastructure-Assisted Real-Time Planning Optimization for Autonomous Driving',
          authors: 'Lu, Y., Wang, J., Dong, X., Huang, Z., Liu, B., Wu, J.-M. & Wang, J.',
          venue: 'ACM MobiCom \'25 – Proceedings of the 31st Annual International Conference on Mobile Computing and Networking, p. 923–937',
          year: 2025,
        },
      ]}
      ui={c.ui}
    />
  );
}
