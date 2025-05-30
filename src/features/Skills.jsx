import { FaDatabase, FaMobile, FaServer } from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiGithub,
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
import { FadeIn } from "../components/FadeIn";

const Skills = () => {
  const skillsData = {
    "Langages & Frameworks": [
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-12 h-12 text-yellow-400" />,
        description: "Langage dynamique incontournable du web",
      },
      {
        name: "React",
        icon: <SiReact className="w-12 h-12 text-blue-500" />,
        description: "Bibliothèque JS pour UI rapides & dynamiques",
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-12 h-12 text-green-600" />,
        description: "Exécution JS côté serveur, backend moderne",
      },
      {
        name: "Express",
        icon: <SiExpress className="w-12 h-12 text-gray-800" />,
        description: "Framework minimaliste pour APIs Node.js",
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="w-12 h-12 text-cyan-500" />,
        description: "Gestion de styles avec utilitaires CSS modernes",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-12 h-12 text-black" />,
        description: "Framework React SSR et routage",
      },
    ],
    "Bases de données": [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-12 h-12 text-blue-600" />,
        description: "Système de gestion de base relationnelle",
      },
      {
        name: "MariaDB",
        icon: <SiMariadb className="w-12 h-12 text-orange-600" />,
        description: "Base SQL open-source robuste et performante",
      },
      {
        name: "SQL",
        icon: <SiMysql className="w-12 h-12 text-blue-500" />,
        description: "Conception et gestion de bases de données relationnelles",
      },
      {
        name: "BDD",
        icon: <FaDatabase className="w-12 h-12 text-gray-600" />,
        description: "Modélisation & gestion des données",
      },
    ],
    "Outils & Méthodes": [
      {
        name: "Notion",
        icon: <SiNotion className="w-12 h-12 text-black" />,
        description:
          "Plateforme collaborative pour gérer les tâches et documents",
      },
      {
        name: "GitHub",
        icon: <SiGithub className="w-12 h-12 text-gray-800" />,
        description: "Contrôle de version & collaboration sur code",
      },
      {
        name: "VPS",
        icon: <FaServer className="w-12 h-12 text-gray-600" />,
        description: "Déploiement et gestion de serveurs privés virtuels",
      },
      {
        name: "Figma",
        icon: <SiFigma className="w-12 h-12 text-purple-600" />,
        description: "Conception et prototypage UI/UX",
      },
      {
        name: "Responsive Design",
        icon: <FaMobile className="w-12 h-12 text-gray-600" />,
        description: "Design responsive pour tous types d'écrans",
      },
    ],
  };

  const SkillCard = ({ name, icon, description }) => (
    <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group hover:bg-accent/5">
      <div className="relative">
        <div className="flex justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h4 className="font-semibold transition-colors duration-300 group-hover:text-accent">
          {name}
        </h4>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-xl opacity-0 pointer-events-none transition-all duration-300 bg-white/95 group-hover:opacity-100 group-hover:pointer-events-auto">
        <p className="px-4 text-sm text-gray-600">{description}</p>
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
    <section className="py-20">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-accent mb-10">
            🛠 Compétences
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
      </div>
    </section>
  );
};

export default Skills;
