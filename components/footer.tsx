import Image from 'next/image';
import { asset } from '@/lib/asset';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-mia-graphite-deep text-mia-bg-soft mt-20">
      <div className="container-mia py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-5">
          <Image
            src={asset('/logo/logo_yellow.png')}
            alt="МИА"
            width={180}
            height={72}
            className="h-14 w-auto"
          />
          <p className="text-sm leading-relaxed max-w-md text-mia-bg-soft/85">
            Республиканское общественное объединение «Медицинский Инвестиционный Альянс».
            Мы за здоровую нацию. Мы за здоровое сотрудничество.
          </p>
          <p className="mono text-xs text-mia-yellow">
            # предприниматели с сердцем врача
          </p>
        </div>

        <div>
          <h4 className="mono text-xs uppercase tracking-widest text-mia-yellow mb-4">
            Документы
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-mia-yellow transition-colors" href="#">Устав РОО (PDF)</a></li>
            <li><a className="hover:text-mia-yellow transition-colors" href="#">Политика конфиденциальности</a></li>
            <li><a className="hover:text-mia-yellow transition-colors" href="#">Пользовательское соглашение</a></li>
            <li><a className="hover:text-mia-yellow transition-colors" href="#">Годовые отчёты</a></li>
            <li><a className="hover:text-mia-yellow transition-colors" href="#">Реквизиты</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mono text-xs uppercase tracking-widest text-mia-yellow mb-4">
            Связь
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-mia-yellow transition-colors" href="mailto:info@mia.kz">info@mia.kz</a></li>
            <li><a className="hover:text-mia-yellow transition-colors" href="tel:+77000000000">+7 700 000 00 00</a></li>
            <li>г. Алматы, пр. Достык, 0</li>
            <li className="flex gap-4 pt-3">
              <a className="hover:text-mia-yellow transition-colors" href="#">Instagram</a>
              <a className="hover:text-mia-yellow transition-colors" href="#">Telegram</a>
              <a className="hover:text-mia-yellow transition-colors" href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-mia py-6 flex flex-col md:flex-row md:justify-between gap-3 mono text-xs text-mia-bg-soft/60">
          <span>© {year} РОО «МИА». Все права защищены.</span>
          <span>Сайт разработан с уважением к брендбуку.</span>
        </div>
      </div>
    </footer>
  );
}
