'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Quote } from 'lucide-react';

type Founder = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

const FOUNDERS: Founder[] = [
  {
    name: 'Имя Фамилия',
    role: 'Председатель правления',
    quote:
      'Мы строили клинику с нуля и поняли: пока каждый бьётся в одиночку, отрасль не сдвинется.',
    initials: 'ИФ',
  },
  {
    name: 'Имя Фамилия',
    role: 'Член попечительского совета',
    quote:
      'Инвестировать в медицину — значит инвестировать в страну. Это не лозунг, это бухгалтерия.',
    initials: 'ИФ',
  },
  {
    name: 'Имя Фамилия',
    role: 'Руководитель раб. группы «Финансы»',
    quote:
      'Тарифы ОСМС, лизинг оборудования, налоги — это не «бухгалтерия», это судьба клиник.',
    initials: 'ИФ',
  },
  {
    name: 'Имя Фамилия',
    role: 'Руководитель раб. группы «Кадры»',
    quote:
      'Главный дефицит не денег, а специалистов. И его решает только сообщество.',
    initials: 'ИФ',
  },
  {
    name: 'Имя Фамилия',
    role: 'CMO сети клиник',
    quote:
      'Стандарты, которым доверяет пациент, можно ввести только сообща. По одному это слишком дорого.',
    initials: 'ИФ',
  },
  {
    name: 'Имя Фамилия',
    role: 'CFO холдинга',
    quote:
      'Когда регулятор слышит одну клинику — это шум. Когда слышит Альянс — это диалог.',
    initials: 'ИФ',
  },
];

export function Founders() {
  return (
    <section id="founders" className="py-24 md:py-32">
      <div className="container-mia">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="num mb-3">03 / ИСТОРИИ</p>
            <h2 className="h-section max-w-2xl">
              Те, кто стоял у истоков Альянса
            </h2>
          </div>
          <p className="max-w-md text-mia-ink/75">
            Шесть из десятков голосов. Их пути разные — кардиология, лаборатории, лизинг
            оборудования, страхование — но все пришли к одной мысли: вместе сильнее.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOUNDERS.map((f, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-mia-graphite-deep text-mia-yellow flex items-center justify-center font-display font-bold text-lg">
                  {f.initials}
                </div>
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
