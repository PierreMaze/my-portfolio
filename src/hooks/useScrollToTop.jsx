import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook simple pour gérer le scroll vers le haut
 * Version allégée sans effets agressifs
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll simple et doux vers le haut
    window.scrollTo({
      top: -100,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
};

export default useScrollToTop;
