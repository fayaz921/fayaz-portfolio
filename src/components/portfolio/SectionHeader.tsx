import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-electric"
      >
        <span className="h-1 w-1 rounded-full bg-electric" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {title.split(" ").map((w, i, a) => (
          <span key={i}>
            {i === a.length - 1 ? <span className="text-gradient-accent">{w}</span> : w}
            {i < a.length - 1 && " "}
          </span>
        ))}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}