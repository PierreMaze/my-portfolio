import React from "react";
import PropTypes from "prop-types";
import { STACK_TAG_TYPES, TAG_STYLES } from "../../../constants";
import { extractColorClasses, getStackData } from "../../../utils";

/**
 * Composant unifié pour les badges de technologies
 * Optimisé avec React.memo pour éviter les re-renders inutiles
 * @param {Object} props
 * @param {string} props.name - Nom de la technologie
 * @param {string} props.type - Type de badge: "rounded" ou "rectangular"
 * @param {React.ReactNode} [props.icon] - Icône personnalisée (optionnel pour rectangular)
 * @param {string} [props.color] - Classes CSS de couleur personnalisées (optionnel)
 * @returns {JSX.Element}
 */
export const StackTag = React.memo(({
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
      <span
        role="img"
        aria-label={`Technologie: ${name}`}
        className={tagStackClass}
      >
        <span className={TAG_STYLES.ROUNDED.icon} aria-hidden="true">
          <IconComponent className={iconStackClass} />
        </span>
      </span>
    );
  }

  // Tag rectangulaire pour ProjectPage et Skills
  const tagStackColor = color || tagColor;
  const iconStackColor = iconColor;

  return (
    <span
      role="img"
      aria-label={`Compétence en ${name}`}
      className={`${TAG_STYLES.RECTANGULAR.container} ${tagStackColor}`}
    >
      <span className={TAG_STYLES.RECTANGULAR.icon} aria-hidden="true">
        {icon || <IconComponent className={`h-4 w-4 ${iconStackColor}`} />}
      </span>
      <span className={`${TAG_STYLES.RECTANGULAR.text} ${textClass}`}>
        {name}
      </span>
    </span>
  );
});

StackTag.displayName = "StackTag";

StackTag.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([STACK_TAG_TYPES.ROUNDED, STACK_TAG_TYPES.RECTANGULAR]),
  icon: PropTypes.node,
  color: PropTypes.string,
};
