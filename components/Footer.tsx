import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-black italic text-white mb-6">AD<span className="text-brand-orange">.</span></h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-zinc-400">
            <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <Link to="/about" className="hover:text-white transition-colors">Hakkımda</Link>
            <Link to="/videos" className="hover:text-white transition-colors">İçerikler</Link>
            <Link to="/schedule" className="hover:text-white transition-colors">Takvim</Link>
            <Link to="/contact" className="hover:text-white transition-colors">İletişim</Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-zinc-600 text-xs">
            <p>© {new Date().getFullYear()} Ataberk Doğan. Tüm hakları saklıdır.</p>
            <p className="flex items-center gap-1">
               Designed by <span className="text-brand-orange font-bold">Miraç Designer</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;