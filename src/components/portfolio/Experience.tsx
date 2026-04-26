import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const experiences = [
  {
    company: "10Pearls Pakistan",
    role: ".NET Fullstack Intern",
    period: "Apr 2026 — Present",
    location: "Remote",
    description:
      "Selected for the competitive Shine Program (Cohort 8) — an AI-powered 8-week virtual program. Building full-stack apps with ASP.NET Core (backend) and ReactJS (frontend) under dedicated technical mentorship.",
    tags: ["ASP.NET Core", "ReactJS", "Mentorship"],
    accent: true,
  },
  {
    company: "Netrex Solutions",
    role: "Full Stack .NET Developer",
    period: "Jan 2025 — Mar 2026",
    location: "Dera Ismail Khan",
    description:
      "Built and maintained production web apps and RESTful APIs using ASP.NET Core, MVC, Web API, JWT auth, and role-based access control. Engineered EF Core schemas with Repository / Unit-of-Work patterns. Applied Clean Architecture across projects. Collaborated using Git, code reviews, and structured branching.",
    tags: ["ASP.NET Core", "Blazor", "EF Core", "PostgreSQL", "Clean Architecture"],
  },
  {
    company: "FutureXcel",
    role: "Full Stack .NET Developer Intern",
    period: "Dec 2025",
    location: "Remote",
    description:
      "Developed full-stack features using ASP.NET, Blazor, and SQL Server following industry best practices. Built CRUD modules, a To-Do application, and a role-based system in a remote team environment.",
    tags: ["ASP.NET", "Blazor", "SQL Server"],
  },
  {
    company: "Dev Weekends",
    role: "Software Engineering Mentee",
    period: "Nov 2025 — Mar 2026",
    location: "Remote",
    description:
      "Participated in the 2025–26 Cohort — a structured software engineering program led by senior industry engineers. Attended 30 DSA sessions and 12 engineering weekends covering system design, backend practices, and real-world problem solving. Mock interviews, portfolio dev, industry best practices.",
    tags: ["DSA", "System Design", "Mentorship"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Career"
          title="Where I've worked"
          description="From production SaaS platforms to elite mentorship programs."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-electric/60 via-electric/20 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-12 ${
                  i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-6 z-10 -translate-x-1/2 sm:left-1/2">
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-electric/40 animate-ping" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-electric ring-4 ring-background" />
                  </div>
                </div>

                <div className={i % 2 === 0 ? "sm:text-right" : ""}>
                  <div
                    className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}
                  >
                    <div className="font-mono text-xs uppercase tracking-wider text-electric">
                      {exp.period}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                      {exp.company}
                    </h3>
                    <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground sm:justify-end">
                      {i % 2 !== 0 && (
                        <>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {exp.role}
                          </span>
                        </>
                      )}
                      {i % 2 === 0 && (
                        <>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {exp.role}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pl-12" : "sm:pr-12"}`}>
                  <div
                    className={`group glass relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 sm:p-6 ${
                      exp.accent ? "ring-1 ring-electric/30" : ""
                    }`}
                  >
                    {exp.accent && (
                      <div className="absolute right-3 top-3 rounded-full bg-electric/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-electric">
                        Current
                      </div>
                    )}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}