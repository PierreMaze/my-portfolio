import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const isElementInViewportWithOffset = (element, offset = 100) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top <= offset && rect.bottom >= offset;
};

const normalizeAnchor = (item) => {
  const basePath = import.meta.env.BASE_URL;
  if (typeof item === "object" && item.target) {
    return item.target;
  }
  if (typeof item === "string") {
    if (item.startsWith(`${basePath}#`)) {
      return item.split("#")[1];
    }
    if (item.startsWith("#")) {
      return item.substring(1);
    }
  }
  return item;
};

const useActiveNav = ({
  sectionAnchors = [],
  mobileOffset = 60,
  desktopOffset = 100,
} = {}) => {
  const location = useLocation();
  const [activeSectionId, setActiveSectionId] = useState(null);
  const basePath = import.meta.env.BASE_URL;

  const sectionIds = useMemo(
    () => sectionAnchors.map((h) => normalizeAnchor(h)),
    [sectionAnchors],
  );

  const handleScroll = useCallback(() => {
    const offset = window.innerWidth < 768 ? mobileOffset : desktopOffset;
    const current = sectionIds.find((id) => {
      const element = document.getElementById(id);
      return element ? isElementInViewportWithOffset(element, offset) : false;
    });
    setActiveSectionId(current || null);
  }, [sectionIds, mobileOffset, desktopOffset]);

  useEffect(() => {
    const rafId = { current: null };
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        handleScroll();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  const isRouteActive = useCallback(
    (path) =>
      !!path && path.startsWith(basePath) && location.pathname === path,
    [location.pathname, basePath],
  );

  const isAnchorActive = useCallback(
    (item) => {
      if (!item) return false;
      // Si c'est un objet avec target
      if (typeof item === "object" && item.target) {
        return activeSectionId === item.target;
      }
      // Si c'est un string qui commence par basePath#
      if (typeof item === "string") {
        if (item.startsWith(`${basePath}#`)) {
          const id = normalizeAnchor(item);
          return activeSectionId === id;
        }
      }
      return false;
    },
    [activeSectionId, basePath],
  );

  return { activeSectionId, isRouteActive, isAnchorActive };
};

export default useActiveNav;
