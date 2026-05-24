'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';

const REGIONS = [
  'Алматы (г.)',
  'Астана (г.)',
  'Шымкент (г.)',
  'Алматинская обл.',
  'Акмолинская обл.',
  'Актюбинская обл.',
  'Атырауская обл.',
  'Восточно-Казахстанская обл.',
  'Жамбылская обл.',
  'Жетысуская обл.',
  'Западно-Казахстанская обл.',
  'Карагандинская обл.',
  'Костанайская обл.',
  'Кызылординская обл.',
  'Мангистауская обл.',
  'Павлодарская обл.',
  'Северо-Казахстанская обл.',
  'Туркестанская обл.',
  'Улытауская обл.',
  'Абайская обл.',
];

const PROBLEMS = [
  'Финансы',
  'Регуляторика',
  'Кадры',
  'Равные условия',
  'Операционка',
  'Маркетинг',
  'Юридические риски',
  'Корпоративные конфликты',
];

const PROFILES = [
  'Многопрофильная клиника',
  'Стоматология',
  'Лаборатория',
  'Диагностика',
  'Реабилитация',
  'Эстетическая медицина',
  'Фармацевтика',
  'Медтех',
  'Другое',
];

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  company: string;
  bin: string;
  position: string;
  ownership: string;
  profile: string;
  regions: string[];
  branches: string;
  staffSize: string;
  problems: string[];
  expectations: string;
  contribution: string;
  source: string;
  consentPd: boolean;
  consentComms: boolean;
};

const initial: FormData = {
  fullName: '',
  phone: '',
  email: '',
  city: '',
  company: '',
  bin: '',
  position: '',
  ownership: '',
  profile: '',
  regions: [],
  branches: '',
  staffSize: '',
  problems: [],
  expectations: '',
  contribution: '',
  source: '',
  consentPd: false,
  consentComms: false,
};

const STEPS = ['Контакты', 'Бизнес', 'Цели', 'Подтверждение'] as const;

export function Join() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const upd = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const toggleArr = (k: 'regions' | 'problems', v: string) =>
    setData((d) => ({
      ...d,
      [k]: d[k].includes(v) ? d[k].filter((x) => x !== v) : [...d[k], v],
    }));

  const canNext = () => {
    if (step === 0)
      return (
        data.fullName.trim().split(/\s+/).length >= 2 &&
        /^\+?[\d\s\-()]{10,}$/.test(data.phone) &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
        !!data.city
      );
    if (step === 1)
      return (
        !!data.company.trim() &&
        !!data.position.trim() &&
        !!data.ownership &&
        !!data.profile &&
        data.regions.length > 0 &&
        !!data.staffSize
      );
    if (step === 2) return data.problems.length > 0 && data.expectations.trim().length >= 10;
    if (step === 3) return data.consentPd && !!data.source;
    return false;
  };

  const submit = async () => {
    setSubmitting(true);
    // Static demo: log + simulate delay. Backend integration is Phase 2.
    console.log('[MIA application]', data);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  };

  return (
    <section id="join" className="py-24 md:py-32 bg-mia-bg-soft">
      <div className="container-mia max-w-4xl">
        <p className="num mb-3">06 / АНКЕТА</p>
        <h2 className="h-section mb-3">Заявка на вступление</h2>
        <p className="text-mia-ink/70 mb-10 max-w-2xl">
          Четыре шага, около 5 минут. После отправки с вами свяжется куратор Альянса
          в течение 2 рабочих дней.
        </p>

        {/* Progress */}
        <ol className="grid grid-cols-4 gap-2 mb-10">
          {STEPS.map((s, i) => (
            <li key={s} className="flex flex-col gap-2">
              <div
                className={`h-1.5 rounded-full transition-colors ${
                  i <= step ? 'bg-mia-red' : 'bg-mia-ink/15'
                }`}
              />
              <div className="flex items-center gap-2">
                <span
                  className={`mono text-xs ${i <= step ? 'text-mia-red' : 'text-mia-ink/40'}`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`text-sm ${
                    i === step
                      ? 'font-bold text-mia-ink'
                      : i < step
                      ? 'text-mia-ink/70'
                      : 'text-mia-ink/40'
                  }`}
                >
                  {s}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="bg-mia-bg border border-black/5 rounded-3xl p-7 md:p-10 min-h-[420px]">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-mia-yellow flex items-center justify-center">
                  <Check size={30} className="text-mia-ink" />
                </div>
                <h3 className="h-section mb-3">Спасибо! Заявка получена.</h3>
                <p className="text-mia-ink/75 max-w-md mx-auto">
                  Письмо-подтверждение отправлено на <strong>{data.email}</strong>.
                  В ближайшие 2 рабочих дня с вами свяжется куратор.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                {step === 0 && (
                  <>
                    <Field label="ФИО *">
                      <input
                        className={input}
                        value={data.fullName}
                        onChange={(e) => upd('fullName', e.target.value)}
                        placeholder="Иванов Иван Иванович"
                      />
                    </Field>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Телефон / WhatsApp *">
                        <input
                          className={input}
                          value={data.phone}
                          onChange={(e) => upd('phone', e.target.value)}
                          placeholder="+7 700 000 00 00"
                          inputMode="tel"
                        />
                      </Field>
                      <Field label="Email *">
                        <input
                          className={input}
                          value={data.email}
                          onChange={(e) => upd('email', e.target.value)}
                          placeholder="you@clinic.kz"
                          type="email"
                        />
                      </Field>
                    </div>
                    <Field label="Город / регион *">
                      <select
                        className={input}
                        value={data.city}
                        onChange={(e) => upd('city', e.target.value)}
                      >
                        <option value="">— выберите —</option>
                        {REGIONS.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                    </Field>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Название компании *">
                        <input
                          className={input}
                          value={data.company}
                          onChange={(e) => upd('company', e.target.value)}
                        />
                      </Field>
                      <Field label="БИН (12 цифр)">
                        <input
                          className={input}
                          value={data.bin}
                          onChange={(e) => upd('bin', e.target.value.replace(/\D/g, '').slice(0, 12))}
                          inputMode="numeric"
                        />
                      </Field>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Должность *">
                        <input
                          className={input}
                          value={data.position}
                          onChange={(e) => upd('position', e.target.value)}
                          placeholder="CEO, учредитель…"
                        />
                      </Field>
                      <Field label="Доля владения *">
                        <select
                          className={input}
                          value={data.ownership}
                          onChange={(e) => upd('ownership', e.target.value)}
                        >
                          <option value="">— выберите —</option>
                          <option>&lt; 10%</option>
                          <option>10–25%</option>
                          <option>25–50%</option>
                          <option>50%+</option>
                          <option>100%</option>
                        </select>
                      </Field>
                    </div>
                    <Field label="Профиль деятельности *">
                      <select
                        className={input}
                        value={data.profile}
                        onChange={(e) => upd('profile', e.target.value)}
                      >
                        <option value="">— выберите —</option>
                        {PROFILES.map((p) => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Регионы присутствия *">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-56 overflow-y-auto p-3 rounded-xl bg-mia-bg-soft border border-black/5">
                        {REGIONS.map((r) => (
                          <label
                            key={r}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${
                              data.regions.includes(r)
                                ? 'bg-mia-yellow text-mia-ink'
                                : 'hover:bg-mia-bg'
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="accent-mia-red"
                              checked={data.regions.includes(r)}
                              onChange={() => toggleArr('regions', r)}
                            />
                            {r}
                          </label>
                        ))}
                      </div>
                    </Field>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Число филиалов">
                        <input
                          className={input}
                          value={data.branches}
                          onChange={(e) => upd('branches', e.target.value.replace(/\D/g, ''))}
                          inputMode="numeric"
                        />
                      </Field>
                      <Field label="Число сотрудников *">
                        <select
                          className={input}
                          value={data.staffSize}
                          onChange={(e) => upd('staffSize', e.target.value)}
                        >
                          <option value="">— выберите —</option>
                          <option>1–10</option>
                          <option>11–50</option>
                          <option>51–200</option>
                          <option>201+</option>
                        </select>
                      </Field>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <Field label="Главные проблемы * (можно несколько)">
                      <div className="flex flex-wrap gap-2">
                        {PROBLEMS.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => toggleArr('problems', p)}
                            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                              data.problems.includes(p)
                                ? 'bg-mia-red border-mia-red text-white'
                                : 'border-mia-ink/20 hover:border-mia-red'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </Field>
                    <Field label="Что ожидаете от РОО? *">
                      <textarea
                        className={`${input} min-h-[110px]`}
                        value={data.expectations}
                        onChange={(e) =>
                          upd('expectations', e.target.value.slice(0, 500))
                        }
                        placeholder="до 500 символов"
                      />
                      <p className="mono text-xs text-mia-ink/50 mt-1">
                        {data.expectations.length}/500
                      </p>
                    </Field>
                    <Field label="Чем готовы быть полезны сообществу?">
                      <textarea
                        className={`${input} min-h-[100px]`}
                        value={data.contribution}
                        onChange={(e) =>
                          upd('contribution', e.target.value.slice(0, 500))
                        }
                        placeholder="экспертиза, контакты, ресурсы…"
                      />
                    </Field>
                  </>
                )}

                {step === 3 && (
                  <>
                    <Field label="Источник информации о РОО *">
                      <select
                        className={input}
                        value={data.source}
                        onChange={(e) => upd('source', e.target.value)}
                      >
                        <option value="">— выберите —</option>
                        <option>Рекомендация</option>
                        <option>СМИ</option>
                        <option>Мероприятие</option>
                        <option>Поиск</option>
                        <option>Другое</option>
                      </select>
                    </Field>

                    <label className="flex items-start gap-3 cursor-pointer py-2">
                      <input
                        type="checkbox"
                        className="accent-mia-red mt-1"
                        checked={data.consentPd}
                        onChange={(e) => upd('consentPd', e.target.checked)}
                      />
                      <span className="text-sm">
                        Согласен на обработку персональных данных в соответствии с{' '}
                        <a href="#" className="underline text-mia-red">
                          Политикой конфиденциальности
                        </a>{' '}
                        и ЗРК «О персональных данных и их защите». *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer py-2">
                      <input
                        type="checkbox"
                        className="accent-mia-red mt-1"
                        checked={data.consentComms}
                        onChange={(e) => upd('consentComms', e.target.checked)}
                      />
                      <span className="text-sm">
                        Согласен получать сообщения от Альянса (email, Telegram, WhatsApp).
                      </span>
                    </label>

                    <div className="p-4 rounded-xl bg-mia-bg-soft mono text-xs text-mia-ink/65">
                      Поле reCAPTCHA v3 будет активировано после подключения бэкенда.
                      В демо-версии заявка отправляется в консоль браузера.
                    </div>
                  </>
                )}

                {/* Nav buttons */}
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 px-4 py-3 text-sm mono uppercase tracking-widest disabled:opacity-30"
                  >
                    <ArrowLeft size={14} /> Назад
                  </button>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.min(3, s + 1))}
                      disabled={!canNext()}
                      className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Далее <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={submit}
                      disabled={!canNext() || submitting}
                      className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="animate-spin" size={14} /> Отправляем…
                        </>
                      ) : (
                        <>
                          Отправить заявку <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const input =
  'w-full px-4 py-3 rounded-xl bg-mia-bg-soft border border-black/10 focus:border-mia-red focus:outline-none text-mia-ink text-base transition-colors';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block mono text-xs uppercase tracking-widest text-mia-ink/70 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
