import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500",
        scrolled ? "top-3" : "top-6",
      )}
    >
      <nav
        className={cn(
          "flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500",
          scrolled ? "glass-strong shadow-elevated" : "glass",
        )}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="ml-2 mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan-glow font-display text-sm font-bold text-primary-foreground"
          aria-label="Home"
        >
          MF
        </button>
        <ul className="flex items-center">
          {sections.slice(1).map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm",
                  active === s.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-electric to-cyan-glow"
                    transition={{ type: "spring", damping: 22, stiffness: 280 }}
                  />
                )}
                <span className="relative z-10">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}