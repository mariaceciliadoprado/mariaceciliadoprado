import React from 'react';
import { 
  User, 
  Target, 
  BookOpen, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Zap, 
  Brain,
  CheckCircle2,
  Award
} from 'lucide-react';
import { personalInfo, educationData } from '../data/resumeData';

interface AboutSectionProps {
  darkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  return (
    <section id="sobre" className="py-24 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium bg-[#121212] border border-[#c9a86a]/30 text-[#c9a86a]">
            <User className="w-3.5 h-3.5" />
            <span>Perfil Profissional</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif leading-tight ${
            darkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Sobre a Maria Cecilia <span className="italic text-[#c9a86a] font-normal">do Prado</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-stone-600'}`}>
            Formação técnica alinhada à capacidade de resolver problemas práticos e colaborar em equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Objetivo Profissional */}
          <div className={`lg:col-span-6 rounded-xl p-8 border flex flex-col justify-between ${
            darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
          }`}>
            <div className="space-y-5">
              <div className="w-11 h-11 rounded-lg bg-[#1a1a1a] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>

              <h3 className={`text-2xl font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                Objetivo Profissional
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-stone-700'}`}>
                {personalInfo.objective}
              </p>

              <div className="pt-2 space-y-2.5">
                <div className={`text-[10px] font-mono uppercase tracking-[0.2em] ${
                  darkMode ? 'text-neutral-400' : 'text-stone-500'
                }`}>
                  Cargos Alvo
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Desenvolvedora Junior", "Estagiária em TI", "Analista de Suporte", "Analista de Sistemas"].map((role) => (
                    <span 
                      key={role}
                      className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium border ${
                        darkMode 
                          ? 'bg-[#1a1a1a] border-white/10 text-neutral-300 hover:border-[#c9a86a]/40 hover:text-[#c9a86a]' 
                          : 'bg-stone-50 border-stone-200 text-stone-800'
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic pill at bottom */}
            <div className={`mt-8 pt-6 border-t flex items-center justify-between ${
              darkMode ? 'border-white/10' : 'border-stone-100'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-white/10 text-[#c9a86a] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-xs font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                    FATEC Itaquera
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">
                    Tecnólogo em ADS (Julho/2026)
                  </div>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-mono font-medium px-2.5 py-1 rounded border border-[#c9a86a]/30 bg-[#c9a86a]/10 text-[#c9a86a]">
                Último Semestre
              </span>
            </div>
          </div>

          {/* Card 2: Resumo Profissional & O Diferencial das Soft Skills */}
          <div className={`lg:col-span-6 rounded-xl p-8 border flex flex-col justify-between ${
            darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
          }`}>
            <div className="space-y-5">
              <div className="w-11 h-11 rounded-lg bg-[#1a1a1a] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>

              <h3 className={`text-2xl font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                Resumo & Trajetória
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-stone-700'}`}>
                Sólida formação técnica em lógica de programação, arquitetura de sistemas, desenvolvimento web e modelagem de banco de dados relacional.
              </p>

              <div className={`p-4 rounded-lg border space-y-2 ${
                darkMode ? 'bg-[#1a1a1a] border-white/10' : 'bg-stone-50 border-stone-200'
              }`}>
                <div className="text-xs font-serif text-[#c9a86a] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#c9a86a]" />
                  <span className="uppercase tracking-wider text-[11px] font-sans font-semibold">Diferencial: Soft Skills no Atendimento</span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-neutral-400' : 'text-stone-600'
                }`}>
                  A vivência prática no setor de atendimento (Burger King) desenvolveu soft skills valorizadas no ecossistema de TI: excelente comunicação interpessoal, mediação sob pressão, inteligência emocional e adaptação ágil em equipes multifuncionais.
                </p>
              </div>
            </div>

            {/* Quick Grid of Soft Skill Icons */}
            <div className={`mt-8 pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-2 text-center ${
              darkMode ? 'border-white/10' : 'border-stone-100'
            }`}>
              <div className="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5">
                <MessageSquare className="w-4 h-4 text-[#c9a86a] mx-auto mb-1" />
                <span className="text-[10px] font-mono uppercase tracking-wider block text-neutral-300">Comunicação</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5">
                <Users className="w-4 h-4 text-[#c9a86a] mx-auto mb-1" />
                <span className="text-[10px] font-mono uppercase tracking-wider block text-neutral-300">Trabalho em Equipe</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5">
                <Brain className="w-4 h-4 text-[#c9a86a] mx-auto mb-1" />
                <span className="text-[10px] font-mono uppercase tracking-wider block text-neutral-300">Adaptabilidade</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#c9a86a] mx-auto mb-1" />
                <span className="text-[10px] font-mono uppercase tracking-wider block text-neutral-300">Agilidade</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
