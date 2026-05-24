import type { Metadata } from 'next';
import { Unbounded, PT_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const serif = PT_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'РОО «Медицинский Инвестиционный Альянс» — предприниматели с сердцем врача',
  description:
    'Республиканское общественное объединение собственников и инвесторов в медицину Казахстана. Мы за здоровую нацию. Мы за здоровое сотрудничество.',
  keywords: [
    'МИА',
    'Медицинский Инвестиционный Альянс',
    'РОО',
    'инвестиции в медицину',
    'клиники Казахстан',
    'здравоохранение РК',
  ],
  openGraph: {
    title: 'РОО «МИА» — предприниматели с сердцем врача',
    description:
      'Республиканское общественное объединение собственников и инвесторов в медицину Казахстана.',
    type: 'website',
    locale: 'ru_KZ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
