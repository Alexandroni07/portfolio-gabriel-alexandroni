"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Hammer } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-2xl flex-col items-center"
      >
        <motion.span
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground"
        >
          <Hammer size={14} className="text-accent" />
          Let&apos;s build something together
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m Gabriel.
          <br />
          Full Stack developer building
          <br />
          software &amp; data solutions.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-lg text-balance text-base text-muted-foreground sm:text-lg"
        >
          I develop modern applications, REST APIs and data-driven
          solutions, combining software engineering with analytics.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            View projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}