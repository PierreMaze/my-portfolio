import { lazy, Suspense } from "react";
import { ChunkErrorBoundary } from "../components/ui/ChunkErrorBoundary";
import { MiniLoader } from "../components/ui/MiniLoader";
import Contact from "../features/common/Contact";
import Hero from "../features/common/Hero";

// Lazy loading des sections lourdes
const Projects = lazy(() => import("../features/projects/index.jsx"));
const Skills = lazy(() => import("../features/common/Skills"));
const Timeline = lazy(() => import("../features/common/Timeline"));

const Home = () => {
  return (
    <>
      <section id="home" className="h-fit">
        <Hero />
      </section>
      <section id="skills" className="h-fit">
        <ChunkErrorBoundary>
          <Suspense
            fallback={<MiniLoader message="Chargement des compétences..." />}>
            <Skills />
          </Suspense>
        </ChunkErrorBoundary>
      </section>
      <section id="projects" className="h-fit">
        <ChunkErrorBoundary>
          <Suspense
            fallback={<MiniLoader message="Chargement des projets..." />}>
            <Projects />
          </Suspense>
        </ChunkErrorBoundary>
      </section>
      <section id="timeline" className="h-fit">
        <ChunkErrorBoundary>
          <Suspense
            fallback={<MiniLoader message="Chargement du parcours..." />}>
            <Timeline />
          </Suspense>
        </ChunkErrorBoundary>
      </section>
      <section id="contact" className="h-fit">
        <Contact />
      </section>
    </>
  );
};

export default Home;
