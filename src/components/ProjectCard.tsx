"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const coverImage = project.images[0];

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left transition-colors hover:border-white/20"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
        {coverImage && (
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 85vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium text-accent">{project.category}</span>
        <h3 className="mt-2 font-display text-lg font-medium text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-auto pt-4 text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
          View case study
        </span>
      </div>
    </motion.button>
  );
}