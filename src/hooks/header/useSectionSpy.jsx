import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SCROLL_SPY_CONFIG } from "../../constants/navigation.constants";

/**
 * Hook pour le scroll-spy basé sur IntersectionObserver
 * Basé sur les règles navigation-ux-spa.md
 *
 * @param {object} options - Options de configuration
 * @param {string[]} options.sectionIds - IDs des sections à observer
 * @param {object} options.config - Configuration IntersectionObserver
 * @returns {object} - { activeId, isSectionActive }
 */
export const useSectionSpy = ({
  sectionIds = [],
  config = SCROLL_SPY_CONFIG,
} = {}) => {
  const location = useLocation();
  const [activeId, setActiveId] = useState(null);
  const basePath = import.meta.env.BASE_URL;
  const pathRef = useRef(location.pathname);

  // Mettre à jour la ref lors du changement de route
  useEffect(() => {
    pathRef.current = location.pathname;
  }, [location.pathname]);

  // Normaliser les IDs des sections - extraire le target si c'est un objet
  const normalizedSectionIds = useMemo(
    () =>
      sectionIds.map((item) => (typeof item === "object" ? item.target : item)),
    [sectionIds],
  );

  // Callback pour l'IntersectionObserver
  const handleIntersection = useCallback(
    (entries) => {
      // Ne pas traiter si on n'est pas sur la page d'accueil
      // Utiliser pathRef.current au lieu de location.pathname
      if (pathRef.current !== basePath) {
        setActiveId(null);
        return;
      }

      // Trouver la section la plus visible
      let mostVisible = null;
      let maxRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisible = entry.target.id;
        }
      });

      setActiveId(mostVisible);
    },
    [basePath],
  );

  // Configuration de l'IntersectionObserver
  const observerConfig = useMemo(
    () => ({
      rootMargin: config.rootMargin,
      threshold: config.threshold,
    }),
    [config],
  );

  useEffect(() => {
    // Ne pas observer si on n'est pas sur la page d'accueil
    if (location.pathname !== basePath) {
      setActiveId(null);
      return;
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig,
    );

    // Observer tous les éléments des sections
    normalizedSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [normalizedSectionIds, handleIntersection, observerConfig]);

  // Fonction pour vérifier si une section est active
  const isSectionActive = useCallback(
    (sectionId) => {
      const normalizedId =
        typeof sectionId === "object" ? sectionId.target : sectionId;
      return activeId === normalizedId;
    },
    [activeId],
  );

  return {
    activeId,
    isSectionActive,
  };
};

export default useSectionSpy;
