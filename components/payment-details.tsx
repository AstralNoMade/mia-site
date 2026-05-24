'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check, Building2, ExternalLink, MessageCircle, Mail } from 'lucide-react';
import { PAYMENT, CONTACTS } from '@/lib/content';

type Props = {
  open: boolean;
  onClose: () => void;
  tierName: string;
  /** Сумма для подстановки в назначение и QR; null = «по договорённости» */
  amountKzt: number | null;
};

/**
 * Модальное окно с реквизитами для оплаты членского взноса.
 * QR-код — текстовый, содержит структурированные реквизиты, читаются
 * банковскими приложениями в РК (Kaspi/Halyk сканер реквизитов).
 */
export function PaymentDetails({ open, onClose, tierName, amountKzt }: Props) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const purpose = PAYMENT.purposeTemplate.replace('{tier}', tierName);

  const qrPayload = [
    `ST00012`,
    `Name=${PAYMENT.org.nameFull}`,
    `PersonalAcc=${PAYMENT.bank.iban.replace(/\s/g, '')}`,
    `BankName=${PAYMENT.bank.name}`,
    `BIC=${PAYMENT.bank.bic}`,
    `PayeeINN=${PAYMENT.org.bin}`,
    `KBE=${PAYMENT.bank.kbe}`,
    `Purpose=${purpose}`,
    amountKzt ? `Sum=${amountKzt * 100}` : '',
  ]
    .filter(Boolean)
    .join('|');

  const copy = (key: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1600);
    });
  };

  const rows: Array<{ key: string; label: string; value: string }> = [
    { key: 'name', label: 'Получатель', value: PAYMENT.org.nameFull },
    { key: 'bin', label: 'БИН', value: PAYMENT.org.bin },
    { key: 'bank', label: 'Банк', value: PAYMENT.bank.name },
    { key: 'bic', label: 'БИК', value: PAYMENT.bank.bic },
    { key: 'iban', label: 'ИИК (IBAN)', value: PAYMENT.bank.iban },
    { key: 'kbe', label: 'КБе', value: PAYMENT.bank.kbe },
    { key: 'knp', label: 'КНП', value: PAYMENT.bank.knp },
    { key: 'purpose', label: 'Назначение', value: purpose },
  ];
  if (amountKzt) {
    rows.push({
      key: 'amount',
      label: 'Сумма',
      value: amountKzt.toLocaleString('ru-RU') + ' ₸',
    });
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-mia-ink/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-mia-bg-soft rounded-3xl max-w-3xl w-full my-8 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-mia-graphite-deep text-mia-bg-soft p-6 md:p-8 flex items-start justify-between">
              <div>
                <p className="mono text-xs uppercase tracking-widest text-mia-yellow mb-2">
                  Оплата членского взноса
                </p>
                <h3 className="font-display font-black text-2xl md:text-3xl">
                  Уровень «{tierName}»
                </h3>
                {amountKzt && (
                  <p className="mt-2 text-lg text-mia-yellow font-display">
                    {amountKzt.toLocaleString('ru-RU')} ₸
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Закрыть"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8">
              {/* Реквизиты */}
              <div>
                <p className="num mb-4 flex items-center gap-2">
                  <Building2 size={14} /> Реквизиты для перевода
                </p>
                <dl className="space-y-2.5">
                  {rows.map((r) => (
                    <div
                      key={r.key}
                      className="grid grid-cols-[120px_1fr_auto] gap-3 items-start py-2 border-b border-mia-ink/8"
                    >
                      <dt className="mono text-xs uppercase tracking-widest text-mia-ink/55 pt-1">
                        {r.label}
                      </dt>
                      <dd className="text-sm break-words">{r.value}</dd>
                      <button
                        type="button"
                        onClick={() => copy(r.key, r.value)}
                        className="text-mia-ink/45 hover:text-mia-red transition-colors p-1"
                        aria-label={`Скопировать ${r.label}`}
                      >
                        {copied === r.key ? (
                          <Check size={14} className="text-mia-red" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  ))}
                </dl>

                {/* Action buttons */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {PAYMENT.kaspiPayUrl && (
                    <a
                      href={PAYMENT.kaspiPayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-3 !px-4 !text-[11px]"
                    >
                      Оплатить в Kaspi <ExternalLink size={12} />
                    </a>
                  )}
                  <a
                    href={`https://wa.me/${CONTACTS.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                      `Здравствуйте! Оплатил(а) членский взнос РОО «МИА», уровень «${tierName}». Прикладываю чек:`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-mia-ink text-mia-bg-soft mono text-[11px] uppercase tracking-widest hover:bg-black transition-colors"
                  >
                    <MessageCircle size={12} /> Прислать чек в WhatsApp
                  </a>
                  <a
                    href={`mailto:${PAYMENT.receiptEmail}?subject=${encodeURIComponent(
                      `Счёт на оплату членского взноса (${tierName})`,
                    )}&body=${encodeURIComponent(
                      `Здравствуйте!\n\nПрошу выставить счёт-фактуру на членский взнос РОО «МИА», уровень «${tierName}».\n\nКомпания: \nБИН: \nФИО плательщика: \n\nСпасибо.`,
                    )}`}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-transparent text-mia-ink border border-mia-ink/30 mono text-[11px] uppercase tracking-widest hover:border-mia-red hover:text-mia-red transition-colors"
                  >
                    <Mail size={12} /> Запросить счёт
                  </a>
                </div>

                <p className="mt-5 text-xs text-mia-ink/60 leading-relaxed">
                  После оплаты пришлите чек в WhatsApp или на{' '}
                  <a href={`mailto:${PAYMENT.receiptEmail}`} className="text-mia-red underline">
                    {PAYMENT.receiptEmail}
                  </a>
                  {' '}— мы выставим счёт-фактуру и активируем членство.
                </p>
              </div>

              {/* QR */}
              <div className="flex flex-col items-center text-center md:border-l md:border-mia-ink/10 md:pl-8">
                <p className="num mb-4">QR · скан в банк-апп</p>
                <div className="bg-mia-white p-4 rounded-2xl shadow-sm">
                  <QRCodeSVG
                    value={qrPayload}
                    size={196}
                    level="M"
                    fgColor="#1F1F1F"
                    bgColor="#FFFFFF"
                  />
                </div>
                <p className="mt-3 mono text-xs text-mia-ink/55 max-w-[200px]">
                  Откройте Kaspi / Halyk → сканер → оплата по QR
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
