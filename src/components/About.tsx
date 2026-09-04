"use client";

import { motion } from "motion/react";
import { Code2, Server, LineChart } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const pillars = [
  {
    icon: Code2,
    title: "Software engineering",
    description:
      "Formation in Software Engineering, with a focus on data structures, architecture, and best practices of development.",
  },
  {
    icon: Server,
    title: "Full stack & backend",
    description:
      "React and Angular interfaces connected to Java/Node.js REST APIs, with automated testing and continuous integration.",
  },
  {
    icon: LineChart,
    title: "Data & analytics",
    description:
      "Dashboards and automations in Python (pandas, NumPy) for data analysis and manual task reduction.",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            About
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Software engineer with more than 2 years of dedicated experience. Experience at various levels of software
            engineering development, from firmware development to modern web applications and REST APIs. Currently
            working as a Full Stack Developer and Data Analyst.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I enjoy moving between these three fronts: understanding the business problem,
            building an end-to-end solution, and using data to validate whether it is working.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-1"
        >
          {pillars.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <Icon size={20} className="text-accent" />
              <h3 className="mt-4 font-display text-base font-medium text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}