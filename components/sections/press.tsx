'use client';

import { motion } from 'framer-motion';
import { Newspaper, Download } from 'lucide-react';

const MEDIA = [
  { name: 'Forbes Kazakhstan', quote: 'Альянс задаёт повестку частной медицины РК.' },
  { name: 'Kursiv', quote: 'Голос индустрии, который наконец слышно в министерствах.' },
  { name: 'Tengrinews', quote: 'Объединение, доказавшее что бизнес-сообщество может действовать сообща.' },
  { name: 'Vlast', quote: 'Редкий пример отраслевой самоорганизации в Казахстане.' },
];

export function Press() {
  return (
    <section id="press" className="py-24 md:py-32 bg-mia-graphite-deep text-mia-bg-soft">
      <div className="container-mia">
        <p className="num !text-mia-yellow mb-3">12 / ПРЕССА</p>
        <h2 className="h-section max-w-3xl mb-12">
          Альянс в СМИ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MEDIA.map((m, i) => (
            <motion.figure
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="border border-white/15 rounded-3xl p-7 md:p-8"
            >
              <Newspaper className="text-mia-yellow mb-4" size={24} />
              <blockquote className="font-serif italic text-lg md:text-xl leading-snug">
                «{m.quote}»
              </blockquote>
              <figcaption className="mt-5 mono text-xs uppercase tracking-widest text-mia-yellow">
                — {m.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 p-7 md:p-10 rounded-3xl bg-white/5 border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl mb-2">Для журналистов</h3>
            <p className="text-mia-bg-soft/80 max-w-xl">
              Пресс-кит, логотипы в высоком разрешении, фото мероприятий и контакты
              пресс-службы — в одном архиве.
            </p>
          </div>
          <a href="#" className="btn-ghost !border-mia-yellow !text-mia-yellow hover:!bg-mia-yellow hover:!text-mia-ink">
            <Download size={14} /> Скачать пресс-кит
          </a>
        </div>
      </div>
    </section>
  );
}
