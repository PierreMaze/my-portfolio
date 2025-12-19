import PropTypes from "prop-types";
import { useCallback, useEffect, useRef } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import { HEADER_ROUTE_ITEMS } from "../../../../constants/navigation.constants";
import { handleNavClick } from "../../../../utils/navigation.utils";
import { Button } from "../../../ui/buttons/index.jsx";
import PortfolioSubItem from "./PortfolioSubItem.jsx";

const MobileNavPortfolio = ({
  navItems,
  isSectionOpen,
  onToggle,
  submenuHeight,
  onMeasureHeight,
  isSectionActive,
  onClose,
}) => {
  const submenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSectionOpen && submenuRef.current) {
      onMeasureHeight(submenuRef.current.scrollHeight);
    }
  }, [isSectionOpen, onMeasureHeight]);

  const handlePortfolioClick = useCallback(
    (href) => {
      const fragment = href.replace(/^\/?/, "");
      const basePath = import.meta.env.BASE_URL;
      const normalizedHref = `${basePath}${fragment}`;
      const sectionItem = { kind: "section", href: normalizedHref };
      handleNavClick(sectionItem, navigate, location, onClose);
    },
    [navigate, location, onClose],
  );

  const handleRouteClick = useCallback(
    (e, to) => {
      e.preventDefault();
      const routeItem = { kind: "route", to };
      handleNavClick(routeItem, navigate, location, onClose);
    },
    [navigate, location, onClose],
  );

  const handleContactClick = useCallback(() => {
    const basePath = import.meta.env.BASE_URL;
    const contactItem = {
      kind: "section",
      target: "contact",
      href: `${basePath}#contact`,
    };
    handleNavClick(contactItem, navigate, location, onClose);
  }, [navigate, location, onClose]);

  return (
    <div className="py-6">
      {/* Portfolio accordion */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-lg font-semibold text-black hover:bg-neutral-100 hover:text-orange-700"
      >
        <span>Portfolio</span>
        <HiChevronDown
          aria-hidden="true"
          className={`size-5 transition-transform ${
            isSectionOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Portfolio submenu */}
      <div
        aria-hidden={!isSectionOpen}
        ref={submenuRef}
        style={{
          maxHeight: isSectionOpen ? submenuHeight : 0,
          overflow: "hidden",
          transition: "max-height 250ms ease-in-out",
        }}
        className="mt-0"
      >
        {navItems.map((item, index) => (
          <PortfolioSubItem
            key={item.label}
            label={item.label}
            href={item.href}
            isLast={index === navItems.length - 1}
            onClick={handlePortfolioClick}
            isActive={location.pathname === "/" && isSectionActive(item.href)}
          />
        ))}
      </div>

      {/* Route items (A propos) */}
      {HEADER_ROUTE_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.to}
          onClick={(e) => handleRouteClick(e, item.to)}
          className={`mb-6 block rounded-lg px-3 py-2 text-lg font-semibold hover:text-orange-700 ${
            location.pathname === item.to
              ? "text-orange-700"
              : "text-black hover:bg-neutral-100"
          }`}
        >
          {item.label}
        </a>
      ))}

      {/* Contact button */}
      <Button
        variant="primary"
        size="md"
        ariaLabel="Aller à la section contact"
        onClick={handleContactClick}
        fullWidth
        className="text-lg"
      >
        Me contacter
      </Button>
    </div>
  );
};

MobileNavPortfolio.propTypes = {
  navItems: PropTypes.array.isRequired,
  isSectionOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  submenuHeight: PropTypes.number.isRequired,
  onMeasureHeight: PropTypes.func.isRequired,
  isSectionActive: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileNavPortfolio;
