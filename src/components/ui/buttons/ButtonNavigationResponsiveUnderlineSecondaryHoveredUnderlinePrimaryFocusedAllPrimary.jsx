import PropTypes from "prop-types";

/**
 * Composant ButtonNavigationResponsiveUnderlineSecondaryHoveredUnderlinePrimaryFocusedAllPrimary
 * Bouton de navigation responsive avec styles adaptatifs
 * - Desktop : style underline avec effet hover et focus
 * - Mobile : style rectangulaire avec background et ring
 * - État actif : style primary (orange) sur toutes les versions
 * Basé sur les boutons de navigation du Header
 */
const ButtonNavigationResponsiveUnderlineSecondaryHoveredUnderlinePrimaryFocusedAllPrimary =
  ({
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
      "transition-all duration-300 focus:outline-none focus:ring-0 border-0";

    // Styles pour la version mobile (rectangulaire)
    const mobileStyles = `
    w-full text-left px-4 py-3 rounded transition-all duration-200 group
    ${isActive ? "text-white no-underline bg-orange-600" : "text-zinc-700"}
  `;

    // Styles pour la version desktop (underline)
    const desktopStyles = `
    lg:w-auto lg:text-center lg:px-4 lg:py-2 lg:rounded-none lg:ring-0 lg:bg-transparent
    lg:text-zinc-900 lg:hover:text-orange-600 lg:relative
    lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-0.5 lg:after:transition-all lg:after:duration-300
    ${
      isActive
        ? "lg:text-orange-600 lg:after:bg-orange-600"
        : "lg:after:bg-transparent"
    }
  `;

    // Styles conditionnels selon l'état disabled
    const disabledStyles = disabled
      ? "opacity-50 cursor-not-allowed hover:text-current hover:bg-transparent"
      : "";

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-pressed={isActive}
        className={`${baseStyles}${mobileStyles}${desktopStyles}${disabledStyles}${
          className || " "
        }`}
        {...props}
      >
        <span className="transition-transform duration-200 lg:group-hover:translate-x-1">
          {children}
        </span>
      </button>
    );
  };

ButtonNavigationResponsiveUnderlineSecondaryHoveredUnderlinePrimaryFocusedAllPrimary.propTypes =
  {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
  };

export { ButtonNavigationResponsiveUnderlineSecondaryHoveredUnderlinePrimaryFocusedAllPrimary };
