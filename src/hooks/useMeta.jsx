import { useEffect } from "react";

/**
 * Hook pour gérer les meta tags dynamiquement
 * @param {Object} metaData - Objet contenant les meta tags
 * @param {string} metaData.description - Description de la page
 * @param {string} metaData.keywords - Mots-clés
 * @param {string} metaData.ogImage - Image Open Graph
 * @param {string} metaData.ogTitle - Titre Open Graph
 * @param {string} metaData.ogDescription - Description Open Graph
 */
export const useMeta = ({
  description,
  keywords,
  ogImage = "/src/assets/avatar.png",
  ogTitle,
  ogDescription,
}) => {
  useEffect(() => {
    const updateMeta = (name, content) => {
      let meta =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(name.startsWith("og:") ? "property" : "name", name);
        document.head.appendChild(meta);
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
  }, [description, keywords, ogImage, ogTitle, ogDescription]);
};

export default useMeta;
