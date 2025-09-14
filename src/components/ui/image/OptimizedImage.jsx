const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  ...props
}) => {
  // Vérifier si src est une chaîne de caractères
  const getImageSource = (source) => {
    // Si ce n'est pas une chaîne, c'est probablement un import d'image
    if (typeof source !== "string") {
      // Si l'import a une propriété default (cas de Vite), on l'utilise
      return source.default || source;
    }

    // Gérer les URLs externes
    if (source.startsWith("http")) return source;

    // Pour les chemins relatifs, on s'assure qu'ils commencent par /
    if (source.startsWith("./") || source.startsWith("../")) {
      return source;
    }

    // Pour les autres chemins, on ajoute un / au début
    return source.startsWith("/") ? source : `/${source}`;
  };

  const finalSrc = getImageSource(src);

  // Générer le chemin WebP - seulement pour les imports d'images
  const getWebPSource = (source) => {
    if (typeof source !== "string") {
      // Pour les imports Vite, on ne peut pas générer automatiquement le WebP
      // car le chemin est hashé. On retourne la source originale.
      return source.default || source;
    }

    if (source.startsWith("http")) return source;

    // Remplacer .png par .webp seulement pour les chemins statiques
    if (source.endsWith(".png")) {
      return source.replace(".png", ".webp");
    }

    return source;
  };

  const webpSrc = getWebPSource(src);

  // Si c'est un import Vite (objet), on utilise directement l'image sans WebP
  if (typeof src !== "string") {
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
  }

  // Pour les chemins statiques, on peut utiliser WebP
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
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
          // Si l'image WebP échoue, on essaie l'image originale
          if (e.target.src === webpSrc) {
            e.target.src = finalSrc;
          }
        }}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
