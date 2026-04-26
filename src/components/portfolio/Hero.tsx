import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink } from "lucide-react";
import profilePhoto from "/profile-photo.png";

const titles = [".NET Developer", "Tech Lead", "Full-Stack Engineer"];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="text-gradient-accent">
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[2px] -translate-y-[-0.05em] animate-pulse bg-electric align-middle" />
    </span>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 sm:pt-0"
    >
      {/* Animated mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-electric/20 blur-[120px] animate-blob" />
        <div
          className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-cyan-glow/15 blur-[120px] animate-blob"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 h-72 w-72 rounded-full bg-chart-3/15 blur-[120px] animate-blob"
          style={{ animationDelay: "8s" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        {/* Left: text */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-electric lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.7 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Muhammad</span>
            <br />
            <span className="text-foreground">Fayaz</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.15, duration: 0.6 }}
            className="font-display text-xl font-medium sm:text-2xl lg:text-3xl"
          >
            <span className="text-muted-foreground">I'm a </span>
            <TypingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0"
          >
            Building scalable SaaS platforms & web APIs with{" "}
            <span className="font-medium text-foreground">.NET</span> &{" "}
            <span className="font-medium text-foreground">React</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-electric to-cyan-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-all duration-300 hover:shadow-glow"
            >
              <span className="relative z-10">View Projects</span>
              <ExternalLink className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="/Muhammad-Fayaz-CV.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-electric/50 hover:bg-white/10"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="flex items-center justify-center gap-3 lg:justify-start"
          >
            {[
              { icon: Github, href: "https://github.com/fayaz921", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/muhammad-fayaz-10b73434b",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:mfayaz21703@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:bg-electric/10 hover:text-electric"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-electric via-cyan-glow to-chart-3 opacity-60 blur-2xl animate-pulse-glow" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-electric to-cyan-glow opacity-90" />
            {/* Photo */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-white/10 sm:h-72 sm:w-72 lg:h-80 lg:w-80 animate-float">
              <img
                src={profilePhoto}
                alt="Muhammad Fayaz"
                className="h-full w-full object-cover"
                width={768}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-8 rounded-2xl glass-strong px-3 py-2 font-mono text-xs text-electric shadow-glow-sm"
            >
              .NET 10
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 top-1/3 rounded-2xl glass-strong px-3 py-2 font-mono text-xs text-cyan-glow shadow-glow-sm"
            >
              React + TS
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-2 left-4 rounded-2xl glass-strong px-3 py-2 font-mono text-xs text-foreground shadow-glow-sm"
            >
              CQRS · Clean Arch
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-electric"
          />
        </div>
      </motion.div>
    </section>
  );
}