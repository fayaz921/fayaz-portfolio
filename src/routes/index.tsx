import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { TechStack } from "@/components/portfolio/TechStack";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Fayaz — Full-Stack .NET Developer & Tech Lead" },
      {
        name: "description",
        content:
          "Muhammad Fayaz — Full-Stack .NET Developer building scalable SaaS platforms and web APIs with .NET, React, and Clean Architecture.",
      },
      { property: "og:title", content: "Muhammad Fayaz — Full-Stack .NET Developer" },
      {
        property: "og:description",
        content:
          "Building scalable SaaS platforms & web APIs with .NET & React. Tech Lead on the Litigation Tracking System.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Muhammad Fayaz — Full-Stack .NET Developer",
      },
      {
        name: "twitter:description",
        content:
          "Building scalable SaaS platforms & web APIs with .NET & React.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <LoadingScreen />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
