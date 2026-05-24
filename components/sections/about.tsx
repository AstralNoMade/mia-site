'use client';

import { motion } from 'framer-motion';

const GOALS = [
  'Защита прав и интересов собственников медицинского бизнеса',
  'Развитие здоровой конкурентной среды в отрасли',
  'Формирование единых стандартов корпоративной культуры клиник',
  'Лоббирование интересов отрасли на государственном уровне',
  'Поддержка инвестиций в качество и доступность медпомощи',
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-mia-bg-soft">
      <div className="container-mia">
        <p className="num mb-3">02 / О АЛЬЯНСЕ</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-display max-w-5xl mb-16"
        >
          Капитал должен{' '}
          <span className="italic font-serif font-normal text-mia-red">созидать</span>,
          а не просто <span className="strike">приумножаться</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Миссия — жёлтый */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 md:p-10 bg-mia-yellow"
          >
            <p className="mono text-xs uppercase tracking-widest mb-5">01 — миссия</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-5">
              Объединить тех, кто строит медицину Казахстана
            </h3>
            <p className="leading-relaxed">
              МИА — площадка, где собственники клиник, инвесторы и топ-менеджеры медицинских
              сетей действуют как одно сообщество. Мы вместе формируем повестку отрасли,
              решаем общие проблемы и выстраиваем стандарты, которым доверяет пациент.
            </p>
          </motion.div>

          {/* Цели — светлый */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-8 md:p-10 bg-mia-bg border border-black/5"
          >
            <p className="mono text-xs uppercase tracking-widest mb-5 text-mia-red">02 — цели</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-6">
              5 стратегических задач
            </h3>
            <ol className="space-y-3">
              {GOALS.map((g, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mono text-xs text-mia-red shrink-0 pt-1">
                    0{i + 1}
                  </span>
                  <span className="leading-snug">{g}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Структура — графит */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl p-8 md:p-10 bg-mia-graphite-deep text-mia-bg-soft"
          >
            <p className="mono text-xs uppercase tracking-widest mb-5 text-mia-yellow">
              03 — структура
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-5">
              Прозрачное управление
            </h3>
            <ul className="space-y-4 text-mia-bg-soft/85">
              <li>
                <strong className="text-mia-yellow">Правление</strong> — оперативное
                руководство, утверждается общим собранием на 2 года.
              </li>
              <li>
                <strong className="text-mia-yellow">Попечительский совет</strong> —
                стратегические инвесторы и лидеры мнений отрасли.
              </li>
              <li>
                <strong className="text-mia-yellow">Рабочие группы</strong> — финансы,
                регуляторика, кадры, IT, маркетинг, юр-защита.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
