import React, { useEffect } from 'react';
import { X, Search, ChevronRight, Globe, Shield, Clock } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function MobileDrawer({ isOpen, onClose }) {
  const { currentPath, navigate } = useRouter();

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'Home', path: '/', isPrimary: false },
    { label: 'Track Order', path: '/track-order', isPrimary: true, isAction: true },
    { label: 'Services', path: '/', isPrimary: false },
    { label: 'International Shipping', path: '/', isPrimary: false },
    { label: 'Express Delivery', path: '/', isPrimary: false },
    { label: 'About Us', path: '/', isPrimary: false },
    { label: 'Why LMEX', path: '/', isPrimary: false },
    { label: 'Contact Us', path: '/', isPrimary: false },
    { label: 'FAQ', path: '/', isPrimary: false },
    { label: 'Privacy Policy', path: '/', isPrimary: false },
    { label: 'Terms & Conditions', path: '/', isPrimary: false },
  ];

  const handleItemClick = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[#071A33]/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-[#071A33] text-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Top Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <button
            onClick={() => handleItemClick('/')}
            className="flex items-center gap-2 text-left focus:outline-none"
          >
            <img
              src="/LMEX logo white.png"
              alt="LMEX International Logo"
              className="h-11 w-auto object-contain"
            />
          </button>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1.5 divide-y divide-white/5">
          <div className="space-y-1 pb-3">
            {menuItems.slice(0, 5).map((item) => {
              const isActive = currentPath === item.path && (item.path !== '/' || currentPath === '/');
              if (item.isAction) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleItemClick(item.path)}
                    className="w-full flex items-center justify-between px-4 py-4 mt-2 rounded-xl bg-gradient-to-r from-[#16A9E0] to-[#0E92C4] text-[#071A33] font-bold text-base shadow-lg shadow-[#16A9E0]/20 hover:brightness-105 active:scale-[0.99] transition-all"
                  >
                    <span className="flex items-center gap-2.5">
                      <Search className="w-5 h-5 stroke-[2.5]" />
                      {item.label}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/30 px-2.5 py-0.5 rounded-full text-[#071A33]">
                      Live
                    </span>
                  </button>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.path)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition-colors text-left ${
                    isActive
                      ? 'text-[#16A9E0] bg-white/5 font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-white/30" />
                </button>
              );
            })}
          </div>

          <div className="space-y-1 pt-3 pb-3">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-widest px-3.5 block mb-1.5">
              Company & Policies
            </span>
            {menuItems.slice(5).map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.path)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer info in Drawer */}
        <div className="p-5 border-t border-white/10 bg-black/20">
          <div className="flex items-center gap-4 text-white/70 text-xs mb-3">
            <span className="inline-flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#16A9E0]" /> 220+ Countries
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#16A9E0]" /> Secured Freight
            </span>
          </div>
          <p className="text-xs text-white/60 leading-relaxed font-normal">
            Connecting your shipments to destinations around the world.
          </p>
          <div className="mt-3 text-xs text-white/40">
            © 2026 LMEX International
          </div>
        </div>
      </aside>
    </>
  );
}
