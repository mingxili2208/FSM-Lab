'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LOCALE_LABELS, type LocaleCode } from '@/lib/i18n/types';

const LOCALE_ORDER: LocaleCode[] = ['zh', 'en', 'fr', 'ru', 'es', 'ar'];

const RESEARCH_SCHOLAR_URL = 'https://scholars.cityu.edu.hk/en/persons/jianwang/publications/';

const NAV_ITEMS: { key: 'nav.home' | 'nav.research' | 'nav.project' | 'nav.about'; href: string }[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.research', href: RESEARCH_SCHOLAR_URL },
  { key: 'nav.project', href: '/projects' },
  { key: 'nav.about', href: '/about' },
];

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [dropdownRect, setDropdownRect] = useState<{ top: number; right: number } | null>(null);

  useEffect(() => setMounted(true), []);

  // 打开时根据按钮位置计算下拉框的 fixed 位置
  useEffect(() => {
    if (!langOpen || !langRef.current) {
      setDropdownRect(null);
      return;
    }
    const updatePos = () => {
      if (!langRef.current) return;
      const r = langRef.current.getBoundingClientRect();
      setDropdownRect({
        top: r.bottom + 8,
        right: document.documentElement.clientWidth - r.right,
      });
    };
    updatePos();
    window.addEventListener('scroll', updatePos, true);
    window.addEventListener('resize', updatePos);
    return () => {
      window.removeEventListener('scroll', updatePos, true);
      window.removeEventListener('resize', updatePos);
    };
  }, [langOpen]);

  // 点击外部关闭（延迟绑定；下拉在 portal 里，需同时排除按钮和下拉框内部）
  useEffect(() => {
    if (!langOpen) return;
    const close = (e: MouseEvent) => {
      const el = e.target as Node;
      if (langRef.current?.contains(el)) return;
      if (document.querySelector('[data-lang-dropdown]')?.contains(el)) return;
      setLangOpen(false);
    };
    const t = setTimeout(() => document.addEventListener('mousedown', close), 50);
    return () => {
      clearTimeout(t);
      document.removeEventListener('mousedown', close);
    };
  }, [langOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 isolate glass-panel border-b border-slate-200/80 safe-area-inset-top overflow-visible">
      <nav className="relative mx-auto flex h-14 min-h-[44px] max-w-7xl items-center justify-between gap-2 px-4 sm:h-16 sm:px-6 lg:px-8 overflow-visible">
        {/* 左侧：Logo + 全称（Times New Roman） */}
        <div className="flex min-w-0 shrink items-center gap-3 sm:gap-4">
          <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg shrink-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/fsmlab_logo3.png`}
              alt="FSM Lab"
              width={160}
              height={40}
              className="h-8 w-auto max-w-[140px] object-contain object-left sm:h-9 sm:max-w-[160px]"
              priority
              unoptimized
            />
          </Link>
          <span className="hidden font-serif text-black font-semibold tracking-tight sm:block sm:text-lg">
            Future Smart Mobility Lab
          </span>
        </div>

        {/* 桌面端：导航链接绝对居中 */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-6 sm:flex">
          {NAV_ITEMS.map(({ key, href }) => {
            const isExternal = href.startsWith('http');
            const isActive = !isExternal && (pathname === href || (href !== '/' && pathname.startsWith(href)));
            const linkClass = `font-serif text-lg font-medium transition ${isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`;
            if (isExternal) {
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {t(key)}
                </a>
              );
            }
            return (
              <Link key={key} href={href} className={linkClass}>
                {t(key)}
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setLangOpen((v) => !v);
              }}
              onClick={(e) => e.preventDefault()}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 text-sm text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50/80 sm:min-h-0 sm:min-w-0 sm:px-3"
              aria-expanded={langOpen ? 'true' : 'false'}
              aria-haspopup="listbox"
              aria-label={t('aria.switchLanguage')}
            >
              <Globe className="h-4 w-4 shrink-0 text-indigo-600" />
              <span className="hidden sm:inline">{LOCALE_LABELS[locale]}</span>
              <ChevronDown
                className={`hidden shrink-0 transition sm:block ${langOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mounted && langOpen && dropdownRect && typeof document !== 'undefined' && createPortal(
              <ul
                role="listbox"
                data-lang-dropdown
                className="fixed z-[99999] w-40 rounded-xl border border-slate-200 bg-white py-1 shadow-xl"
                style={{
                  top: dropdownRect.top,
                  right: dropdownRect.right,
                }}
              >
                {LOCALE_ORDER.map((code) => (
                  <li
                    key={code}
                    role="option"
                    aria-selected={locale === code ? 'true' : 'false'}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setLocale(code);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-4 py-3 text-left text-sm transition touch-manipulation sm:py-2 ${
                        locale === code
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {LOCALE_LABELS[code]}
                    </button>
                  </li>
                ))}
              </ul>,
              document.body
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50/80 sm:hidden"
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            aria-label={mobileMenuOpen ? t('aria.closeMenu') : t('aria.openMenu')}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* 移动端：可点击的导航菜单 */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur sm:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map(({ key, href }) => {
                const isExternal = href.startsWith('http');
                const isActive = !isExternal && (pathname === href || (href !== '/' && pathname.startsWith(href)));
                const linkClass = `block rounded-lg px-4 py-3 font-serif text-slate-700 transition hover:bg-slate-50 ${isActive ? 'bg-indigo-50 font-medium text-indigo-700' : ''}`;
                if (isExternal) {
                  return (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className={linkClass}
                      >
                        {t(key)}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={key}>
                    <Link
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={linkClass}
                    >
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
