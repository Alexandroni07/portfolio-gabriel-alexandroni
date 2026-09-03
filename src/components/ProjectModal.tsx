"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";
import { GitBranch, ExternalLink } from "lucide-react";

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-white/10 bg-[#0b0b0f] p-0">
        <div className="relative aspect-video w-full rounded-t-xl bg-white/5" />

        <div className="p-6 sm:p-8">
          <DialogHeader className="items-start text-left">
            <span className="text-xs font-medium text-accent">{project.category}</span>
            <DialogTitle className="font-display text-2xl text-foreground">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {project.problem && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-foreground">Contexto</h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-foreground">Solução</h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.solution}</p>
            </div>
          )}

          <div className="mt-4">
            <h3 className="text-sm font-medium text-foreground">Tecnologias</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.github || project.demo) && (
            <div className="mt-6 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-foreground hover:bg-white/5"
                >
                  <GitBranch size={16} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:scale-[1.02]"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}