import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook amélioré pour gérer le scroll vers le haut
 * Version plus agressive pour s'assurer que le scroll remonte bien
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    const scrollToTop = () => {
      // Méthode 1: window.scrollTo
      window.scrollTo(0, 0);

      // Méthode 2: document.documentElement
      document.documentElement.scrollTop = 0;

      // Méthode 3: document.body
      document.body.scrollTop = 0;

      // Méthode 4: scrollTo avec options
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: isInitialMount.current ? "auto" : "smooth",
      });
    };

    // Premier scroll immédiat
    scrollToTop();

    // Scroll de sécurité après un délai
    const timer1 = setTimeout(scrollToTop, 10);
    const timer2 = setTimeout(scrollToTop, 50);
    const timer3 = setTimeout(scrollToTop, 100);

    // Vérification finale après 500ms
    const finalCheck = setTimeout(() => {
      if (window.scrollY > 0) {
        console.log("Scroll final check - forcing to top");
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 500);

    isInitialMount.current = false;

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(finalCheck);
    };
  }, [pathname]);
};

export default useScrollToTop;
