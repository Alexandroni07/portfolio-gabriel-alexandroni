export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  images: ProjectImage[];
  links?: ProjectLink[];
  github?: string;
  demo?: string;
};

// TODO: substituir por 4–6 projetos reais com screenshots em /public/projects.
export const projects: Project[] = [
  {
    id: "placeholder-1",
    title: "Kerigma Classroom",
    category: "Full Stack",
    shortDescription: "A web platform for managing Catholic catechesis that allows for the administration of classes, pedagogical stages, and catechumens, as well as attendance tracking.",
    description:"A web platform for managing Catholic catechesis that enables the administration of classes, pedagogical stages, and catechumens, as well as attendance tracking (including QR code check-ins). The system offers role-based dashboards (catechist, coordinator, admin), along with scheduling, document management, automation features, and support audit logs.",
    technologies: ["React", "Node", "PostgreSQL", "Figma"],
    images: [
      {
        src: "/projects/KerigmaClass/login.png",
        alt: "Login page",
      },
      {
        src: "/projects/KerigmaClass/principal.png",
        alt: "Home Page",
      },
      {
        src: "/projects/KerigmaClass/etapas.png",
        alt: "Etapas Page",
      },
      {
        src: "/projects/KerigmaClass/turmasGeral.png",
        alt: "Turmas Page",
      },
      {
        src: "/projects/KerigmaClass/turmasEspec.png",
        alt: "Turmas Específicas page",
      },
      {
        src: "/projects/KerigmaClass/MinhaT.png",
        alt: "Minha Turma Page",
      },
      {
        src: "/projects/KerigmaClass/chamada.png",
        alt: "Chamada Page",
      },
      {
        src: "/projects/KerigmaClass/cronograma.png",
        alt: "Cronograma Page",
      },
      {
        src: "/projects/KerigmaClass/Admin.png",
        alt: "Admin Page",
      },
      {
        src: "/projects/KerigmaClass/suport.png",
        alt: "Suport Page",
      }
    ],
    links: [
      { label: "Protótipo", href: "https://www.figma.com/design/tJNfiOKkPmLxu5IaT2ybzF/Site-da-catequese?node-id=89-180&t=sF0R4s2AKA5XfGHj-1" },
      { label: "Site", href: "https://kerigma-classroom.vercel.app/" },
    ],
  },
  {
    id: "placeholder-2",
    title: "OncoMap",
    category: "Backend / API",
    shortDescription: "System featuring visual data on oncology investments in Brazil, including an interactive map.",
    description: "OncoMap is an interactive platform designed to enhance transparency and access to information regarding public investment in cancer care across Brazilian municipalities. By integrating data collected by the *Querido Diário* project—which gathers and organizes publications from municipal official gazettes—OncoMap transforms fragmented and hard-to-access information into a clear, intuitive, and accessible visualization. Through an interactive map of Brazil, the tool allows users to explore how funds allocated for cancer care are distributed among municipalities, making it possible to identify patterns, regional inequalities, and investment trends.",
    technologies: ["Node", "Express", "Gemini API", "React", "Material-UI", "PostgreSQL", "Figma"],
    images: [
       {
        src: "/projects/oncomap/home.png",
        alt: "Home Oncomap",
      },
      {
        src: "/projects/oncomap/about.png",
        alt: "About OncoMap",
      },
      {
        src: "/projects/oncomap/fonte.png",
        alt: "Sources of OncoMap",
      },
      {
        src: "/projects/oncomap/mapaNorte.png",
        alt: "Map Norte",
      },
      {
        src: "/projects/oncomap/mapaPara.png",
        alt: "Map Para",
      },
      {
        src: "/projects/oncomap/baixarPdf.png",
        alt: "Baixar PDF",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/unb-mds/2025-2-OncoMap" },
      { label: "Documentação", href: "https://unb-mds.github.io/2025-2-OncoMap/"},
      { label: "Story Map", href: "https://www.figma.com/board/8Jsltq8BOL65CsMoRWFjik/Template-MDS--Copy-?node-id=0-1&p=f&t=JH6OD1aH87OWOi89-0" },
      { label: "Site", href: "https://oncomap.onrender.com/" },
    ],
  },
];