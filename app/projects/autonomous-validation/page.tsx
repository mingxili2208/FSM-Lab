'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, ShieldAlert, Car, Cpu, Network, Award, Zap, Target, TrendingUp, Users, BookOpen, Server, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getAutonomousValidationContent } from '@/lib/projects/autonomous-validation-content';
import { PI_CONFIG } from '@/lib/home-content';

// --- Data for Charts ---
const revenueData = [
  { year: '2026', Enterprise: 0.5, Education: 0.5, GovGrants: 2 },
  { year: '2027', Enterprise: 3, Education: 3, GovGrants: 2 },
  { year: '2028', Enterprise: 15, Education: 6, GovGrants: 1 },
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

/** 本页图片：优先使用 public/projects/autonomous-validation/ 下本地图，加载失败时回退到 coming soon 占位图 */
const IMG = {
  hero: { local: '/projects/autonomous-validation/hero.jpg', fallback: '/images/coming_soon.png' },
  longTailSafety: { local: '/projects/autonomous-validation/long-tail.png', fallback: '/images/coming_soon2.png' },
  securityAttack: { local: '/projects/autonomous-validation/security.png', fallback: '/images/coming_soon.png' },
  aiScenarios: { local: '/projects/autonomous-validation/ai-scenarios.jpg', fallback: '/images/coming_soon2.png' },
  mixedReality: { local: '/projects/autonomous-validation/mixed-reality.jpg', fallback: '/images/coming_soon.png' },
  fullScalePrototypes: { local: '/projects/autonomous-validation/full-scale-prototypes.jpg', fallback: '/images/coming_soon2.png' },
};

/** Core Technical Capabilities 板块视频：放入 public/projects/autonomous-validation/ */
const VIDEO_SRC = {
  aiScenarios: '/projects/autonomous-validation/ai-scenarios.mp4',
  mixedReality: '/projects/autonomous-validation/mixed-reality.mp4',
  fullScalePrototypes: '/projects/autonomous-validation/full-scale-prototypes.mp4',
};

export default function AutonomousValidationProjectPage() {
  const { locale } = useLanguage();
  const c = getAutonomousValidationContent(locale);
  const capabilitiesSectionRef = useRef<HTMLElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = capabilitiesSectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [e] = entries;
        const play = e?.isIntersecting ?? false;
        [video1Ref.current, video2Ref.current, video3Ref.current].forEach((el) => {
          if (!el) return;
          if (play) el.play().catch(() => {});
          else el.pause();
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION - 纯色背景（配图已移至 projects 页该项目的封面） */}
      <section className="min-h-screen flex flex-col pt-20 bg-slate-950">
        <div className="flex flex-col items-center justify-center flex-1 px-6 pb-16">
          <div className="max-w-5xl mx-auto text-center pt-12">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8"
            >
              {c.hero.titleLine1} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-red-400">
                {c.hero.titleLine2}
              </span>
            </motion.h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl w-full text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-widest uppercase">
              <Shield className="w-4 h-4" />
              {c.hero.badge}
            </motion.div>
            
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto mb-12 space-y-6 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
              <p>{c.hero.intro1}</p>
              <p>{c.hero.intro2}</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#architecture"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                {c.hero.cta} <ChevronRight className="w-5 h-5" />
              </a>
              <div className="text-left border-l-2 border-slate-600 pl-4 py-1">
                <p className="text-white font-medium">{c.hero.dept}</p>
                <p className="text-sm text-slate-400">{c.hero.org}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE MOTIVATION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{c.motivation.heading}</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{c.motivation.sub}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
            <div className="w-full h-[320px] flex items-center justify-center bg-slate-900 relative shrink-0">
               <img src={IMG.longTailSafety.local} onError={(e) => { e.currentTarget.src = IMG.longTailSafety.fallback; }} alt={c.motivation.safetyTitle} className="max-w-full max-h-full object-contain object-center" />
               <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30">
                 <AlertTriangle className="w-4 h-4 text-blue-400" />
                 <span className="text-sm font-medium text-blue-300">{c.motivation.safetyBadge}</span>
               </div>
            </div>
            <div className="p-8 md:p-10 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-8 h-8 text-blue-400 shrink-0" aria-hidden />
                <h3 className="text-2xl font-bold text-white md:whitespace-nowrap">{c.motivation.safetyTitle}</h3>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">{c.motivation.safetyDesc}</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" aria-hidden /><span>{c.motivation.safetyLi1}</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" aria-hidden /><span>{c.motivation.safetyLi2}</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" aria-hidden /><span>{c.motivation.safetyLi3}</span></li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-red-500/50 transition-colors duration-500">
            <div className="w-full h-[320px] flex items-center justify-center bg-slate-900 relative shrink-0">
               <img src={IMG.securityAttack.local} onError={(e) => { e.currentTarget.src = IMG.securityAttack.fallback; }} alt={c.motivation.securityTitle} className="max-w-full max-h-full object-contain object-center" />
               <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/30">
                 <Zap className="w-4 h-4 text-red-400" />
                 <span className="text-sm font-medium text-red-300">{c.motivation.securityBadge}</span>
               </div>
            </div>
            <div className="p-8 md:p-10 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-400 shrink-0" aria-hidden />
                <h3 className="text-2xl font-bold text-white md:whitespace-nowrap">{c.motivation.securityTitle}</h3>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">{c.motivation.securityDesc}</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" aria-hidden /><span>{c.motivation.securityLi1}</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" aria-hidden /><span>{c.motivation.securityLi2}</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" aria-hidden /><span>{c.motivation.securityLi3}</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE INNOVATION - Architecture */}
      <section id="architecture" className="py-24 bg-slate-900/80 border-y border-slate-800 relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{c.innovation.heading}</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{c.innovation.sub}</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto bg-slate-950/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl mb-16 overflow-hidden">
            <img
              src="/projects/autonomous-validation/unified-shield-framework.png"
              alt={c.innovation.heading}
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Server className="w-4 h-4 text-blue-400"/> {c.innovation.silTitle}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{c.innovation.silDesc}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Cpu className="w-4 h-4 text-indigo-400"/> {c.innovation.hilTitle}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{c.innovation.hilDesc}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Car className="w-4 h-4 text-green-400"/> {c.innovation.vilTitle}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{c.innovation.vilDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL CAPABILITIES */}
      <section ref={capabilitiesSectionRef} className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{c.capabilities.heading}</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">{c.capabilities.sub}</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 ring-1 ring-white/10 aspect-video">
               <video ref={video1Ref} src={VIDEO_SRC.aiScenarios} poster={IMG.aiScenarios.local} loop muted playsInline className="w-full h-full object-contain bg-slate-900" aria-label={c.capabilities.feat1Title} />
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay pointer-events-none" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">{c.capabilities.feat1Badge}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">{c.capabilities.feat1Title}</h3>
            <p className="text-lg text-slate-400 leading-relaxed">{c.capabilities.feat1Desc}</p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-slate-800 p-1 rounded text-blue-400"><Network className="w-4 h-4"/></div>
                <span>{c.capabilities.feat1Li1}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-slate-800 p-1 rounded text-blue-400"><Cpu className="w-4 h-4"/></div>
                <span>{c.capabilities.feat1Li2}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">{c.capabilities.feat2Badge}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">{c.capabilities.feat2Title}</h3>
            <p className="text-lg text-slate-400 leading-relaxed">{c.capabilities.feat2Desc}</p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-slate-800 p-1 rounded text-indigo-400"><Target className="w-4 h-4"/></div>
                <span>{c.capabilities.feat2Li1}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-slate-800 p-1 rounded text-indigo-400"><Zap className="w-4 h-4"/></div>
                <span>{c.capabilities.feat2Li2}</span>
              </li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/20 ring-1 ring-white/10 aspect-video">
               <video ref={video2Ref} src={VIDEO_SRC.mixedReality} poster={IMG.mixedReality.local} loop muted playsInline className="w-full h-full object-contain bg-slate-900" aria-label={c.capabilities.feat2Title} />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20 ring-1 ring-white/10 aspect-video">
               <video ref={video3Ref} src={VIDEO_SRC.fullScalePrototypes} poster={IMG.fullScalePrototypes.local} loop muted playsInline className="w-full h-full object-contain bg-slate-900" aria-label={c.capabilities.feat3Title} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">{c.capabilities.feat3Badge}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">{c.capabilities.feat3Title}</h3>
            <p className="text-lg text-slate-400 leading-relaxed">{c.capabilities.feat3Desc}</p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-slate-800 p-1 rounded text-green-400"><Car className="w-4 h-4"/></div>
                <span>{c.capabilities.feat3Li1}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-slate-800 p-1 rounded text-green-400"><Target className="w-4 h-4"/></div>
                <span>{c.capabilities.feat3Li2}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. IMPACT & ALLIANCES */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{c.impact.heading}</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{c.impact.sub}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800/60 bg-slate-950/60 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl mb-20 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center p-10 md:p-12 hover:bg-slate-800/30 transition-colors duration-500">
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 border border-yellow-500/20">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">{c.impact.stat1Title}</h3>
              <p className="text-slate-300 font-semibold text-lg mb-1">{c.impact.stat1Sub}</p>
              <p className="text-sm text-slate-500 text-center">{c.impact.stat1Desc}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-10 md:p-12 hover:bg-slate-800/30 transition-colors duration-500">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">{c.impact.stat2Title}</h3>
              <p className="text-slate-300 font-semibold text-lg mb-1">{c.impact.stat2Sub}</p>
              <p className="text-sm text-slate-500 text-center">{c.impact.stat2Desc}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-10 md:p-12 hover:bg-slate-800/30 transition-colors duration-500">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">{c.impact.stat3Title}</h3>
              <p className="text-slate-300 font-semibold text-lg mb-1">{c.impact.stat3Sub}</p>
              <p className="text-sm text-slate-500 text-center">{c.impact.stat3Desc}</p>
            </div>
          </motion.div>

          <div className="text-center bg-slate-950/50 rounded-3xl p-10 border border-slate-800">
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-8 font-bold">{c.impact.supportedBy}</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {['CAERI (中国汽研)', 'DiDi (滴滴)', 'Geely (吉利)', 'JAC (江淮)', 'Dongfeng (东风)', 'GAC (广汽)', 'Foxconn', 'KMB'].map((partner, idx) => (
                <span key={idx} className="px-6 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-300 font-semibold shadow-sm cursor-default">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS PLAN & APPLICATION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{c.business.heading}</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{c.business.sub}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Target className="text-blue-500 w-8 h-8" /> {c.business.targetTitle}
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-6 items-start bg-slate-900/40 p-6 rounded-2xl border border-slate-800/50 hover:bg-slate-900 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20"><Shield className="text-blue-400 w-7 h-7" /></div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">{c.business.seg1Title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.business.seg1Desc}</p>
                </div>
              </li>
              <li className="flex gap-6 items-start bg-slate-900/40 p-6 rounded-2xl border border-slate-800/50 hover:bg-slate-900 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20"><Car className="text-red-400 w-7 h-7" /></div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">{c.business.seg2Title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.business.seg2Desc}</p>
                </div>
              </li>
              <li className="flex gap-6 items-start bg-slate-900/40 p-6 rounded-2xl border border-slate-800/50 hover:bg-slate-900 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20"><Users className="text-green-400 w-7 h-7" /></div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">{c.business.seg3Title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.business.seg3Desc}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2 text-center">{c.business.chartTitle}</h3>
            <p className="text-sm text-slate-500 text-center mb-8">{c.business.chartSub}</p>
            <div className="h-80 min-h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%" minHeight={200}>
                <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="year" stroke="#94a3b8" tick={{fill: '#94a3b8'}} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8'}} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{fill: '#1e293b'}} 
                    contentStyle={{backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '12px', padding: '12px'}} 
                    itemStyle={{color: '#e2e8f0', paddingBottom: '4px'}}
                  />
                  <Legend wrapperStyle={{paddingTop: '20px'}} />
                  <Bar dataKey="GovGrants" stackId="a" fill="#ef4444" name={c.business.chartGovGrants} radius={[0, 0, 4, 4]} maxBarSize={60} />
                  <Bar dataKey="Education" stackId="a" fill="#f59e0b" name={c.business.chartEducation} maxBarSize={60} />
                  <Bar dataKey="Enterprise" stackId="a" fill="#3b82f6" name={c.business.chartEnterprise} radius={[4, 4, 0, 0]} maxBarSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-12 text-center">{c.business.streamsTitle}</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/20">
                <Server className="text-blue-400 w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white">{c.business.rev1Title}</h4>
            </div>
            <p className="text-blue-400 text-xs font-bold tracking-widest mb-6 uppercase">{c.business.rev1Tag}</p>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">{c.business.rev1Desc}</p>
            <ul className="space-y-4 text-slate-300 mb-8 flex-1 text-sm">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> {c.business.rev1Li1}</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> {c.business.rev1Li2}</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> {c.business.rev1Li3}</li>
            </ul>
            <div className="border-t border-slate-800 pt-6 mt-auto">
              <p className="text-white font-bold text-xl">{c.business.rev1Price} <span className="text-slate-500 text-sm font-normal">/ license / yr</span></p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-red-500/20">
                <Shield className="text-red-400 w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white">{c.business.rev2Title}</h4>
            </div>
            <p className="text-red-400 text-xs font-bold tracking-widest mb-6 uppercase">{c.business.rev2Tag}</p>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">{c.business.rev2Desc}</p>
            <ul className="space-y-4 text-slate-300 mb-8 flex-1 text-sm">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" /> {c.business.rev2Li1}</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" /> {c.business.rev2Li2}</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" /> {c.business.rev2Li3}</li>
            </ul>
            <div className="border-t border-slate-800 pt-6 mt-auto">
              <p className="text-white font-bold text-xl">{c.business.rev2Price} <span className="text-slate-500 text-sm font-normal">/ vehicle model</span></p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-yellow-500/20">
                <BookOpen className="text-yellow-400 w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white">{c.business.rev3Title}</h4>
            </div>
            <p className="text-yellow-400 text-xs font-bold tracking-widest mb-6 uppercase">{c.business.rev3Tag}</p>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">{c.business.rev3Desc}</p>
            <ul className="space-y-4 text-slate-300 mb-8 flex-1 text-sm">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" /> {c.business.rev3Li1}</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" /> {c.business.rev3Li2}</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" /> {c.business.rev3Li3}</li>
            </ul>
            <div className="border-t border-slate-800 pt-6 mt-auto">
              <p className="text-white font-bold text-xl">{c.business.rev3Price} <span className="text-slate-500 text-sm font-normal">/ school / yr</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER / CTA */}
      <footer className="bg-slate-950 border-t border-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{c.footer.heading}</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">{c.footer.sub}</p>
          <Link
            href="/about"
            className="inline-block bg-white text-slate-900 hover:bg-slate-200 font-bold py-4 px-10 rounded-full transition-colors text-lg shadow-xl shadow-white/10"
          >
            {c.footer.cta}
          </Link>
          <div className="mt-20 pt-8 border-t border-slate-800/50 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>{c.footer.copyright}</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-white transition-colors">{c.footer.privacy}</Link>
              <a href={PI_CONFIG.researchPublicationsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{c.footer.publications}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
