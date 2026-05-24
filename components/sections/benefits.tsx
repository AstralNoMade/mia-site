'use client';

import { motion } from 'framer-motion';

const BENEFITS = [
  {
    title: 'Закрытое сообщество',
    desc: 'Telegram-чат собственников и инвесторов с модерируемой повесткой и быстрой взаимопомощью.',
  },
  {
    title: 'Юридическая защита',
    desc: 'Горячая линия Альянса — реакция на иски и проверки в течение суток.',
  },
  {
    title: 'Аналитика рынка',
    desc: 'Закрытые отчёты: тарифы ОСМС, M&A, кадры, оборудование, регионы.',
  },
  {
    title: 'Лоббирование интересов',
    desc: 'Прямой канал с регуляторами. Единая позиция отрасли по ключевым НПА.',
  },
  {
    title: 'Партнёрские скидки',
    desc: 'МИС, лабораторное и диагностическое оборудование, страхование, лизинг.',
  },
  {
    title: 'Эксклюзивные ивенты',
    desc: 'Закрытые встречи, поездки, индустриальные форумы и нетворкинг-сессии.',
  },
  {
    title: 'База кейсов',
    desc: 'Реальные истории решений: от ремонта МРТ до выхода из корпоративных тупиков.',
  },
  {
    title: 'Менторская программа',
    desc: 'Молодые управленцы получают доступ к опыту тех, кто уже прошёл этот путь.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-mia-graphite-deep text-mia-bg-soft relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-mia-yellow/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-mia-red/15 blur-3xl pointer-events-none" />

      <div className="container-mia relative">
        <p className="num !text-mia-yellow mb-3">05 / ЧЛЕНСТВО</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-section max-w-3xl mb-16"
        >
          8 причин стать{' '}
          <span className="text-mia-yellow italic font-serif font-normal">членом Альянса</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              className="border-t border-white/15 pt-6"
            >
              <p className="font-display font-black text-5xl md:text-6xl text-mia-yellow leading-none mb-5">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display font-bold text-xl mb-3">{b.title}</h3>
              <p className="text-sm text-mia-bg-soft/75 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
