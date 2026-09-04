"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
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
  Maximize2,
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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

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
  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) setIsGalleryOpen(false);
    onOpenChange(nextOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className={`max-h-[95vh] overflow-y-auto border-white/10 bg-[#0b0b0f] p-0 ${
          isGalleryOpen
            ? "h-[70vh] w-[70vw] !max-w-[70vw] max-sm:h-[75vh] max-sm:w-[calc(100vw-1rem)] max-sm:!max-w-[calc(100vw-1rem)]"
            : "max-w-5xl"
        }`}
      >
        {isGalleryOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full min-h-0 items-center overflow-hidden rounded-xl bg-black"
          >
            <div ref={emblaRef} className="w-full overflow-hidden">
              <div className="flex">
                {images.map((image) => (
                  <div
                    key={image.src}
                    className="relative h-[70vh] min-w-0 flex-[0_0_100%] max-sm:h-[75vh]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1280px) 1152px, 100vw"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-2 text-sm text-white transition-colors hover:bg-black/90"
              aria-label="Voltar para os detalhes do projeto"
            >
              <ArrowLeft size={16} />
              Voltar
            </button>

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
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                  {selectedIndex + 1} / {images.length}
                </span>
              </>
            )}
          </motion.div>
        ) : (
          images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-t-xl bg-white/5"
          >
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

            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-black/80"
              aria-label="Ampliar fotos"
            >
              <Maximize2 size={18} />
            </button>

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
          </motion.div>
          )
        )}

        {!isGalleryOpen && <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8"
        >
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
        </motion.div>}
      </DialogContent>
    </Dialog>
  );
}