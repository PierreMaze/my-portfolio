import PropTypes from "prop-types";
import { STACK_TAG_TYPES, TAG_STYLES } from "../../../constants";
import { extractColorClasses, getStackData } from "../../../utils";

/**
 * Composant unifié pour les badges de technologies
 * @param {Object} props
 * @param {string} props.name - Nom de la technologie
 * @param {string} props.type - Type de badge: "rounded" ou "rectangular"
 * @param {React.ReactNode} [props.icon] - Icône personnalisée (optionnel pour rectangular)
 * @param {string} [props.color] - Classes CSS de couleur personnalisées (optionnel)
 * @returns {JSX.Element}
 */
export const StackTag = ({
  name,
  type = STACK_TAG_TYPES.RECTANGULAR,
  icon,
  color,
}) => {
  const {
    iconComponent: IconComponent,
    iconColor,
    tagColor,
  } = getStackData(name);

  // Extraire les classes de couleur du tagColor
  const { bgClass, borderClass, textClass } = extractColorClasses(tagColor);

  if (type === STACK_TAG_TYPES.ROUNDED) {
    // Tag rond pour ProjectCard
    const tagStackClass = `${TAG_STYLES.ROUNDED.container} ${bgClass} ${borderClass}`;
    const iconStackClass = `w-4 h-4 ${iconColor}`;

    return (
      <div
        className={tagStackClass}
        title={name}
        aria-label={`Technologie: ${name}`}>
        <div className={TAG_STYLES.ROUNDED.icon} aria-hidden="true">
          <IconComponent className={iconStackClass} />
        </div>
      </div>
    );
  }

  // Tag rectangulaire pour ProjectPage et Skills
  const tagStackColor = color || tagColor;
  const iconStackColor = iconColor;

  return (
    <div
      className={`${TAG_STYLES.RECTANGULAR.container}${" "}${tagStackColor}`}
      aria-label={`Compétence en ${name}`}>
      <div className={TAG_STYLES.RECTANGULAR.icon} aria-hidden="true">
        {icon || <IconComponent className={`${"w-4 h-4 "}${iconStackColor}`} />}
      </div>
      <span className={`${TAG_STYLES.RECTANGULAR.text}${" "}${textClass}`}>
        {name}
      </span>
    </div>
  );
};

StackTag.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([STACK_TAG_TYPES.ROUNDED, STACK_TAG_TYPES.RECTANGULAR]),
  icon: PropTypes.node,
  color: PropTypes.string,
};
