import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const findElementWithRetry = (id, attempts = 10, intervalMs = 100) => {
  return new Promise((resolve) => {
    let tries = 0;
    const tryFind = () => {
      const el = document.getElementById(id);
      if (el || tries >= attempts) {
        resolve(el || null);
      } else {
        tries += 1;
        setTimeout(tryFind, intervalMs);
      }
    };
    // first attempt ASAP
    requestAnimationFrame(tryFind);
  });
};

const useScrollToHash = ({
  mobileOffset = 60,
  desktopOffset = -10,
  behavior = "smooth",
} = {}) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash || hash.length <= 1) return;
    const id = hash.slice(1);

    // Détecter prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const scrollBehavior = prefersReducedMotion ? "instant" : behavior;

    const run = async () => {
      // Augmenter tentatives : 15 × 100ms = 1500ms (au lieu de 12 × 80ms = 960ms)
      const element = await findElementWithRetry(id, 15, 100);

      if (!element) {
        // Log en développement si élément non trouvé
        if (import.meta.env.DEV) {
          console.warn(
            `[useScrollToHash] Element with id="${id}" not found after retries`,
          );
        }
        return;
      }

      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? mobileOffset : desktopOffset;
      const top = Math.max(0, element.offsetTop - offset);

      window.scrollTo({ top, behavior: scrollBehavior });

      // Focus management pour l'accessibilité
      const hadTabIndex = element.hasAttribute("tabindex");
      if (!hadTabIndex) {
        element.setAttribute("tabindex", "-1");
      }
      element.focus({ preventScroll: true });

      // Retirer le tabIndex après le blur si on l'a ajouté
      if (!hadTabIndex) {
        element.addEventListener(
          "blur",
          () => {
            element.removeAttribute("tabindex");
          },
          { once: true },
        );
      }
    };

    run();
  }, [location.pathname, location.hash, mobileOffset, desktopOffset, behavior]);
};

export default useScrollToHash;
