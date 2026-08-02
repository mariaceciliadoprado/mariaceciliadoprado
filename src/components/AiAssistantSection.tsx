import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  HelpCircle, 
  Check, 
  MessageSquare,
  RefreshCw
} from 'lucide-react';
import { recruiterFaq } from '../data/resumeData';

interface AiAssistantSectionProps {
  darkMode: boolean;
}

interface Message {
  id: string;
  sender: 'USER' | 'BOT';
  text: string;
}

export const AiAssistantSection: React.FC<AiAssistantSectionProps> = ({ darkMode }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'BOT',
      text: 'Olá! Sou o assistente virtual do portfólio de Maria Cecilia do Prado. Como posso te ajudar a avaliar o perfil dela para sua oportunidade em TI?'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleAsk = (questionText: string, defaultAnswer?: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'USER',
      text: questionText
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let answer = defaultAnswer;
      if (!answer) {
        // Fallback matching
        const match = recruiterFaq.find(q => 
          questionText.toLowerCase().includes('java') || 
          questionText.toLowerCase().includes('tecnic') || 
          questionText.toLowerCase().includes('back')
        );
        if (match) {
          answer = match.answer;
        } else {
          answer = "Maria Cecilia é estudante do último semestre de ADS na FATEC Itaquera (formação Julho/2026), domina Java Spring Boot, React, PostgreSQL e traz soft skills de comunicação e resiliência desenvolvidas no atendimento ao cliente. Ela está pronta para iniciar imediatamente como Desenvolvedora Junior, Estagiária ou Analista de Suporte!";
        }
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'BOT',
        text: answer
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;
    const query = inputQuery;
    setInputQuery('');
    handleAsk(query);
  };

  return (
    <section id="assistente" className="py-24 relative border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium bg-[#121212] border border-[#c9a86a]/30 text-[#c9a86a]">
            <Bot className="w-3.5 h-3.5" />
            <span>Assistente do Recrutador</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif leading-tight ${
            darkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Perguntas Frequentes & <span className="italic text-[#c9a86a] font-normal">Tiradúvidas</span>
          </h2>
          <p className={`text-xs sm:text-sm font-mono uppercase tracking-wider ${darkMode ? 'text-neutral-400' : 'text-stone-600'}`}>
            Clique nas perguntas abaixo ou digite sua dúvida para entender como Maria se encaixa no seu time.
          </p>
        </div>

        {/* Chat Card Box */}
        <div className={`rounded-xl border overflow-hidden shadow-2xl ${
          darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
        }`}>
          
          {/* Header */}
          <div className={`p-4 border-b flex items-center justify-between ${
            darkMode ? 'bg-[#0a0a0a] border-white/10' : 'bg-stone-50 border-stone-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center font-bold">
                <Bot className="w-5 h-5 text-[#c9a86a]" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-sm text-white">IA Recrutamento • Maria Cecilia</h4>
                <div className="text-[10px] font-mono text-[#c9a86a] uppercase tracking-wider">● Respostas instantâneas do currículo</div>
              </div>
            </div>

            <button
              onClick={() => setMessages([{
                id: 'welcome',
                sender: 'BOT',
                text: 'Chat reiniciado! Faça sua pergunta sobre o perfil da Maria Cecilia.'
              }])}
              className="p-1.5 rounded border border-white/10 text-xs text-neutral-400 hover:text-white hover:bg-white/5"
              title="Reiniciar Conversa"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick FAQ Suggestion Pills */}
          <div className={`p-3.5 border-b flex flex-wrap gap-2 text-xs ${
            darkMode ? 'bg-[#121212] border-white/10' : 'bg-stone-100 border-stone-200'
          }`}>
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 self-center mr-1">Perguntas Rápidas:</span>
            {recruiterFaq.map((faq) => (
              <button
                key={faq.id}
                onClick={() => handleAsk(faq.question, faq.answer)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-serif transition-all text-left ${
                  darkMode
                    ? 'bg-[#1a1a1a] border-white/10 text-neutral-300 hover:border-[#c9a86a]/50 hover:text-[#c9a86a]'
                    : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                {faq.question}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="p-5 h-[340px] overflow-y-auto space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'USER' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'BOT' && (
                  <div className="w-7 h-7 rounded bg-[#1a1a1a] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-[#c9a86a]" />
                  </div>
                )}

                <div className={`max-w-[82%] p-3.5 rounded-lg leading-relaxed text-xs sm:text-sm ${
                  msg.sender === 'USER'
                    ? 'bg-[#c9a86a] text-black font-medium'
                    : darkMode
                      ? 'bg-[#1a1a1a] text-neutral-200 border border-white/10 font-serif'
                      : 'bg-stone-100 text-stone-800 border border-stone-200'
                }`}>
                  {msg.text}
                </div>

                {msg.sender === 'USER' && (
                  <div className="w-7 h-7 rounded bg-[#c9a86a] text-black flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded bg-[#1a1a1a] border border-[#c9a86a]/30 text-[#c9a86a] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-[#c9a86a]" />
                </div>
                <div className={`p-3 rounded-lg text-xs font-mono ${
                  darkMode ? 'bg-[#1a1a1a] text-neutral-400 border border-white/10' : 'bg-stone-100 text-stone-500'
                }`}>
                  Analisando dados do currículo...
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleFormSubmit} className={`p-3 border-t flex gap-2 ${
            darkMode ? 'bg-[#0a0a0a] border-white/10' : 'bg-stone-50 border-stone-200'
          }`}>
            <input
              type="text"
              placeholder="Digite sua pergunta para o assistente (ex: Qual o nível de Java?)..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className={`flex-1 px-4 py-2.5 rounded-lg border text-xs focus:outline-none focus:border-[#c9a86a] ${
                darkMode ? 'bg-[#121212] border-white/10 text-white placeholder:text-neutral-600' : 'bg-white border-stone-300 text-stone-900'
              }`}
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg font-mono uppercase tracking-wider text-xs font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478] flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Enviar</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
