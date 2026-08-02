import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Layout, 
  GitBranch, 
  Languages, 
  Cpu, 
  Check, 
  Sparkles,
  Server,
  Globe,
  Kanban,
  Coffee,
  Atom,
  Smile
} from 'lucide-react';
import { skillCategories, softSkillsList } from '../data/resumeData';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-4 h-4 text-[#c9a86a]" />;
      case 'Code': return <Code2 className="w-4 h-4 text-[#c9a86a]" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-[#c9a86a]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#c9a86a]" />;
      case 'Atom': return <Atom className="w-4 h-4 text-[#c9a86a]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#c9a86a]" />;
      case 'Globe': return <Globe className="w-4 h-4 text-[#c9a86a]" />;
      case 'Layout': return <Layout className="w-4 h-4 text-[#c9a86a]" />;
      case 'Database': return <Database className="w-4 h-4 text-[#c9a86a]" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4 text-[#c9a86a]" />;
      case 'Kanban': return <Kanban className="w-4 h-4 text-[#c9a86a]" />;
      default: return <Languages className="w-4 h-4 text-[#c9a86a]" />;
    }
  };

  return (
    <section id="habilidades" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium bg-[#121212] border border-[#c9a86a]/30 text-[#c9a86a]">
            <Code2 className="w-3.5 h-3.5" />
            <span>Competências e Stack</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif leading-tight ${
            darkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Habilidades Técnicas & <span className="italic text-[#c9a86a] font-normal">Soft Skills</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-stone-600'}`}>
            Conhecimentos consolidados ao longo do curso de ADS e aplicação em projetos práticos.
          </p>
        </div>

        {/* Technical Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat) => (
            <div 
              key={cat.title}
              className={`rounded-xl p-7 border transition-all ${
                darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
              }`}
            >
              <h3 className={`text-xl font-serif pb-3 mb-5 border-b flex items-center justify-between ${
                darkMode ? 'text-white border-white/10' : 'text-stone-900 border-stone-100'
              }`}>
                <span>{cat.title}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                  {cat.skills.length} itens
                </span>
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded bg-[#1a1a1a] border border-white/10">
                          {getIcon(skill.icon)}
                        </div>
                        <span className={`text-xs font-serif ${
                          darkMode ? 'text-neutral-200' : 'text-stone-800'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded font-mono ${
                        skill.level === 'Avançado' 
                          ? 'border border-[#c9a86a]/40 bg-[#c9a86a]/10 text-[#c9a86a]'
                          : 'bg-[#1a1a1a] border border-white/10 text-neutral-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Tags */}
                    {skill.tags && (
                      <div className="flex flex-wrap gap-1.5 pl-9">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              darkMode 
                                ? 'bg-[#1a1a1a] text-neutral-400 border border-white/5' 
                                : 'bg-stone-100 text-stone-600'
                            }`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className={`rounded-xl p-7 sm:p-8 border ${
          darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center font-bold">
              <Smile className="w-5 h-5 text-[#c9a86a]" />
            </div>
            <div>
              <h3 className={`text-2xl font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                Soft Skills Valorizadas em TI
              </h3>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                Competências comportamentais validadas em ambiente de atendimento e squad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkillsList.map((ss) => (
              <div 
                key={ss.name}
                className={`p-4 rounded-lg border space-y-1.5 transition-all ${
                  darkMode 
                    ? 'bg-[#1a1a1a] border-white/10 hover:border-[#c9a86a]/40' 
                    : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-serif text-[#c9a86a] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#c9a86a] shrink-0" />
                  <span className="text-neutral-200 font-sans font-semibold">{ss.name}</span>
                </div>
                <p className={`text-xs leading-relaxed ${
                  darkMode ? 'text-neutral-400' : 'text-stone-600'
                }`}>
                  {ss.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
