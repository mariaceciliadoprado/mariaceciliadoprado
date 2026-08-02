import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProject } from './components/FeaturedProject';
import { ExperienceSection } from './components/ExperienceSection';
import { AiAssistantSection } from './components/AiAssistantSection';
import { ContactSection } from './components/ContactSection';
import { CurriculumModal } from './components/CurriculumModal';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToProject = () => {
    const el = document.getElementById('projeto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
    }`}>
      {/* Navigation Header */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenCvModal={() => setIsCvModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          darkMode={darkMode} 
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onScrollToProject={scrollToProject}
        />

        <AboutSection darkMode={darkMode} />

        <SkillsSection darkMode={darkMode} />

        <FeaturedProject darkMode={darkMode} />

        <ExperienceSection darkMode={darkMode} />

        <AiAssistantSection darkMode={darkMode} />

        <ContactSection 
          darkMode={darkMode} 
          onOpenCvModal={() => setIsCvModalOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer 
        darkMode={darkMode} 
        onOpenCvModal={() => setIsCvModalOpen(true)} 
      />

      {/* Curriculum Modal (A4 Print Ready) */}
      <CurriculumModal 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
        darkMode={darkMode} 
      />
    </div>
  );
}
