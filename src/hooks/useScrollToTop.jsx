import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook pour gérer le scroll vers le haut lors des changements de route
 * Utilise useEffect canon pour la manipulation du DOM (scroll)
 * @param {Object} options - Options de configuration
 * @param {boolean} options.enabled - Active/désactive le scroll automatique
 * @param {string} options.behavior - Comportement du scroll ('smooth' | 'instant')
 * @param {number} options.delay - Délai avant le scroll (en ms)
 */
const useScrollToTop = ({
  enabled = true,
  behavior = "smooth",
  delay = 0,
} = {}) => {
  const location = useLocation();

  useEffect(() => {
    if (!enabled) return;

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior,
      });
    };

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      scrollToTop();
    }
  }, [location.pathname, enabled, behavior, delay]);
};

export default useScrollToTop;
