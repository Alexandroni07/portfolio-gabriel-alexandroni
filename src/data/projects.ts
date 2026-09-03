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
    title: "Nome do projeto 1",
    category: "Full Stack",
    shortDescription: "Descrição curta pendente — substituir pelo projeto real.",
    description: "Descrição completa pendente.",
    technologies: ["React", "Java", "SQL"],
    image: "/projects/placeholder-1.png",
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