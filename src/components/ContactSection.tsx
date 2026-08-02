import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageCircle, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface ContactSectionProps {
  darkMode: boolean;
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode, onOpenCvModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Quick message form state
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Olá Maria Cecilia! Meu nome é ${recruiterName || 'Recrutador'}${companyName ? ` da empresa ${companyName}` : ''}. ${message || 'Gostaria de agendar uma conversa sobre uma oportunidade em TI.'}`;
    const url = `https://wa.me/${personalInfo.phoneRaw}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 3000);
  };

  return (
    <section id="contato" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium bg-[#121212] border border-[#c9a86a]/30 text-[#c9a86a]">
            <Mail className="w-3.5 h-3.5" />
            <span>Vamos Conversar?</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif leading-tight ${
            darkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Entre em <span className="italic text-[#c9a86a] font-normal">Contato</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-stone-600'}`}>
            Estou disponível para processos seletivos, estágio ou vagas Jr. em São Paulo e remoto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className={`p-5 rounded-xl border flex items-center justify-between gap-4 ${
              darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
            }`}>
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#c9a86a]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">E-mail Profissional</div>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className={`font-serif text-sm hover:text-[#c9a86a] transition-colors ${
                      darkMode ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className={`p-2 rounded-lg border text-xs font-medium transition-all ${
                  darkMode ? 'bg-[#1a1a1a] border-white/10 hover:border-[#c9a86a]/40' : 'bg-stone-100 border-stone-200'
                }`}
                title="Copiar E-mail"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#c9a86a]" /> : <Copy className="w-4 h-4 text-neutral-500" />}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className={`p-5 rounded-xl border flex items-center justify-between gap-4 ${
              darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
            }`}>
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#c9a86a]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Telefone / WhatsApp</div>
                  <a 
                    href={`https://wa.me/${personalInfo.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-serif text-sm hover:text-[#c9a86a] transition-colors ${
                      darkMode ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className={`p-2 rounded-lg border text-xs font-medium transition-all ${
                  darkMode ? 'bg-[#1a1a1a] border-white/10 hover:border-[#c9a86a]/40' : 'bg-stone-100 border-stone-200'
                }`}
                title="Copiar Telefone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#c9a86a]" /> : <Copy className="w-4 h-4 text-neutral-500" />}
              </button>
            </div>

            {/* Location Card */}
            <div className={`p-5 rounded-xl border flex items-center gap-3.5 ${
              darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
            }`}>
              <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#c9a86a]" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Localização</div>
                <div className={`font-serif text-sm ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 rounded-lg border uppercase tracking-wider font-mono text-[11px] flex items-center justify-center gap-2 transition-all ${
                  darkMode ? 'bg-[#121212] border-white/10 text-neutral-200 hover:border-[#c9a86a]/50 hover:text-[#c9a86a]' : 'bg-white border-stone-200 text-stone-800'
                }`}
              >
                <Linkedin className="w-3.5 h-3.5 text-[#c9a86a]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 rounded-lg border uppercase tracking-wider font-mono text-[11px] flex items-center justify-center gap-2 transition-all ${
                  darkMode ? 'bg-[#121212] border-white/10 text-neutral-200 hover:border-[#c9a86a]/50 hover:text-[#c9a86a]' : 'bg-white border-stone-200 text-stone-800'
                }`}
              >
                <Github className="w-3.5 h-3.5 text-[#c9a86a]" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Card: Quick WhatsApp Message Generator Form */}
          <div className={`lg:col-span-7 p-7 rounded-xl border shadow-2xl ${
            darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
          }`}>
            <h3 className={`text-2xl font-serif mb-2 ${darkMode ? 'text-white' : 'text-stone-900'}`}>
              Enviar Mensagem Direta
            </h3>
            <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-6">
              Preencha para gerar um contato direto no WhatsApp de Maria Cecilia.
            </p>

            <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Andrade"
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    className={`w-full p-3 rounded-lg border text-xs focus:outline-none focus:border-[#c9a86a] ${
                      darkMode ? 'bg-[#1a1a1a] border-white/10 text-white placeholder:text-neutral-600' : 'bg-stone-50 border-stone-300'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">Empresa / Tech Recruiter</label>
                  <input
                    type="text"
                    placeholder="Ex: Empresa X / Consultoria TI"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className={`w-full p-3 rounded-lg border text-xs focus:outline-none focus:border-[#c9a86a] ${
                      darkMode ? 'bg-[#1a1a1a] border-white/10 text-white placeholder:text-neutral-600' : 'bg-stone-50 border-stone-300'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">Mensagem ou Detalhes da Vaga</label>
                <textarea
                  rows={4}
                  placeholder="Ex: Olá Maria, gostamos do seu portfólio e do seu TCC em Spring Boot. Gostaríamos de agendar uma entrevista..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full p-3 rounded-lg border text-xs focus:outline-none focus:border-[#c9a86a] ${
                    darkMode ? 'bg-[#1a1a1a] border-white/10 text-white placeholder:text-neutral-600' : 'bg-stone-50 border-stone-300'
                  }`}
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="text-xs font-serif text-[#c9a86a] hover:underline"
                >
                  &rarr; Ou prefere visualizar o Currículo Completo?
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono uppercase tracking-wider text-xs font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478] shadow-xl"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enviar via WhatsApp</span>
                </button>
              </div>

              {sentSuccess && (
                <div className="p-3 rounded-lg bg-[#c9a86a]/10 text-[#c9a86a] text-xs font-mono text-center border border-[#c9a86a]/30">
                  ✓ Abrindo WhatsApp... Obrigado pelo contato!
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
