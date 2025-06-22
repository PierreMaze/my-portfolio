import { useEffect, useState } from "react";
import { FaDatabase, FaMobile, FaServer } from "react-icons/fa";
import {
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMariadb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FadeIn } from "../../components/ui/FadeIn";

const AnimatedHtmlIcon = () => {
  const [htmlColor, setHtmlColor] = useState("text-orange-500");

  useEffect(() => {
    const interval = setInterval(() => {
      setHtmlColor((prevColor) =>
        prevColor === "text-orange-500" ? "text-blue-500" : "text-orange-500"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SiHtml5
      className={`w-12 h-12 transition-colors duration-500 ease-in-out${htmlColor}`}
    />
  );
};

const Skills = () => {
  const skillsData = {
    "Langages & Frameworks": [
      {
        name: "HTML / CSS",
        icon: <AnimatedHtmlIcon />,
        description:
          "Maîtrise des standards web modernes, sémantique HTML5 et CSS3 avancé",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-12 h-12 text-yellow-400" />,
        description:
          "ES6+, programmation asynchrone, manipulation du DOM et patterns modernes",
      },
      {
        name: "React",
        icon: <SiReact className="w-12 h-12 text-cyan-500" />,
        description:
          "Hooks, Context API, gestion d'état, composants réutilisables et performance",
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-12 h-12 text-green-600" />,
        description:
          "APIs RESTful, Express.js, gestion des middlewares et sécurité",
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="w-12 h-12 text-sky-500" />,
        description:
          "Design system, responsive design et optimisation des performances",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-12 h-12 text-black" />,
        description:
          "SSR/SSG, routing dynamique, API Routes et optimisation SEO",
      },
    ],
    "Bases de données": [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-12 h-12 text-blue-600" />,
        description:
          "Requêtes complexes, indexation, transactions et optimisation des performances",
      },
      {
        name: "MariaDB",
        icon: <SiMariadb className="w-12 h-12 text-amber-800" />,
        description: "Administration, backup, réplication et maintenance",
      },
      {
        name: "SQL",
        icon: <SiMysql className="w-12 h-12 text-blue-500" />,
        description:
          "Modélisation relationnelle, requêtes avancées et optimisation",
      },
      {
        name: "BDD",
        icon: <FaDatabase className="w-12 h-12 text-gray-600" />,
        description:
          "Architecture de données, normalisation et stratégies de scaling",
      },
    ],
    "Outils & Méthodes": [
      {
        name: "Notion",
        icon: <SiNotion className="w-12 h-12 text-black" />,
        description:
          "Gestion de projet, documentation technique et collaboration d'équipe",
      },
      {
        name: "GitHub",
        icon: <SiGithub className="w-12 h-12 text-gray-800" />,
        description: "Git flow, CI/CD, code review et gestion de versions",
      },
      {
        name: "VPS",
        icon: <FaServer className="w-12 h-12 text-purple-600" />,
        description: "Déploiement, monitoring, sécurité et maintenance serveur",
      },
      {
        name: "Figma",
        icon: <SiFigma className="w-12 h-12 text-orange-600" />,
        description:
          "Design system, prototypage interactif et collaboration UI/UX",
      },
      {
        name: "Responsive Design",
        icon: <FaMobile className="w-12 h-12 text-gray-600" />,
        description: "Mobile-first, breakpoints, flexbox/grid et accessibilité",
      },
    ],
  };

  const SkillCard = ({ name, icon, description }) => (
    <div className="relative py-6 text-center rounded-xl transition-all duration-300 bg-accent-50 group hover:bg-accent/5">
      <div className="relative">
        <div className="flex justify-center transition-transform duration-300 mb-2 group-hover:scale-110">
          {icon}
        </div>
        <h4 className="font-semibold transition-colors duration-300 group-hover:text-accent">
          {name}
        </h4>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-xl opacity-0 pointer-events-none transition-all duration-300 bg-white/95 group-hover:opacity-100 group-hover:pointer-events-auto">
        <p className="px-4 text-sm text-accent-600">{description}</p>
      </div>
    </div>
  );

  const SkillSection = ({ title, skills, cols = 6 }) => (
    <FadeIn>
      <div>
        <h3 className="pb-2 text-2xl font-semibold border-b mb-6 border-accent">
          {title}
        </h3>
        <div
          className={`grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-${cols}`}>
          {skills.map((skill, index) => (
            <SkillCard key={`${title}-${index}`} {...skill} />
          ))}
        </div>
      </div>
    </FadeIn>
  );

  return (
    <section className="py-12 lg:py-24">
      <FadeIn>
        <h2 className="relative text-3xl font-bold mb-12">
          <span className="relative inline-block">
            <span
              className="absolute block -skew-y-3 bg-yellow-200 -inset-1"
              aria-hidden="true"></span>
            <span className="relative">Mes compétences</span>
          </span>
        </h2>
      </FadeIn>
      <div className="space-y-16">
        {Object.entries(skillsData).map(([title, skills], index) => (
          <SkillSection
            key={title}
            title={title}
            skills={skills}
            cols={title === "Langages & Frameworks" ? 6 : 4}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
