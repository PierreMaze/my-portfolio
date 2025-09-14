import { lazy, Suspense } from "react";
import { ProjectsLoader } from "../components/ui/ProjectsLoader";
import { SkillsLoader } from "../components/ui/SkillsLoader";
import { TimelineLoader } from "../components/ui/TimelineLoader";
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
        <Suspense
          fallback={<SkillsLoader message="Chargement des compétences..." />}>
          <Skills />
        </Suspense>
      </section>
      <section id="projects" className="h-fit">
        <Suspense
          fallback={<ProjectsLoader message="Chargement des projets..." />}>
          <Projects />
        </Suspense>
      </section>
      <section id="timeline" className="h-fit">
        <Suspense
          fallback={<TimelineLoader message="Chargement du parcours..." />}>
          <Timeline />
        </Suspense>
      </section>
      <section id="contact" className="h-fit">
        <Contact />
      </section>
    </>
  );
};

export default Home;
