import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScrollListener = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollListener);
    return () => window.removeEventListener('scroll', handleScrollListener);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { label: 'Ana Sayfa', path: '/' },
    { label: 'Hakkımda', path: '/about' },
    { label: 'Videolar', path: '/videos' },
    { label: 'Takvim', path: '/schedule' },
    { label: 'İletişim', path: '/contact' },
  ];

  // Dynamic classes based on state
  // If menu is open, force solid dark background.
  // If scrolled, dark background with blur.
  // If at top and closed, transparent.
  const navBackgroundClass = isOpen 
    ? 'bg-brand-dark/95 backdrop-blur-xl' 
    : scrolled 
        ? 'glass-strong border-b border-brand-purple/20' 
        : 'bg-transparent';

  const paddingClass = scrolled ? 'py-3' : 'py-5';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackgroundClass} ${paddingClass}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-full">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-display font-black italic tracking-tighter group relative z-50 flex items-center"
          >
            <span className="gradient-text">AD</span><span className="text-brand-purple transition-all group-hover:scale-125 group-hover:rotate-12">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path}
                className={`text-sm font-bold transition-colors uppercase tracking-wide relative group py-2 ${
                  location.pathname === link.path ? 'text-brand-purple' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-brand-orange z-50 relative p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-dark z-40 flex flex-col pt-28 px-8 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

        <div className="flex flex-col space-y-6 relative z-10">
          {navLinks.map((link, index) => (
            <Link 
              key={link.label} 
              to={link.path}
              className="text-3xl font-display font-bold text-zinc-300 hover:text-white hover:pl-4 transition-all duration-300 border-b border-brand-purple/20 pb-4 group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-brand-purple group-hover:text-brand-pink text-lg mr-2 transition-colors">0{index + 1}.</span>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto mb-12 text-zinc-500 text-sm">
            <p>© Ataberk Doğan</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;