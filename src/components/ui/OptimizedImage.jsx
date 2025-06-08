export const OptimizedImage = ({ src, alt, className = "", ...props }) => {
  // Vérifier si src est une chaîne de caractères
  const getImageSource = (source) => {
    console.log("Source reçue:", source);
    console.log("Type de source:", typeof source);

    // Si ce n'est pas une chaîne, c'est probablement un import d'image
    if (typeof source !== "string") {
      console.log("Source non-string:", source);
      // Si l'import a une propriété default (cas de Vite), on l'utilise
      const finalSource = source.default || source;
      console.log("Source finale:", finalSource);
      return finalSource;
    }

    // Gérer les URLs externes
    if (source.startsWith("http")) return source;

    try {
      // Extraire le chemin et le nom de fichier
      const lastDotIndex = source.lastIndexOf(".");
      if (lastDotIndex === -1) return source;

      const path = source.substring(0, lastDotIndex);
      const extension = source.substring(lastDotIndex);

      // Vérifier si l'extension est une image
      if (!/\.(png|jpg|jpeg)$/i.test(extension)) return source;

      // Construire le chemin WebP
      return `${path}.webp`;
    } catch (error) {
      console.error("Erreur lors du traitement de l'image:", error);
      return source;
    }
  };

  const webpSrc = getImageSource(src);
  console.log("WebP source:", webpSrc);

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onError={(e) => {
          console.error(`Erreur de chargement de l'image: ${src}`);
          console.error("Erreur complète:", e);
          e.target.onerror = null;
          // Si l'image WebP échoue, on essaie l'image originale
          if (e.target.src === webpSrc) {
            e.target.src = src;
          }
        }}
        {...props}
      />
    </picture>
  );
};
