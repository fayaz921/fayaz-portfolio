import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    name: "Backend",
    items: [
      "C#",
      "ASP.NET Core",
      "Web API",
      "MVC",
      "Blazor",
      "EF Core",
      "MediatR",
      "Hangfire",
      "FluentValidation",
      "Serilog",
    ],
  },
  {
    name: "Frontend",
    items: ["React", "TypeScript", "Vite", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "SQL Server"],
  },
  {
    name: "Practices & Tools",
    items: [
      "Clean Architecture",
      "Vertical Slice + CQRS",
      "Repository Pattern",
      "JWT",
      "Agile / Scrum",
      "Jira",
      "Git",
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="relative px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools of the trade"
          description="The stack I use to ship production software, end to end."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="group glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
                    0{gi + 1}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-electric/40 to-transparent" />
                </div>
                <h3 className="mb-5 font-display text-2xl font-bold text-foreground">
                  {g.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: gi * 0.1 + i * 0.03 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-electric/50 hover:bg-electric/10 hover:text-electric"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}