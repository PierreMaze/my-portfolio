import PropTypes from "prop-types";

/**
 * Composant ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary
 * Bouton de filtre avec état actif/inactif
 * - État inactif : style secondary (gris avec bordure)
 * - État actif : style primary (orange)
 * - Hover : style secondary amélioré
 * Basé sur les filtres de projets
 */
const ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary = ({
  children,
  onClick,
  isActive = false,
  disabled = false,
  type = "button",
  className,
  ariaLabel,
  ...props
}) => {
  // Styles de base communs
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium rounded transition-all duration-300 ";

  // Styles conditionnels selon l'état actif
  const conditionalStyles = isActive
    ? "bg-orange-600 text-white ring-orange-600 ring-2 focus:ring-orange-500" // État actif = Primary
    : "text-black bg-zinc-100 ring-zinc-500 ring-2 hover:ring-zinc-800 hover:bg-white focus:ring-zinc-500 "; // État inactif = Secondary

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={isActive}
      className={`${baseStyles}${conditionalStyles}${className}`}
      {...props}>
      {children}
    </button>
  );
};

ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export { ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary };
