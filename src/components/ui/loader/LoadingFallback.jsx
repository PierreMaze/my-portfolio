import React from "react";

/**
 * Composant de fallback accessible pour Suspense
 * Suit les bonnes pratiques d'accessibilité avec ARIA
 */
const LoadingFallback = ({ message = "Chargement..." }) => (
  <div
    className="bg-light flex min-h-screen items-center justify-center"
    role="status"
    aria-live="polite"
    aria-busy="true"
  >
    <div className="flex flex-col items-center gap-4">
      {/* Spinner accessible */}
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500"
        aria-hidden="true"
      />
      {/* Message pour les lecteurs d'écran */}
      <span className="text-sm font-medium text-gray-700">{message}</span>
    </div>
  </div>
);

/**
 * Fallback skeleton pour de meilleurs CLS (Cumulative Layout Shift)
 * Dimensions fixes pour éviter les décalages de layout
 */
const SkeletonFallback = ({ className }) => (
  <div
    className={`${"animate-pulse rounded-lg bg-gray-200 "}${className}`}
    aria-hidden="true"
  >
    <div className="mb-2 h-4 rounded bg-gray-300"></div>
    <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>
    <div className="h-4 w-1/2 rounded bg-gray-300"></div>
  </div>
);

export { LoadingFallback, SkeletonFallback };
export default LoadingFallback;
