'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { getRealtimeMapContent } from '@/lib/projects/realtime-map-content';

export default function RealtimeMapPage() {
  const { locale } = useLanguage();
  const c = getRealtimeMapContent(locale);
  return (
    <ProjectDetailPage
      accentColor="blue"
      title={c.title}
      category={c.category}
      grantNumber="9043709"
      grantType="GRF"
      status={c.status}
      period={c.period}
      pi="WANG, Jianping"
      cityyuUrl="https://scholars.cityu.edu.hk/en/projects/real-time-map-construction-and-utilization-an-end-to-end-framewor/"
      description={c.description}
      themes={[
        { label: 'Autonomous Driving', pct: 100 },
        { label: 'Information Map', pct: 30 },
        { label: 'Reinforcement Learning', pct: 25 },
        { label: 'Deep Reinforcement Learning', pct: 25 },
        { label: 'Autonomous Vehicles', pct: 25 },
        { label: 'Machine Learning Algorithm', pct: 20 },
        { label: 'Graph Representation', pct: 20 },
        { label: 'Prediction Model', pct: 15 },
      ]}
      outputs={[
        {
          title: 'A Generic Competitive-Cooperative Actor-Critic Framework for Deep Reinforcement Learning',
          authors: 'Xu, M., Wen, Z., Chen, X., Zhao, G., Huang, J. & Wang, J.',
          venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence, 16 Feb 2026 (Online published)',
          year: 2026,
        },
        {
          title: 'Metamorphic Testing for Vision-Based Autonomous Driving With Road Traffic Risk Exposure Extrapolation',
          authors: 'Jiang, Z., Zhang, S., Liu, J., Li, H., Pan, Y. & Wang, J.',
          venue: 'IEEE Transactions on Intelligent Transportation Systems, 16 Jan 2026 (Online published)',
          year: 2026,
        },
        {
          title: 'Risk-Aware Reinforcement Learning with Group Opinion for Autonomous Driving',
          authors: 'Zhao, G., Xu, M., Wen, Z. & Wang, J.',
          venue: '2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), p. 15254–15261',
          year: 2025,
        },
      ]}
      ui={c.ui}
    />
  );
}
