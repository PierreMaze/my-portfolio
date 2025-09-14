import { lazy, Suspense } from "react";
import { ImageLoader } from "./ImageLoader";

// Lazy loading du composant OptimizedImage pour les projets
const OptimizedImage = lazy(() => import("./OptimizedImage"));

/**
 * Composant LazyProjectImage
 * Wrapper pour lazy-load les images de projets avec loader spécialisé
 */
export const LazyProjectImage = ({ src, alt, className, ...props }) => {
  return (
    <Suspense fallback={<ImageLoader className={className} />}>
      <OptimizedImage src={src} alt={alt} className={className} {...props} />
    </Suspense>
  );
};
