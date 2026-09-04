export type Experience = {
  period: string;
  role: string;
  company: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    period: "Desde 12/2025",
    role: "Estagiário de Data Science",
    company: "Tribunal de Contas da União (TCU)",
    location: "Brasília, DF — Remoto",
    summary:
      "Atuação na auditoria DAUTO, com foco em automação e inovação de processos internos de auditoria financeira.",
    responsibilities: [
      "Criação de dashboards para análise de dados públicos e verbas, usando Python (pandas, numpy).",
      "Automatização de recálculos e rotinas repetitivas com Python e Power Automate.",
      "Desenvolvimento de scripts para testes e validação de valores no banco de dados interno.",
    ],
    technologies: ["Python", "Azure", "SQL", "Fabric"],
  },
  {
    period: "07/2024 – 11/2025",
    role: "Desenvolvedor Full Stack",
    company: "Zansk Tech",
    location: "Brasília, DF — Remoto",
    summary:
      "Criação e refatoração de interfaces em Angular e React, com backend em Java integrado a APIs REST.",
    responsibilities: [
      "Refatoração de fluxos existentes para reduzir complexidade e melhorar a manutenibilidade do código.",
      "Criação e atualização de testes unitários e end-to-end, mantendo cobertura acima de 85%.",
      "Validação de APIs e testes de integração com Postman antes de cada release.",
      "Participação em pipelines de CI/CD, reduzindo o tempo de deploy manual.",
    ],
    technologies: ["Java", "Angular", "React", "Postman", "Jira", "Git", "SQL"],
  },
  {
    period: "Desde 07/2024",
    role: "Desenvolvedor Freelancer",
    company: "Projetos independentes",
    location: "Brasília, DF — Remoto",
    summary:
      "Criação de landing pages, sites completos e sistemas do design ao deploy.",
    responsibilities: [
      "Criação e validação de designs no Figma antes da implementação.",
      "Desenvolvimento completo de sistemas em todos os níveis, do frontend ao backend.",
      "Manutenção e suporte contínuo dos sistemas entregues.",
    ],
    technologies: ["Node", "Angular", "React", "Postman", "Git", "SQL"],
  },
  {
    period: "05/2025 e 05/2026",
    role: "Suporte Técnico",
    company: "Eventos anuais da CNM (Marcha)",
    location: "Brasília, DF — Presencial",
    summary:
      "Suporte ao sistema de credenciamento em PHP durante evento nacional presencial.",
    responsibilities: [
      "Assistência ao sistema de credenciamento e às máquinas locais durante o evento.",
      "Consultas diretas ao banco de dados para identificação e resolução ágil de problemas.",
      "Manutenção de falhas lógicas no sistema em PHP.",
    ],
    technologies: ["PHP", "SQL", "Linux"],
  },
];