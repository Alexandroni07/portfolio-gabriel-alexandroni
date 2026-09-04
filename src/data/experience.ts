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
    period: "07/2024 to 11/2025",
    role: "Full Stack Developer",
    company: "Zansk Tech",
    location: "Brasília, DF — Remote",
    summary:
      "Creation and refactoring of interfaces in Angular and React, with backend in Java integrated with REST APIs.",
    responsibilities: [
    "Refactoring existing workflows to reduce complexity and improve code maintainability.",
    "Creating and updating unit and end-to-end tests, maintaining over 85% coverage.",
    "Validating APIs and performing integration tests using Postman prior to each release.",
    "Participating in CI/CD pipelines, reducing manual deployment time.",
    ],
    technologies: ["Java", "Angular", "React", "Postman", "Jira", "Git", "SQL"],
  },
  {
    period: "07/2024 to Present",
    role: "Independent Full Stack Developer",
    company: "Independent projects",
    location: "Brasília, DF — Remote",
    summary:
      "Creation of landing pages, complete websites and systems from design to deployment.",
    responsibilities: [
      "Creation and validation of designs in Figma before implementation.",
      "Complete development of systems at all levels, from frontend to backend.",
      "Continuous maintenance and support of the delivered systems.",
    ],
    technologies: ["Node", "Angular", "React", "Postman", "Git", "SQL"],
  },
   {
    period: "12/2025 to Present",
    role: "Data Science Intern",
    company: "Tribunal de Contas da União (TCU)",
    location: "Brasília, DF — Remote",
    summary:
      "Worked in the DAUTO audit team, focusing on the automation and innovation of internal financial audit processes.",
    responsibilities: [
      "Creation of dashboards for analyzing public data and funds, using Python (pandas, numpy).",
      "Automation of recalculations and repetitive routines using Python and Power Automate.",
      "Development of scripts for testing and validation of values in the internal database.",
    ],
    technologies: ["Python", "Azure", "SQL", "Fabric"],
  },
  {
    period: "05/2025 and 05/2026",
    role: "Technical Support",
    company: "Annual Events of the CNM (Marcha Event)",
    location: "Brasília, DF — In-person",
    summary:
      "Technical support for the registration system in PHP during the national in-person event.",
    responsibilities: [
        "Support for the accreditation system and local workstations during the event.",
        "Direct database queries for rapid problem identification and resolution.",
        "Maintenance and troubleshooting of the PHP-based system.",
    ],
    technologies: ["PHP", "SQL", "Linux"],
  },
];