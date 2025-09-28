import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Composant ButtonUnderlineSecondaryHoveredPrimary
 * Bouton avec style underline et effet hover
 * - État normal : texte avec underline
 * - État hover : couleur orange + font-medium
 * Basé sur les liens du Footer et LegalPage
 */
const ButtonUnderlineSecondaryHoveredPrimary = ({
  children,
  onClick,
  href,
  to,
  disabled = false,
  className,
  ariaLabel,
  ...props
}) => {
  // Styles de base communs
  const baseStyles =
    "underline transition-colors underline-offset-4 hover:text-orange-600 hover:font-medium focus:outline-none focus:ring-0 ";

  // Styles conditionnels selon le type de bouton
  const conditionalStyles = disabled
    ? "opacity-50 cursor-not-allowed hover:text-current hover:font-normal "
    : "";

  // Si c'est un lien (href ou to), utiliser un élément <a> ou <Link>
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={`${baseStyles}${conditionalStyles}${className || ""}`}
        {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`${baseStyles}${conditionalStyles}${className || ""}`}
        {...props}>
        {children}
      </Link>
    );
  }

  // Sinon, utiliser un bouton
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles}${conditionalStyles}${className || ""}`}
      {...props}>
      {children}
    </button>
  );
};

ButtonUnderlineSecondaryHoveredPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export { ButtonUnderlineSecondaryHoveredPrimary };
