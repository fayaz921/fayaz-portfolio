import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const certs = [
  {
    title: "Advance Web Application Development",
    issuer: "NAVTTC, Govt. of Pakistan",
    year: "2026",
    note: "Grade A · Internationally accredited",
  },
  {
    title: "Web Development",
    issuer: "UET Peshawar / KP-RETP",
    year: "2025",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    year: "2025",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications & training"
          description="Continuous learning, formal recognition."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-cyan-glow/20 text-electric transition-transform group-hover:scale-110">
                  <Award className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
              </div>
              <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                {c.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              {c.note && (
                <p className="mt-3 inline-flex rounded-full bg-electric/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-electric">
                  {c.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}