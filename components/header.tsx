'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { href: '#about', label: 'О Альянсе' },
  { href: '#problems', label: 'Проблемы' },
  { href: '#benefits', label: 'Членство' },
  { href: '#tiers', label: 'Уровни' },
  { href: '#events', label: 'События' },
  { href: '#news', label: 'Новости' },
  { href: '#contact', label: 'Контакты' },
];

const LANGS = ['RU', 'ҚАЗ', 'EN'] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<(typeof LANGS)[number]>('RU');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-mia-bg/85 backdrop-blur-md border-b border-black/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-mia flex items-center justify-between py-3 md:py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="МИА — на главную">
          <Image
            src="/logo/logo_red.png"
            alt="МИА"
            width={120}
            height={48}
            className="h-10 w-auto md:h-11"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-sm tracking-wide">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden md:flex items-center gap-1 mono text-xs">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 transition-colors ${
                  lang === l ? 'text-mia-red' : 'text-mia-ink/60 hover:text-mia-ink'
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>
          <a href="#join" className="hidden md:inline-flex btn-primary !py-3 !px-5 !text-xs">
            Вступить
          </a>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-mia-bg border-t border-black/5">
          <nav className="container-mia flex flex-col py-4 gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-black/5 text-base"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 self-start"
            >
              Стать членом РОО
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
