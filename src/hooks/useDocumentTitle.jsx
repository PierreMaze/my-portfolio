import { useEffect } from "react";

/**
 * Hook pour gérer le titre du document de manière dynamique
 * @param {string} title - Le titre à afficher
 * @param {string} suffix - Suffixe optionnel (ex: " | Portfolio")
 */
export const useDocumentTitle = (
  title,
  suffix = " | Portfolio Pierre Mazelaygue"
) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title + suffix;

    return () => {
      document.title = previousTitle;
    };
  }, [title, suffix]);
};

export default useDocumentTitle;
