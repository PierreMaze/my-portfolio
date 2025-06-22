import Contact from "../features/common/Contact";
import Hero from "../features/common/Hero";
import Skills from "../features/common/Skills";
import Timeline from "../features/common/Timeline";
import Projects from "../features/projects/index.jsx";

const Home = () => {
  return (
    <>
      <section id="home" className="h-fit">
        <Hero />
      </section>
      <section id="skills" className="h-fit">
        <Skills />
      </section>
      <section id="projects" className="h-fit">
        <Projects />
      </section>
      <section id="timeline" className="h-fit">
        <Timeline />
      </section>
      <section id="contact" className="h-fit">
        <Contact />
      </section>
    </>
  );
};

export default Home;
