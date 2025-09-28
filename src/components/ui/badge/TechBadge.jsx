import PropTypes from "prop-types";
import { FaChartBar } from "react-icons/fa";
import {
  SiCalendly,
  SiChakraui,
  SiDotenv,
  SiFigma,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion, TbBrandHeadlessui } from "react-icons/tb";
import { BADGE_COLOR_CLASSES } from "../../../constants/projects";

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
      icon: <SiFigma className="w-4 h-4 text-sky-600" />,
      color: "sky",
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
      icon: <TbBrandHeadlessui className="w-4 h-4 text-purple-600" />,
      color: "purple",
    },
    chakraui: {
      icon: <SiChakraui className="w-4 h-4 text-teal-600" />,
      color: "teal",
    },
    Dotenv: {
      icon: <SiDotenv className="w-4 h-4 text-yellow-600" />,
      color: "yellow",
    },
    calendly: {
      icon: <SiCalendly className="w-4 h-4 text-blue-600" />,
      color: "blue",
    },
    "d3.js": {
      icon: <FaChartBar className="w-4 h-4 text-orange-600" />,
      color: "orange",
    },
    api: {
      icon: <TbApi className="w-4 h-4 text-blue-600" />,
      color: "blue",
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
 * Composant de badge pour les technologies avec icônes rondes
 * Utilisé spécifiquement dans ProjectCard pour les badges ronds
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
      className={`${"flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full shadow-sm transition-shadow duration-200 border-zinc-200 hover:shadow-md "}${colorClass}`}
      title={name}
      aria-label={`Technologie: ${name}`}>
      <div className="scale-75" aria-hidden="true">
        {icon}
      </div>
    </div>
  );
};

TechBadge.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
