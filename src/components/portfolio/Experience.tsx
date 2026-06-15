import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const experiences = [
  {
    company: "10Pearls Pakistan",
    role: ".NET Fullstack Intern",
    period: "Apr 2026 - Jun 2026",
    location: "Remote",
    description:
      "Built a full-stack application using ASP.NET Core and ReactJS, covering JWT auth, role-based access control, logging with Serilog, unit testing with xUnit, and SonarQube quality checks.",
    tags: ["ASP.NET Core", "ReactJS", "JWT", "xUnit", "SonarQube"],
  },
  {
    company: "Netrex Solutions",
    role: "Full Stack .NET Developer (Part-time)",
    period: "Jan 2025 - Mar 2026",
    location: "Dera Ismail Khan",
    description:
      "Built web applications and RESTful APIs using ASP.NET Core, MVC, and Web API with JWT authentication and role-based access control. Worked with SQL Server and PostgreSQL using EF Core, developed Blazor, JavaScript, jQuery, and WinForms features, and collaborated with Git, code reviews, and structured branching.",
    tags: ["ASP.NET Core", "Blazor", "EF Core", "SQL Server", "PostgreSQL"],
  },
  {
    company: "FutureXcel",
    role: "Full Stack .NET Developer Intern",
    period: "Dec 2025",
    location: "Remote",
    description:
      "Built a full-stack application with JWT auth and role-based Admin and User panels using ASP.NET Core and Blazor. Contributed in a remote team environment following industry best practices and clean code principles.",
    tags: ["ASP.NET Core", "Blazor", "JWT", "SQL Server"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Career"
          title="Where I've worked"
          description="Professional roles building production web apps, APIs, and full-stack systems."
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
                  <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
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
                  <div className="group glass relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 sm:p-6">
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
