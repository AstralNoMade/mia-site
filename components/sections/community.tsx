'use client';

import { motion } from 'framer-motion';
import { Trophy, Clock } from 'lucide-react';

const WISDOM = [
  '«Самый сложный пациент — это твой совладелец.»',
  '«Сначала тариф, потом этика — учили нас в институте. Жизнь распорядилась наоборот.»',
  '«У клиники всегда два бухучёта: один — для налоговой, второй — для совести.»',
  '«Лучший маркетинг частной медицины — это очередь в государственной.»',
];

const CONTESTS = [
  {
    title: 'Кейс года',
    deadline: '30.09.2026',
    prize: '5 000 000 ₸ + публикация в годовом отчёте',
  },
  {
    title: 'Молодой управленец',
    deadline: '15.10.2026',
    prize: 'Стажировка у топ-менеджеров Альянса',
  },
  {
    title: 'Лучшая клиника года',
    deadline: '01.11.2026',
    prize: 'Главный приз — статуэтка МИА + 10 000 000 ₸',
  },
];

export function Community() {
  return (
    <section id="community" className="py-24 md:py-32">
      <div className="container-mia">
        <p className="num mb-3">11 / СООБЩЕСТВО</p>
        <h2 className="h-section max-w-3xl mb-12">
          Народная мудрость и большие конкурсы
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Юмор */}
          <div className="bg-mia-yellow rounded-3xl p-8 md:p-10">
            <p className="mono text-xs uppercase tracking-widest mb-6">
              Народная мудрость собственников клиник
            </p>
            <ul className="space-y-5">
              {WISDOM.map((q, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="font-serif italic text-lg md:text-xl leading-snug border-l-2 border-mia-ink/30 pl-5"
                >
                  {q}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Конкурсы */}
          <div className="space-y-4">
            <p className="mono text-xs uppercase tracking-widest text-mia-red mb-2">
              Действующие конкурсы
            </p>
            {CONTESTS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card flex items-start gap-5"
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-mia-red text-white flex items-center justify-center">
                  <Trophy size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl leading-tight">{c.title}</h3>
                  <p className="mt-1 mono text-xs flex items-center gap-2 text-mia-ink/60">
                    <Clock size={12} /> дедлайн {c.deadline}
                  </p>
                  <p className="mt-3 text-sm text-mia-ink/75 leading-relaxed">{c.prize}</p>
                </div>
                <a href="#" className="btn-ghost !py-2 !px-4 !text-[10px]">
                  Подать
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
