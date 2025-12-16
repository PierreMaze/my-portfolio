/**
 * Composant de chargement spécialisé pour les images
 * Skeleton loader moderne et élégant avec dimensions fixes pour éviter le CLS
 */
const ImageLoader = ({ className }) => {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 min-h-full${className}`}
      aria-busy="true"
      role="status"
      aria-label="Chargement de l'image"
    >
      {/* Effet de vague animée */}
      <div className="absolute inset-0">
        <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-orange-100/20 via-transparent to-orange-200/20"></div>
      </div>

      {/* Icône d'image avec animation de pulsation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="h-12 w-12 animate-pulse text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="h-full w-full"
            >
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
            className="absolute -top-1 -right-1 h-2 w-2 animate-bounce rounded-full bg-orange-400"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-1.h-1 5.rounded-full 5 absolute -bottom-1 -left-1 animate-bounce bg-orange-300"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/2 -left-2 h-1 w-1 animate-bounce rounded-full bg-orange-500"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImageLoader;
