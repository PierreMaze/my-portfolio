import { useCallback, useMemo, useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

export const useHeaderMenu = ({ navItems = [], onNavigate } = {}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useOutsideClick(popoverRef, () => setIsPopoverOpen(false));

  const sections = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    [navItems]
  );

  const handleNavClick = useCallback(
    (href) => {
      if (!href) return;
      if (href.startsWith("#")) {
        const elementId = href.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          const isMobile = window.innerWidth < 768;
          const offset = isMobile ? 60 : -10;
          const top = element.offsetTop - offset;
          window.scrollTo({ top, behavior: "smooth" });
          onNavigate?.(elementId);
        }
      } else {
        window.location.href = href;
      }
      setIsMobileMenuOpen(false);
      setIsPopoverOpen(false);
    },
    [onNavigate]
  );

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isPopoverOpen,
    setIsPopoverOpen,
    popoverRef,
    sections,
    handleNavClick,
  };
};

export default useHeaderMenu;


