'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { getRemoteDrivingContent } from '@/lib/projects/remote-driving-content';

export default function RemoteDrivingPage() {
  const { locale } = useLanguage();
  const c = getRemoteDrivingContent(locale);
  return (
    <ProjectDetailPage
      accentColor="indigo"
      title={c.title}
      category={c.category}
      grantNumber="9043845"
      grantType="GRF"
      status={c.status}
      period={c.period}
      pi="ZHOU, Qian"
      coI="WANG, Jianping"
      cityyuUrl="https://scholars.cityu.edu.hk/en/projects/a-multi-level-remote-driving-framework-for-autonomous-vehicles/"
      description={c.description}
      themes={[
        { label: 'Autonomous Vehicles', pct: 100 },
        { label: 'Network Latency', pct: 50 },
        { label: 'Bandwidth Allocation', pct: 50 },
        { label: 'Autonomous Driving', pct: 50 },
        { label: 'Wireless Network', pct: 50 },
        { label: 'Decision Making', pct: 50 },
        { label: 'Video Streaming', pct: 30 },
        { label: 'Explainable AI', pct: 20 },
      ]}
      outputs={[]}
      ui={c.ui}
    />
  );
}
