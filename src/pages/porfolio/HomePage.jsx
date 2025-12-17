import { lazy, Suspense } from "react";
import { SkeletonFallback } from "../../components/ui/loader/index.jsx";
import { useMeta } from "../../hooks/index.jsx";
import Contact from "./components/common/Contact.jsx";
import Hero from "./components/common/Hero.jsx";

// Lazy loading des sections lourdes
const Projects = lazy(() => import("./components/projects/index.jsx"));
const Skills = lazy(() => import("./components/common/Skills.jsx"));
const Timeline = lazy(() => import("./components/common/Timeline.jsx"));

const Home = () => {
  // SEO dynamique
  useMeta({
    title: "MAZE Dev.",
    titleSuffix: " | Développeur Fullstack",
    description:
      "Site web de Pierre Mazelaygue, développeur Fullstack spécialisé en React, Node.js et TailwindCSS. Découvrez mes projets et compétences.",
    keywords:
      "développeur fullstack, développeur frontend, développeur backend, React, Node.js, JavaScript, portfolio, Pierre Mazelaygue, développement web",
    ogTitle: "Pierre Mazelaygue - Développeur Fullstack",
    ogDescription:
      "Site web d'un développeur Fullstack avec des technologies modernes",
  });

  // Le scroll vers le haut est géré par AppRoot pour éviter les conflits

  return (
    <>
      <section id="home" className="h-fit">
        <Hero />
      </section>
      <section id="skills" className="h-fit">
        <Suspense
          fallback={
            <div className="py-16 lg:py-24 xl:py-32">
              <div className="container mx-auto px-4">
                <SkeletonFallback className="mb-8 h-12 w-64" />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[...Array(6)].map((_, i) => (
                    <SkeletonFallback key={i} className="h-32 w-full" />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <Skills />
        </Suspense>
      </section>
      <section id="projects" className="h-fit">
        <Suspense
          fallback={
            <div className="py-16 lg:py-24 xl:py-32">
              <div className="container mx-auto px-4">
                <SkeletonFallback className="mb-8 h-12 w-64" />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[...Array(6)].map((_, i) => (
                    <SkeletonFallback key={i} className="h-80 w-full" />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <Projects />
        </Suspense>
      </section>
      <section id="timeline" className="h-fit">
        <Suspense
          fallback={
            <div className="py-16 lg:py-24 xl:py-32">
              <div className="container mx-auto px-4">
                <SkeletonFallback className="mb-8 h-12 w-64" />
                <div className="space-y-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-4">
                      <SkeletonFallback className="mt-2 h-4 w-4 flex-shrink-0 rounded-full" />
                      <div className="flex-1">
                        <SkeletonFallback className="mb-2 h-6 w-full" />
                        <SkeletonFallback className="h-4 w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        >
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
