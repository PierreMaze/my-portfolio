import PropTypes from "prop-types";

/**
 * Composant ButtonRectangularSecondary
 * Bouton rectangulaire avec style secondaire (gris avec bordure)
 * Basé sur les styles des filtres de projets
 */
const ButtonRectangularSecondary = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className,
  ariaLabel,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium rounded transition-all duration-300 text-black bg-zinc-100 ring-zinc-500 ring-2 hover:ring-zinc-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
        className || ""
      }`}
      {...props}>
      {children}
    </button>
  );
};

ButtonRectangularSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export { ButtonRectangularSecondary };
