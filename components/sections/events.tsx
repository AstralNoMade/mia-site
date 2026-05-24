'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { EVENTS } from '@/lib/content';

const STATUS_STYLES: Record<string, string> = {
  Live: 'bg-mia-yellow text-mia-ink',
  Closed: 'bg-mia-graphite text-white',
  'Sold out': 'bg-mia-red text-white',
};

export function Events() {
  return (
    <section id="events" className="py-24 md:py-32 bg-mia-bg-soft">
      <div className="container-mia">
        <p className="num mb-3">08 / СОБЫТИЯ</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="h-section max-w-2xl">Ближайшие мероприятия</h2>
          <a href="#" className="mono text-xs uppercase tracking-widest text-mia-red flex items-center gap-2">
            Весь календарь <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EVENTS.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="font-display font-black text-5xl leading-none text-mia-red">
                    {e.date}
                  </p>
                  <p className="mono text-xs mt-1 text-mia-ink/55">{e.year}</p>
                </div>
                <span
                  className={`mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${STATUS_STYLES[e.status]}`}
                >
                  {e.status}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl leading-tight mb-3">
                {e.title}
              </h3>
              <p className="flex items-center gap-2 mono text-xs text-mia-ink/65 mb-4">
                <MapPin size={12} /> {e.place}
              </p>
              <p className="text-sm text-mia-ink/75 leading-relaxed flex-1">{e.desc}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 mono text-xs uppercase tracking-widest text-mia-red"
              >
                Программа и регистрация <ArrowRight size={12} />
              </a>
            </motion.article>
          ))}
        </div>

        <p className="mono text-xs text-mia-ink/55 mt-8 flex items-center gap-2">
          <Calendar size={12} /> Доступ к закрытым ивентам — через личный кабинет, по уровню членства.
        </p>
      </div>
    </section>
  );
}
