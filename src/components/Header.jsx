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

          {/* Mobile Right Action: WhatsApp & Hamburger */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href="https://wa.me/8801997017967"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm transition-all active:scale-95"
              aria-label="Contact on WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

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
