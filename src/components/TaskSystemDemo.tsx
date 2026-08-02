import React, { useState } from 'react';
import { 
  Plus, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Filter, 
  BarChart3, 
  UserCheck, 
  Trash2, 
  Check, 
  Sparkles,
  PieChart,
  ListTodo,
  Kanban,
  ShieldAlert,
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { initialTasksData, tccProjectDetails } from '../data/resumeData';
import { TaskItem } from '../types';

interface TaskSystemDemoProps {
  darkMode: boolean;
}

export const TaskSystemDemo: React.FC<TaskSystemDemoProps> = ({ darkMode }) => {
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasksData);
  const [filterPriority, setFilterPriority] = useState<string>('TODAS');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentRole, setCurrentRole] = useState<'GERENTE' | 'DEV' | 'CLIENTE'>('GERENTE');
  const [viewMode, setViewMode] = useState<'KANBAN' | 'METRICAS'>('KANBAN');

  // Form State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newPriority, setNewPriority] = useState<'BAIXA' | 'MEDIA' | 'ALTA'>('MEDIA');
  const [newAssignee, setNewAssignee] = useState('Maria Cecilia');

  // Move task status
  const updateTaskStatus = (id: string, newStatus: TaskItem['status']) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        if (newStatus === 'CONCLUIDO') {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 }
          });
        }
        return { ...t, status: newStatus };
      }
      return t;
    }));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask: TaskItem = {
      id: `TASK-${100 + tasks.length + 1}`,
      title: newTitle,
      description: newDesc || 'Sem descrição fornecida.',
      status: 'A_FAZER',
      priority: newPriority,
      assignee: newAssignee,
      dueDate: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0],
      createdAt: new Date().toISOString().split('T')[0]
    };

    setTasks([newTask, ...tasks]);
    setNewTitle('');
    setNewDesc('');
    setShowAddModal(false);
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  // Metrics
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter(t => t.status === 'CONCLUIDO').length;
  const inProgressTasks = tasks.filter(t => t.status === 'EM_ANDAMENTO').length;
  const todoTasks = tasks.filter(t => t.status === 'A_FAZER').length;
  const completionRate = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  // Filtered tasks
  const filteredTasks = tasks.filter(t => {
    const matchesPriority = filterPriority === 'TODAS' || t.priority === filterPriority;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.assignee.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  return (
    <div className={`rounded-xl border overflow-hidden shadow-2xl ${
      darkMode ? 'bg-[#121212] border-white/10 text-neutral-100' : 'bg-white border-stone-200 text-stone-900'
    }`}>
      
      {/* Top Demo Header Bar */}
      <div className={`p-4 border-b flex flex-wrap items-center justify-between gap-3 ${
        darkMode ? 'bg-[#0a0a0a] border-white/10' : 'bg-stone-50 border-stone-200'
      }`}>
        
        {/* Title & Badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#c9a86a]/40 text-[#c9a86a] flex items-center justify-center font-bold">
            <Kanban className="w-4 h-4 text-[#c9a86a]" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm sm:text-base leading-tight">
              Sistema de Monitoramento de Tarefas
            </h4>
            <div className="text-xs font-mono text-neutral-500 flex items-center gap-2">
              <span>Spring Boot • React • PostgreSQL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]"></span>
              <span className="text-[#c9a86a] font-medium">Demo Ativa</span>
            </div>
          </div>
        </div>

        {/* User Role Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-neutral-500 hidden sm:inline">Perfil:</span>
          <div className={`flex rounded-lg p-1 border text-xs font-mono ${
            darkMode ? 'bg-[#1a1a1a] border-white/10' : 'bg-stone-200/70 border-stone-300'
          }`}>
            {(['GERENTE', 'DEV', 'CLIENTE'] as const).map((role) => (
              <button
                key={role}
                onClick={() => setCurrentRole(role)}
                className={`px-2.5 py-1 rounded transition-all ${
                  currentRole === role
                    ? 'bg-[#c9a86a] text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {role === 'GERENTE' ? 'Gerente' : role === 'DEV' ? 'Desenvolvedor' : 'Cliente'}
              </button>
            ))}
          </div>

          <button
            onClick={() => setViewMode(viewMode === 'KANBAN' ? 'METRICAS' : 'KANBAN')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border ${
              darkMode ? 'bg-[#1a1a1a] border-white/10 text-neutral-300' : 'bg-white border-stone-300 text-stone-700'
            }`}
          >
            {viewMode === 'KANBAN' ? <BarChart3 className="w-3.5 h-3.5 text-[#c9a86a]" /> : <Kanban className="w-3.5 h-3.5 text-[#c9a86a]" />}
            <span>{viewMode === 'KANBAN' ? 'Relatório' : 'Quadro Kanban'}</span>
          </button>
        </div>

      </div>

      {/* Control Bar: Search, Priority Filter, Add Task */}
      <div className={`p-4 border-b flex flex-wrap items-center justify-between gap-3 text-xs ${
        darkMode ? 'border-white/10 bg-[#0d0d0d]' : 'border-stone-100 bg-white'
      }`}>
        <div className="flex flex-wrap items-center gap-2 flex-1">
          {/* Search */}
          <div className="relative flex-1 min-w-[180px] max-w-xs">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-neutral-500" />
            <input
              type="text"
              placeholder="Buscar tarefa ou responsável..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-8 pr-3 py-1.5 rounded-lg border text-xs focus:outline-none focus:border-[#c9a86a] ${
                darkMode ? 'bg-[#1a1a1a] border-white/10 text-white placeholder:text-neutral-600' : 'bg-stone-50 border-stone-200 text-stone-800'
              }`}
            />
          </div>

          {/* Priority Filter */}
          <div className="flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-neutral-500" />
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className={`py-1.5 px-2.5 rounded-lg border text-xs font-mono focus:outline-none ${
                darkMode ? 'bg-[#1a1a1a] border-white/10 text-neutral-200' : 'bg-stone-50 border-stone-200 text-stone-700'
              }`}
            >
              <option value="TODAS">Todas as Prioridades</option>
              <option value="ALTA">Alta Prioridade</option>
              <option value="MEDIA">Média Prioridade</option>
              <option value="BAIXA">Baixa Prioridade</option>
            </select>
          </div>
        </div>

        {/* Add Task Button (if Manager or Dev) */}
        {currentRole !== 'CLIENTE' && (
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold text-black bg-[#c9a86a] hover:bg-[#d4b478] shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Nova Tarefa</span>
          </button>
        )}
      </div>

      {/* Main Content Area */}
      {viewMode === 'METRICAS' ? (
        /* Real-time Analytics Report View */
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <div className="text-xs text-slate-500 font-medium">Total de Tarefas</div>
              <div className="text-2xl font-extrabold mt-1">{totalTasks}</div>
            </div>

            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-emerald-950/30 border-emerald-800/50' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="text-xs text-emerald-600 font-medium">Concluídas</div>
              <div className="text-2xl font-extrabold text-emerald-600 mt-1">{doneTasks}</div>
            </div>

            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-amber-950/30 border-amber-800/50' : 'bg-amber-50 border-amber-200'}`}>
              <div className="text-xs text-amber-600 font-medium">Em Andamento</div>
              <div className="text-2xl font-extrabold text-amber-600 mt-1">{inProgressTasks}</div>
            </div>

            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-blue-950/30 border-blue-800/50' : 'bg-blue-50 border-blue-200'}`}>
              <div className="text-xs text-blue-600 font-medium">Taxa de Conclusão</div>
              <div className="text-2xl font-extrabold text-blue-600 mt-1">{completionRate}%</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={`p-5 rounded-xl border space-y-2 ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex justify-between text-xs font-semibold">
              <span>Progresso Geral da Squad (FATEC TCC)</span>
              <span>{doneTasks} de {totalTasks} concluídas ({completionRate}%)</span>
            </div>
            <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>

          <div className="text-xs text-slate-500 italic">
            * Métricas atualizadas dinamicamente via queries PostgreSQL agregadas (`GROUP BY` e `COUNT`).
          </div>
        </div>
      ) : (
        /* Kanban Board Columns */
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto">
          
          {/* Column 1: A FAZER */}
          <div className={`p-3.5 rounded-xl border flex flex-col gap-3 min-h-[300px] ${
            darkMode ? 'bg-slate-950/40 border-slate-800/80' : 'bg-slate-50/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                <span>A Fazer</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-[11px] font-bold">
                {filteredTasks.filter(t => t.status === 'A_FAZER').length}
              </span>
            </div>

            {filteredTasks.filter(t => t.status === 'A_FAZER').map(task => (
              <TaskCard 
                key={task.id} 
                task={task} 
                darkMode={darkMode}
                currentRole={currentRole}
                onMoveStatus={(st) => updateTaskStatus(task.id, st)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}

            {filteredTasks.filter(t => t.status === 'A_FAZER').length === 0 && (
              <div className="text-center py-8 text-xs text-slate-400 italic">
                Nenhuma tarefa pendente nesta coluna.
              </div>
            )}
          </div>

          {/* Column 2: EM ANDAMENTO */}
          <div className={`p-3.5 rounded-xl border flex flex-col gap-3 min-h-[300px] ${
            darkMode ? 'bg-slate-950/40 border-slate-800/80' : 'bg-slate-50/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-500">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span>Em Andamento</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[11px] font-bold">
                {filteredTasks.filter(t => t.status === 'EM_ANDAMENTO').length}
              </span>
            </div>

            {filteredTasks.filter(t => t.status === 'EM_ANDAMENTO').map(task => (
              <TaskCard 
                key={task.id} 
                task={task} 
                darkMode={darkMode}
                currentRole={currentRole}
                onMoveStatus={(st) => updateTaskStatus(task.id, st)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}

            {filteredTasks.filter(t => t.status === 'EM_ANDAMENTO').length === 0 && (
              <div className="text-center py-8 text-xs text-slate-400 italic">
                Nenhuma tarefa em andamento.
              </div>
            )}
          </div>

          {/* Column 3: CONCLUÍDO */}
          <div className={`p-3.5 rounded-xl border flex flex-col gap-3 min-h-[300px] ${
            darkMode ? 'bg-slate-950/40 border-slate-800/80' : 'bg-slate-50/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-emerald-500">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Concluído</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
                {filteredTasks.filter(t => t.status === 'CONCLUIDO').length}
              </span>
            </div>

            {filteredTasks.filter(t => t.status === 'CONCLUIDO').map(task => (
              <TaskCard 
                key={task.id} 
                task={task} 
                darkMode={darkMode}
                currentRole={currentRole}
                onMoveStatus={(st) => updateTaskStatus(task.id, st)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}

            {filteredTasks.filter(t => t.status === 'CONCLUIDO').length === 0 && (
              <div className="text-center py-8 text-xs text-slate-400 italic">
                Nenhuma tarefa concluída ainda.
              </div>
            )}
          </div>

        </div>
      )}

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-2xl p-6 border shadow-2xl ${
            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <h3 className="text-lg font-bold mb-4">Nova Tarefa - Spring Boot Backend</h3>

            <form onSubmit={handleAddTask} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold mb-1">Título da Tarefa *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Criar DTO para consulta de tarefas"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className={`w-full p-2.5 rounded-lg border text-xs focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300'
                  }`}
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Descrição</label>
                <textarea
                  rows={3}
                  placeholder="Detalhes técnicos, regras de negócio e entregáveis..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className={`w-full p-2.5 rounded-lg border text-xs focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Prioridade</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as any)}
                    className={`w-full p-2.5 rounded-lg border text-xs ${
                      darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300'
                    }`}
                  >
                    <option value="BAIXA">Baixa</option>
                    <option value="MEDIA">Média</option>
                    <option value="ALTA">Alta</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Responsável</label>
                  <input
                    type="text"
                    value={newAssignee}
                    onChange={(e) => setNewAssignee(e.target.value)}
                    className={`w-full p-2.5 rounded-lg border text-xs ${
                      darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300'
                    }`}
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg font-semibold border text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700"
                >
                  Salvar Tarefa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

/* Individual Task Card Component */
interface TaskCardProps {
  task: TaskItem;
  darkMode: boolean;
  currentRole: string;
  onMoveStatus: (status: TaskItem['status']) => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, darkMode, currentRole, onMoveStatus, onDelete }) => {
  const priorityColors = {
    ALTA: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
    MEDIA: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    BAIXA: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  };

  return (
    <div className={`p-3.5 rounded-xl border space-y-2.5 transition-all hover:shadow-md ${
      darkMode 
        ? 'bg-slate-800/90 border-slate-700/80 hover:border-slate-600' 
        : 'bg-white border-slate-200/90 hover:border-slate-300'
    }`}>
      
      {/* Header ID and Priority */}
      <div className="flex items-center justify-between text-[11px]">
        <span className="font-mono text-slate-400 font-bold">{task.id}</span>
        <span className={`px-2 py-0.5 rounded font-semibold border ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      {/* Title */}
      <h5 className={`font-bold text-xs sm:text-sm leading-snug ${
        task.status === 'CONCLUIDO' ? 'line-through text-slate-400' : darkMode ? 'text-white' : 'text-slate-900'
      }`}>
        {task.title}
      </h5>

      {/* Description */}
      <p className={`text-xs line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        {task.description}
      </p>

      {/* Assignee & Actions */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
        <span className="text-[11px] font-medium text-slate-500">
          👤 {task.assignee}
        </span>

        {/* Quick move buttons */}
        {currentRole !== 'CLIENTE' && (
          <div className="flex items-center gap-1">
            {task.status !== 'A_FAZER' && (
              <button
                onClick={() => onMoveStatus('A_FAZER')}
                className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                title="Mover para A Fazer"
              >
                &larr;
              </button>
            )}

            {task.status !== 'EM_ANDAMENTO' && (
              <button
                onClick={() => onMoveStatus('EM_ANDAMENTO')}
                className="p-1 rounded hover:bg-amber-100 dark:hover:bg-amber-900/40 text-amber-500 font-bold"
                title="Mover para Em Andamento"
              >
                &bull;
              </button>
            )}

            {task.status !== 'CONCLUIDO' && (
              <button
                onClick={() => onMoveStatus('CONCLUIDO')}
                className="p-1 rounded hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-500 font-bold"
                title="Concluir Tarefa"
              >
                &check;
              </button>
            )}

            {currentRole === 'GERENTE' && (
              <button
                onClick={onDelete}
                className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/40 text-red-400 hover:text-red-600"
                title="Excluir"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

    </div>
  );
};
