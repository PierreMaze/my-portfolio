import { lazy, Suspense } from "react";
import { MiniLoader } from "./MiniLoader";

// Lazy loading du composant OptimizedImage pour les projets
const OptimizedImage = lazy(() => import("./OptimizedImage"));

/**
 * Composant LazyProjectImage
 * Wrapper pour lazy-load les images de projets avec Suspense
 */
export const LazyProjectImage = ({ src, alt, className, ...props }) => {
  return (
    <Suspense
      fallback={
        <div
          className={`${className}flex items-center justify-center bg-gray-200`}>
          <MiniLoader message="Chargement de l'image..." />
        </div>
      }>
      <OptimizedImage src={src} alt={alt} className={className} {...props} />
    </Suspense>
  );
};
