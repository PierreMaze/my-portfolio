import { lazy, Suspense } from "react";
import { SkeletonFallback } from "../components/ui";
import Contact from "../features/common/Contact";
import Hero from "../features/common/Hero";
import { useDocumentTitle, useMeta } from "../hooks";

// Lazy loading des sections lourdes
const Projects = lazy(() => import("../features/projects/index.jsx"));
const Skills = lazy(() => import("../features/common/Skills"));
const Timeline = lazy(() => import("../features/common/Timeline"));

const Home = () => {
  // SEO dynamique
  useDocumentTitle("Développeur Fullstack");
  useMeta({
    description:
      "Portfolio de Pierre Mazelaygue, développeur Fullstack spécialisé en React, Node.js et TailwindCSS. Découvrez mes projets et compétences.",
    keywords:
      "développeur fullstack, React, Node.js, JavaScript, portfolio, Pierre Mazelaygue, développement web",
    ogTitle: "Pierre Mazelaygue - Développeur Fullstack",
    ogDescription:
      "Portfolio d'un développeur Fullstack passionné par les technologies modernes",
  });

  return (
    <>
      <section id="home" className="h-fit">
        <Hero />
      </section>
      <section id="skills" className="h-fit">
        <Suspense
          fallback={
            <div className="py-16 lg:py-24 xl:py-32">
              <div className="container px-4 mx-auto">
                <SkeletonFallback className="h-12 mb-8" />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[...Array(6)].map((_, i) => (
                    <SkeletonFallback key={i} className="h-32" />
                  ))}
                </div>
              </div>
            </div>
          }>
          <Skills />
        </Suspense>
      </section>
      <section id="projects" className="h-fit">
        <Suspense
          fallback={
            <div className="py-16 lg:py-24 xl:py-32">
              <div className="container px-4 mx-auto">
                <SkeletonFallback className="h-12 mb-8" />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[...Array(6)].map((_, i) => (
                    <SkeletonFallback key={i} className="h-80" />
                  ))}
                </div>
              </div>
            </div>
          }>
          <Projects />
        </Suspense>
      </section>
      <section id="timeline" className="h-fit">
        <Suspense
          fallback={
            <div className="py-16 lg:py-24 xl:py-32">
              <div className="container px-4 mx-auto">
                <SkeletonFallback className="h-12 mb-8" />
                <div className="space-y-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-4">
                      <SkeletonFallback className="w-4 h-4 rounded-full mt-2" />
                      <div className="flex-1">
                        <SkeletonFallback className="h-6 mb-2" />
                        <SkeletonFallback className="w-3/4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }>
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
