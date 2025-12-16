import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const isElementInViewportWithOffset = (element, offset = 100) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top <= offset && rect.bottom >= offset;
};

const normalizeAnchor = (href) =>
  (href || "").startsWith("/my-portfolio/#") ? href.slice(1) : href;

const useActiveNav = ({
  sectionAnchors = [],
  mobileOffset = 60,
  desktopOffset = 100,
} = {}) => {
  const location = useLocation();
  const [activeSectionId, setActiveSectionId] = useState(null);

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
      !!path && path.startsWith("/my-portfolio/") && location.pathname === path,
    [location.pathname],
  );

  const isAnchorActive = useCallback(
    (href) => {
      if (!href || !href.startsWith("/my-portfolio/#")) return false;
      const id = normalizeAnchor(href);
      return activeSectionId === id;
    },
    [activeSectionId],
  );

  return { activeSectionId, isRouteActive, isAnchorActive };
};

export default useActiveNav;
