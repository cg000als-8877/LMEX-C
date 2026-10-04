import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Globe, Plane } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Footer() {
  const { navigate } = useRouter();

  const handleNav = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-[#051329] text-white border-t border-white/10 mt-auto">
      {/* Top Banner / Feature Line */}
      <div className="border-b border-white/10 bg-[#071A33]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-3 sm:gap-3.5">
              <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-xl bg-[#16A9E0]/10 border border-[#16A9E0]/30 flex items-center justify-center text-[#16A9E0] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-sm font-semibold text-white">Global Express Network</p>
                <p className="text-xs sm:text-xs text-white/60 mt-1">Cross-border deliveries to 220+ destinations</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-3 sm:gap-3.5">
              <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-xl bg-[#16A9E0]/10 border border-[#16A9E0]/30 flex items-center justify-center text-[#16A9E0] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-sm font-semibold text-white">Secure Chain of Custody</p>
                <p className="text-xs sm:text-xs text-white/60 mt-1">End-to-end monitored barcode tracking</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-3 sm:gap-3.5">
              <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-xl bg-[#16A9E0]/10 border border-[#16A9E0]/30 flex items-center justify-center text-[#16A9E0] shrink-0">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-sm font-semibold text-white">Priority Air Cargo</p>
                <p className="text-xs sm:text-xs text-white/60 mt-1">Express hub-to-hub daily flight corridors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('/')}
              className="inline-block focus:outline-none"
            >
              <img
                src="/LMEX logo white.png"
                alt="LMEX International"
                className="h-12 sm:h-13 w-auto object-contain"
              />
            </button>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Connecting people, businesses and destinations across borders. Fast, secure, and reliable international courier solutions for parcels and priority cargo.
            </p>

            <div className="pt-2">
              <button
                onClick={() => handleNav('/track-order')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#16A9E0]/15 border border-[#16A9E0]/40 text-[#16A9E0] text-xs font-semibold hover:bg-[#16A9E0]/25 transition-all"
              >
                <span>Live Tracking Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16A9E0] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors"
                >
                  International Courier
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors"
                >
                  Express Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors"
                >
                  Air Freight
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors"
                >
                  Door-to-Door Delivery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16A9E0] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors"
                >
                  Why LMEX
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/track-order')}
                  className="text-white hover:text-[#16A9E0] font-medium transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Track Order</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A9E0] animate-pulse" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16A9E0] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#16A9E0] shrink-0 mt-0.5" />
                <a
                  href="mailto:support@lmexinternational.com"
                  className="hover:text-white transition-colors break-all"
                >
                  support@lmexinternational.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#16A9E0] shrink-0 mt-0.5" />
                <a
                  href="tel:+8801811687758"
                  className="hover:text-white transition-colors"
                >
                  +880 1811-687758
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#16A9E0] shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 LMEX International. All Rights Reserved.</p>
          <p className="text-[11px] text-white/30 font-light">
            Fast, secure and reliable international courier solutions connecting your shipments to destinations around the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
