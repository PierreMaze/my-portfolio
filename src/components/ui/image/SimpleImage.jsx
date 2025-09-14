/**
 * Composant SimpleImage
 * Version simplifiée pour éviter les problèmes avec les imports Vite en production
 */
const SimpleImage = ({ src, alt, className, priority = false, ...props }) => {
  // Gestion simple des imports d'images Vite
  const getImageSource = (source) => {
    // Si c'est un import Vite (objet), utiliser la propriété default
    if (typeof source !== "string" && source?.default) {
      return source.default;
    }

    // Si c'est déjà une chaîne, la retourner telle quelle
    if (typeof source === "string") {
      return source;
    }

    // Fallback pour les autres cas
    return source;
  };

  const finalSrc = getImageSource(src);

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      onError={(e) => {
        // En production, on évite les console.error pour les performances
        if (process.env.NODE_ENV === "development") {
          console.error(`Erreur de chargement de l'image: ${src}`);
          console.error("Erreur complète:", e);
        }
        e.target.onerror = null;
      }}
      {...props}
    />
  );
};

export default SimpleImage;
