import PropTypes from "prop-types";
import { BsQuestionCircleFill } from "react-icons/bs";
import { STACKS_DATA } from "../../../data/stacks.js";

/**
 * Récupère les données d'une technologie depuis stacks.js
 * @param {string} techName - Nom de la technologie
 * @returns {Object} Objet avec iconComponent, iconColor et tagColor
 */
const getStackData = (techName) => {
  // Nettoyer le nom de la technologie (supprimer les espaces en début/fin)
  const cleanStackName = techName.trim();

  // Recherche exacte d'abord
  let stackData = STACKS_DATA.find((stack) => stack.name === cleanStackName);

  // Si pas trouvé, recherche par correspondance partielle (insensible à la casse)
  if (!stackData) {
    stackData = STACKS_DATA.find(
      (stack) =>
        stack.name.toLowerCase().includes(cleanStackName.toLowerCase()) ||
        cleanStackName.toLowerCase().includes(stack.name.toLowerCase())
    );
  }

  if (!stackData) {
    console.warn(`Technologie non trouvée: "${cleanStackName}"`);
    return {
      iconComponent: BsQuestionCircleFill,
      iconColor: "text-zinc-800",
      tagColor: "border-zinc-600 text-zinc-800 bg-zinc-100",
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
  } = getStackData(name);

  // Extraire les classes de couleur du tagColor
  const tagColorClass = tagColor.split(" ");
  const bgClass =
    tagColorClass.find((tagClass) => tagClass.startsWith("bg-")) ||
    "bg-zinc-100";
  const borderClass =
    tagColorClass.find((tagClass) => tagClass.startsWith("border-")) ||
    "border-zinc-600";
  const textClass =
    tagColorClass.find((tagClass) => tagClass.startsWith("text-")) ||
    "text-zinc-800";

  if (type === "rounded") {
    // Badge rond pour ProjectCard
    const tagStackClass = `flex items-center justify-center w-8 h-8 ${bgClass} border-2 rounded-full shadow-sm transition-shadow duration-200 ${borderClass} hover:shadow-md`;
    const iconStackClass = `w-4 h-4 ${iconColor}`;

    return (
      <div
        className={tagStackClass}
        title={name}
        aria-label={`Technologie: ${name}`}>
        <div className="scale-75" aria-hidden="true">
          <IconComponent className={iconStackClass} />
        </div>
      </div>
    );
  }

  // Badge rectangulaire pour ProjectPage et Skills
  const tagStackColor = color || tagColor;
  const iconStackColor = iconColor;

  return (
    <div
      className={`${"flex items-center gap-2 px-2 py-1 border-2 rounded shadow-sm transition-all duration-300 "}${tagStackColor}`}
      aria-label={`Compétence en ${name}`}>
      <div className="scale-75 text-md" aria-hidden="true">
        {icon || <IconComponent className={`w-4 h-4${iconStackColor}`} />}
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
