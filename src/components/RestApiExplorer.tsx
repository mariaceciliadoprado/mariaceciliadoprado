import React, { useState } from 'react';
import { 
  Play, 
  Terminal, 
  Check, 
  Copy, 
  Code, 
  Globe, 
  Server,
  ArrowRight,
  FileCode,
  Sparkles
} from 'lucide-react';
import { sampleEndpoints } from '../data/resumeData';
import { ApiEndpoint } from '../types';

interface RestApiExplorerProps {
  darkMode: boolean;
}

export const RestApiExplorer: React.FC<RestApiExplorerProps> = ({ darkMode }) => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(sampleEndpoints[0]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(selectedEndpoint.responseBody);
  const [copied, setCopied] = useState(false);

  const handleRunRequest = (endpoint: ApiEndpoint) => {
    setSelectedEndpoint(endpoint);
    setLoading(true);
    setTimeout(() => {
      setResponse(endpoint.responseBody);
      setLoading(false);
    }, 300);
  };

  const copyCurl = () => {
    const curl = `curl -X ${selectedEndpoint.method} "https://api.fatec-itaquera.br${selectedEndpoint.path}" -H "Content-Type: application/json"`;
    navigator.clipboard.writeText(curl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodBadgeClass = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30';
      case 'POST': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'PUT': return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30';
      case 'DELETE': return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30';
      default: return 'bg-slate-500/10 text-slate-600 border-slate-500/30';
    }
  };

  return (
    <div className={`rounded-xl border overflow-hidden shadow-2xl ${
      darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
    }`}>
      
      {/* Top Console Bar */}
      <div className={`p-4 border-b flex items-center justify-between ${
        darkMode ? 'bg-[#0a0a0a] border-white/10' : 'bg-stone-900 text-white border-stone-800'
      }`}>
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#c9a86a]" />
          <span className="font-mono text-xs font-bold tracking-wide text-white">
            Spring Boot REST API Console • Maria Cecilia TCC
          </span>
        </div>

        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#c9a86a]/10 text-[#c9a86a] font-semibold border border-[#c9a86a]/30">
          ● API ONLINE (200 OK)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Endpoint List Selector */}
        <div className={`lg:col-span-5 p-4 border-b lg:border-b-0 lg:border-r space-y-2 ${
          darkMode ? 'border-white/10 bg-[#0d0d0d]' : 'border-stone-200 bg-stone-50/50'
        }`}>
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3 px-1">
            Endpoints RESTful
          </div>

          {sampleEndpoints.map((ep) => (
            <button
              key={ep.path + ep.method}
              onClick={() => handleRunRequest(ep)}
              className={`w-full text-left p-3 rounded-lg border transition-all flex flex-col gap-1.5 ${
                selectedEndpoint.path === ep.path && selectedEndpoint.method === ep.method
                  ? darkMode 
                    ? 'bg-[#1a1a1a] border-[#c9a86a]/80 shadow-md' 
                    : 'bg-stone-100 border-stone-400 shadow-sm'
                  : darkMode 
                    ? 'bg-[#121212] border-white/10 hover:border-white/20' 
                    : 'bg-white border-stone-200 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono border ${getMethodBadgeClass(ep.method)}`}>
                  {ep.method}
                </span>
                <span className={`font-mono text-xs font-semibold truncate ${
                  darkMode ? 'text-neutral-200' : 'text-stone-800'
                }`}>
                  {ep.path}
                </span>
              </div>

              <div className="text-xs text-neutral-500 font-medium line-clamp-1">
                {ep.summary}
              </div>
            </button>
          ))}
        </div>

        {/* Request & Response Playground */}
        <div className="lg:col-span-7 p-5 space-y-4 font-mono text-xs">
          
          {/* Active Request Bar */}
          <div className={`p-3 rounded-lg border flex items-center justify-between gap-3 ${
            darkMode ? 'bg-[#0a0a0a] border-white/10' : 'bg-stone-100 border-stone-300'
          }`}>
            <div className="flex items-center gap-2 truncate">
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${getMethodBadgeClass(selectedEndpoint.method)}`}>
                {selectedEndpoint.method}
              </span>
              <span className={`font-bold truncate ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                {selectedEndpoint.path}
              </span>
            </div>

            <button
              onClick={() => handleRunRequest(selectedEndpoint)}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478] transition-all shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{loading ? 'Executando...' : 'Testar HTTP'}</span>
            </button>
          </div>

          <p className="text-xs font-sans text-neutral-400">
            {selectedEndpoint.description}
          </p>

          {/* Request Payload (if present) */}
          {selectedEndpoint.requestBody && (
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                Payload da Requisição (JSON Body)
              </div>
              <pre className={`p-3 rounded-lg border overflow-x-auto text-[11px] ${
                darkMode ? 'bg-[#0a0a0a] border-white/10 text-amber-300' : 'bg-stone-900 text-amber-300 border-stone-800'
              }`}>
                {JSON.stringify(selectedEndpoint.requestBody, null, 2)}
              </pre>
            </div>
          )}

          {/* Response Box */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="font-bold text-neutral-400 uppercase tracking-wider">
                Resposta do Servidor Spring Boot
              </span>
              <span className="text-[#c9a86a] font-bold font-mono">
                Status: {selectedEndpoint.responseStatus} {selectedEndpoint.responseStatus === 201 ? 'Created' : 'OK'}
              </span>
            </div>

            <div className="relative">
              <pre className={`p-4 rounded-lg border overflow-x-auto text-[11px] leading-relaxed ${
                darkMode ? 'bg-[#0a0a0a] border-white/10 text-emerald-400' : 'bg-stone-950 text-emerald-400 border-stone-800'
              }`}>
                {loading ? '// Processando requisição na Controller Spring Boot...' : JSON.stringify(response, null, 2)}
              </pre>

              <button
                onClick={copyCurl}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] text-neutral-300 text-[10px] font-mono flex items-center gap-1 border border-white/10"
                title="Copiar Comando cURL"
              >
                {copied ? <Check className="w-3 h-3 text-[#c9a86a]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copiado!' : 'cURL'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
