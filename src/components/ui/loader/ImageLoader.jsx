/**
 * Composant de chargement spécialisé pour les images
 * Skeleton loader moderne et élégant avec dimensions fixes pour éviter le CLS
 */
const ImageLoader = ({ className }) => {
  return (
    <div
      className={`relative w-full h-full rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden min-h-full${className}`}
      aria-busy="true"
      role="status"
      aria-label="Chargement de l'image">
      {/* Effet de vague animée */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-orange-100/20 via-transparent to-orange-200/20"></div>
      </div>

      {/* Icône d'image avec animation de pulsation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-12 h-12 text-gray-400 animate-pulse">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-full h-full">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          {/* Points animés autour de l'icône */}
          <div
            className="absolute w-2 h-2 rounded-full animate-bounce -top-1 -right-1 bg-orange-400"
            style={{ animationDelay: "0s" }}></div>
          <div
            className="absolute w-1.h-1 5.rounded-full animate-bounce 5 -bottom-1 -left-1 bg-orange-300"
            style={{ animationDelay: "0.5s" }}></div>
          <div
            className="absolute w-1 h-1 rounded-full animate-bounce top-1/2 -left-2 bg-orange-500"
            style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default ImageLoader;
