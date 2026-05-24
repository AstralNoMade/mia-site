'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { NEWS, type NewsCategory } from '@/lib/content';

const TABS: { id: NewsCategory; label: string }[] = [
  { id: 'kz', label: 'Казахстан' },
  { id: 'world', label: 'World' },
  { id: 'reg', label: 'Regulation' },
];

export function News() {
  const [tab, setTab] = useState<NewsCategory>('kz');

  return (
    <section id="news" className="py-24 md:py-32 bg-mia-bg-soft">
      <div className="container-mia">
        <p className="num mb-3">10 / НОВОСТИ</p>
        <h2 className="h-section mb-10 max-w-3xl">Новостная лента Альянса</h2>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-mia-ink/15">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-3 mono text-xs uppercase tracking-widest transition-colors relative ${
                tab === t.id ? 'text-mia-red' : 'text-mia-ink/60 hover:text-mia-ink'
              }`}
            >
              {t.label}
              {tab === t.id && (
                <motion.span
                  layoutId="news-underline"
                  className="absolute -bottom-px left-0 right-0 h-0.5 bg-mia-red"
                />
              )}
            </button>
          ))}
        </div>

        <ul className="divide-y divide-mia-ink/10">
          <AnimatePresence mode="wait">
            {NEWS[tab].map((n) => (
              <motion.li
                key={`${tab}-${n.title}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <a
                  href="#"
                  className="grid grid-cols-[110px_1fr_auto] items-center gap-4 py-5 group"
                >
                  <span className="mono text-xs text-mia-ink/55">{n.date}</span>
                  <span className="font-display text-lg md:text-xl font-bold leading-snug transition-all group-hover:text-mia-red group-hover:translate-x-1">
                    {n.title}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-mia-ink/40 group-hover:text-mia-red transition-colors"
                  />
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 flex flex-col sm:flex-row gap-3 max-w-xl"
        >
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-full bg-mia-bg border border-black/10 focus-within:border-mia-red transition-colors">
            <Mail size={16} className="text-mia-ink/55" />
            <input
              type="email"
              required
              placeholder="ваш email для дайджеста"
              className="flex-1 bg-transparent focus:outline-none text-sm"
            />
          </div>
          <button type="submit" className="btn-primary">
            Подписаться
          </button>
        </form>
      </div>
    </section>
  );
}
