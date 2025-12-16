import PropTypes from "prop-types";
import { HiBars3 } from "react-icons/hi2";

/**
 * Bouton d'ouverture du menu mobile
 * @param {Object} props
 * @param {Function} props.onClick - Handler de clic
 * @param {string} props.className - Classes CSS additionnelles
 */
const MobileMenuButton = ({ onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`-m-2 inline-flex items-center justify-center rounded p-2 text-neutral-600${className}`}
    >
      <span className="sr-only">Open main menu</span>
      <HiBars3 aria-hidden="true" className="size-6" />
    </button>
  );
};

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default MobileMenuButton;
