import { useCallback, useEffect, useState } from "react";
import {
  SiDotenv,
  SiFigma,
  SiHtml5,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  BADGE_COLOR_CLASSES,
  HTML_ANIMATION_CONFIG,
} from "../../../constants/projects";
import { getColorFromIcon } from "../../../utils/colorUtils";

/**
 * Composant HTML/CSS avec animation de couleur
 * @param {Object} props
 * @param {Function} props.onColorChange - Callback pour le changement de couleur
 * @returns {JSX.Element}
 */
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

/**
 * Badge HTML/CSS avec animation
 * @returns {JSX.Element}
 */
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
      className={`${"flex items-center gap-2 px-2 py-1 border rounded-md shadow-sm transition-all duration-300 "}${colorClass}`}
      aria-label="Compétence en HTML / CSS">
      <div className="text-sm scale-75" aria-hidden="true">
        <AnimatedHtmlIcon onColorChange={handleColorChange} />
      </div>
      <span className="text-xs font-medium lg:text-sm text-zinc-900">
        HTML / CSS
      </span>
    </div>
  );
};

/**
 * Composant de badge générique pour les compétences
 * @param {Object} props
 * @param {string} props.name - Nom de la compétence
 * @param {React.ReactNode} props.icon - Icône de la compétence
 * @param {string} props.color - Couleur du badge (optionnel)
 * @returns {JSX.Element}
 */
export const SkillBadge = ({ name, icon, color }) => {
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
      aria-label={`Compétence en ${name}`}>
      <div className="scale-75 text-md" aria-hidden="true">
        {icon}
      </div>
      <span className="text-sm font-medium lg:text-base text-zinc-800">
        {name}
      </span>
    </div>
  );
};

/**
 * Mapping des technologies vers leurs icônes et couleurs
 * @param {string} techName - Nom de la technologie
 * @returns {Object} Objet avec icon et color
 */
const getTechIconAndColor = (techName) => {
  const techMap = {
    React: {
      icon: <SiReact className="w-4 h-4 text-cyan-600" />,
      color: "cyan",
    },
    TailwindCSS: {
      icon: <SiTailwindcss className="w-4 h-4 text-sky-500" />,
      color: "sky",
    },
    Node: {
      icon: <SiNodedotjs className="w-4 h-4 text-green-600" />,
      color: "green",
    },
    Figma: {
      icon: <SiFigma className="w-4 h-4 text-orange-600" />,
      color: "orange",
    },
    "framer-motion": {
      icon: <TbBrandFramerMotion className="w-4 h-4 text-pink-600" />,
      color: "pink",
    },
    "react-router-dom": {
      icon: <SiReactrouter className="w-4 h-4 text-red-600" />,
      color: "red",
    },
    HeadlessUI: {
      icon: <SiReact className="w-4 h-4 text-gray-600" />,
      color: "gray",
    },
    chakraui: {
      icon: <SiReact className="w-4 h-4 text-teal-600" />,
      color: "teal",
    },
    Dotenv: {
      icon: <SiDotenv className="w-4 h-4 text-yellow-600" />,
      color: "yellow",
    },
    calendly: {
      icon: <SiReact className="w-4 h-4 text-orange-600" />,
      color: "orange",
    },
  };

  return (
    techMap[techName] || {
      icon: <SiReact className="w-4 h-4 text-zinc-600" />,
      color: "stone",
    }
  );
};

/**
 * Composant de badge pour les technologies avec icônes (même style que SkillBadge)
 * @param {Object} props
 * @param {string} props.name - Nom de la technologie
 * @param {string} props.color - Couleur du badge (optionnel, sera surchargée par le mapping)
 * @returns {JSX.Element}
 */
export const TechBadge = ({ name, color }) => {
  const { icon, color: mappedColor } = getTechIconAndColor(name);
  const badgeColor = color || mappedColor;
  const colorClass =
    BADGE_COLOR_CLASSES[badgeColor] || BADGE_COLOR_CLASSES.stone;

  return (
    <div
      className={`${"flex items-center gap-2 px-2 py-1 border rounded-md shadow-sm transition-all duration-300 "}${colorClass}`}
      aria-label={`Technologie: ${name}`}>
      <div className="scale-75 text-md" aria-hidden="true">
        {icon}
      </div>
      <span className="text-sm font-medium lg:text-base text-zinc-800">
        {name}
      </span>
    </div>
  );
};
