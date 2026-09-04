"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const links = [
  {
    label: "Email",
    value: "gaalexandroni@gmail.com",
    href: "mailto:gaalexandroni@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Alexandroni07",
    href: "https://github.com/Alexandroni07",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gabriel-alexandroni",
    href: "https://linkedin.com/in/gabriel-alexandroni",
    icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-5xl">
          Let&apos;s build something together.
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Do you have a project in mind or a position that matches my profile? 
          Send me a message.
        </p>

        <motion.a
          href="https://wa.me/5561992131701?text=Olá%2C%20Vim%20pelo%20se%20site!"
          target="_blank"
          whileHover={{ scale: 1.03 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground"
        >
          Say hello
          <ArrowUpRight size={16} />
        </motion.a>

        <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={16} />
              {value}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}