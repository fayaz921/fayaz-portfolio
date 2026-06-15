import { motion } from "framer-motion";
import { Award, GraduationCap, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const achievements = [
  {
    icon: Award,
    title: "AWS DevArena 2026",
    meta: "Winner · 2026",
    description:
      "Won AWS DevArena 2026 for Litigation Tracking System, a SaaS case management platform for law firms.",
    tags: ["LTS", "SaaS", "AWS DevArena"],
  },
  {
    icon: GraduationCap,
    title: "NAVTTC",
    meta: "Technical Trainee · Sep 2025 - Nov 2025",
    description:
      "Competitively selected for the Government of Pakistan Prime Minister's Initiative training program and completed 3 months of intensive onsite web application development training with Grade A.",
    tags: ["Advanced Web App Development", "Grade A", "Govt. of Pakistan"],
  },
  {
    icon: Users,
    title: "Dev Weekends",
    meta: "Software Engineer · Nov 2025 - Present",
    description:
      "Part of the Dev Weekends community, working on DSA, system design, full-stack engineering, AI integration, DevOps, and advanced engineering concepts with experienced mentors.",
    tags: ["DSA", "System Design", "Mentorship"],
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Recognition"
          title="Awards & training"
          description="Achievements, government-backed training, and engineering mentorship from the updated CV."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-cyan-glow/20 text-electric transition-transform group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-right font-mono text-[10px] uppercase tracking-wider text-electric">
                    {item.meta}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
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
