"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  GitBranch,
  Link as LinkIcon,
} from "lucide-react";

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    emblaApi?.scrollTo(0, true);
  }, [emblaApi, project?.id]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (!project) return null;

  const images = project.images;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto border-white/10 bg-[#0b0b0f] p-0">
        {images.length > 0 && (
          <div className="relative overflow-hidden rounded-t-xl bg-white/5">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {images.map((image) => (
                  <div
                    key={image.src}
                    className="relative aspect-video min-w-0 flex-[0_0_100%]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 960px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-black/80"
                  aria-label="Imagem anterior"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-black/80"
                  aria-label="Próxima imagem"
                >
                  <ArrowRight size={18} />
                </button>
                <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                  {selectedIndex + 1} / {images.length}
                </span>
              </>
            )}
          </div>
        )}

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
            <h3 className="text-sm font-medium text-foreground">Descrição</h3>
            <p className="mt-1 whitespace-pre-line text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
          </div>

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

          {(project.links?.length || project.github || project.demo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-foreground hover:bg-white/5"
                >
                  <LinkIcon size={16} /> {link.label}
                </a>
              ))}
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