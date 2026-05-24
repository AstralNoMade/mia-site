'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Quote } from 'lucide-react';
import { asset } from '@/lib/asset';
import { FOUNDERS } from '@/lib/content';

export function Founders() {
  return (
    <section id="founders" className="py-24 md:py-32">
      <div className="container-mia">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="num mb-3">03 / ИСТОРИИ</p>
            <h2 className="h-section max-w-2xl">Те, кто стоял у истоков Альянса</h2>
          </div>
          <p className="max-w-md text-mia-ink/75">
            Шесть из десятков голосов. Их пути разные — кардиология, лаборатории, лизинг
            оборудования, страхование — но все пришли к одной мысли: вместе сильнее.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOUNDERS.map((f, i) => (
            <motion.article
              key={`${f.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                {f.photo ? (
                  <Image
                    src={asset(f.photo)}
                    alt={f.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover grayscale"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-mia-graphite-deep text-mia-yellow flex items-center justify-center font-display font-bold text-lg">
                    {f.initials}
                  </div>
                )}
                <div>
                  <p className="font-display font-bold text-lg leading-tight">{f.name}</p>
                  <p className="mono text-xs text-mia-ink/60 mt-1">{f.role}</p>
                </div>
              </div>
              <Quote size={22} className="text-mia-red mb-3" />
              <p className="font-serif italic leading-relaxed text-mia-ink/85 flex-1">
                «{f.quote}»
              </p>
              <button className="mt-6 inline-flex items-center gap-2 mono text-xs uppercase tracking-widest text-mia-red group-hover:gap-3 transition-all">
                Прочитать полную историю <ArrowUpRight size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
