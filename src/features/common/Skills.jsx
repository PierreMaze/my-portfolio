import { DiScrum } from "react-icons/di";
import { FaMobile, FaServer } from "react-icons/fa";
import { TbBrandFramerMotion, TbBrandVite } from "react-icons/tb";

import {
  SiClaude,
  SiDotenv,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";

import { FadeIn, SkillBadge } from "../../components/ui";

const Skills = () => {
  const skillsData = {
    Langages: [
      {
        name: "HTML / CSS",
        icon: <SiHtml5 className="w-4 h-4 text-orange-500" />,
        description:
          "Maîtrise des standards web modernes, sémantique HTML5 et CSS3 avancé",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-4 h-4 text-yellow-400" />,
        description:
          "ES6+, programmation asynchrone, manipulation du DOM et patterns modernes",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-4 h-4 text-sky-400" />,
        description:
          "ES6+, programmation asynchrone, manipulation du DOM et patterns modernes",
      },
      {
        name: "SQL",
        icon: <SiMysql className="w-4 h-4 text-blue-500" />,
        description:
          "Modélisation relationnelle, requêtes avancées et optimisation",
      },
    ],
    "Environnements & Frameworks": [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-4 h-4 text-green-600" />,
        description:
          "APIs RESTful, Express.js, gestion des middlewares et sécurité",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-4 h-4 text-black" />,
        description:
          "SSR/SSG, routing dynamique, API Routes et optimisation SEO",
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="w-4 h-4 text-sky-500" />,
        description:
          "Design system, responsive design et optimisation des performances",
      },
    ],
    Bibliothèques: [
      {
        name: "React",
        icon: <SiReact className="w-4 h-4 text-cyan-600" />,
        description:
          "Hooks, Context API, gestion d'état, composants réutilisables et performance",
      },
      {
        name: "React Router DOM",
        icon: <SiReactrouter className="w-4 h-4 text-red-600" />,
        description:
          "Hooks, Context API, gestion d'état, composants réutilisables et performance",
      },
      {
        name: "ExpressJS",
        icon: <SiExpress className="w-4 h-4 text-black-600" />,
        description:
          "Hooks, Context API, gestion d'état, composants réutilisables et performance",
      },
      {
        name: "Dotenv",
        icon: <SiDotenv className="w-4 h-4 text-yellow-600" />,
        description:
          "Hooks, Context API, gestion d'état, composants réutilisables et performance",
      },
      {
        name: "Zod",
        icon: <SiZod className="w-4 h-4 text-sky-600" />,
        description:
          "Hooks, Context API, gestion d'état, composants réutilisables et performance",
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion className="w-4 h-4 text-pink-600" />,
        description:
          "Hooks, Context API, gestion d'état, composants réutilisables et performance",
      },
    ],
    "Bases de données": [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-4 h-4 text-blue-600" />,
        description:
          "Requêtes complexes, indexation, transactions et optimisation des performances",
      },
      {
        name: "MariaDB",
        icon: <SiMariadb className="w-4 h-4 text-amber-800" />,
        description: "Administration, backup, réplication et maintenance",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-4 h-4 text-green-800" />,
        description: "Administration, backup, réplication et maintenance",
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="w-4 h-4 text-stone-800" />,
        description: "Administration, backup, réplication et maintenance",
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="w-4 h-4 text-pink-800" />,
        description: "Administration, backup, réplication et maintenance",
      },
    ],
    Méthodes: [
      {
        name: "Responsive Design",
        icon: <FaMobile className="w-4 h-4 text-green-800" />,
        description: "Mobile-first, breakpoints, flexbox/grid et accessibilité",
      },
      {
        name: "CI/CD",
        icon: <SiGithub className="w-4 h-4 text-gray-900" />,
        description: "Git flow, CI/CD, code review et gestion de versions",
      },
      {
        name: "SCRUM",
        icon: <DiScrum className="w-4 h-4 text-purple-900" />,
        description: "Git flow, CI/CD, code review et gestion de versions",
      },
    ],
    Outils: [
      {
        name: "Notion",
        icon: <SiNotion className="w-4 h-4 text-black" />,
        description:
          "Gestion de projet, documentation technique et collaboration d'équipe",
      },
      {
        name: "GitHub",
        icon: <SiGithub className="w-4 h-4 text-gray-900" />,
        description: "Git flow, CI/CD, code review et gestion de versions",
      },
      {
        name: "VPS",
        icon: <FaServer className="w-4 h-4 text-purple-700" />,
        description: "Déploiement, monitoring, sécurité et maintenance serveur",
      },
      {
        name: "Figma",
        icon: <SiFigma className="w-4 h-4 text-orange-600" />,
        description:
          "Design system, prototypage interactif et collaboration UI/UX",
      },
      {
        name: "Vite",
        icon: <TbBrandVite className="w-4 h-4 text-yellow-600" />,
        description:
          "Design system, prototypage interactif et collaboration UI/UX",
      },
      {
        name: "ChatGPT",
        icon: <SiOpenai className="w-4 h-4 text-black" />,
        description:
          "Design system, prototypage interactif et collaboration UI/UX",
      },
      {
        name: "Claude",
        icon: <SiClaude className="w-4 h-4 text-orange-600" />,
        description:
          "Design system, prototypage interactif et collaboration UI/UX",
      },
    ],
  };

  const SkillSection = ({ title, skills }) => (
    <FadeIn>
      <div className="py-4 mx-4">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-start text-stone-800 mb-4">
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          {title}
        </h3>
        <ul
          className="flex flex-wrap gap-2 list-none"
          aria-label={`Compétences en ${title}`}>
          {skills.map((skill, index) => (
            <li key={`${title}-${index}`}>
              <SkillBadge
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );

  return (
    <section className="py-16 lg:py-24 xl:py-32">
      <FadeIn>
        <h2 className="relative text-3xl font-bold mb-12">
          <span className="relative inline-block">
            <span
              className="absolute block -skew-y-3 bg-orange-200 -inset-1"
              aria-hidden="true"></span>
            <span className="relative">Mes compétences</span>
          </span>
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {Object.entries(skillsData).map(([title, skills]) => (
          <SkillSection key={title} title={title} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
