"use client";

import { motion } from "motion/react";
import { services } from "@/data/services";

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

export function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Services
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-transform hover:-translate-y-1 hover:border-white/20"
            >
              <span className="font-display text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}