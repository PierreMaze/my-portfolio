// src/components/layout/header/components/PortfolioSubItem.jsx
import PropTypes from "prop-types";

const PortfolioSubItem = ({ label, href, isLast, onClick, isActive }) => {
  // Choix du préfixe selon que ce soit le dernier élément ou non
  const prefix = isLast ? "└─" : "├─";

  return (
    <button
      type="button"
      onClick={() => onClick(href)}
      className={`flex items-center w-full text-left font-mono text-lg px-4 py-0.5 rounded hover:bg-white/5 transition-colors `}
    >
      <span className={`mr-2 scale-150 text-neutral-400 `}>
        {prefix}
      </span>
      <span className={` hover:text-orange-600 ${isActive ? "text-orange-600" : "text-black"}`}>{label}</span>
    </button>
  );
};

PortfolioSubItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

PortfolioSubItem.defaultProps = {
  isLast: false,
  isActive: false,
};

export default PortfolioSubItem;
