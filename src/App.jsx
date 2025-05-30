import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionDivider } from "./components/SectionDivider";
import TerminalLoader from "./components/TerminalLoader";
import { Contact } from "./features/Contact";
import { Hero } from "./features/Hero";
import { ProjectDetails } from "./features/ProjectDetails";
import { Projects } from "./features/Projects";
import Skills from "./features/Skills";
import { Timeline } from "./features/Timeline";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Legal } from "./pages/Legal";

export const App = () => {
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen selection:bg-accent/20 selection:text-accent">
      <TerminalLoader />
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Landing page avec toutes les sections */}
          <Route
            path="/"
            element={
              <>
                <section id="home" className="min-h-screen">
                  <Hero />
                </section>
                <section id="skills" className="min-h-screen">
                  <Skills />
                </section>
                <SectionDivider />
                <section id="projects" className="min-h-screen">
                  <Projects />
                </section>
                <SectionDivider />
                <section id="timeline" className="min-h-screen">
                  <Timeline />
                </section>
                <SectionDivider />
                <section id="contact" className="min-h-screen">
                  <Contact />
                </section>
              </>
            }
          />

          {/* Pages détaillées */}
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
