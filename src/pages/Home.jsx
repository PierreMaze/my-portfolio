import { SectionDivider } from "../components/SectionDivider";
import { Contact } from "../features/Contact";
import { Hero } from "../features/Hero";
import { Projects } from "../features/Projects";
import { Skills } from "../features/Skills";

export const Home = () => {
  return (
    <main>
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <SectionDivider />
      <section id="projects">
        <Projects />
      </section>
      <SectionDivider />
      <section id="skills">
        <Skills />
      </section>
      <SectionDivider />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};
