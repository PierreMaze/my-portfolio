import SectionDivider from "../components/SectionDivider";
import Contact from "../features/Contact";
import Hero from "../features/Hero";
import Projects from "../features/Projects";
import Skills from "../features/Skills";
import Timeline from "../features/Timeline";

const Home = () => {
  return (
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
  );
};

export default Home;
