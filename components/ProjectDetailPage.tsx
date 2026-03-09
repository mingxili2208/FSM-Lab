'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, FileText, ChevronLeft, ArrowUpRight, Hash } from 'lucide-react';

export interface ProjectOutput {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  url?: string;
}

export interface ResearchTheme {
  label: string;
  /** 0–100 weight for visual thickness */
  pct: number;
}

type AccentKey = 'blue' | 'indigo' | 'violet' | 'emerald';

/** Translatable UI strings shown in the component chrome */
export interface ProjectDetailUI {
  backToProjects: string;
  projectOverview: string;
  grantDetails: string;
  labelProjectNumber: string;
  labelGrantType: string;
  labelStatus: string;
  labelPeriod: string;
  labelPI: string;
  labelCoI: string;
  labelDept: string;
  viewOnScholars: string;
  fingerprintTitle: string;
  fingerprintSub: string;
  outputsTitle: string;
  outputsSub: (n: number) => string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}

export const DEFAULT_UI: ProjectDetailUI = {
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
};

export interface ProjectDetailProps {
  title: string;
  category: string;
  grantNumber: string;
  grantType: string;
  status: string;
  period: string;
  pi: string;
  coI?: string;
  /** Full paragraphs from CityUHK description */
  description: string[];
  themes: ResearchTheme[];
  outputs: ProjectOutput[];
  cityyuUrl: string;
  accentColor: AccentKey;
  /** Optional i18n overrides for UI chrome; falls back to English defaults */
  ui?: Partial<ProjectDetailUI>;
}

const ACCENT: Record<AccentKey, {
  gradient: string; text: string; border: string; bg: string; chip: string; ring: string;
}> = {
  blue: {
    gradient: 'from-blue-500 to-indigo-500',
    text: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    chip: 'bg-blue-900/50 text-blue-300 border-blue-500/30',
    ring: 'ring-blue-500/20',
  },
  indigo: {
    gradient: 'from-indigo-500 to-violet-500',
    text: 'text-indigo-400',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/10',
    chip: 'bg-indigo-900/50 text-indigo-300 border-indigo-500/30',
    ring: 'ring-indigo-500/20',
  },
  violet: {
    gradient: 'from-violet-500 to-purple-500',
    text: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    chip: 'bg-violet-900/50 text-violet-300 border-violet-500/30',
    ring: 'ring-violet-500/20',
  },
  emerald: {
    gradient: 'from-emerald-500 to-teal-500',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    chip: 'bg-emerald-900/50 text-emerald-300 border-emerald-500/30',
    ring: 'ring-emerald-500/20',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function ProjectDetailPage({
  title, category, grantNumber, grantType, status, period, pi, coI,
  description, themes, outputs, cityyuUrl, accentColor, ui: uiOverrides,
}: ProjectDetailProps) {
  const a = ACCENT[accentColor];
  const ui: ProjectDetailUI = { ...DEFAULT_UI, ...uiOverrides };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        {/* ambient glow */}
        <div className={`pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br ${a.gradient}`} />

        <div className="relative z-10 mx-auto max-w-5xl">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" /> {ui.backToProjects}
          </Link>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${a.chip}`}>
              <Hash className="h-3 w-3" /> {grantType} · {grantNumber}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-900/50 px-3 py-1 text-xs font-bold text-green-300">
              ● {status}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-400">
              {category}
            </span>
          </div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl"
          >
            {title}
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.15, duration: 0.7 } } }}
            className="flex flex-wrap items-center gap-6 text-sm text-slate-400"
          >
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 shrink-0" />
              <span>
                <span className="font-semibold text-white">{pi}</span>
                {coI && <span className="text-slate-400"> · Co-I: {coI}</span>}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0" />
              {period}
            </span>
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4 shrink-0" />
              {ui.labelDept}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left: description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="lg:col-span-2 space-y-5"
            >
              <h2 className="mb-6 text-2xl font-bold text-white">{ui.projectOverview}</h2>
              {description.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-400">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Right: info card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className={`sticky top-24 rounded-2xl border ${a.border} ${a.bg} p-6 ring-1 ${a.ring} backdrop-blur`}>
                <h3 className={`mb-5 text-xs font-bold uppercase tracking-widest ${a.text}`}>{ui.grantDetails}</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-500">{ui.labelProjectNumber}</dt>
                    <dd className="font-mono font-semibold text-white">{grantNumber}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">{ui.labelGrantType}</dt>
                    <dd className="font-semibold text-white">{grantType}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">{ui.labelStatus}</dt>
                    <dd className="font-semibold text-green-400">{status}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">{ui.labelPeriod}</dt>
                    <dd className="font-semibold text-white">{period}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">{ui.labelPI}</dt>
                    <dd className="font-semibold text-white">{pi}</dd>
                  </div>
                  {coI && (
                    <div>
                      <dt className="text-slate-500">{ui.labelCoI}</dt>
                      <dd className="font-semibold text-white">{coI}</dd>
                    </div>
                  )}
                </dl>
                <a
                  href={cityyuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl border ${a.border} ${a.bg} py-2.5 text-sm font-semibold ${a.text} transition-all hover:brightness-125`}
                >
                  {ui.viewOnScholars} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH FINGERPRINT ── */}
      {themes.length > 0 && (
        <section className="border-y border-slate-800/60 bg-slate-900/40 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="mb-2 text-2xl font-bold text-white">{ui.fingerprintTitle}</h2>
              <p className="mb-8 text-sm text-slate-500">{ui.fingerprintSub}</p>
              <div className="flex flex-wrap gap-3">
                {themes.map((t) => {
                  const opacity = t.pct >= 75 ? 'opacity-100' : t.pct >= 40 ? 'opacity-80' : 'opacity-60';
                  const size = t.pct >= 75 ? 'text-base font-bold' : t.pct >= 40 ? 'text-sm font-semibold' : 'text-xs font-medium';
                  return (
                    <span
                      key={t.label}
                      className={`${opacity} inline-flex items-center gap-1.5 rounded-xl border ${a.border} ${a.bg} px-4 py-2 ${size} ${a.text}`}
                    >
                      {t.label}
                      <span className="text-[10px] font-normal text-slate-500">{t.pct}%</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── RESEARCH OUTPUTS ── */}
      {outputs.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="mb-2 text-2xl font-bold text-white">{ui.outputsTitle}</h2>
              <p className="mb-8 text-sm text-slate-500">{ui.outputsSub(outputs.length)}</p>
              <div className="space-y-4">
                {outputs.map((pub, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-slate-900/50 p-5 transition-all hover:border-slate-600 hover:bg-slate-900"
                  >
                    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${a.bg} ${a.text} text-xs font-bold`}>
                      {pub.year}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold leading-snug text-white group-hover:text-indigo-200">
                        {pub.url ? (
                          <a href={pub.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {pub.title}
                          </a>
                        ) : pub.title}
                      </p>
                      {pub.authors && (
                        <p className="mt-0.5 text-xs text-slate-500">{pub.authors}</p>
                      )}
                      <p className="mt-1 text-xs italic text-slate-400">{pub.venue}</p>
                    </div>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-slate-600 transition-colors hover:text-slate-300"
                        aria-label="Open paper"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="border-t border-slate-800/60 bg-slate-950 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="mb-4 text-3xl font-bold text-white">{ui.ctaTitle}</h2>
            <p className="mb-8 text-slate-400">{ui.ctaBody}</p>
            <a
              href={cityyuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${a.gradient} px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:brightness-110 hover:shadow-xl`}
            >
              {ui.ctaButton} <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
