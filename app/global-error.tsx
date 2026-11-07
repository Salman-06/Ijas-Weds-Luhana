'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF6F0] flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white border border-[#D4AF37]/40 rounded-2xl p-8 shadow-lg">
          <h2 className="font-serif text-2xl font-bold text-[#5d040f] mb-3">
            Something went wrong
          </h2>
          <p className="text-sm text-[#6B5B52] mb-6">
            An unexpected error occurred while loading the wedding invitation.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-full bg-[#5d040f] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#7D1223] transition-colors"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
