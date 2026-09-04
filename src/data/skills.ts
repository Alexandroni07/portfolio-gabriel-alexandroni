export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Java", "Node.js", "REST APIs", "FastAPI", "PHP"],
  },
  {
    title: "Data",
    skills: ["Python", "pandas", "NumPy", "SQL", "Power BI", "Microsoft Fabric"],
  },
  {
    title: "Cloud & Dev",
    skills: ["AWS", "Azure", "Git", "Postman", "CI/CD", "Linux"],
  },
];