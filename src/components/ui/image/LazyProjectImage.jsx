import { lazy, Suspense } from "react";
import { ImageLoader } from "../loader";

// Lazy loading du composant SimpleImage pour les projets
const SimpleImage = lazy(() => import("./SimpleImage"));

/**
 * Composant LazyProjectImage
 * Wrapper pour lazy-load les images de projets avec loader spécialisé
 */
const LazyProjectImage = ({ src, alt, className, ...props }) => {
  return (
    <Suspense fallback={<ImageLoader className={className} />}>
      <SimpleImage src={src} alt={alt} className={className} {...props} />
    </Suspense>
  );
};

export default LazyProjectImage;
