'use client';

import Link from 'next/link';
import { projects, getProjectTitle, getProjectHref, isProjectClickable } from '@/lib/data';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Lock } from 'lucide-react';

export default function ProjectsPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{t('projects.pageTitle')}</h1>
        <p className="mt-2 text-slate-400">{t('projects.pageSubtitle')}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const title = getProjectTitle(project, locale);
          const href = getProjectHref(project);
          const clickable = isProjectClickable(project);

          const cardContent = (
            <>
              <div className="mb-4 aspect-video overflow-hidden rounded-xl bg-slate-800">
                <img
                  src={project.coverImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                {project.category}
              </span>
              <h2 className="mt-2 text-xl font-bold text-white">{title}</h2>
              {project.status === 'coming_soon' && (
                <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  <Lock size={12} /> {t('projects.comingSoon')}
                </div>
              )}
            </>
          );

          if (clickable) {
            return (
              <Link
                key={project.id}
                href={href}
                className={`block rounded-2xl border border-slate-700 bg-slate-900/60 p-6 transition-colors hover:border-indigo-500/50 hover:bg-slate-900/80`}
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 opacity-90"
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}
