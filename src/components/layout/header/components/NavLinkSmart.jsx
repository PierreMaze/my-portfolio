import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { handleNavClick } from "../../../../utils/navigation.utils";

/**
 * Composant de lien de navigation intelligent
 * Gère les clics sur routes et sections selon les règles navigation-ux-spa.md
 *
 * @param {object} props - Props du composant
 * @param {object} props.item - Item de navigation (kind, to/href, target, label)
 * @param {function} props.onClick - Callback optionnel après clic
 * @param {string} props.className - Classes CSS additionnelles
 * @param {string} props.activeClassName - Classes CSS pour l'état actif
 * @param {boolean} props.isActive - État actif du lien
 * @param {object} props.children - Contenu du lien
 */
const NavLinkSmart = ({
  item,
  onClick,
  className,
  activeClassName = "",
  isActive = false,
  children,
  ...props
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    // Gérer la navigation selon le type d'item
    handleNavClick(item, navigate, location, onClick);
  };

  // Déterminer l'href pour l'accessibilité
  const href = item.kind === "route" ? item.to : item.href;

  // Classes CSS combinées
  const combinedClassName = `${className} ${
    isActive ? activeClassName : ""
  }`.trim();

  // Attributs d'accessibilité
  const ariaAttributes = {
    "aria-current": isActive
      ? item.kind === "route"
        ? "page"
        : "true"
      : undefined,
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={combinedClassName}
      {...ariaAttributes}
      {...props}
    >
      {children || item.label}
    </a>
  );
};

NavLinkSmart.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    kind: PropTypes.oneOf(["route", "section"]).isRequired,
    to: PropTypes.string, // pour les routes
    href: PropTypes.string, // pour les sections
    target: PropTypes.string, // pour les sections
  }).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

export default NavLinkSmart;
