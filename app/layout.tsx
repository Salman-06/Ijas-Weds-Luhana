import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ijas & Luhana | Wedding Invitation',
  description: 'Cordially inviting you to celebrate the joyous wedding celebrations of A. Ijas Ahamed and J. Luhana Fathima. 12th & 13th December 2026.',
  openGraph: {
    title: 'Ijas & Luhana | Wedding Invitation',
    description: 'We request the honour of your presence at the Wedding Celebrations of Ijas & Luhana.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ijas & Luhana | Wedding Celebration',
    description: 'Save the Date: 12th & 13th December 2026. Join us in celebrating our blessed union.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-[#FAF6F0] text-[#2D1810] selection:bg-[#EED6D3] selection:text-[#5d040f]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
