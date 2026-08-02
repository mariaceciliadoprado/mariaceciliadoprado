import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';
import { experienceData, educationData } from '../data/resumeData';

interface ExperienceSectionProps {
  darkMode: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode }) => {
  return (
    <section id="experiencia" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium bg-[#121212] border border-[#c9a86a]/30 text-[#c9a86a]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trajetória Profissional & Acadêmica</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif leading-tight ${
            darkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Experiência & <span className="italic text-[#c9a86a] font-normal">Formação</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-stone-600'}`}>
            Base de dados, desenvolvimento web e habilidades de atendimento em ambientes dinâmicos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Experiência Profissional */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5 text-[#c9a86a]" />
              </div>
              <div>
                <h3 className={`text-2xl font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                  Experiência Profissional
                </h3>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                  Atendimento, agilidade e trabalho em equipe sob alta exigência
                </p>
              </div>
            </div>

            {experienceData.map((exp, idx) => (
              <div 
                key={idx}
                className={`p-6 sm:p-7 rounded-xl border space-y-4 relative ${
                  darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 border-b pb-4 border-white/10">
                  <div>
                    <h4 className={`text-xl font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                      {exp.role}
                    </h4>
                    <div className="text-xs font-mono uppercase tracking-widest text-[#c9a86a] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col items-end text-xs text-neutral-400 font-mono">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-[#c9a86a]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 mt-0.5 text-[10px]">
                      <MapPin className="w-3 h-3 text-neutral-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 pt-1">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] mt-2 shrink-0" />
                      <div>
                        <span className={`text-xs font-serif ${darkMode ? 'text-white' : 'text-stone-800'}`}>
                          {h.title}:{' '}
                        </span>
                        <span className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-stone-600'}`}>
                          {h.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`p-3.5 rounded-lg border text-xs font-medium flex items-center gap-2.5 ${
                  darkMode ? 'bg-[#1a1a1a] border-white/10 text-neutral-300' : 'bg-stone-50 border-stone-200 text-stone-900'
                }`}>
                  <Sparkles className="w-4 h-4 text-[#c9a86a] shrink-0" />
                  <span className="text-xs leading-relaxed">
                    <strong className="text-[#c9a86a]">Impacto em TI:</strong> Comunicação assertiva com usuários, mediação de dúvidas técnicas e entrega sob prazos rigorosos de operação.
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column: Formação Acadêmica */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5 text-[#c9a86a]" />
              </div>
              <div>
                <h3 className={`text-2xl font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                  Formação Acadêmica
                </h3>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                  Graduação tecnológica em Análise e Dev. Sistemas
                </p>
              </div>
            </div>

            {educationData.map((edu, idx) => (
              <div 
                key={idx}
                className={`p-6 sm:p-7 rounded-xl border space-y-4 ${
                  darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a86a]">
                    Graduação Tecnológica
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-mono font-medium px-2.5 py-0.5 rounded border border-[#c9a86a]/30 bg-[#c9a86a]/10 text-[#c9a86a]">
                    {edu.status}
                  </span>
                </div>

                <div>
                  <h4 className={`text-xl font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#c9a86a] mt-1">
                    {edu.institution}
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-neutral-400">
                  <div className="flex items-center justify-between">
                    <span>Período:</span>
                    <span className="text-neutral-200">{edu.period}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Previsão de Término:</span>
                    <span className="text-[#c9a86a] font-bold">{edu.expectedCompletion}</span>
                  </div>
                </div>

                <div className={`p-3.5 rounded-lg border text-xs space-y-1.5 ${
                  darkMode ? 'bg-[#1a1a1a] border-white/10' : 'bg-stone-50 border-stone-200'
                }`}>
                  <div className="text-xs font-serif text-[#c9a86a]">
                    Disciplinas e Foco Prático:
                  </div>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Lógica de Programação, Estrutura de Dados, Engenharia de Software, Modelagem e SQL Avançado, Desenvolvimento Web (React / Node / Java), Arquitetura de Redes e Metodologias Ágeis.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
