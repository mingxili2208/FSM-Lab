'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  Network,
  Car,
  Cpu,
  Award,
  MapPin,
  Mail,
  GraduationCap,
  BookOpen,
  Lock,
} from 'lucide-react';
import { SHOWCASE_ITEMS, RESEARCH_ITEMS, PI_CONFIG, type ShowcaseItem } from '@/lib/home-content';
import { projects, getProjectTitle, getProjectHref, isProjectClickable } from '@/lib/data';
import type { Project } from '@/lib/data';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const ICONS = { network: Network, car: Car, cpu: Cpu };

/** GitHub Pages 等部署时需加 basePath，本地开发为空 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const CARD_WIDTH = 624;  /* 520 × 1.2 */
const CARD_HEIGHT = 480; /* 400 × 1.2 */
const CARD_GAP = 36;
const SHOWCASE_COUNT = 6;
const TRACK_WIDTH = (CARD_WIDTH + CARD_GAP) * SHOWCASE_COUNT * 2 - CARD_GAP;

function ShowcaseCard({
  item,
  project,
  index,
}: {
  item: ShowcaseItem;
  project: Project | undefined;
  index: number;
}) {
  const { locale, t } = useLanguage();
  const title = project ? getProjectTitle(project, locale) : item.alt;
  const clickable = project ? isProjectClickable(project) : false;
  const href = project ? getProjectHref(project) : undefined;

  const content = (
    <>
      <div className="absolute inset-0">
        {item.type === 'video' ? (
          'poster' in item && item.poster ? (
            <video
              src={`${basePath}${item.src}`}
              poster={`${basePath}${item.poster}`}
              muted
              loop
              playsInline
              autoPlay
              className="h-full w-full object-cover"
              aria-label={item.alt}
            />
          ) : (
            <video
              src={`${basePath}${item.src}`}
              muted
              loop
              playsInline
              autoPlay
              className="h-full w-full object-cover"
              aria-label={item.alt}
            />
          )
        ) : (
          <>
            <img
              src={`${basePath}${item.src}`}
              alt={item.alt}
              className="h-full w-full object-cover"
              onError={(e) => {
                const el = e.currentTarget;
                el.classList.add('hidden');
                const fallback = el.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.classList.remove('hidden');
                  fallback.classList.add('flex');
                }
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-500">
              <span className="text-sm">{t('home.fallback.media')}</span>
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 to-transparent p-5">
        <p className="truncate text-base font-semibold text-white">{title}</p>
        {project && (
          <p className="truncate text-sm text-slate-400">{project.category}</p>
        )}
      </div>
    </>
  );

  const className =
    'relative shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl shadow-black/20 group';

  const style = { width: CARD_WIDTH, minWidth: CARD_WIDTH, height: CARD_HEIGHT };

  if (clickable && href) {
    return (
      <Link
        key={index}
        href={href}
        className={className}
        style={style}
      >
        {content}
      </Link>
    );
  }
  return (
    <div key={index} className={className} style={style}>
      {content}
    </div>
  );
}

function ShowcaseCarousel() {
  const { t } = useLanguage();
  const items = SHOWCASE_ITEMS;
  if (items.length === 0) return null;

  const projectMap = new Map(projects.map((p) => [p.id, p]));
  const duplicatedItems = [...items, ...items];

  return (
    <section className="snap-section relative flex min-h-screen flex-col justify-center border-t border-white/5 bg-slate-950">
      <div className="mx-auto w-full max-w-[1920px] px-6 py-12 md:py-16">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {t('home.showcase.heading')}
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-indigo-500" />
        </div>

        <div className="overflow-hidden py-4">
          <div
            className="showcase-track flex items-center gap-7 md:gap-8"
            style={{ width: TRACK_WIDTH }}
          >
            {duplicatedItems.map((item, index) => {
              const project = 'projectId' in item ? projectMap.get(item.projectId) : undefined;
              return (
                <ShowcaseCard
                  key={index}
                  item={item}
                  project={project}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute left-[60%] top-[40%] h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          {t('home.hero.title')} <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            {t('home.hero.titleHighlight')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl"
        >
          {t('home.hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-5"
        >
          <Link
            href="/projects/autonomous-validation"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 px-10 py-4 font-bold text-white shadow-lg shadow-violet-500/35 ring-2 ring-white/25 transition-all hover:shadow-xl hover:shadow-violet-500/45 hover:ring-white/40 active:scale-[0.98] sm:px-12 sm:py-5 sm:text-lg"
          >
            {t('home.hero.ctaAutonomous')}
            <ChevronRight size={22} strokeWidth={2.5} />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#research"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-slate-900 shadow-md transition-colors hover:bg-slate-100 sm:px-8 sm:py-4"
            >
              {t('home.hero.cta')}
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/about#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-800/60 px-7 py-3.5 font-medium text-white transition-colors hover:border-slate-500 hover:bg-slate-700/80 sm:px-8 sm:py-4"
            >
              {t('home.hero.ctaContact')}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-600 p-1">
          <div className="h-2 w-1 rounded-full bg-slate-500" />
        </div>
      </motion.div>
    </section>
  );
}

const RESEARCH_TITLE_KEYS = ['home.research.item1.title', 'home.research.item2.title', 'home.research.item3.title'] as const;
const RESEARCH_DESC_KEYS = ['home.research.item1.desc', 'home.research.item2.desc', 'home.research.item3.desc'] as const;

function ResearchPillars() {
  const { t } = useLanguage();
  return (
    <section
      id="research"
      className="snap-section relative flex min-h-screen flex-col justify-center border-t border-white/5 bg-slate-950 py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {t('home.research.heading')}
          </h2>
          <div className="h-1 w-20 rounded-full bg-indigo-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {RESEARCH_ITEMS.map((item, index) => {
            const Icon = ICONS[item.iconKey];
            return (
              <motion.div
                key={item.iconKey}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-8 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[50px] transition-all group-hover:bg-indigo-500/20" />
                <div className="mb-6 w-fit rounded-xl bg-slate-800 p-3 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-indigo-500/50">
                  <Icon className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-indigo-300">
                  {t(RESEARCH_TITLE_KEYS[index])}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {t(RESEARCH_DESC_KEYS[index])}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const PI_TAG_KEYS = ['home.pi.tag1', 'home.pi.tag2', 'home.pi.tag3', 'home.pi.tag4'] as const;

function PISection() {
  const { t } = useLanguage();
  const { homepageUrl, scholarUrl, googleScholarUrl, portrait, orgUrl } = PI_CONFIG;
  const hasPortrait = Boolean(portrait && portrait.trim());
  const bioParagraphs = [t('home.pi.bio1'), t('home.pi.bio2')];
  return (
    <section className="snap-section relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900 pointer-events-none" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full lg:w-1/3"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-2xl shadow-black/50">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              <a
                href={homepageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center justify-center bg-slate-700 text-slate-500 transition-opacity hover:opacity-90"
                aria-label="Prof. Jianping Wang - Personal homepage"
              >
                {hasPortrait ? (
                  <Image
                    src={`${basePath}${portrait.trim()}`}
                    alt={t('home.pi.name')}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <span className="text-sm">[Professor&apos;s Portrait Here]</span>
                )}
              </a>
              <div className="absolute bottom-0 left-0 z-20 p-6">
                <div className="mb-2 flex gap-3">
                  <a
                    href={homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-indigo-500"
                    aria-label="Personal homepage"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-indigo-500"
                    aria-label="CityU Scholars"
                  >
                    <GraduationCap size={18} />
                  </a>
                  <a
                    href={googleScholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-indigo-500"
                    aria-label="Google Scholar"
                  >
                    <BookOpen size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-3xl border border-indigo-500/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full lg:w-2/3"
          >
            <div className="mb-4 flex items-center gap-3">
              <Award className="text-indigo-400" size={24} />
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
                {t('home.pi.principalInvestigator')}
              </span>
            </div>
            <a
              href={homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-4xl font-bold text-white transition-colors hover:text-indigo-300 md:text-5xl"
            >
              {t('home.pi.name')}
            </a>
            <p className="mb-1 text-xl text-slate-300">{t('home.pi.role')}</p>
            <p className="mb-8 flex items-center gap-2 text-slate-400">
              <MapPin size={16} />
              {orgUrl ? (
                <a href={orgUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-indigo-400">
                  {t('home.pi.org')}
                </a>
              ) : (
                t('home.pi.org')
              )}
            </p>
            <div className="mb-8 space-y-4">
              {bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {PI_TAG_KEYS.map((key) => (
                <span
                  key={key}
                  className="flex items-center gap-2 rounded-full border border-white/5 bg-slate-800 px-4 py-2 text-sm text-indigo-300"
                >
                  <GraduationCap size={16} /> {t(key)}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase() {
  const { locale, t } = useLanguage();
  const featured = projects.slice(0, 2);

  return (
    <section className="snap-section flex min-h-screen flex-col justify-center border-t border-white/5 bg-slate-950 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t('home.projects.heading')}
            </h2>
            <p className="text-slate-400">{t('home.projects.subheading')}</p>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300 md:flex"
          >
            {t('home.projects.viewAll')} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project) => {
            const clickable = isProjectClickable(project);
            const title = getProjectTitle(project, locale);
            return (
              <div
                key={project.id}
                className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-slate-900"
              >
                {/* 封面图完整展示，不作为背景被渐变盖住 */}
                <img
                  src={project.coverImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  aria-hidden
                />
                {/* 仅底部渐变保证标题可读，不再整卡叠深色 */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent ${
                    project.status === 'coming_soon'
                      ? 'bg-slate-950/60 backdrop-blur-[2px]'
                      : ''
                  }`}
                />

                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-indigo-400">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{title}</h3>
                    </div>
                    {project.status === 'coming_soon' && (
                      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-md">
                        <Lock size={12} /> {t('home.projects.comingSoon')}
                      </div>
                    )}
                  </div>

                  {clickable && (
                    <div className="h-0 overflow-hidden transition-all duration-300 group-hover:mt-4 group-hover:h-auto">
                      <p className="mb-4 line-clamp-2 text-sm text-slate-300">
                        {t('home.projects.briefDesc')}
                      </p>
                      <Link
                        href={getProjectHref(project)}
                        className="inline-flex items-center gap-1 border-b border-indigo-500 pb-0.5 text-sm font-medium text-white hover:text-indigo-300"
                      >
                        {t('home.projects.viewCaseStudy')} <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const SCROLL_SNAP_BODY_CLASS = 'home-page-scroll-snap';

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add(SCROLL_SNAP_BODY_CLASS);
    window.scrollTo(0, 0);
    return () => document.body.classList.remove(SCROLL_SNAP_BODY_CLASS);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-300 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Hero />
      <ShowcaseCarousel />
      <ResearchPillars />
      <PISection />
      <ProjectShowcase />
    </div>
  );
}
