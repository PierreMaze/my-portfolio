import PropTypes from "prop-types";

/**
 * Composant ButtonIconsSecondaryHoveredColoredQuarteRotate
 * Bouton d'icône avec effet de rotation au hover et couleurs personnalisables
 * - État normal : icône avec couleur de base
 * - État hover : rotation de 12° + couleur de hover
 * Basé sur les boutons d'icônes du Hero et Footer
 */
const ButtonIconsSecondaryHoveredColoredQuarteRotate = ({
  children,
  href,
  onClick,
  disabled = false,
  size = "large", // "small", "medium", "large"
  variant, // "github", "linkedin", "custom"
  hoverColor,
  baseColor,
  className,
  ariaLabel,
  title,
  ...props
}) => {
  // Styles de base communs
  const baseStyles =
    "transition-transform hover:rotate-12 focus:outline-none focus:ring-0";

  // Styles conditionnels selon la taille
  const sizeStyles = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-12 h-12",
  };

  // Styles conditionnels selon la variante
  const variantStyles = {
    github: "transition-colors text-zinc-900 hover:text-zinc-700",
    linkedin: "transition-colors text-zinc-900 hover:text-sky-600",
    custom: `transition-colors text-${baseColor} hover:text-${hoverColor}`,
  };

  // Styles conditionnels selon l'état disabled
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed hover:rotate-0"
    : "";

  const containerSize = sizeStyles[size];
  const colorStyles = variantStyles[variant];
  const iconSize = "w-full h-full";

  return (
    <a
      href={href}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles}${containerSize}${disabledStyles}${className||""
      }`}
      {...props}>
      <span className={`${iconSize}${colorStyles}`}>{children}</span>
    </a>
  );
};

ButtonIconsSecondaryHoveredColoredQuarteRotate.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["github", "linkedin", "custom"]),
  hoverColor: PropTypes.string,
  baseColor: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
};

export { ButtonIconsSecondaryHoveredColoredQuarteRotate };
