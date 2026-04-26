import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "site"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:mfayaz21703@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's build something great"
          description="Open to roles, freelance projects, and collaborations. I usually reply within 24 hours."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass flex flex-col justify-between rounded-3xl p-6 sm:p-8"
          >
            <div className="flex flex-col gap-5">
              <a
                href="mailto:mfayaz21703@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-electric/40 hover:bg-electric/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-cyan-glow/20 text-electric">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <div className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-electric">
                    mfayaz21703@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-cyan-glow/20 text-electric">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Based in
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    Dera Ismail Khan, KP, Pakistan
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/fayaz921", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/muhammad-fayaz-10b73434b",
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-electric/50 hover:bg-electric/10 hover:text-electric"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-electric/20 bg-electric/5 p-4">
              <div className="flex items-center gap-2 font-mono text-xs text-electric">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
                </span>
                Currently open to opportunities
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="glass flex flex-col gap-4 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-electric/50 focus:bg-electric/5"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-electric/50 focus:bg-electric/5"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-electric/50 focus:bg-electric/5"
                placeholder="Tell me about your project, role, or idea…"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-cyan-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-all duration-300 hover:shadow-glow"
            >
              Send message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Or just email{" "}
              <a
                href="mailto:mfayaz21703@gmail.com"
                className="text-electric underline-offset-4 hover:underline"
              >
                mfayaz21703@gmail.com
              </a>
            </p>
          </motion.form>
        </div>

        <footer className="mt-20 flex flex-col items-center gap-2 border-t border-white/5 pt-8 text-center">
          <div className="font-display text-sm font-semibold">
            <span className="text-gradient-accent">Muhammad</span>{" "}
            <span className="text-foreground">Fayaz</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Crafted with care, .NET & React.
          </p>
        </footer>
      </div>
    </section>
  );
}