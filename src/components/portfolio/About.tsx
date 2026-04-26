import { motion } from "framer-motion";
import { Code2, Database, Layers, Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  {
    icon: Code2,
    label: "Production-ready",
    text: "Real apps shipped to real clients — not tutorial code.",
  },
  {
    icon: Layers,
    label: "Clean Architecture",
    text: "Vertical Slice + CQRS, MediatR, Repository Pattern.",
  },
  {
    icon: Database,
    label: "Full-stack",
    text: ".NET, React + TS, PostgreSQL, SQL Server, Blazor.",
  },
  {
    icon: Zap,
    label: "Tech Lead mindset",
    text: "Leading SaaS dev, code reviews, system design.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="A developer who ships"
          description="Full-Stack .NET Developer based in Pakistan, with hands-on production experience building SaaS platforms, web APIs, and enterprise apps."
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
                with hands-on production experience building real web applications, RESTful APIs,
                and SaaS platforms for actual business clients.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I started at <span className="text-electric">Netrex Solutions</span> shipping
                projects with ASP.NET Core, Blazor, EF Core, and PostgreSQL — applying Clean
                Architecture across multiple modules. Today I'm interning at{" "}
                <span className="text-electric">10Pearls Pakistan</span> (Shine Program, Cohort 8)
                while leading the development of the{" "}
                <span className="text-foreground">Litigation Tracking System</span> — a SaaS case
                management platform for law firms built on{" "}
                <span className="font-mono text-sm text-cyan-glow">
                  ASP.NET 10 + React + Vertical Slice + CQRS
                </span>
                .
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I write code that works in the real world — and I care just as much about how it{" "}
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