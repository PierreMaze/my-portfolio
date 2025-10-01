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
 * Composant unifié pour les badges de technologies
 * @param {Object} props
 * @param {string} props.name - Nom de la technologie
 * @param {string} props.type - Type de badge: "rounded" ou "rectangular"
 * @param {React.ReactNode} [props.icon] - Icône personnalisée (optionnel pour rectangular)
 * @param {string} [props.color] - Classes CSS de couleur personnalisées (optionnel)
 * @returns {JSX.Element}
 */
export const StackTag = ({ name, type = "rectangular", icon, color }) => {
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

  if (type === "rounded") {
    // Badge rond pour ProjectCard
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
  }

  // Badge rectangulaire pour ProjectPage et Skills
  const customTagColor = color || tagColor;
  const customIconColor = iconColor;

  return (
    <div
      className={`${"flex items-center gap-2 px-2 py-1 border-2 rounded-md shadow-sm transition-all duration-300 "}${customTagColor}`}
      aria-label={`Compétence en ${name}`}>
      <div className="scale-75 text-md" aria-hidden="true">
        {icon || <IconComponent className={`w-4 h-4${customIconColor}`} />}
      </div>
      <span className={`text-sm font-medium lg:text-base${textClass}`}>
        {name}
      </span>
    </div>
  );
};

StackTag.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["rounded", "rectangular"]),
  icon: PropTypes.node,
  color: PropTypes.string,
};
