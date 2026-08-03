import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Code2, 
  ArrowRight, 
  Sparkles, 
  FileText,
  CheckCircle2,
  Terminal,
  Database,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface HeroProps {
  darkMode: boolean;
  onOpenCvModal: () => void;
  onScrollToProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenCvModal, onScrollToProject }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c9a86a]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[200px] bg-[#c9a86a]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium border ${
                darkMode 
                  ? 'bg-[#121212] border-[#c9a86a]/40 text-[#c9a86a]' 
                  : 'bg-stone-100 border-stone-300 text-stone-800'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-ping" />
                <span>Buscando Oportunidades em TI</span>
              </span>

              <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium border ${
                darkMode
                  ? 'bg-[#121212] border-white/10 text-neutral-300'
                  : 'bg-stone-50 border-stone-200 text-stone-700'
              }`}>
                <GraduationCap className="w-3.5 h-3.5 text-[#c9a86a]" />
                <span>FATEC Itaquera (ADS • Jul/2027)</span>
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-4">
              <span className="block text-[11px] uppercase tracking-[0.3em] text-[#c9a86a] font-mono">Portfólio Profissional</span>
              <h1 className={`text-4xl sm:text-6xl font-serif leading-none tracking-tight ${
                darkMode ? 'text-white' : 'text-stone-900'
              }`}>
                Maria Cecilia <br />
                <span className="italic font-normal text-[#c9a86a]">do Prado</span>
              </h1>
              
              <h2 className={`text-base sm:text-xl font-sans tracking-wide leading-relaxed font-light ${
                darkMode ? 'text-neutral-300' : 'text-stone-700'
              }`}>
                Desenvolvedora Junior <span className="text-[#c9a86a]">•</span> Estagiária em TI <span className="text-[#c9a86a">•</span> Analista de Suporte e Sistemas
              </h2>
            </div>

            {/* Concise Objective */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
              darkMode ? 'text-neutral-400' : 'text-stone-600'
            }`}>
              Estudante do último semestre de Análise e Desenvolvimento de Sistemas. Especializando-se em <strong className={darkMode ? 'text-white' : 'text-stone-900'}>Java (Spring Boot)</strong>, <strong className={darkMode ? 'text-white' : 'text-stone-900'}>React</strong> e <strong className={darkMode ? 'text-white' : 'text-stone-900'}>PostgreSQL</strong>, unindo sólidos conhecimentos em engenharia de software à resolução assertiva de problemas.
            </p>

            {/* Location & Quick Contact Chips */}
            <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider ${
              darkMode ? 'text-neutral-400' : 'text-stone-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c9a86a]" />
                <span>{personalInfo.location}</span>
              </div>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-1.5 hover:text-[#c9a86a] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#c9a86a]" />
                <span className="lowercase">{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phoneRaw}`} 
                className="flex items-center gap-1.5 hover:text-[#c9a86a] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c9a86a]" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onScrollToProject}
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-xs uppercase tracking-[0.2em] font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478] shadow-xl shadow-[#c9a86a]/10 transition-all transform hover:-translate-y-0.5"
              >
                <Code2 className="w-4 h-4" />
                <span>Demonstração do TCC</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onOpenCvModal}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-xs uppercase tracking-[0.2em] font-medium border transition-all ${
                  darkMode 
                    ? 'border-white/15 bg-[#121212] text-neutral-200 hover:border-[#c9a86a]/60 hover:text-[#c9a86a]' 
                    : 'border-stone-300 bg-white text-stone-800 hover:border-stone-400'
                }`}
              >
                <FileText className="w-4 h-4 text-[#c9a86a]" />
                <span>Visualizar Currículo</span>
              </button>
            </div>

            {/* Highlight Badges */}
            <div className={`pt-6 border-t grid grid-cols-2 sm:grid-cols-3 gap-4 ${
              darkMode ? 'border-white/10' : 'border-stone-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#121212] border border-white/10 text-[#c9a86a] flex items-center justify-center shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-xs font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>Java & Spring</div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">APIs RESTful</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#121212] border border-white/10 text-[#c9a86a] flex items-center justify-center shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-xs font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>PostgreSQL & SQL</div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">Modelagem SQL</div>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-lg bg-[#121212] border border-white/10 text-[#c9a86a] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-xs font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>React & Node.js</div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">Full Stack Web</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Card / Visual Code Snippet */}
          <div className="lg:col-span-5">
            <div className={`rounded-xl p-6 sm:p-7 border relative overflow-hidden transition-all shadow-2xl ${
              darkMode 
                ? 'bg-[#121212] border-white/10 text-neutral-200' 
                : 'bg-white border-stone-200 text-stone-800'
            }`}>
              {/* Decorative top header bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c9a86a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="text-[11px] font-mono text-neutral-400 ml-2">maria_prado.java</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#c9a86a] px-2.5 py-0.5 rounded border border-[#c9a86a]/30 bg-[#c9a86a]/10">
                  FATEC ADS
                </span>
              </div>

              {/* Code / Profile snippet */}
              <div className="font-mono text-xs space-y-2.5 overflow-x-auto text-neutral-300">
                <div>
                  <span className="text-[#c9a86a]">public class</span>{' '}
                  <span className="text-white font-serif italic text-sm">Desenvolvedora</span> {'{'}
                </div>

                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-neutral-500">// Formação Acadêmica</span>
                  </div>
                  <div>
                    <span className="text-[#c9a86a]">String</span> instituicao = <span className="text-amber-200/90">"FATEC Itaquera"</span>;
                  </div>
                  <div>
                    <span className="text-[#c9a86a]">String</span> curso = <span className="text-amber-200/90">"Análise e Dev. Sistemas"</span>;
                  </div>
                  <div>
                    <span className="text-[#c9a86a]">String</span> conclusao = <span className="text-amber-200/90">"Julho/2027 (Último Semestre)"</span>;
                  </div>
                </div>

                <div className="pl-4 pt-1 space-y-1">
                  <div>
                    <span className="text-neutral-500">// Principais Tecnologias</span>
                  </div>
                  <div>
                    <span className="text-[#c9a86a]">List&lt;String&gt;</span> stack = List.of(
                  </div>
                  <div className="pl-4 text-amber-200/90">
                    "Java", "Spring Boot", "React", "PostgreSQL", "JavaScript"
                  </div>
                  <div>);</div>
                </div>

                <div className="pl-4 pt-1 space-y-1">
                  <div>
                    <span className="text-neutral-500">// Soft Skills & Perfil</span>
                  </div>
                  <div>
                    <span className="text-[#c9a86a]">boolean</span> resolucaoProblemas = <span className="text-[#c9a86a]">true</span>;
                  </div>
                  <div>
                    <span className="text-[#c9a86a]">boolean</span> comunicacaoAssertiva = <span className="text-[#c9a86a]">true</span>;
                  </div>
                </div>

                <div>{'}'}</div>
              </div>

              {/* Callout Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a86a]" />
                  <span>Código limpo & boas práticas</span>
                </div>
                <button
                  onClick={onScrollToProject}
                  className="font-mono text-[10px] uppercase tracking-widest text-[#c9a86a] hover:underline flex items-center gap-1"
                >
                  Testar TCC ao Vivo &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
