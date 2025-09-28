import { useEffect } from "react";

/**
 * Hook unifié pour gérer les meta tags et le titre de la page avec cleanup automatique
 * @param {Object} metaData - Objet contenant les meta tags et le titre
 * @param {string} metaData.title - Le titre de la page (pour document.title)
 * @param {string} metaData.titleSuffix - Suffixe optionnel pour le titre (ex: " | Portfolio")
 * @param {string} metaData.description - Description de la page
 * @param {string} metaData.keywords - Mots-clés
 * @param {string} metaData.ogImage - Image Open Graph
 * @param {string} metaData.ogTitle - Titre Open Graph
 * @param {string} metaData.ogDescription - Description Open Graph
 */
export const useMeta = ({
  title,
  titleSuffix = " de Pierre Mazelaygue",
  description,
  keywords,
  ogImage = "/src/assets/avatar.png",
  ogTitle,
  ogDescription,
}) => {
  useEffect(() => {
    const createdElements = [];
    const previousValues = new Map();
    let previousTitle = null;

    // Gestion du titre de la page
    if (title !== undefined) {
      previousTitle = document.title;
      const newTitle = title
        ? `${title}${titleSuffix}`
        : "Portfolio Pierre Mazelaygue";
      document.title = newTitle;
    }

    const updateMeta = (name, content) => {
      const selector =
        name.startsWith("og:") || name.startsWith("twitter:")
          ? `meta[property="${name}"]`
          : `meta[name="${name}"]`;

      let meta = document.querySelector(selector);

      // Sauvegarder la valeur précédente pour le cleanup
      if (meta && !previousValues.has(name)) {
        previousValues.set(name, meta.getAttribute("content"));
      }

      if (!meta) {
        meta = document.createElement("meta");
        const attribute =
          name.startsWith("og:") || name.startsWith("twitter:")
            ? "property"
            : "name";
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
        createdElements.push(meta);
      }

      meta.setAttribute("content", content);
    };

    // Meta tags standards
    if (description) updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);

    // Open Graph tags
    if (ogTitle) updateMeta("og:title", ogTitle);
    if (ogDescription) updateMeta("og:description", ogDescription);
    if (ogImage) updateMeta("og:image", ogImage);
    updateMeta("og:type", "website");
    updateMeta("og:site_name", "Portfolio Pierre Mazelaygue");

    // Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    if (ogTitle) updateMeta("twitter:title", ogTitle);
    if (ogDescription) updateMeta("twitter:description", ogDescription);
    if (ogImage) updateMeta("twitter:image", ogImage);

    // Cleanup function
    return () => {
      // Restaurer le titre précédent
      if (previousTitle !== null) {
        document.title = previousTitle;
      }

      // Supprimer les éléments créés
      createdElements.forEach((element) => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });

      // Restaurer les valeurs précédentes
      previousValues.forEach((previousValue, name) => {
        const selector =
          name.startsWith("og:") || name.startsWith("twitter:")
            ? `meta[property="${name}"]`
            : `meta[name="${name}"]`;

        const meta = document.querySelector(selector);
        if (meta) {
          meta.setAttribute("content", previousValue);
        }
      });
    };
  }, [
    title,
    titleSuffix,
    description,
    keywords,
    ogImage,
    ogTitle,
    ogDescription,
  ]);
};

// Export du hook unifié
export default useMeta;
