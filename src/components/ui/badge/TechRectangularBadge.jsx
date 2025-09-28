import PropTypes from "prop-types";
import { SiHtml5 } from "react-icons/si";
import { BADGE_COLOR_CLASSES } from "../../../constants/projects";
import { getColorFromIcon } from "../../utils/colorUtils";

/**
 * Composant HTML/CSS avec animation CSS pure
 * @returns {JSX.Element}
 */
const HtmlCssBadge = () => {
  return (
    <div
      className={`${"flex items-center gap-2 px-2 py-1 border-2 rounded-md shadow-sm transition-all duration-300 "}${BADGE_COLOR_CLASSES.orange}`}
      aria-label="Compétence en HTML / CSS">
      <div className="text-sm scale-75" aria-hidden="true">
        <SiHtml5 className="w-4 h-4 animate-pulse text-orange-600" />
      </div>
      <span className="text-xs font-medium lg:text-sm text-zinc-900">
        HTML / CSS
      </span>
    </div>
  );
};

/**
 * Composant de badge générique pour les compétences
 * Utilisé dans Skills.jsx et ProjectPage.jsx pour afficher les compétences
 * @param {Object} props
 * @param {string} props.name - Nom de la compétence
 * @param {React.ReactNode} props.icon - Icône de la compétence
 * @param {string} props.color - Couleur du badge (optionnel)
 * @returns {JSX.Element}
 */
export const TechRectangularBadge = ({ name, icon, color }) => {
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
      className={`${"flex items-center gap-2 px-2 py-1 border-2 text-current rounded-md shadow-sm transition-all duration-300 "}${colorClass}`}
      aria-label={`Compétence en ${name}`}>
      <div className="scale-75 text-md" aria-hidden="true">
        {icon}
      </div>
      <span className="text-sm font-medium lg:text-base text-current">
        {name}
      </span>
    </div>
  );
};

TechRectangularBadge.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  color: PropTypes.string,
};
