import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Send, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Code2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Projeto TCC (Live)', href: '#projeto' },
    { name: 'Trajetória', href: '#experiencia' },
    { name: 'IA Assistente', href: '#assistente' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40' 
            : 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-3.5 group"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif text-sm tracking-widest uppercase transition-transform group-hover:scale-105 ${
              darkMode 
                ? 'bg-[#121212] border border-[#c9a86a]/40 text-[#c9a86a]' 
                : 'bg-stone-900 text-[#c9a86a]'
            }`}>
              MP
            </div>
            <div className="flex flex-col">
              <span className={`font-serif tracking-wide text-base sm:text-lg leading-tight ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                Maria Cecilia <span className="text-[#c9a86a] font-normal italic">do Prado</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#c9a86a]/80 font-mono flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-pulse"></span>
                FATEC Itaquera (ADS 2026)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`px-3.5 py-2 rounded-md text-[11px] uppercase tracking-[0.15em] font-medium transition-all ${
                  darkMode 
                    ? 'text-neutral-300 hover:text-[#c9a86a] hover:bg-white/5' 
                    : 'text-stone-600 hover:text-[#c9a86a] hover:bg-stone-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Actions: CV Modal, Theme Toggle, Contact button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg border transition-all ${
                darkMode
                  ? 'bg-[#121212] border-white/10 text-[#c9a86a] hover:bg-white/10'
                  : 'bg-stone-100 border-stone-300 text-stone-700 hover:bg-stone-200'
              }`}
              title={darkMode ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenCvModal}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs tracking-wider uppercase font-medium border transition-all ${
                darkMode
                  ? 'border-white/15 bg-[#121212] text-neutral-200 hover:border-[#c9a86a]/60 hover:text-[#c9a86a]'
                  : 'border-stone-300 bg-white text-stone-800 hover:border-stone-400'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#c9a86a]" />
              <span>Currículo</span>
            </button>

            <a
              href={`https://wa.me/${personalInfo.phoneRaw}?text=Olá%20Maria%20Cecilia,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478] shadow-md shadow-[#c9a86a]/10 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${
                darkMode ? 'bg-[#121212] border-white/10 text-[#c9a86a]' : 'bg-stone-100 border-stone-200 text-stone-700'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                darkMode ? 'bg-[#121212] border-white/10 text-white' : 'bg-stone-100 border-stone-200 text-stone-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-4 space-y-3 ${darkMode ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-stone-200'}`}>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-medium ${
                  darkMode ? 'text-neutral-300 hover:bg-white/5 hover:text-[#c9a86a]' : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCvModal(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 text-xs uppercase tracking-wider font-medium text-neutral-200"
            >
              <FileText className="w-4 h-4 text-[#c9a86a]" />
              <span>Ver/Imprimir Currículo</span>
            </button>

            <a
              href={`https://wa.me/${personalInfo.phoneRaw}?text=Olá%20Maria%20Cecilia,%20vi%20seu%20portfólio!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
