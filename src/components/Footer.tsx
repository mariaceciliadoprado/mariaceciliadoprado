import React from 'react';
import { 
  Heart, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code2, 
  ArrowUp
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface FooterProps {
  darkMode: boolean;
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t ${
      darkMode ? 'bg-[#050505] border-white/10 text-neutral-400' : 'bg-stone-100 border-stone-200 text-stone-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/10">
          
          {/* Logo & Name */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#121212] border border-[#c9a86a]/40 text-[#c9a86a] flex items-center justify-center font-serif font-bold text-xs">
                MP
              </div>
              <span className={`font-serif text-lg ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                Maria Cecilia do Prado
              </span>
            </div>
            <p className="text-xs max-w-md text-neutral-400 font-mono">
              Desenvolvedora Junior • Análise e Desenvolvimento de Sistemas (FATEC Itaquera 2027).
            </p>
          </div>

          {/* Quick links & Actions */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4 text-xs font-mono uppercase tracking-wider">
            <button
              onClick={onOpenCvModal}
              className="hover:text-[#c9a86a] transition-colors"
            >
              Visualizar Currículo
            </button>
            <span className="text-neutral-600">&bull;</span>
            <a href="#sobre" className="hover:text-[#c9a86a] transition-colors">Sobre</a>
            <span className="text-neutral-600">&bull;</span>
            <a href="#habilidades" className="hover:text-[#c9a86a] transition-colors">Habilidades</a>
            <span className="text-neutral-600">&bull;</span>
            <a href="#projeto" className="hover:text-[#c9a86a] transition-colors">TCC</a>
            <span className="text-neutral-600">&bull;</span>
            <a href="#contato" className="hover:text-[#c9a86a] transition-colors">Contato</a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-white/10 hover:border-[#c9a86a]/50 hover:text-[#c9a86a] transition-all ml-2"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Maria Cecilia do Prado. Desenvolvido com React, Spring Boot & Tailwind.
          </div>

          <div className="flex items-center gap-4">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-[#c9a86a] transition-colors">
              {personalInfo.email}
            </a>
            <span>•</span>
            <a href={`tel:${personalInfo.phoneRaw}`} className="hover:text-[#c9a86a] transition-colors">
              {personalInfo.phone}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
