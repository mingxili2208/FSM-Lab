'use client';

import { MapPin, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { PI_CONFIG } from '@/lib/home-content';

const LAB_EMAIL = 'fsmlab2025@gmail.com';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-8 shadow-sm sm:px-8">
        <h1 className="text-2xl font-semibold text-white sm:text-3xl">
          {t('about.pageTitle')}
        </h1>

        <div className="mt-6 space-y-4 text-slate-300">
          <p className="leading-relaxed">{t('about.intro')}</p>
          <p className="leading-relaxed">{t('about.mission')}</p>
        </div>

        <section id="contact" className="mt-10 border-t border-white/10 pt-8">
          <h2 className="text-lg font-semibold text-white">
            {t('about.contactHeading')}
          </h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0 text-indigo-400" />
              <span>
                <span className="text-slate-400">{t('about.addressLabel')}: </span>
                {t('footer.address')}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-indigo-400" />
              <span>
                <span className="text-slate-400">{t('about.emailLabel')}: </span>
                <a
                  href={`mailto:${LAB_EMAIL}`}
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  {LAB_EMAIL}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <ExternalLink size={18} className="shrink-0 text-indigo-400" />
              <a
                href={PI_CONFIG.homepageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                {t('about.piProfile')}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
