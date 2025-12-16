import PropTypes from "prop-types";
import { HEADER_NAV_ITEMS } from "../../../../constants";
import { ButtonRectangularPrimary } from "../../../ui/buttons/ButtonRectangularPrimary";
import { NavDropdown, NavItem } from "./index";

/**
 * Composant de navigation desktop
 * @param {Object} props
 * @param {Function} props.handleNavClick - Handler de navigation
 * @param {Function} props.closeMenus - Fonction pour fermer les menus
 * @param {Function} props.isAnchorActive - Fonction pour vérifier l'état actif des ancres
 * @param {Function} props.isRouteActive - Fonction pour vérifier l'état actif des routes
 * @param {boolean} props.isPopoverOpen - État d'ouverture du popover
 * @param {Function} props.setIsPopoverOpen - Fonction pour gérer l'état du popover
 * @param {Object} props.location - Objet location de react-router
 * @param {Function} props.navigate - Fonction navigate de react-router
 */
const DesktopNav = ({
  handleNavClick,
  closeMenus,
  isAnchorActive,
  isRouteActive,
  isPopoverOpen,
  setIsPopoverOpen,
  location,
  navigate,
}) => {
  return (
    <div className="hidden h-10 items-center lg:flex lg:gap-x-12">
      <NavDropdown
        buttonLabel="Portfolio"
        open={isPopoverOpen}
        onToggle={() => setIsPopoverOpen((v) => !v)}
      >
        <div className="p-2">
          {HEADER_NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              onClick={handleNavClick}
              isActive={
                location.pathname === "/my-portfolio/" &&
                isAnchorActive(item.href)
              }
            />
          ))}
        </div>
      </NavDropdown>

      <a
        href="/my-portfolio/about"
        onClick={(e) => {
          e.preventDefault();
          navigate("/my-portfolio/about");
          closeMenus();
        }}
        className={`inline-flex h-10 items-center text-base font-semibold ${
          isRouteActive("/my-portfolio/about")
            ? "text-orange-600"
            : "text-black hover:text-orange-600"
        }`}
      >
        A propos
      </a>

      <div className="flex h-10 items-center">
        <ButtonRectangularPrimary
          ariaLabel="Aller à la section contact"
          onClick={() => handleNavClick("/my-portfolio/#contact")}
          className="px-4 py-2 text-base"
        >
          Contact
        </ButtonRectangularPrimary>
      </div>
    </div>
  );
};

DesktopNav.propTypes = {
  handleNavClick: PropTypes.func.isRequired,
  closeMenus: PropTypes.func.isRequired,
  isAnchorActive: PropTypes.func.isRequired,
  isRouteActive: PropTypes.func.isRequired,
  isPopoverOpen: PropTypes.bool.isRequired,
  setIsPopoverOpen: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DesktopNav;
