import { useCallback, useMemo, useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick.jsx";

export const useNavMenu = ({ navItems = [], onNavigate } = {}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useOutsideClick(popoverRef, () => setIsPopoverOpen(false));

  const sections = useMemo(
    () => navItems.map((item) => (item.target ? item.target : item)),
    [navItems],
  );

  const handleNavClick = useCallback(
    (item) => {
      if (!item) return;
      const basePath = import.meta.env.BASE_URL;

      // Si c'est un objet avec target, c'est une section
      if (typeof item === "object" && item.target) {
        const element = document.getElementById(item.target);
        if (element) {
          const isMobile = window.innerWidth < 768;
          const offset = isMobile ? 60 : -10;
          const top = element.offsetTop - offset;
          window.scrollTo({ top, behavior: "smooth" });
          onNavigate?.(`${basePath}#${item.target}`);
        }
      } else if (typeof item === "string") {
        // Lien externe ou autre
        window.location.href = item;
      }
      setIsMobileMenuOpen(false);
      setIsPopoverOpen(false);
    },
    [onNavigate],
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

export default useNavMenu;
