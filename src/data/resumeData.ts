import { ApiEndpoint, Education, Experience, TaskItem, RecruiterQuestion } from '../types';

export const personalInfo = {
  name: "MARIA CECILIA DO PRADO",
  title: "Desenvolvedora Junior | Estagiária em TI | Analista de Suporte/Sistemas",
  email: "mariaceciliadoprado303@gmail.com",
  phone: "+55 11 99238-2964",
  phoneRaw: "5511992382964",
  location: "São Paulo, SP, Brasil",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  objective: "Atuar em posições de entrada na área de Tecnologia da Informação como Desenvolvedora Junior, Estagiária em TI ou Analista de Suporte/Sistemas, aplicando conhecimentos em desenvolvimento de software, banco de dados e metodologias ágeis.",
  summary: "Estudante do último semestre de Análise e Desenvolvimento de Sistemas pela FATEC Itaquera, com conclusão prevista para Julho/2026. Possuo sólida formação técnica em lógica de programação, arquitetura de sistemas, desenvolvimento web e modelagem de banco de dados.\n\nA vivência prática no setor de atendimento me proporcionou soft skills altamente valorizadas no ecossistema de TI, como excelente comunicação interpessoal, resolução rápida de problemas, agilidade no aprendizado e forte capacidade de colaboração em equipes multifuncionais (squads).",
  availability: "Disponível para Início Imediato / Híbrido ou Presencial em SP e Remoto",
  graduationDate: "Julho/2026 (Último Semestre)"
};

export const educationData: Education[] = [
  {
    institution: "FATEC Itaquera",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    status: "Cursando (Último semestre)",
    period: "2023 - 2026",
    expectedCompletion: "Julho/2026"
  }
];

export const experienceData: Experience[] = [
  {
    company: "Burger King",
    role: "Atendente Multifuncional",
    period: "Abril/2026 – Atual",
    location: "São Paulo, SP",
    highlights: [
      {
        title: "Comunicação e Resolução de Problemas",
        description: "Atendimento direto ao cliente focado na mediação e solução ágil de divergências em ambiente de alta exigência."
      },
      {
        title: "Trabalho sob Pressão e Agilidade",
        description: "Atuação em equipe sob volumoso fluxo diário, mantendo padrões de qualidade, organização e prazos rigorosos de entrega."
      },
      {
        title: "Visão Operacional e Processos",
        description: "Rotatividade em múltiplas funções da operação, demonstrando rápida curva de aprendizado e forte adaptabilidade a novos fluxos de trabalho."
      }
    ]
  }
];

export const skillCategories = [
  {
    title: "Linguagens de Programação",
    skills: [
      { name: "Java", level: "Avançado", icon: "Coffee", tags: ["Spring Boot", "POO", "REST APIs"] },
      { name: "JavaScript", level: "Intermediário", icon: "Code", tags: ["ES6+", "Async/Await", "DOM"] },
      { name: "Python", level: "Intermediário", icon: "Terminal", tags: ["Lógica", "Scripts", "Estruturas de Dados"] },
      { name: "C#", level: "Conhecimento Prático", icon: "Cpu", tags: [".NET", "Lógica de Programação"] }
    ]
  },
  {
    title: "Desenvolvimento Web (Front & Back)",
    skills: [
      { name: "React", level: "Intermediário", icon: "Atom", tags: ["Hooks", "JSX", "Componentes", "SPA"] },
      { name: "Node.js", level: "Intermediário", icon: "Server", tags: ["Express", "APIs", "JSON"] },
      { name: "REST APIs", level: "Avançado", icon: "Globe", tags: ["HTTP Status", "Controllers", "Endpoints"] },
      { name: "HTML5 & CSS3", level: "Avançado", icon: "Layout", tags: ["Flexbox", "Grid", "Responsividade"] }
    ]
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "PostgreSQL", level: "Avançado", icon: "Database", tags: ["Modelagem Relacional", "Queries", "Joins"] },
      { name: "SQL Server", level: "Intermediário", icon: "Database", tags: ["T-SQL", "Chaves Primárias/Estrangeiras"] },
      { name: "MySQL", level: "Intermediário", icon: "Database", tags: ["Consultas", "Subqueries", "Procedures"] }
    ]
  },
  {
    title: "Ferramentas & Metodologias",
    skills: [
      { name: "Git & GitHub", level: "Avançado", icon: "GitBranch", tags: ["Controle de Versão", "Branches", "PRs"] },
      { name: "Metodologias Ágeis", level: "Prático", icon: "Kanban", tags: ["Scrum", "Kanban", "Sprint Planning", "Squads"] }
    ]
  },
  {
    title: "Idiomas",
    skills: [
      { name: "Português", level: "Nativo", icon: "Languages", tags: ["Comunicação fluente"] },
      { name: "Inglês", level: "Intermediário", icon: "Languages", tags: ["Leitura técnica", "Documentação"] }
    ]
  }
];

export const softSkillsList = [
  { name: "Resolução de Problemas", desc: "Capacidade analítica para diagnosticar causa raiz de falhas e implementar soluções eficazes." },
  { name: "Trabalho em Equipe & Squads", desc: "Sintonia com times multifuncionais, colaboração ativa e facilidade para integrar feedback." },
  { name: "Adaptabilidade & Curva de Aprendizado", desc: "Facilidade em dominar novas tecnologias e fluxos de trabalho em ritmo acelerado." },
  { name: "Comunicação Assertiva", desc: "Expressão clara de ideias técnicas e bom relacionamento interpessoal com stakeholders." },
  { name: "Inteligência Emocional sob Pressão", desc: "Equilíbrio e resiliência em cenários desafiadores de alto volume e prazos curtos." }
];

export const tccProjectDetails = {
  title: "Sistema de Gestão e Monitoramento de Tarefas",
  subtitle: "Projeto Acadêmico / TCC — FATEC Itaquera",
  description: "Aplicação Web robusta desenvolvida para otimizar o fluxo de organização e atribuição de tarefas em equipes, contando com autenticação de usuários, relatórios em tempo real e interface responsiva.",
  techs: ["Java (Spring Boot)", "React", "PostgreSQL", "Git/GitHub", "REST API", "Tailwind CSS"],
  contributions: [
    "Desenvolvimento de rotas Back-End seguras e bem documentadas (APIs RESTful com Spring Boot).",
    "Modelagem do banco de dados relacional em PostgreSQL com tabelas de tarefas, usuários e logs de auditoria.",
    "Criação de interface do usuário limpa e acessível focada na experiência do cliente (UX/UI com React)."
  ],
  architectureFeatures: [
    "Autenticação de Usuários baseada em tokens com perfis diferenciados (Gerente, Desenvolvedor, Cliente).",
    "Quadro Kanban e Visão em Lista com drag-and-drop / transições rápidas de status.",
    "Métricas e Relatórios em Tempo Real com indicador de taxa de conclusão e gargalos por prioridade.",
    "Endpoints RESTful seguindo convenções OpenAPI/Swagger com tratamentos de exceções estruturados."
  ]
};

export const initialTasksData: TaskItem[] = [
  {
    id: "TASK-101",
    title: "Modelagem do Esquema de Banco de Dados PostgreSQL",
    description: "Criar diagrama ER contendo tabelas de usuários, papéis (ROLES), tarefas e histórico de alterações.",
    status: "CONCLUIDO",
    priority: "ALTA",
    assignee: "Maria Cecilia",
    dueDate: "2026-05-10",
    createdAt: "2026-05-01"
  },
  {
    id: "TASK-102",
    title: "Implementação das Controllers REST Spring Boot",
    description: "Desenvolver endpoints GET, POST, PUT, DELETE para /api/v1/tarefas com validação de payload.",
    status: "CONCLUIDO",
    priority: "ALTA",
    assignee: "Maria Cecilia",
    dueDate: "2026-05-18",
    createdAt: "2026-05-05"
  },
  {
    id: "TASK-103",
    title: "Desenvolvimento da Interface Kanban com React",
    description: "Criar quadros interativos divididos por status com filtros por prioridade e responsável.",
    status: "CONCLUIDO",
    priority: "MEDIA",
    assignee: "Maria Cecilia",
    dueDate: "2026-05-25",
    createdAt: "2026-05-12"
  },
  {
    id: "TASK-104",
    title: "Módulo de Relatórios de Produtividade em Tempo Real",
    description: "Calcular taxa de conclusão e distribuição de tarefas por prioridade para exibição em dashboard.",
    status: "EM_ANDAMENTO",
    priority: "MEDIA",
    assignee: "Maria Cecilia",
    dueDate: "2026-06-05",
    createdAt: "2026-05-20"
  },
  {
    id: "TASK-105",
    title: "Integração de Notificações para Alteração de Status",
    description: "Enviar alertas aos membros da equipe quando o responsável atribuir ou concluir uma tarefa.",
    status: "A_FAZER",
    priority: "BAIXA",
    assignee: "Equipe FATEC",
    dueDate: "2026-06-15",
    createdAt: "2026-05-28"
  }
];

export const sampleEndpoints: ApiEndpoint[] = [
  {
    method: "GET",
    path: "/api/v1/tarefas",
    summary: "Listar todas as tarefas",
    description: "Retorna a lista paginada de tarefas cadastradas no PostgreSQL com suporte a filtros de status.",
    responseStatus: 200,
    responseBody: [
      { id: "TASK-101", title: "Modelagem PostgreSQL", status: "CONCLUIDO", priority: "ALTA", assignee: "Maria Cecilia" },
      { id: "TASK-102", title: "REST Controllers Spring Boot", status: "CONCLUIDO", priority: "ALTA", assignee: "Maria Cecilia" }
    ]
  },
  {
    method: "POST",
    path: "/api/v1/tarefas",
    summary: "Criar nova tarefa",
    description: "Recebe o JSON do payload, valida campos obrigatórios e persiste no banco de dados.",
    requestBody: {
      title: "Implementar testes de integração JUnit 5",
      description: "Cobertura das rotas da API RESTful de tarefas",
      priority: "MEDIA",
      assigneeId: 104
    },
    responseStatus: 201,
    responseBody: {
      id: "TASK-106",
      title: "Implementar testes de integração JUnit 5",
      status: "A_FAZER",
      priority: "MEDIA",
      assignee: "Maria Cecilia",
      createdAt: "2026-08-02T13:50:00Z"
    }
  },
  {
    method: "PUT",
    path: "/api/v1/tarefas/{id}/status",
    summary: "Atualizar status da tarefa",
    description: "Atualiza o estado no ciclo de vida (A_FAZER -> EM_ANDAMENTO -> CONCLUIDO) e gera log de auditoria.",
    requestBody: { status: "CONCLUIDO" },
    responseStatus: 200,
    responseBody: {
      id: "TASK-104",
      status: "CONCLUIDO",
      updatedAt: "2026-08-02T13:52:00Z",
      message: "Status atualizado com sucesso"
    }
  },
  {
    method: "GET",
    path: "/api/v1/relatorios/resumo",
    summary: "Obter métricas de monitoramento",
    description: "Gera métricas agregadas do PostgreSQL em tempo real para o dashboard do sistema.",
    responseStatus: 200,
    responseBody: {
      totalTarefas: 5,
      concluidas: 3,
      emAndamento: 1,
      aFazer: 1,
      taxaConclusaoPercentual: 60.0
    }
  }
];

export const postgresqlSchemaSql = `-- Esquema do Banco de Dados Relacional PostgreSQL
-- Desenvolvido para o TCC da FATEC Itaquera por Maria Cecilia do Prado

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    cargo VARCHAR(50) DEFAULT 'Desenvolvedor',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tarefas (
    id VARCHAR(20) PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    status VARCHAR(30) CHECK (status IN ('A_FAZER', 'EM_ANDAMENTO', 'CONCLUIDO')),
    prioridade VARCHAR(20) CHECK (prioridade IN ('BAIXA', 'MEDIA', 'ALTA')),
    usuario_id INT REFERENCES usuarios(id) ON DELETE SET NULL,
    data_limite DATE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Consulta de monitoramento em tempo real (Query SQL com JOIN e GROUP BY)
SELECT 
    u.nome AS responsavel,
    COUNT(t.id) AS total_atribuidas,
    SUM(CASE WHEN t.status = 'CONCLUIDO' THEN 1 ELSE 0 END) AS concluidas,
    ROUND((SUM(CASE WHEN t.status = 'CONCLUIDO' THEN 1 ELSE 0 END)::NUMERIC / COUNT(t.id)) * 100, 2) AS percentual_conclusao
FROM usuarios u
LEFT JOIN tarefas t ON u.id = t.usuario_id
GROUP BY u.id, u.nome
ORDER BY total_atribuidas DESC;`;

export const recruiterFaq: RecruiterQuestion[] = [
  {
    id: "faq-1",
    question: "Por que contratar a Maria Cecilia para uma vaga Junior de TI?",
    category: "Geral",
    answer: "A Maria reúne o melhor de dois mundos: sólida base teórica e prática em Análise e Desenvolvimento de Sistemas na FATEC Itaquera (Java, Spring Boot, React, SQL) combinada com inteligência emocional e comunicação resolutiva testadas na prática. Ela aprende rápido, entrega com capricho e se adapta facilmente às necessidades da equipe."
  },
  {
    id: "faq-2",
    question: "Como a experiência no atendimento (Burger King) se traduz em TI?",
    category: "Soft Skills",
    answer: "Trabalhar em um ambiente de alto volume desenvolveu na Maria capacidades indispensáveis para equipes ágeis (Scrum/Kanban): trabalho sob pressão extrema sem perder a cordialidade, capacidade de mediação de conflitos, agilidade no aprendizado de novos processos e foco total no cliente final (UX/UI)."
  },
  {
    id: "faq-3",
    question: "Qual o nível de conhecimento em Back-End e Banco de Dados?",
    category: "Técnico",
    answer: "No seu TCC na FATEC, Maria desenvolveu rotas RESTful em Java com Spring Boot, implementando validações e arquitetura limpa. Em Banco de Dados, domina modelagem relacional, queries avançadas (JOINs, agregações) e consultas em PostgreSQL, SQL Server e MySQL."
  },
  {
    id: "faq-4",
    question: "Qual a previsão de término da faculdade e disponibilidade?",
    category: "Educação",
    answer: "Maria está cursando o último semestre na FATEC Itaquera, com conclusão prevista para Julho/2026. Está pronta para assumir posições presenciais/híbridas em São Paulo ou totalmente remotas imediatamente."
  }
];
