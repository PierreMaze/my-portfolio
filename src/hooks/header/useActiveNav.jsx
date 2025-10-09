import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const isElementInViewportWithOffset = (element, offset = 100) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top <= offset && rect.bottom >= offset;
};

const normalizeAnchor = (href) =>
  (href || "").startsWith("#") ? href.slice(1) : href;

const useActiveNav = ({
  sectionAnchors = [],
  mobileOffset = 60,
  desktopOffset = 100,
} = {}) => {
  const location = useLocation();
  const [activeSectionId, setActiveSectionId] = useState(null);

  const sectionIds = useMemo(
    () => sectionAnchors.map((h) => normalizeAnchor(h)),
    [sectionAnchors]
  );

  const handleScroll = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    const offset = isMobile ? mobileOffset : desktopOffset;
    const current = sectionIds.find((id) =>
      isElementInViewportWithOffset(document.getElementById(id), offset)
    );
    // Met à jour même si aucune section n'est détectée pour éviter des restes d'état entre pages
    setActiveSectionId(current || null);
  }, [sectionIds, mobileOffset, desktopOffset]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const isRouteActive = useCallback(
    (path) => !!path && path.startsWith("/") && location.pathname === path,
    [location.pathname]
  );

  const isAnchorActive = useCallback(
    (href) => {
      if (!href || !href.startsWith("#")) return false;
      const id = normalizeAnchor(href);
      return activeSectionId === id;
    },
    [activeSectionId]
  );

  return { activeSectionId, isRouteActive, isAnchorActive };
};

export default useActiveNav;
