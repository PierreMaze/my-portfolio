import Contact from "../features/common/Contact";
import Hero from "../features/common/Hero";
import Skills from "../features/common/Skills";
import Timeline from "../features/common/Timeline";
import Projects from "../features/projects/index.jsx";

const Home = () => {
  return (
    <>
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="timeline" className="min-h-screen">
        <Timeline />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </>
  );
};

export default Home;
