import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Layers, 
  Kanban, 
  Server, 
  Database, 
  CheckCircle2, 
  ExternalLink, 
  Terminal,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { tccProjectDetails } from '../data/resumeData';
import { TaskSystemDemo } from './TaskSystemDemo';
import { RestApiExplorer } from './RestApiExplorer';
import { DatabaseSchemaViewer } from './DatabaseSchemaViewer';

interface FeaturedProjectProps {
  darkMode: boolean;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'DEMO' | 'API' | 'DATABASE'>('DEMO');

  return (
    <section id="projeto" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium bg-[#121212] border border-[#c9a86a]/30 text-[#c9a86a]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Projeto de Conclusão de Curso (TCC) • FATEC Itaquera</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif leading-tight ${
            darkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Sistema de Gestão & <span className="italic text-[#c9a86a] font-normal">Monitoramento</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-stone-600'}`}>
            Desenvolvimento full-stack com arquitetura limpa, relatórios em tempo real e APIs RESTful em Java Spring Boot.
          </p>
        </div>

        {/* Project Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className={`p-1.5 rounded-xl border flex flex-wrap items-center gap-1 sm:gap-2 text-xs uppercase tracking-wider font-medium shadow-xl ${
            darkMode ? 'bg-[#121212] border-white/10' : 'bg-stone-100 border-stone-200'
          }`}>
            <button
              onClick={() => setActiveTab('DEMO')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'DEMO'
                  ? 'bg-[#c9a86a] text-black font-semibold shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Kanban className="w-3.5 h-3.5" />
              <span>Demonstração ao Vivo</span>
            </button>

            <button
              onClick={() => setActiveTab('OVERVIEW')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'OVERVIEW'
                  ? 'bg-[#c9a86a] text-black font-semibold shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Visão Geral & Contribuição</span>
            </button>

            <button
              onClick={() => setActiveTab('API')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'API'
                  ? 'bg-[#c9a86a] text-black font-semibold shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>API REST (Spring)</span>
            </button>

            <button
              onClick={() => setActiveTab('DATABASE')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'DATABASE'
                  ? 'bg-[#c9a86a] text-black font-semibold shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Banco SQL</span>
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div>
          {activeTab === 'DEMO' && (
            <TaskSystemDemo darkMode={darkMode} />
          )}

          {activeTab === 'OVERVIEW' && (
            <div className={`rounded-xl p-7 sm:p-9 border space-y-8 ${
              darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
            }`}>
              
              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a86a] mb-3">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tccProjectDetails.techs.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-mono border ${
                        darkMode 
                          ? 'bg-[#1a1a1a] border-white/10 text-neutral-300' 
                          : 'bg-stone-100 border-stone-200 text-stone-800'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Description */}
              <div className="space-y-3">
                <h3 className={`text-2xl font-serif ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                  Sobre a Aplicação
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-stone-700'}`}>
                  {tccProjectDetails.description}
                </p>
              </div>

              {/* Main Contributions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className={`p-5 rounded-lg border space-y-3 ${
                  darkMode ? 'bg-[#1a1a1a] border-white/10' : 'bg-stone-50 border-stone-200'
                }`}>
                  <h4 className="text-sm font-serif text-[#c9a86a] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a86a]" />
                    <span className="font-sans font-semibold">Contribuições Principais de Maria</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {tccProjectDetails.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#c9a86a] font-bold">&bull;</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`p-5 rounded-lg border space-y-3 ${
                  darkMode ? 'bg-[#1a1a1a] border-white/10' : 'bg-stone-50 border-stone-200'
                }`}>
                  <h4 className="text-sm font-serif text-[#c9a86a] flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#c9a86a]" />
                    <span className="font-sans font-semibold">Recursos de Arquitetura</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {tccProjectDetails.architectureFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#c9a86a] font-bold">&bull;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action */}
              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => setActiveTab('DEMO')}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-xs uppercase tracking-[0.2em] font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478] shadow-xl"
                >
                  <span>Experimentar Aplicação ao Vivo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {activeTab === 'API' && (
            <RestApiExplorer darkMode={darkMode} />
          )}

          {activeTab === 'DATABASE' && (
            <DatabaseSchemaViewer darkMode={darkMode} />
          )}
        </div>

      </div>
    </section>
  );
};
