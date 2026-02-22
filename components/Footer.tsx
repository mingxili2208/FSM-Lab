'use client';

import Link from 'next/link';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const RESEARCH_SCHOLAR_URL = 'https://scholars.cityu.edu.hk/en/persons/jianwang/publications/';

const QUICK_LINKS: { key: 'nav.home' | 'nav.research' | 'nav.project' | 'nav.about'; href: string }[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.research', href: RESEARCH_SCHOLAR_URL },
  { key: 'nav.project', href: '/projects' },
  { key: 'nav.about', href: '/about' },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  const copyright = t('footer.copyright').replace('{year}', String(year));
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950 safe-area-inset-bottom">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-5">
            <h2 className="text-lg font-semibold tracking-tight text-white">
              {t('footer.labName')}
            </h2>
            <p className="text-sm leading-relaxed text-white/90">
              {t('footer.department')}
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/90 transition-colors hover:bg-indigo-500 hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/90 transition-colors hover:bg-indigo-500 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:fsmlab2025@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/90 transition-colors hover:bg-indigo-500 hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-base font-bold text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm text-white/90">
              {QUICK_LINKS.map(({ key, href }) => {
                const isExternal = href.startsWith('http');
                if (isExternal) {
                  return (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-indigo-400"
                      >
                        {t(key)}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={key}>
                    <Link href={href} className="transition-colors hover:text-indigo-400">
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-bold text-white">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-indigo-400" />
                {t('footer.address')}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-indigo-400" />
                <a
                  href="mailto:fsmlab2025@gmail.com"
                  className="transition-colors hover:text-indigo-400"
                >
                  fsmlab2025@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-slate-500">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
