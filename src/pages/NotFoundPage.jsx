import React from 'react';
import { Home, Search, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function NotFoundPage() {
  const { navigate } = useRouter();

  return (
    <div className="flex-1 bg-[#F8FAFC] flex flex-col justify-center items-center py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#16A9E0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-lg w-full text-center relative z-10">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071A33]/5 text-[#16A9E0] text-xs font-bold uppercase tracking-wider mb-6 border border-[#16A9E0]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A9E0]" />
          404 — Page Not Found
        </div>

        {/* Big visual number */}
        <h1 className="text-7xl sm:text-9xl font-extrabold text-[#071A33] tracking-tighter mb-4 select-none">
          4<span className="text-[#16A9E0]">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A33] tracking-tight mb-3">
          Lost in Transit?
        </h2>

        <p className="text-sm sm:text-base text-[#64748B] max-w-md mx-auto leading-relaxed mb-8">
          The page or tracking URL you are looking for doesn't exist, has been moved, or the link might be misspelled.
        </p>

        {/* Quick action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#071A33] hover:bg-[#0D2A4A] text-white text-sm font-bold shadow-lg shadow-[#071A33]/20 transition-all cursor-pointer active:scale-95"
          >
            <Home className="w-4 h-4 text-[#16A9E0]" />
            <span>Go to Homepage</span>
          </button>

          <button
            onClick={() => navigate('/track-order')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#16A9E0] hover:bg-[#0E92C4] text-[#071A33] text-sm font-bold shadow-lg shadow-[#16A9E0]/25 transition-all cursor-pointer active:scale-95"
          >
            <Search className="w-4 h-4" />
            <span>Track a Shipment</span>
          </button>
        </div>

        {/* Support helper */}
        <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-[#64748B]">
          <span>Need direct assistance?</span>
          <a
            href="mailto:support@lmexinternational.com"
            className="text-[#16A9E0] font-semibold hover:underline inline-flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>support@lmexinternational.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
