import localFont from 'next/font/local';
import './globals.css';

// Fonts
const ceraPro = localFont({
  src: [
    { path: '../public/fonts/CeraPro-Regular.woff2', weight: '400' },
    { path: '../public/fonts/CeraPro-Medium.woff2', weight: '600' },
    { path: '../public/fonts/CeraPro-Bold.woff2', weight: '700' },
  ],
  variable: '--font-cerapro',
});

export const metadata = {
  metadataBase: new URL('https://vitaliypanchenko.com/'),
  title: {
    default: 'БФ "Волонтерський рух України"',
    template: '%s | БФ "Волонтерський рух України"',
  },
  description:
    'БФ "Волонтерський рух України" - Об&apos;єднуємо небайдужих людей для підтримки військових, їхніх сімей та дітей у дитячих будинках',
  openGraph: {
    title: {
      default: 'БФ "Волонтерський рух України"',
      template: '%s | БФ "Волонтерський рух України"',
    },
    description:
      'БФ "Волонтерський рух України" - Об&apos;єднуємо небайдужих людей для підтримки військових, їхніх сімей та дітей у дитячих будинках',
    type: 'website',
    locale: 'en_US',
    url: 'https://vitaliypanchenko.com/',
    siteName: 'БФ "Волонтерський рух України"',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content='БФ "ВРУ"' />
      </head>
      <body className={`${ceraPro.variable} antialiased`}>{children}</body>
    </html>
  );
}
