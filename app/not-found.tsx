'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm border border-[#D4AF37]/40 rounded-2xl p-8 shadow-xl">
        <span className="text-4xl text-[#D4AF37] mb-2 block font-serif">❦</span>
        <h1 className="font-serif text-3xl font-bold text-[#5d040f] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#6B5B52] mb-6 leading-relaxed">
          The requested page could not be found. Please return to the wedding celebrations of Ijas &amp; Luhana.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#5d040f] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#7D1223] transition-colors shadow-sm"
        >
          Return to Invitation
        </Link>
      </div>
    </main>
  );
}
