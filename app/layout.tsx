import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import { Amiri, Noto_Sans_Bengali } from 'next/font/google';

// Configure beautifully rendering Google Fonts for Arabic and Bengali scripts
const amiri = Amiri({ 
  subsets: ['arabic'], 
  weight: ['400', '700'], 
  variable: '--font-amiri' 
});

const notoSansBn = Noto_Sans_Bengali({ 
  subsets: ['bengali'], 
  weight: ['400', '600', '700'], 
  variable: '--font-noto-bn' 
});

export const metadata: Metadata = {
  title: 'NUR - Islamic Scrollytelling',
  description: 'A journey from Fajr to Isha',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`antialiased min-h-screen ${amiri.variable} ${notoSansBn.variable}`} 
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
