'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, Building2 } from 'lucide-react';
import { TIERS, type Tier } from '@/lib/content';
import { PaymentDetails } from '@/components/payment-details';

export function Tiers() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

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

              <p className="mt-6 font-display text-lg font-bold">{t.priceLabel}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-snug">
                    <Check size={16} className="shrink-0 mt-0.5 opacity-80" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {t.access === 'invite' ? (
                <span className="mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full mono text-xs uppercase tracking-widest bg-white/15 cursor-not-allowed">
                  <Lock size={12} /> {t.cta}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedTier(t)}
                  className={`mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full mono text-xs uppercase tracking-widest transition-colors ${
                    t.accent.includes('text-mia-ink')
                      ? 'bg-mia-ink text-mia-bg-soft hover:bg-black'
                      : 'bg-black/15 hover:bg-black/30'
                  }`}
                >
                  <Building2 size={12} /> {t.cta}
                </button>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-16 p-7 md:p-10 rounded-3xl bg-mia-bg-soft border border-black/5 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="num mb-3">Способ оплаты</p>
            <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight mb-3">
              Банковский перевод по реквизитам РОО
            </h3>
            <p className="text-mia-ink/70 max-w-2xl leading-relaxed">
              Оплата производится в тенге на расчётный счёт РОО «МИА» в АО «Alatau City Bank».
              QR-код с реквизитами на карточке каждого уровня — отсканируйте в банковском
              приложении (Kaspi, Halyk, Forte) и переведите. После оплаты пришлите чек —
              мы вышлем счёт-фактуру и активируем членство.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSelectedTier(TIERS[0])}
            className="btn-primary whitespace-nowrap"
          >
            Реквизиты Standard
          </button>
        </div>
      </div>

      <PaymentDetails
        open={!!selectedTier}
        onClose={() => setSelectedTier(null)}
        tierName={selectedTier?.name ?? ''}
        amountKzt={selectedTier?.amountKzt ?? null}
      />
    </section>
  );
}
