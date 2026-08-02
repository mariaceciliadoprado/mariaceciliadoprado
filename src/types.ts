export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string; tags?: string[] }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: { title: string; description: string }[];
}

export interface Education {
  institution: string;
  degree: string;
  status: string;
  period: string;
  expectedCompletion: string;
}

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: 'A_FAZER' | 'EM_ANDAMENTO' | 'CONCLUIDO';
  priority: 'BAIXA' | 'MEDIA' | 'ALTA';
  assignee: string;
  dueDate: string;
  createdAt: string;
}

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  summary: string;
  description: string;
  requestBody?: object;
  responseStatus: number;
  responseBody: object;
}

export interface RecruiterQuestion {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Técnico' | 'Soft Skills' | 'Educação';
}
