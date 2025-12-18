import PropTypes from "prop-types";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HEADER_SECONDARY_LINKS } from "../../../../constants/navigation.constants";
import { useSectionSpy } from "../../../../hooks/header";
import MobileNavHeader from "./MobileNavHeader.jsx";
import MobileNavPortfolio from "./MobileNavPortfolio.jsx";
import MobileNavSecondaryLinks from "./MobileNavSecondaryLinks.jsx";

const MobileNav = ({ open, onClose, navItems = [] }) => {
  const [shouldRender, setShouldRender] = useState(open);
  const [animateOpen, setAnimateOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const [submenuHeight, setSubmenuHeight] = useState(0);
  const location = useLocation();

  const { isSectionActive } = useSectionSpy({
    sectionIds: navItems.map((item) => item.href),
  });

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsSectionOpen(location.pathname === "/");
    } else {
      setAnimateOpen(false);
      const t = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(t);
    }
  }, [open, location.pathname]);

  useLayoutEffect(() => {
    if (shouldRender && open) {
      requestAnimationFrame(() => setAnimateOpen(true));
    }
  }, [shouldRender, open]);

  const handleToggle = useCallback(() => {
    setIsSectionOpen((v) => !v);
  }, []);

  const handleMeasureHeight = useCallback((height) => {
    setSubmenuHeight(height);
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
          animateOpen
            ? "bg-black/30 opacity-100 backdrop-blur-[2px]"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full transform overflow-y-auto bg-white p-4 transition-all duration-300 ease-out sm:max-w-sm ${
          animateOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <MobileNavHeader onClose={onClose} />
        <div className="mx-4 mt-6 flow-root">
          <div className="-my-6 divide-y divide-black/10">
            <MobileNavPortfolio
              navItems={navItems}
              isSectionOpen={isSectionOpen}
              onToggle={handleToggle}
              submenuHeight={submenuHeight}
              onMeasureHeight={handleMeasureHeight}
              isSectionActive={isSectionActive}
              onClose={onClose}
            />
            <MobileNavSecondaryLinks links={HEADER_SECONDARY_LINKS} />
          </div>
        </div>
      </div>
    </div>
  );
};

MobileNav.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    }),
  ),
};

export default MobileNav;
