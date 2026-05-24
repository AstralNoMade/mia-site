'use client';

import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';

const TIERS = [
  {
    code: '01',
    name: 'Standard',
    subtitle: 'Обычное членство',
    price: 'до 1 000 000 ₸ / год',
    cta: 'Оплатить онлайн',
    access: 'open',
    accent: 'bg-mia-bg-soft text-mia-ink',
    perks: [
      'Закрытый чат сообщества',
      'Доступ к базе кейсов',
      'Юридические консультации',
      'Участие в ивентах',
      'Партнёрские скидки',
    ],
  },
  {
    code: '02',
    name: 'VIP',
    subtitle: 'Расширенное членство',
    price: '1 000 000 – 4 999 999 ₸ / год',
    cta: 'Оплатить онлайн',
    access: 'open',
    accent: 'bg-mia-yellow text-mia-ink',
    perks: [
      'Всё из Standard',
      'Закрытая аналитика рынка',
      'Приоритет в правовой защите',
      'VIP-зоны на ивентах',
      'Логотип компании на сайте',
      'Голос в рабочих группах',
    ],
  },
  {
    code: '03',
    name: 'Стратегический клуб',
    subtitle: 'Инвесторов · 20 мест',
    price: 'от 5 000 000 ₸ / год',
    cta: 'Подать заявку',
    access: 'apply',
    accent: 'bg-mia-graphite-deep text-mia-bg-soft',
    perks: [
      'Всё из VIP',
      'Место в попечительском совете',
      'Прямой канал к правлению',
      'Закрытые встречи с регуляторами',
      'Доступ к private deal flow',
      'Персональный куратор',
    ],
  },
  {
    code: '04',
    name: 'Суперпакет',
    subtitle: 'By invitation only',
    price: 'от 20 000 000 ₸ / год',
    cta: 'По приглашению',
    access: 'invite',
    accent: 'bg-mia-red text-mia-white',
    perks: [
      'Всё из Стратегического клуба',
      'Полное юр. сопровождение бизнеса',
      'GR-сопровождение',
      'Кризис-команда 24/7',
      'Due diligence сделок M&A',
      'Имя в составе учредителей фондов Альянса',
    ],
  },
];

const METHODS = [
  { name: 'Kaspi Pay', note: 'физлица, 90%+ рынка РК' },
  { name: 'Halyk ePay', note: 'карты Halyk и др.' },
  { name: 'Банковский перевод', note: 'VIP+, обязательно для Strategic Club' },
  { name: 'Stripe', note: 'иностранные карты' },
];

export function Tiers() {
  return (
    <section id="tiers" className="py-24 md:py-32">
      <div className="container-mia">
        <p className="num mb-3">07 / УРОВНИ</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-section max-w-3xl mb-4"
        >
          Четыре уровня участия в Альянсе
        </motion.h2>
        <p className="text-mia-ink/70 max-w-2xl mb-14">
          От стандартного членства до закрытого клуба стратегических инвесторов. Привилегии
          растут — но миссия у всех одна.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {TIERS.map((t, i) => (
            <motion.article
              key={t.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-3xl p-7 md:p-8 flex flex-col ${t.accent} relative overflow-hidden`}
            >
              <span className="mono text-xs uppercase tracking-widest opacity-70">
                {t.code} / уровень
              </span>
              <h3 className="font-display font-black text-3xl md:text-4xl leading-tight mt-3">
                {t.name}
              </h3>
              <p className="mt-1 text-sm opacity-75">{t.subtitle}</p>

              <p className="mt-6 font-display text-lg font-bold">{t.price}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-snug">
                    <Check size={16} className="shrink-0 mt-0.5 opacity-80" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#join"
                className={`mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full mono text-xs uppercase tracking-widest transition-colors ${
                  t.access === 'invite'
                    ? 'bg-white/15 cursor-not-allowed'
                    : 'bg-black/15 hover:bg-black/30'
                } ${t.accent.includes('text-mia-ink') ? '!bg-mia-ink !text-mia-bg-soft hover:!bg-black' : ''}`}
              >
                {t.access === 'invite' && <Lock size={12} />}
                {t.cta}
              </a>
            </motion.article>
          ))}
        </div>

        {/* Payment methods */}
        <div className="mt-16 p-7 md:p-10 rounded-3xl bg-mia-bg-soft border border-black/5">
          <p className="num mb-4">Платёжные методы</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {METHODS.map((m) => (
              <div key={m.name} className="border-t border-black/10 pt-4">
                <p className="font-display font-bold text-lg">{m.name}</p>
                <p className="text-sm text-mia-ink/65 mt-1">{m.note}</p>
              </div>
            ))}
          </div>
          <p className="mono text-xs text-mia-ink/55 mt-6">
            * 3D Secure обязательно. Данные карт не хранятся на стороне сайта.
          </p>
        </div>
      </div>
    </section>
  );
}
