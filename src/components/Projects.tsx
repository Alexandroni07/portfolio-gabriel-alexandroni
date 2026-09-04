"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Selected Work / Project
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
              Projects are a reflection of my skills, creativity, and dedication to delivering high-quality solutions.
            </p>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:bg-white/5"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:bg-white/5"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="mt-10 overflow-hidden">
          <div className="flex gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-[280px] flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%]"
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setActiveProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        open={activeProject !== null}
        onOpenChange={(open) => !open && setActiveProject(null)}
      />
    </section>
  );
}