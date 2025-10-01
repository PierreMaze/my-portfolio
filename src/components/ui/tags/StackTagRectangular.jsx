import PropTypes from "prop-types";
import { STACKS_DATA } from "../../../data/stacks/stacks.js";

/**
 * Composant de badge générique pour les compétences
 * Utilisé dans Skills.jsx et ProjectPage.jsx pour afficher les compétences
 * @param {Object} props
 * @param {string} props.name - Nom de la compétence
 * @param {React.ReactNode} props.icon - Icône de la compétence
 * @param {string} props.color - Classes CSS de couleur du badge (optionnel, sera récupéré depuis stacks.js si non fourni)
 * @returns {JSX.Element}
 */
export const TechRectangularBadge = ({ name, icon, color }) => {
  // Récupérer les couleurs depuis stacks.js si non fournies
  const stackData = STACKS_DATA.find((stack) => stack.name === name);
  const tagColor =
    color || stackData?.tagColor || "bg-stone-100 border-stone-500";
  const iconColor = stackData?.iconColor || "text-gray-600";

  return (
    <div
      className={`${"flex items-center gap-2 px-2 py-1 border-2 rounded-md shadow-sm transition-all duration-300 "}${tagColor}`}
      aria-label={`Compétence en ${name}`}>
      <div className="scale-75 text-md" aria-hidden="true">
        {icon}
      </div>
      <span className={`text-sm font-medium lg:text-base${iconColor}`}>
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
