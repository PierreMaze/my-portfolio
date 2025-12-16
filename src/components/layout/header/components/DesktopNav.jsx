import PropTypes from "prop-types";
import { useMemo } from "react";
import { HEADER_NAV_ITEMS_DESKTOP } from "../../../../constants";
import { ButtonRectangularPrimary } from "../../../ui/buttons/ButtonRectangularPrimary.jsx";
import { NavDropdown, NavItem } from "./index.jsx";

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
  const navItems = useMemo(
    () =>
      HEADER_NAV_ITEMS_DESKTOP.map((item) => ({
        ...item,
        isActive: location.pathname === "/" && isAnchorActive(item.href),
      })),
    [location.pathname, isAnchorActive],
  );

  return (
    <div className="hidden h-10 items-center lg:flex lg:gap-x-12">
      <NavDropdown
        buttonLabel="Portfolio"
        open={isPopoverOpen}
        onToggle={() => setIsPopoverOpen((v) => !v)}
      >
        <div className="p-2">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              onClick={handleNavClick}
              isActive={item.isActive}
            />
          ))}
        </div>
      </NavDropdown>

      <a
        href="/about"
        onClick={(e) => {
          e.preventDefault();
          navigate("/about");
          closeMenus();
        }}
        className={`inline-flex h-10 items-center text-base font-semibold ${
          isRouteActive("/about")
            ? "text-orange-600"
            : "text-black hover:text-orange-600"
        }`}
      >
        A propos
      </a>

      <div className="flex h-10 items-center">
        <ButtonRectangularPrimary
          ariaLabel="Aller à la section contact"
          onClick={() => handleNavClick("/#contact")}
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
