'use client';

import { motion } from 'framer-motion';
import { COMPANIES } from '@/lib/content';

export function Members() {
  return (
    <section id="members" className="py-24 md:py-32">
      <div className="container-mia">
        <p className="num mb-3">09 / КОМПАНИИ</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="h-section max-w-2xl">
            120+ клиник в составе Альянса
          </h2>
          <p className="max-w-md text-mia-ink/70">
            Логотипы публичных членов VIP и выше. Полный список — в личном кабинете.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-mia-ink/10 rounded-2xl overflow-hidden">
          {COMPANIES.map((c, i) => (
            <motion.button
              key={c.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
              className="bg-mia-bg-soft aspect-[3/2] p-4 flex flex-col items-center justify-center text-center transition-colors hover:bg-mia-yellow group"
            >
              <p className="font-display font-bold text-base leading-tight">{c.name}</p>
              <p className="mono text-[10px] uppercase tracking-widest text-mia-ink/55 mt-2 group-hover:text-mia-ink/80">
                {c.region}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
