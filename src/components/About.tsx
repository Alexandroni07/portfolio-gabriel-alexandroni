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
      "Formação em Engenharia de Software, com base em estrutura de dados, arquitetura e boas práticas de desenvolvimento.",
  },
  {
    icon: Server,
    title: "Full stack & backend",
    description:
      "Interfaces em React e Angular ligadas a APIs REST em Java, com testes automatizados e integração contínua.",
  },
  {
    icon: LineChart,
    title: "Data & analytics",
    description:
      "Dashboards e automações em Python (pandas, NumPy) para análise de dados e redução de trabalho manual.",
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
            Sou engenheiro de software com mais de dois anos de experiência
            construindo aplicações web e integrações backend. Atualmente
            desenvolvo interfaces e APIs no dia a dia como Full Stack
            developer e, em paralelo, atuo como estagiário de Data Science,
            aplicando Python e automação a processos internos.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Gosto de transitar entre essas três frentes: entender o problema
            de negócio, construir a solução de ponta a ponta e usar dados
            para validar se ela está funcionando.
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