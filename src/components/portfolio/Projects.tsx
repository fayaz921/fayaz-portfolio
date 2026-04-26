import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Project = {
  title: string;
  role?: string;
  description: string;
  longDescription: string;
  tech: string[];
  links: { label: string; href: string; icon: "github" | "external" }[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Litigation Tracking System (LTS)",
    role: "Tech Lead",
    description: "SaaS case management platform for law firms.",
    longDescription:
      "End-to-end SaaS for law firms — case lifecycle, hearings, documents, billing. Built with ASP.NET 10, Vertical Slice + CQRS via MediatR, Hangfire background jobs, PostgreSQL on Neon, Cloudinary for assets, and a React + TypeScript front end.",
    tech: ["ASP.NET 10", "React", "TypeScript", "CQRS", "MediatR", "Hangfire", "PostgreSQL", "Cloudinary"],
    links: [
      { label: "API", href: "https://github.com/fayaz921/LTS-API", icon: "github" },
      { label: "Client", href: "https://github.com/fayaz921/LTS-Client", icon: "github" },
    ],
    featured: true,
  },
  {
    title: "Netrex E-Commerce Platform",
    description: "Multi-module e-commerce platform.",
    longDescription:
      "Multi-module e-commerce: User, Payment, Cart, Product, and Seller modules. Built with ASP.NET 9, Blazor UI, Clean Architecture, PostgreSQL on Render, and Cloudinary media pipeline.",
    tech: ["ASP.NET 9", "Blazor", "Clean Architecture", "PostgreSQL", "Cloudinary"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Asim-AKM/Netrex_ECommerce",
        icon: "github",
      },
    ],
  },
  {
    title: "Online Complaint Management System",
    description: "Multi-role complaint tracking app.",
    longDescription:
      "Multi-role complaint tracking with ASP.NET MVC, AJAX, jQuery, and SQL Server. Role-based dashboards, status workflows, and reporting.",
    tech: ["ASP.NET MVC", "AJAX", "jQuery", "SQL Server"],
    links: [
      {
        label: "Source",
        href: "https://github.com/fayaz921/Online-Complaint-Managment-System",
        icon: "github",
      },
    ],
  },
  {
    title: "School Management System",
    description: "Desktop app for school operations.",
    longDescription:
      "Windows Forms desktop app for managing students, classes, and staff. Built with C#, ADO.NET, and SQL Server.",
    tech: ["C#", "WinForms", "ADO.NET", "SQL Server"],
    links: [
      {
        label: "Source",
        href: "https://github.com/fayaz921/SchoolManagmentSystem_DevFayaz",
        icon: "github",
      },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects I'm proud of"
          description="Real production systems — from SaaS platforms to enterprise tools."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group glass relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-electric/40 sm:p-8 ${
                p.featured ? "lg:col-span-2 ring-1 ring-electric/20" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/0 to-cyan-glow/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/10 via-transparent to-cyan-glow/10" />
              </div>
              <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-electric/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {p.role && (
                      <span className="rounded-full bg-gradient-to-r from-electric/20 to-cyan-glow/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-electric">
                        {p.role}
                      </span>
                    )}
                    {p.featured && (
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Featured
                      </span>
                    )}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>

                <div className="mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground/90 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 sm:opacity-80">
                  {p.longDescription}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-electric/30 group-hover:text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:border-electric/50 hover:bg-electric/10 hover:text-electric"
                    >
                      {l.icon === "github" ? (
                        <Github className="h-3.5 w-3.5" />
                      ) : (
                        <ExternalLink className="h-3.5 w-3.5" />
                      )}
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}