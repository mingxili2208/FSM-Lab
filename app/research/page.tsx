'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Network,
  Car,
  Cpu,
  BookOpen,
  Calendar,
  FileText,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import {
  publications,
  CATEGORY_CONFIG,
  type ResearchCategory,
} from '@/lib/research-data';
import { PI_CONFIG } from '@/lib/home-content';

const ICONS = { network: Network, car: Car, cpu: Cpu } as const;
const CATEGORY_ORDER: ResearchCategory[] = ['ncs', 'cav', 'cps'];

export default function ResearchPage() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<ResearchCategory | null>(null);
  const pubsRef = useRef<HTMLElement>(null);

  // Support /research?focus=ncs|cav|cps deep-links from home page pillars
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const focus = params.get('focus') as ResearchCategory | null;
    if (focus && (CATEGORY_ORDER as string[]).includes(focus)) {
      setSelected(focus);
    }
  }, []);

  const handleCategorySelect = (cat: ResearchCategory) => {
    setSelected(cat);
    setTimeout(() => {
      pubsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const filtered = useMemo(
    () => (selected ? publications.filter((p) => p.category === selected) : []),
    [selected],
  );

  const renderAuthors = (authors: string[]) =>
    authors.map((author, i) => (
      <span key={i}>
        <span
          className={
            author.includes('Wang') ? 'font-semibold text-indigo-400' : 'text-slate-400'
          }
        >
          {author}
        </span>
        {i < authors.length - 1 ? ', ' : ''}
      </span>
    ));

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ══════════════════════ Hero ══════════════════════ */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {t('research.pageTitle')}
          </h1>
          <div className="mb-5 h-1 w-16 rounded-full bg-indigo-500" />
          <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
            {t('research.pageSubtitle')}
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════ Large Category Cards (initial view only) ══════════════════════ */}
      <AnimatePresence>
        {!selected && (
          <motion.section
            key="large-cards"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24, transition: { duration: 0.3, ease: 'easeInOut' } }}
            className="mx-auto max-w-7xl px-6 pb-32 pt-10"
          >
            <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
              {CATEGORY_ORDER.map((cat, i) => {
                const cfg = CATEGORY_CONFIG[cat];
                const Icon = ICONS[cfg.icon];
                return (
                  <motion.div
                    key={cat}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    onClick={() => handleCategorySelect(cat)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:shadow-indigo-500/10"
                  >
                    <div
                      className={`pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px] transition-all bg-indigo-500/5 ${cfg.glowColor}`}
                    />
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-800 transition-colors duration-300 group-hover:bg-slate-700">
                        <Icon className={`h-7 w-7 ${cfg.color}`} />
                      </div>
                      <h3 className="text-xl font-bold leading-snug text-white">{t(cfg.titleKey)}</h3>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-slate-400">{t(cfg.descKey)}</p>
                    <span className="text-xs font-semibold text-indigo-400">{t('research.moreDetails')}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ══════════════════════ Sticky Mini Tabs + Publications (after selection) ══════════════════════ */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="publications-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {/* Sticky compact tab bar */}
            <div className="sticky top-14 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-md sm:top-16">
              <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-6 py-3 [scrollbar-width:none]">
                {CATEGORY_ORDER.map((cat) => {
                  const cfg = CATEGORY_CONFIG[cat];
                  const Icon = ICONS[cfg.icon];
                  const isActive = selected === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelected(cat)}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? `${cfg.borderColor} ${cfg.bgColor} ${cfg.color}`
                          : 'border-white/5 bg-slate-900/60 text-slate-400 hover:border-white/15 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{t(cfg.titleKey)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Publications list */}
            <section ref={pubsRef} className="mx-auto max-w-7xl px-6 pb-24 pt-8">
              <AnimatePresence mode="popLayout">
                <div className="space-y-6">
                  {filtered.map((pub, i) => {
                    const cfg = CATEGORY_CONFIG[pub.category];
                    const Icon = ICONS[cfg.icon];
                    return (
                      <motion.a
                        key={pub.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }}
                        exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                        href={pub.url ?? PI_CONFIG.googleScholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5"
                      >
                        <div className="flex flex-col md:flex-row">

                          {/* ── Image pane ── */}
                          <div className="relative h-60 w-full shrink-0 overflow-hidden bg-slate-800 md:h-auto md:w-2/5 lg:w-1/3">
                            {pub.image ? (
                              <img
                                src={pub.image}
                                alt={pub.title}
                                className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                                <Icon className={`h-14 w-14 opacity-20 ${cfg.color}`} />
                              </div>
                            )}
                            <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/0 transition-colors duration-300 group-hover:bg-indigo-900/20">
                              <div className="translate-y-4 rounded-full bg-indigo-600 p-3 text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <ArrowUpRight className="h-5 w-5" />
                              </div>
                            </div>
                          </div>

                          {/* ── Content pane ── */}
                          <div className="flex w-full flex-col justify-center p-6 md:p-8">
                            <div className="mb-4 flex flex-wrap items-center gap-3">
                              <span
                                className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-xs font-semibold ${cfg.color} ${cfg.bgColor} ${cfg.borderColor}`}
                              >
                                <Icon className="h-3 w-3" />
                                <span>{t(cfg.titleKey)}</span>
                              </span>
                              <span className="rounded-full bg-slate-800 px-2.5 py-1 font-mono text-xs text-slate-500">
                                {pub.year}
                              </span>
                            </div>
                            <h3 className="mb-3 text-lg font-bold leading-snug text-white transition-colors group-hover:text-indigo-200 md:text-xl">
                              {pub.title}
                            </h3>
                            <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-400">
                              {pub.abstract}
                            </p>
                            <div className="mt-auto border-t border-white/5 pt-5">
                              {pub.authors.length > 0 && (
                                <div className="mb-2 text-sm">{renderAuthors(pub.authors)}</div>
                              )}
                              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                                <span className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-slate-600" />
                                  <em>{pub.venue}</em>
                                </span>
                                <span className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-slate-600" />
                                  {pub.year}
                                </span>
                              </div>
                            </div>
                          </div>

                        </div>
                      </motion.a>
                    );
                  })}

                  {filtered.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-2xl border border-white/5 bg-slate-900/50 py-24 text-center"
                    >
                      <BookOpen className="mx-auto mb-4 h-12 w-12 text-slate-600" />
                      <p className="text-lg text-slate-400">{t('research.noPublications')}</p>
                    </motion.div>
                  )}
                </div>
              </AnimatePresence>

              {/* Google Scholar CTA */}
              <div className="mt-14 text-center">
                <a
                  href={PI_CONFIG.googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:shadow-xl hover:shadow-violet-500/40"
                >
                  {t('research.viewOnScholar')}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
