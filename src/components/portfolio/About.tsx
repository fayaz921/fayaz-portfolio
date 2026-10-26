import { motion } from "framer-motion";
import { Code2, Database, Layers, Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  {
    icon: Code2,
    label: "Production-ready",
    text: "Real apps shipped to real clients, not tutorial code.",
  },
  {
    icon: Layers,
    label: "Clean Architecture",
    text: "Vertical Slice + CQRS, MediatR, Repository Pattern.",
  },
  {
    icon: Database,
    label: "Full-stack",
    text: ".NET, React, Blazor, SQL Server, PostgreSQL, Azure.",
  },
  {
    icon: Zap,
    label: "Award-winning builder",
    text: "AWS DevArena 2026 winner for Litigation Tracking System.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="A developer who ships"
          description="Full-Stack .NET Developer based in Islamabad, Pakistan, with 1.5+ years of experience building production applications, REST APIs, and role-based systems."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-electric/15 blur-3xl" />
            <div className="relative flex flex-col gap-5">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm a <span className="font-medium text-foreground">Full-Stack .NET Developer</span>{" "}
                with 1.5+ years of hands-on experience building production web applications, RESTful
                APIs, and role-based systems for local and international clients.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                At <span className="text-electric">Netrex Solutions</span>, I contribute to
                production applications across requirements, database design, APIs, frontend
                development, testing, and deployment. My work includes role-based systems,
                e-commerce payments, and full-stack features using ASP.NET Core, React, Blazor, and
                SQL Server or PostgreSQL.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I lead development of the{" "}
                <span className="text-foreground">Litigation Tracking System</span>, an AWS DevArena
                2026 winning SaaS case management platform for law firms built on{" "}
                <span className="font-mono text-sm text-cyan-glow">
                  ASP.NET 10 + React + Vertical Slice + CQRS
                </span>
                , leading a 7-member team and setting up Docker and GitHub Actions CI/CD.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I write code that works in the real world, and I care just as much about how it{" "}
                <em className="not-italic text-foreground">looks and feels</em> as how it runs.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-cyan-glow/20 text-electric transition-transform group-hover:scale-110">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 font-display text-sm font-semibold text-foreground">
                  {h.label}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
