'use client';

import Link from 'next/link';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const QUICK_LINKS: { key: 'nav.home' | 'nav.research' | 'nav.project' | 'nav.about' | 'nav.contact'; href: string }[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.research', href: '/research' },
  { key: 'nav.project', href: '/projects' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.contact', href: '/contact' },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950 safe-area-inset-bottom">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-5">
            <h2 className="text-lg font-semibold tracking-tight text-white">
              Future Smart Mobility Lab
            </h2>
            <p className="text-sm leading-relaxed text-white/90">
              Department of Electrical Engineering,
              <br />
              City University of Hong Kong.
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
                href="mailto:jian.wang@cityu.edu.hk"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/90 transition-colors hover:bg-indigo-500 hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-base font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/90">
              {QUICK_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className="transition-colors hover:text-indigo-400">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-bold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-indigo-400" />
                Kowloon Tong, Hong Kong
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-indigo-400" />
                <a
                  href="mailto:jian.wang@cityu.edu.hk"
                  className="transition-colors hover:text-indigo-400"
                >
                  jian.wang@cityu.edu.hk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-slate-500">
          © {year} FSM Lab. All rights reserved. Designed for Innovation.
        </p>
      </div>
    </footer>
  );
}
