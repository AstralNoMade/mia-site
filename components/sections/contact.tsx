'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { MapPin, Mail, Phone, Send, MessageCircle, Check } from 'lucide-react';
import { CONTACTS } from '@/lib/content';

export function Contact() {
  const [sent, setSent] = useState(false);

  // Ссылки для QR-кодов (открываются в WhatsApp / Telegram при сканировании)
  const waUrl = `https://wa.me/${CONTACTS.whatsapp.replace(/\D/g, '')}`;
  const tgUrl = `https://t.me/${CONTACTS.telegram}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-mia-bg">
      <div className="container-mia">
        <p className="num mb-3">13 / КОНТАКТЫ</p>
        <h2 className="h-section max-w-3xl mb-12">Связаться с Альянсом</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <QrCard
                label="WhatsApp"
                handle={CONTACTS.whatsappDisplay}
                href={waUrl}
                value={waUrl}
                icon={<MessageCircle size={18} />}
              />
              <QrCard
                label="Telegram"
                handle={CONTACTS.telegramDisplay}
                href={tgUrl}
                value={tgUrl}
                icon={<Send size={18} />}
              />
            </div>

            <ul className="card !p-7 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-mia-red shrink-0 mt-0.5" />
                <span>
                  {CONTACTS.address}
                  <br />
                  <span className="mono text-xs text-mia-ink/55">{CONTACTS.addressNote}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mia-red shrink-0" />
                <a href={`mailto:${CONTACTS.email}`} className="hover:text-mia-red transition-colors">
                  {CONTACTS.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mia-red shrink-0" />
                <a href={`tel:${CONTACTS.phone}`} className="hover:text-mia-red transition-colors">
                  {CONTACTS.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="card !p-0 overflow-hidden aspect-[16/9] flex items-center justify-center bg-mia-graphite text-mia-bg-soft mono text-xs uppercase tracking-widest">
              [ карта · 2GIS / Яндекс ]
            </div>
          </div>

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

function QrCard({
  label,
  handle,
  href,
  value,
  icon,
}: {
  label: string;
  handle: string;
  href: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="card !p-5 flex flex-col items-center text-center"
    >
      <div className="bg-mia-white p-3 rounded-xl mb-4">
        <QRCodeSVG value={value} size={120} level="L" fgColor="#1F1F1F" bgColor="#FFFFFF" />
      </div>
      <p className="flex items-center gap-2 mono text-xs uppercase tracking-widest text-mia-red">
        {icon} {label}
      </p>
      <p className="text-sm mt-1">{handle}</p>
    </motion.a>
  );
}
