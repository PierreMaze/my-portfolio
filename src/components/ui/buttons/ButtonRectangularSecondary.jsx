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
      className={`inline-flex items-center justify-center gap-2 rounded bg-zinc-100 px-3 py-1.5 text-sm font-medium text-black ring-2 ring-zinc-500 transition-all duration-300 hover:bg-white hover:ring-zinc-800 focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
        className || ""
      }`}
      {...props}
    >
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
