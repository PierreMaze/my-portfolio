import { useCallback, useEffect, useState } from "react";
import { FaMobile, FaServer } from "react-icons/fa";
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
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import { FadeIn } from "../../components/ui";
import {
  BADGE_COLOR_CLASSES,
  HTML_ANIMATION_CONFIG,
} from "../../constants/projects";
import { getColorFromIcon } from "../../utils/colorUtils";

// Composant HTML/CSS ultra-simplifié
const AnimatedHtmlIcon = ({ onColorChange }) => {
  const [isOrange, setIsOrange] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOrange((prev) => !prev);
    }, HTML_ANIMATION_CONFIG.interval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (onColorChange) {
      onColorChange(isOrange ? "orange" : "blue");
    }
  }, [isOrange, onColorChange]);

  const iconColor = isOrange
    ? HTML_ANIMATION_CONFIG.colors.orange
    : HTML_ANIMATION_CONFIG.colors.blue;

  return (
    <SiHtml5
      className={`w-4 h-4 transition-colors duration-500 ease-in-out${iconColor}`}
    />
  );
};

// Badge HTML/CSS ultra-simplifié
const HtmlCssBadge = () => {
  const [htmlColor, setHtmlColor] = useState("orange");

  const handleColorChange = useCallback((newColor) => {
    setHtmlColor(newColor);
  }, []);

  const colorClass =
    htmlColor === "orange"
      ? BADGE_COLOR_CLASSES.orange
      : BADGE_COLOR_CLASSES.blue;

  return (
    <div
      className={`${"flex items-center gap-2 px-2 py-1 border rounded-md shadow-sm transition-all duration-300 "}${colorClass}`}>
      <div className="text-sm scale-75">
        <AnimatedHtmlIcon onColorChange={handleColorChange} />
      </div>
      <span className="text-xs font-medium lg:text-sm">HTML / CSS</span>
    </div>
  );
};

// Composant de badge générique ultra-robuste
const SkillBadge = ({ name, icon, color }) => {
  // Cas spécial pour HTML/CSS
  if (name === "HTML / CSS") {
    return <HtmlCssBadge />;
  }

  // Détermine la couleur du badge avec fallback robuste
  const badgeColor = color || getColorFromIcon(icon) || "stone";
  const colorClass =
    BADGE_COLOR_CLASSES[badgeColor] || BADGE_COLOR_CLASSES.stone;

  return (
    <div
      className={`${"flex items-center gap-2 px-2 py-1 border rounded-md shadow-sm transition-all duration-300 "}${colorClass}`}
      role="listitem"
      aria-label={`Compétence en ${name}`}>
      <div className="scale-75 text-md" aria-hidden="true">
        {icon}
      </div>
      <span className="text-sm font-medium lg:text-base">{name}</span>
    </div>
  );
};

const Skills = () => {
  const skillsData = {
    Langages: [
      {
        name: "HTML / CSS",
        icon: <HtmlCssBadge />,
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
        icon: <SiReact className="w-4 h-4 text-cyan-500" />,
        description:
          "Hooks, Context API, gestion d'état, composants réutilisables et performance",
      },
      {
        name: "React Router DOM",
        icon: <SiReactrouter className="w-4 h-4 text-red-500" />,
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
        icon: <SiMariadb className="w-4 h-4 text-amber-700" />,
        description: "Administration, backup, réplication et maintenance",
      },
    ],
    Méthodes: [
      {
        name: "Responsive Design",
        icon: <FaMobile className="w-4 h-4 text-gray-600" />,
        description: "Mobile-first, breakpoints, flexbox/grid et accessibilité",
      },
      {
        name: "CI/CD",
        icon: <SiGithub className="w-4 h-4 text-gray-800" />,
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
        icon: <SiGithub className="w-4 h-4 text-gray-800" />,
        description: "Git flow, CI/CD, code review et gestion de versions",
      },
      {
        name: "VPS",
        icon: <FaServer className="w-4 h-4 text-purple-600" />,
        description: "Déploiement, monitoring, sécurité et maintenance serveur",
      },
      {
        name: "Figma",
        icon: <SiFigma className="w-4 h-4 text-orange-600" />,
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
        <div
          className="flex flex-wrap gap-2"
          role="list"
          aria-label={`Compétences en ${title}`}>
          {skills.map((skill, index) => (
            <SkillBadge
              key={`${title}-${index}`}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
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
