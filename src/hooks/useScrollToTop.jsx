import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Pour le premier chargement/rafraîchissement, scroll instantané et agressif
    if (isInitialMount.current) {
      // Forcer le scroll à 0 immédiatement
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);

      // Supprimer la classe smooth-scroll
      document.documentElement.classList.remove("smooth-scroll");

      // Forcer à nouveau après un court délai pour s'assurer
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      }, 10);

      // Forcer une dernière fois après le rendu
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
        isInitialMount.current = false;

        // Réactiver le smooth scroll
        setTimeout(() => {
          document.documentElement.classList.add("smooth-scroll");
        }, 100);
      }, 50);
    } else {
      // Pour les changements de route, s'assurer que smooth scroll est activé
      document.documentElement.classList.add("smooth-scroll");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);
};

export default useScrollToTop;
