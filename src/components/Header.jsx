import React, { useState, useEffect } from 'react';
import { Menu, Search, ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isHome = currentPath === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/' },
    { label: 'About Us', path: '/' },
    { label: 'International Shipping', path: '/' },
    { label: 'Contact', path: '/' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHome
            ? isScrolled
              ? 'bg-[#071A33]/90 backdrop-blur-md shadow-lg py-3.5 border-b border-white/10'
              : 'bg-gradient-to-b from-[#071A33]/80 via-[#071A33]/40 to-transparent py-5'
            : 'bg-[#071A33] shadow-md py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="LMEX International Home"
          >
            <img
              src="/LMEX logo white.png"
              alt="LMEX International"
              className="h-11 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = isHome && link.label === 'Home';
              return (
                <button
                  key={link.label}
                  onClick={() => navigate(link.path)}
                  className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-[#16A9E0] font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A9E0] rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Track Order Primary Button */}
            <button
              onClick={() => navigate('/track-order')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md ${
                currentPath === '/track-order'
                  ? 'bg-white text-[#071A33] shadow-white/20 ring-2 ring-[#16A9E0]'
                  : 'bg-[#16A9E0] hover:bg-[#0E92C4] text-[#071A33] font-bold hover:shadow-lg hover:shadow-[#16A9E0]/25 hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Track Order</span>
            </button>
          </nav>

          {/* Mobile Right Action: Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => navigate('/track-order')}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#16A9E0] text-[#071A33] hover:bg-[#0E92C4] transition-all"
            >
              Track
            </button>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
