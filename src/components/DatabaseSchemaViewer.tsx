import React, { useState } from 'react';
import { 
  Database, 
  Table, 
  Code, 
  Play, 
  CheckCircle, 
  Sparkles, 
  Key, 
  Link, 
  Layers
} from 'lucide-react';
import { postgresqlSchemaSql } from '../data/resumeData';

interface DatabaseSchemaViewerProps {
  darkMode: boolean;
}

export const DatabaseSchemaViewer: React.FC<DatabaseSchemaViewerProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'ERD' | 'DDL_SQL'>('ERD');
  const [queryRunning, setQueryRunning] = useState(false);
  const [queryResult, setQueryResult] = useState<any[] | null>(null);

  const runQuerySimulation = () => {
    setQueryRunning(true);
    setTimeout(() => {
      setQueryResult([
        { responsavel: 'Maria Cecilia', total_atribuidas: 4, concluidas: 3, percentual_conclusao: '75.00%' },
        { responsavel: 'Equipe FATEC', total_atribuidas: 1, concluidas: 0, percentual_conclusao: '0.00%' }
      ]);
      setQueryRunning(false);
    }, 400);
  };

  return (
    <div className={`rounded-xl border overflow-hidden shadow-2xl ${
      darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-stone-200'
    }`}>
      
      {/* Header Bar */}
      <div className={`p-4 border-b flex flex-wrap items-center justify-between gap-3 ${
        darkMode ? 'bg-[#0a0a0a] border-white/10' : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#c9a86a]/40 text-[#c9a86a] flex items-center justify-center font-bold">
            <Database className="w-4 h-4 text-[#c9a86a]" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm sm:text-base leading-tight">
              Modelagem de Banco de Dados PostgreSQL
            </h4>
            <div className="text-xs font-mono text-neutral-500">
              Esquema Relacional com Integridade Referencial & Chaves Estrangeiras
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className={`flex rounded-lg p-1 border text-xs font-mono ${
          darkMode ? 'bg-[#1a1a1a] border-white/10' : 'bg-stone-200/70 border-stone-300'
        }`}>
          <button
            onClick={() => setActiveTab('ERD')}
            className={`px-3 py-1.5 rounded transition-all ${
              activeTab === 'ERD' 
                ? 'bg-[#c9a86a] text-black font-semibold shadow-sm' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Diagrama ERD
          </button>
          <button
            onClick={() => setActiveTab('DDL_SQL')}
            className={`px-3 py-1.5 rounded transition-all ${
              activeTab === 'DDL_SQL' 
                ? 'bg-[#c9a86a] text-black font-semibold shadow-sm' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Script DDL & SQL
          </button>
        </div>
      </div>

      {activeTab === 'ERD' ? (
        /* ERD Cards View */
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Table 1: USUARIOS */}
            <div className={`p-5 rounded-xl border space-y-3 ${
              darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 font-bold text-sm text-indigo-600 dark:text-indigo-400">
                  <Table className="w-4 h-4" />
                  <span>tabela: usuarios</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500">
                  PK: id
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="flex items-center gap-1.5 font-bold text-amber-500">
                    <Key className="w-3 h-3" /> id
                  </span>
                  <span className="text-slate-400">SERIAL (PK)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span>nome</span>
                  <span className="text-slate-400">VARCHAR(100)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span>email</span>
                  <span className="text-slate-400">VARCHAR(120) UNIQUE</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span>cargo</span>
                  <span className="text-slate-400">VARCHAR(50)</span>
                </div>
              </div>
            </div>

            {/* Table 2: TAREFAS */}
            <div className={`p-5 rounded-xl border space-y-3 ${
              darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 font-bold text-sm text-blue-600 dark:text-blue-400">
                  <Table className="w-4 h-4" />
                  <span>tabela: tarefas</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500">
                  FK: usuario_id
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="flex items-center gap-1.5 font-bold text-amber-500">
                    <Key className="w-3 h-3" /> id
                  </span>
                  <span className="text-slate-400">VARCHAR(20) (PK)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span>titulo</span>
                  <span className="text-slate-400">VARCHAR(150)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span>status</span>
                  <span className="text-slate-400">VARCHAR(30) CHECK</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="flex items-center gap-1.5 font-bold text-blue-500">
                    <Link className="w-3 h-3" /> usuario_id
                  </span>
                  <span className="text-blue-500 font-semibold">INT (FK usuarios)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Relationship Callout */}
          <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
            darkMode ? 'bg-indigo-950/20 border-indigo-800/40 text-indigo-200' : 'bg-indigo-50 border-indigo-200 text-indigo-900'
          }`}>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>
                <strong>Relacionamento 1:N:</strong> Um usuário (desenvolvedor) pode possuir múltiplas tarefas associadas com integridade <code className="font-mono">ON DELETE SET NULL</code>.
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* DDL SQL Viewer & Query Runner */
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 tracking-wider">
              Código DDL PostgreSQL & Query de Monitoramento
            </span>

            <button
              onClick={runQuerySimulation}
              disabled={queryRunning}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478] shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{queryRunning ? 'Executando Query...' : 'Executar Query SQL'}</span>
            </button>
          </div>

          <pre className={`p-4 rounded-xl border text-xs font-mono overflow-x-auto leading-relaxed ${
            darkMode ? 'bg-[#0a0a0a] border-white/10 text-neutral-300' : 'bg-stone-950 text-stone-300 border-stone-800'
          }`}>
            {postgresqlSchemaSql}
          </pre>

          {/* Simulated Query Execution Result */}
          {queryResult && (
            <div className="space-y-2">
              <div className="text-xs font-bold text-emerald-500 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Resultado da Query de Monitoramento (2 linhas retornadas):</span>
              </div>

              <div className="overflow-x-auto border rounded-xl dark:border-slate-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-2.5">responsavel</th>
                      <th className="p-2.5">total_atribuidas</th>
                      <th className="p-2.5">concluidas</th>
                      <th className="p-2.5">percentual_conclusao</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {queryResult.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold">{row.responsavel}</td>
                        <td className="p-2.5">{row.total_atribuidas}</td>
                        <td className="p-2.5">{row.concluidas}</td>
                        <td className="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">{row.percentual_conclusao}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
