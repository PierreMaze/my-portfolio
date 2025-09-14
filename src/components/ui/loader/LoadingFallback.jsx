import React from "react";

/**
 * Composant de fallback accessible pour Suspense
 * Suit les bonnes pratiques d'accessibilité avec ARIA
 */
const LoadingFallback = ({ message = "Chargement..." }) => (
  <div
    className="flex items-center justify-center min-h-screen bg-light"
    role="status"
    aria-live="polite"
    aria-busy="true">
    <div className="flex flex-col items-center gap-4">
      {/* Spinner accessible */}
      <div
        className="w-8 h-8 border-4 rounded-full animate-spin border-orange-200 border-t-orange-500"
        aria-hidden="true"
      />
      {/* Message pour les lecteurs d'écran */}
      <span className="text-sm font-medium text-gray-700">{message}</span>
    </div>
  </div>
);

/**
 * Fallback skeleton pour de meilleurs CLS (Cumulative Layout Shift)
 */
const SkeletonFallback = ({ className }) => (
  <div
    className={`${"bg-gray-200 rounded-lg animate-pulse "}${className}`}
    aria-hidden="true">
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
  </div>
);

export { LoadingFallback, SkeletonFallback };
export default LoadingFallback;
