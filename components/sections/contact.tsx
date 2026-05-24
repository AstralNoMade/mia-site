'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, MessageCircle, Check } from 'lucide-react';

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-mia-bg">
      <div className="container-mia">
        <p className="num mb-3">13 / КОНТАКТЫ</p>
        <h2 className="h-section max-w-3xl mb-12">Связаться с Альянсом</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* QR + контакты */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <QrCard label="WhatsApp" handle="+7 700 000 00 00" icon={<MessageCircle size={18} />} />
              <QrCard label="Telegram" handle="@mia_kz" icon={<Send size={18} />} />
            </div>

            <ul className="card !p-7 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-mia-red shrink-0 mt-0.5" />
                <span>г. Алматы, пр. Достык, 0<br /><span className="mono text-xs text-mia-ink/55">офис открыт пн–пт 10:00–18:00</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mia-red shrink-0" />
                <a href="mailto:info@mia.kz" className="hover:text-mia-red transition-colors">
                  info@mia.kz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mia-red shrink-0" />
                <a href="tel:+77000000000" className="hover:text-mia-red transition-colors">
                  +7 700 000 00 00
                </a>
              </li>
            </ul>

            <div className="card !p-0 overflow-hidden aspect-[16/9] flex items-center justify-center bg-mia-graphite text-mia-bg-soft mono text-xs uppercase tracking-widest">
              [ карта · 2GIS / Яндекс ]
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                console.log('[MIA contact form]', Object.fromEntries(fd));
                setSent(true);
              }}
              className="card !p-7 md:!p-10 space-y-5"
            >
              <p className="mono text-xs uppercase tracking-widest text-mia-red">
                Короткое сообщение
              </p>
              <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight">
                Если коротко — напишите здесь
              </h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-mia-yellow"
                >
                  <Check size={20} /> Сообщение принято. Ответим в течение 1 рабочего дня.
                </motion.div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      name="name"
                      placeholder="Ваше имя"
                      className="px-4 py-3 rounded-xl bg-mia-bg-soft border border-black/10 focus:border-mia-red focus:outline-none text-base"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 py-3 rounded-xl bg-mia-bg-soft border border-black/10 focus:border-mia-red focus:outline-none text-base"
                    />
                  </div>
                  <textarea
                    required
                    name="message"
                    placeholder="Сообщение…"
                    className="w-full px-4 py-3 rounded-xl bg-mia-bg-soft border border-black/10 focus:border-mia-red focus:outline-none text-base min-h-[140px]"
                  />
                  <button type="submit" className="btn-primary">
                    Отправить <Send size={14} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Deterministic 7×7 QR-like pattern (no SSR mismatch)
const QR_PATTERN = [
  1,1,1,0,1,1,1, 1,0,1,0,1,0,1, 1,1,0,1,0,1,1,
  0,1,1,1,1,0,0, 1,0,0,1,1,1,0, 1,1,0,1,0,1,1,
  1,0,1,0,1,1,1,
];

function QrCard({
  label,
  handle,
  icon,
}: {
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="card !p-5 flex flex-col items-center text-center"
    >
      {/* QR placeholder — replace with server-generated QR in production */}
      <div className="w-full aspect-square rounded-xl bg-mia-ink text-mia-yellow flex items-center justify-center mb-4">
        <div className="grid grid-cols-7 gap-[3px] w-3/4">
          {QR_PATTERN.map((on, i) => (
            <span
              key={i}
              className={`aspect-square ${on ? 'bg-mia-yellow' : 'bg-mia-ink'}`}
            />
          ))}
        </div>
      </div>
      <p className="flex items-center gap-2 mono text-xs uppercase tracking-widest text-mia-red">
        {icon} {label}
      </p>
      <p className="text-sm mt-1">{handle}</p>
    </motion.div>
  );
}
