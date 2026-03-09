'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { getScenarioPlanningContent } from '@/lib/projects/scenario-planning-content';

export default function ScenarioPlanningPage() {
  const { locale } = useLanguage();
  const c = getScenarioPlanningContent(locale);
  return (
    <ProjectDetailPage
      accentColor="violet"
      title={c.title}
      category={c.category}
      grantNumber="9043548"
      grantType="GRF"
      status={c.status}
      period={c.period}
      pi="WANG, Jianping"
      cityyuUrl="https://scholars.cityu.edu.hk/en/projects/scenario-driven-motion-planning-model-selection-in-autonomous-dri/"
      description={c.description}
      themes={[
        { label: 'Autonomous Driving', pct: 100 },
        { label: 'Motion Planning', pct: 57 },
        { label: 'Deep Reinforcement Learning', pct: 57 },
        { label: 'Model Selection', pct: 38 },
        { label: 'Autonomous Vehicles', pct: 38 },
        { label: 'Neural Network', pct: 30 },
        { label: 'Traffic Scenario Prediction', pct: 25 },
        { label: 'Online Switching', pct: 20 },
      ]}
      outputs={[
        {
          title: 'MAPLE: A Modularized Framework for Learning-Based Planners to Integrate Prediction',
          authors: 'Wen, Z., Zhou, Z., Chen, X., Wang, J., Li, Y.-H. & Huang, Y.-K.',
          venue: 'IEEE Transactions on Emerging Topics in Computational Intelligence, Feb 2026, Vol. 10, No. 1, p. 358–368',
          year: 2026,
        },
        {
          title: 'A Two-Stage Selective Experience Replay for Double-Actor Deep Reinforcement Learning',
          authors: 'Xu, M., Chen, X., Wen, Z., Fu, W. & Wang, J.',
          venue: 'IEEE Transactions on Neural Networks and Learning Systems, Sept 2025, Vol. 36, No. 9, p. 16864–16878',
          year: 2025,
        },
        {
          title: 'A Unified Experience Replay Framework for Spiking Deep Reinforcement Learning',
          authors: 'Xu, M., Chen, X., Liu, B., Lin, Y.-R., Li, Y.-H. & Wang, J.',
          venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence, 11 Dec 2025 (Online published)',
          year: 2025,
        },
      ]}
      ui={c.ui}
    />
  );
}
