'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PROBLEMS = [
  {
    code: '01 / FIN',
    title: 'Финансы',
    sub: 'Налоги, ОСМС-тарифы, лизинг, доступ к финансированию',
  },
  {
    code: '02 / REG',
    title: 'Регуляторика',
    sub: 'Лицензирование, проверки, изменения в законодательстве',
  },
  {
    code: '03 / HR',
    title: 'Кадры',
    sub: 'Дефицит врачей, релокация, обучение',
  },
  {
    code: '04 / EQU',
    title: 'Равные условия',
    sub: 'Доступ к ОСМС-пакетам, тарифная политика',
  },
  {
    code: '05 / OPS',
    title: 'Операционка',
    sub: 'Закупки, ремонт оборудования, МИС, IT',
  },
  {
    code: '06 / MKT',
    title: 'Маркетинг',
    sub: 'Ограничения рекламы медуслуг, репутация',
  },
  {
    code: '07 / LAW',
    title: 'Юридические риски',
    sub: 'Иски пациентов, страхование, врачебная тайна',
  },
  {
    code: '08 / CORP',
    title: 'Корпоративные конфликты',
    sub: 'Споры совладельцев, выход, оценка, наследование',
  },
];

export function Problems() {
  return (
    <section id="problems" className="py-24 md:py-32 bg-mia-bg">
      <div className="container-mia">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="num mb-3">04 / ПРОБЛЕМЫ</p>
            <h2 className="h-section max-w-3xl">
              8 категорий боли, которые знает каждый собственник клиники
            </h2>
          </div>
          <p className="max-w-md text-mia-ink/75">
            Каждая боль — это рабочая группа Альянса. Каждое решение — это вклад в общий
            опыт сообщества.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-mia-ink/10 rounded-3xl overflow-hidden">
          {PROBLEMS.map((p, i) => (
            <motion.a
              key={p.code}
              href="#join"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="bg-mia-bg-soft p-7 md:p-8 flex flex-col group hover:bg-mia-yellow-soft transition-colors duration-300 min-h-[220px]"
            >
              <p className="mono text-xs tracking-widest text-mia-red mb-6">{p.code}</p>
              <h3 className="font-display font-bold text-2xl leading-tight mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-mia-ink/70 leading-relaxed flex-1">{p.sub}</p>
              <span className="mt-6 inline-flex items-center gap-2 mono text-[11px] uppercase tracking-widest text-mia-ink/60 group-hover:text-mia-red group-hover:gap-3 transition-all">
                Подробнее <ArrowRight size={12} />
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 p-8 md:p-10 rounded-3xl bg-mia-red text-mia-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-display text-xl md:text-2xl leading-snug max-w-2xl">
            РОО МИА уже работает над каждой из этих категорий.
            <br />
            <span className="opacity-80">Присоединяйтесь — решайте не в одиночку.</span>
          </p>
          <a href="#join" className="btn-ghost !border-white !text-white hover:!bg-white hover:!text-mia-red">
            Вступить в Альянс <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
