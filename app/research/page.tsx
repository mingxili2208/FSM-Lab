'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ResearchPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white px-6 py-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">{t('research.pageTitle')}</h1>
        <p className="mt-2 text-slate-600">{t('research.pagePlaceholder')}</p>
      </div>
    </div>
  );
}
