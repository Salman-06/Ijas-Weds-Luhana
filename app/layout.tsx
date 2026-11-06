import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, Amiri } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ijas & Luhana | Royal Wedding Invitation',
  description: 'Cordially inviting you to celebrate the joyous wedding celebrations of A. Ijas Ahamed and J. Luhana Fathima. 12th–14th December 2026.',
  openGraph: {
    title: 'Ijas & Luhana | Wedding Invitation',
    description: 'We request the honour of your presence at the Wedding Celebrations of Ijas & Luhana.',
    type: 'website',
    images: [
      {
        url: '/assets/aistudio/IMG-20261106-WA0006_75e6489d.jpg',
        width: 1200,
        height: 630,
        alt: 'Ijas & Luhana Wedding Invitation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ijas & Luhana | Wedding Celebration',
    description: 'Save the Date: 12th–14th December 2026. Join us in celebrating our blessed union.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${amiri.variable}`}>
      <body className="font-sans antialiased bg-[#FAF6F0] text-[#2D1810] selection:bg-[#EED6D3] selection:text-[#4A0E17]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
