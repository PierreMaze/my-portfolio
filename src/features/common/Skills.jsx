import { memo, useEffect, useState } from "react";
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
import { FadeIn } from "../../components/ui/FadeIn";

// Composant HTML/CSS avec son propre état isolé
const AnimatedHtmlIcon = ({ onColorChange }) => {
  const [isOrange, setIsOrange] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOrange((prev) => {
        const newColor = !prev;
        // Notifier le parent du changement de couleur
        if (onColorChange) {
          onColorChange(newColor ? "orange" : "blue");
        }
        return newColor;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [onColorChange]);

  return (
    <SiHtml5
      className={`w-4 h-4 transition-colors duration-500 ease-in-out ${
        isOrange ? "text-orange-500" : "text-blue-500"
      }`}
    />
  );
};

// Composant spécial pour le badge HTML/CSS avec synchronisation de couleur
const HtmlCssBadge = () => {
  const [htmlColor, setHtmlColor] = useState("orange");

  const handleColorChange = (newColor) => {
    setHtmlColor(newColor);
  };

  const colorClasses = {
    orange:
      "bg-orange-100 border-orange-200 text-orange-800 hover:bg-orange-200",
    blue: "bg-blue-100 border-blue-200 text-blue-800 hover:bg-blue-200",
  };

  return (
    <div
      className={`flex items-center gap-2 px-2 py-1 border rounded-md shadow-sm transition-all duration-300 ${colorClasses[htmlColor]}`}>
      <div className="text-[10px] scale-75">
        <AnimatedHtmlIcon onColorChange={handleColorChange} />
      </div>
      <span className="text-xs font-medium lg:text-sm">HTML / CSS</span>
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

  // Fonction pour extraire la couleur de l'icône
  const getColorFromIcon = (iconElement) => {
    if (!iconElement || !iconElement.props || !iconElement.props.className) {
      return "stone";
    }

    const className = iconElement.props.className;

    // Détection des couleurs dans les classes
    if (className.includes("text-orange")) return "orange";
    if (className.includes("text-blue")) return "blue";
    if (className.includes("text-cyan")) return "cyan";
    if (className.includes("text-green")) return "green";
    if (className.includes("text-red")) return "red";
    if (className.includes("text-amber")) return "amber";
    if (className.includes("text-purple")) return "purple";
    if (className.includes("text-yellow")) return "yellow";
    if (className.includes("text-indigo")) return "indigo";
    if (className.includes("text-pink")) return "pink";
    if (className.includes("text-gray")) return "gray";
    if (className.includes("text-black")) return "black";

    return "stone";
  };

  const SkillCard = memo(({ name, icon, color }) => {
    // Cas spécial pour HTML/CSS qui est déjà un composant complet
    if (name === "HTML / CSS") {
      return icon;
    }

    // Utilise la couleur détectée de l'icône si aucune couleur n'est spécifiée
    const badgeColor = color || getColorFromIcon(icon);

    const colorClasses = {
      orange:
        "bg-orange-100 border-orange-200 text-orange-800 hover:bg-orange-200",
      blue: "bg-blue-100 border-blue-200 text-blue-800 hover:bg-blue-200",
      cyan: "bg-cyan-100 border-cyan-200 text-cyan-800 hover:bg-cyan-200",
      green: "bg-green-100 border-green-200 text-green-800 hover:bg-green-200",
      red: "bg-red-100 border-red-200 text-red-800 hover:bg-red-200",
      amber: "bg-amber-100 border-amber-200 text-amber-800 hover:bg-amber-200",
      purple:
        "bg-purple-100 border-purple-200 text-purple-800 hover:bg-purple-200",
      yellow:
        "bg-yellow-100 border-yellow-200 text-yellow-800 hover:bg-yellow-200",
      indigo:
        "bg-indigo-100 border-indigo-200 text-indigo-800 hover:bg-indigo-200",
      pink: "bg-pink-100 border-pink-200 text-pink-800 hover:bg-pink-200",
      gray: "bg-gray-100 border-gray-200 text-gray-800 hover:bg-gray-200",
      stone: "bg-stone-100 border-stone-200 text-stone-800 hover:bg-stone-200",
      black: "bg-gray-200 border-gray-300 text-gray-900 hover:bg-gray-300",
    };

    return (
      <div
        className={`flex items-center gap-2 px-2 py-1 border rounded-md shadow-sm transition-all duration-300 ${colorClasses[badgeColor]}`}>
        <div className="text-[10px] scale-75">{icon}</div>
        <span className="text-sm font-medium lg:text-base">{name}</span>
      </div>
    );
  });

  const SkillSection = ({ title, skills }) => (
    <FadeIn>
      <div className="py-4 mx-4">
        <h3 className="text-lg font-semibold text-start text-stone-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillCard
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
