import PropTypes from "prop-types";

/**
 * Composant ButtonRectangularPrimary
 * Bouton rectangulaire avec style primaire (orange)
 * Basé sur le bouton du composant Hero
 */
const ButtonRectangularPrimary = ({
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
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-white rounded transition-all duration-300 bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
        className || ""
      }`}
      {...props}>
      {children}
    </button>
  );
};

ButtonRectangularPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export { ButtonRectangularPrimary };
