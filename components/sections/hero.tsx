'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { asset } from '@/lib/asset';

const COUNTERS = [
  { value: '120+', label: 'клиник в составе' },
  { value: '5', label: 'лет деятельности' },
  { value: '300+', label: 'решённых кейсов' },
  { value: '14', label: 'регионов РК' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-32 pb-20 md:pb-24 min-h-[100svh] flex flex-col"
    >
      {/* Biomorphic decorative cross — right side, opacity .25 per PRD */}
      <div className="pointer-events-none absolute -right-20 top-32 hidden md:block opacity-25">
        <Image
          src={asset('/logo/logo_yellow.png')}
          alt=""
          width={680}
          height={680}
          className="w-[42rem] h-auto blur-[1px]"
        />
      </div>
      <div className="absolute -left-32 -bottom-32 w-[28rem] h-[28rem] rounded-full bg-mia-yellow-soft blob" />

      <div className="container-mia relative flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-mia-red mb-6 flex items-center gap-2"
          >
            <Sparkles size={14} /> # предприниматели с сердцем врача
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="h-display max-w-4xl"
          >
            Мы за <span className="italic font-serif font-normal text-mia-red">здоровую</span> нацию.
            Мы за <span className="italic font-serif font-normal text-mia-red">здоровое</span> сотрудничество.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mia-ink/80"
          >
            РОО «Медицинский Инвестиционный Альянс» — объединение собственников и инвесторов
            в медицину Казахстана. Мы не просто бизнесмены от медицины. Мы — предприниматели
            с сердцем врача.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#join" className="btn-primary">
              Стать членом РОО <ArrowRight size={16} />
            </a>
            <a href="#tiers" className="btn-ghost">
              Уровни членства
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="bg-mia-graphite-deep text-mia-yellow rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-mia-red/20 blur-2xl" />
            <p className="mono text-xs uppercase tracking-widest opacity-70 mb-5">
              из брендбука МИА
            </p>
            <blockquote className="font-serif italic text-2xl md:text-3xl leading-snug">
              «Инвестор инвестору — рознь.
              <br />
              Капитал должен <span className="not-italic font-bold">созидать</span>,
              а не просто приумножаться.»
            </blockquote>
            <p className="mt-6 mono text-xs opacity-70">основано в 2021 году</p>
          </div>
        </motion.aside>
      </div>

      {/* Counters */}
      <div className="container-mia relative mt-16 md:mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-mia-ink/10 rounded-2xl overflow-hidden">
          {COUNTERS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-mia-bg p-6 md:p-8"
            >
              <p className="h-display !text-4xl md:!text-5xl text-mia-red">{c.value}</p>
              <p className="mt-2 mono text-xs uppercase tracking-widest text-mia-ink/70">
                {c.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
