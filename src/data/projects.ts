export type Project = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
};

// TODO: substituir por 4–6 projetos reais com screenshots em /public/projects.
// Mantendo só 2 placeholders por enquanto, sem inventar métricas ou resultados.
export const projects: Project[] = [
  {
    id: "placeholder-1",
    title: "Kerigma Classroom",
    category: "Full Stack",
    shortDescription: "Plataforma web de gestão de catequese católica que permite administrar turmas, etapas pedagógicas, catequizandos e controle de frequência (incluindo chamada via QR Code). O sistema oferece dashboards personalizados por papel de usuário (catequista, coordenador, admin), além de cronograma, documentos, automações e auditoria de suporte.",
    description:"Plataforma web de gestão de catequese católica que permite administrar turmas, etapas pedagógicas, catequizandos e controle de frequência (incluindo chamada via QR Code). O sistema oferece dashboards personalizados por papel de usuário (catequista, coordenador, admin), além de cronograma, documentos, automações e auditoria de suporte.",
    technologies: ["React", "Node", "PostgreSQL", "TypeScript"],
    image: "/projects/admin.png",
  },
  {
    id: "placeholder-2",
    title: "Nome do projeto 2",
    category: "Backend / API",
    shortDescription: "Descrição curta pendente — substituir pelo projeto real.",
    description: "Descrição completa pendente.",
    technologies: ["Node", "PostgreSQL"],
    image: "/projects/placeholder-2.png",
  },
];