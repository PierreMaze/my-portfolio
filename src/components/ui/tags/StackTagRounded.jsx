import PropTypes from "prop-types";
import { STACKS_DATA } from "../../../data/stacks/stacks.js";

/**
 * Récupère les données d'une technologie depuis stacks.js
 * @param {string} techName - Nom de la technologie
 * @returns {Object} Objet avec iconComponent, iconColor et tagColor
 */
const getTechData = (techName) => {
  // Nettoyer le nom de la technologie (supprimer les espaces en début/fin)
  const cleanTechName = techName.trim();

  // Recherche exacte d'abord
  let stackData = STACKS_DATA.find((stack) => stack.name === cleanTechName);

  // Si pas trouvé, recherche par correspondance partielle (insensible à la casse)
  if (!stackData) {
    stackData = STACKS_DATA.find(
      (stack) =>
        stack.name.toLowerCase().includes(cleanTechName.toLowerCase()) ||
        cleanTechName.toLowerCase().includes(stack.name.toLowerCase())
    );
  }

  if (!stackData) {
    console.warn(`Technologie non trouvée: "${cleanTechName}"`);
    return {
      iconComponent: STACKS_DATA[0].iconComponent,
      iconColor: "text-zinc-600",
      tagColor: "border-zinc-500 text-zinc-700 bg-zinc-100",
    };
  }

  const { iconComponent, iconColor, tagColor } = stackData;
  return { iconComponent, iconColor, tagColor };
};

/**
 * Composant de badge pour les technologies avec icônes rondes
 * Utilisé spécifiquement dans ProjectCard pour les badges ronds
 * @param {Object} props
 * @param {string} props.name - Nom de la technologie
 * @returns {JSX.Element}
 */
export const TechRoundedBadge = ({ name }) => {
  const {
    iconComponent: IconComponent,
    iconColor,
    tagColor,
  } = getTechData(name);

  // Extraire les classes de couleur du tagColor
  const colorClasses = tagColor.split(" ");
  const bgClass =
    colorClasses.find((cls) => cls.startsWith("bg-")) || "bg-zinc-100";
  const borderClass =
    colorClasses.find((cls) => cls.startsWith("border-")) || "border-zinc-500";
  const textClass =
    colorClasses.find((cls) => cls.startsWith("text-")) || "text-zinc-700";

  const badgeClasses = `flex items-center justify-center w-8 h-8 ${bgClass} border-2 rounded-full shadow-sm transition-shadow duration-200 ${borderClass} hover:shadow-md`;
  const iconClasses = `w-4 h-4 ${iconColor}`;

  return (
    <div
      className={badgeClasses}
      title={name}
      aria-label={`Technologie: ${name}`}>
      <div className="scale-75" aria-hidden="true">
        <IconComponent className={iconClasses} />
      </div>
    </div>
  );
};

TechRoundedBadge.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
