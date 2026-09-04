"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/experience";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Experience
        </h2>

        <div className="mt-10 border-t border-white/10">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={exp.company + exp.period} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                    <h3 className="mt-1 font-display text-lg font-medium text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                      {exp.location ? ` — ${exp.location}` : ""}
                    </p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`mt-1 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <p className="text-sm text-muted-foreground">{exp.summary}</p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-4 marker:text-accent">
                          {exp.responsibilities.map((r) => (
                            <li key={r} className="text-sm text-muted-foreground">
                              {r}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}