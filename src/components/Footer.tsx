import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <span>Gabriel Alexandroni</span>
        <span>&copy; {new Date().getFullYear()} — Todos os direitos reservados.</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Alexandroni07"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon/>
          </a>
          <a
            href="https://linkedin.com/in/gabriel-alexandroni"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon/>
          </a>
        </div>
      </div>
    </footer>
  );
}