import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { personalInfo, educationData, experienceData, skillCategories, softSkillsList, tccProjectDetails } from '../data/resumeData';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      
      {/* Container */}
      <div className={`w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[92vh] ${
        darkMode ? 'bg-[#121212] text-neutral-100 border border-white/10' : 'bg-white text-stone-900'
      }`}>
        
        {/* Modal Header Actions */}
        <div className={`p-4 border-b flex items-center justify-between print:hidden ${
          darkMode ? 'bg-[#0a0a0a] border-white/10' : 'bg-stone-100 border-stone-200'
        }`}>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#c9a86a]" />
            <span className="font-serif font-semibold text-sm sm:text-base text-white">
              Currículo Oficial • Maria Cecilia do Prado
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478] shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg border ${
                darkMode ? 'bg-[#1a1a1a] border-white/10 text-neutral-300 hover:text-white' : 'bg-white border-stone-300 text-stone-700'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body (A4 Style) */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans space-y-6 text-stone-900 bg-white dark:bg-[#121212] dark:text-neutral-100 print:p-0 print:bg-white print:text-black">
          
          {/* Document Title Header */}
          <div className="border-b pb-5 border-stone-300 dark:border-white/10 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-serif tracking-tight uppercase text-[#c9a86a]">
              {personalInfo.name}
            </h1>
            
            <div className="text-xs font-mono text-stone-600 dark:text-neutral-400 flex flex-wrap gap-x-4 gap-y-1">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
            </div>
          </div>

          {/* Section: Objetivo Profissional */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a86a] border-b pb-1 border-[#c9a86a]/30">
              Objetivo Profissional
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700 dark:text-neutral-300">
              {personalInfo.objective}
            </p>
          </div>

          {/* Section: Resumo Profissional */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a86a] border-b pb-1 border-[#c9a86a]/30">
              Resumo Profissional
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700 dark:text-neutral-300 whitespace-pre-line">
              {personalInfo.summary}
            </p>
          </div>

          {/* Section: Formação Acadêmica */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a86a] border-b pb-1 border-[#c9a86a]/30">
              Formação Acadêmica
            </h2>
            {educationData.map((edu, i) => (
              <div key={i} className="text-xs sm:text-sm">
                <div className="font-serif font-semibold">{edu.degree}</div>
                <div className="text-stone-600 dark:text-neutral-400 italic">
                  {edu.institution} — {edu.status} (Previsão de término: {edu.expectedCompletion})
                </div>
              </div>
            ))}
          </div>

          {/* Section: Habilidades Técnicas & Competências */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a86a] border-b pb-1 border-[#c9a86a]/30">
              Habilidades Técnicas e Competências
            </h2>
            <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-stone-700 dark:text-neutral-300">
              <li><strong>Linguagens de Programação:</strong> Java, Python, JavaScript, C#</li>
              <li><strong>Desenvolvimento Front-End & Back-End:</strong> HTML5, CSS3, React, Node.js, REST APIs</li>
              <li><strong>Banco de Dados:</strong> SQL Server, MySQL, PostgreSQL (Modelagem, Consultas e Queries)</li>
              <li><strong>Ferramentas & Metodologias:</strong> Git, GitHub, Metodologias Ágeis (Scrum / Kanban)</li>
              <li><strong>Idiomas:</strong> Português (Nativo) | Inglês (Intermediário)</li>
              <li><strong>Soft Skills:</strong> Resolução de problemas, trabalho em equipe, adaptabilidade, comunicação assertiva e inteligência emocional sob pressão.</li>
            </ul>
          </div>

          {/* Section: Projetos de Tecnologia e Acadêmicos */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a86a] border-b pb-1 border-[#c9a86a]/30">
              Projetos de Tecnologia e Acadêmicos
            </h2>
            <div className="text-xs sm:text-sm space-y-1">
              <div className="font-serif font-semibold">{tccProjectDetails.title} ({tccProjectDetails.subtitle})</div>
              <p className="text-stone-700 dark:text-neutral-300">
                <strong>Descrição:</strong> {tccProjectDetails.description}
              </p>
              <p className="text-stone-700 dark:text-neutral-300">
                <strong>Tecnologias Utilizadas:</strong> {tccProjectDetails.techs.join(', ')}.
              </p>
              <p className="text-stone-700 dark:text-neutral-300">
                <strong>Contribuição Principal:</strong> Desenvolvimento de rotas Back-End (APIs RESTful), modelagem do banco de dados relacional e criação da interface do usuário focada na experiência do cliente (UX/UI).
              </p>
            </div>
          </div>

          {/* Section: Experiência Profissional */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a86a] border-b pb-1 border-[#c9a86a]/30">
              Experiência Profissional
            </h2>
            {experienceData.map((exp, i) => (
              <div key={i} className="text-xs sm:text-sm space-y-1">
                <div className="font-serif font-semibold">{exp.role} | {exp.company} — <span className="font-sans font-normal italic text-neutral-400">{exp.period}</span></div>
                <ul className="list-disc pl-5 space-y-1 text-stone-700 dark:text-neutral-300">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>
                      <strong>{h.title}:</strong> {h.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
