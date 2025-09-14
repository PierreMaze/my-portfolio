/**
 * Composant de chargement spécialisé pour les projets
 * Loader avec animation de cartes qui apparaissent progressivement
 */
export const ProjectsLoader = ({ message = "Chargement des projets..." }) => {
  return (
    <div
      className="flex items-center justify-center p-16"
      aria-busy="true"
      role="status"
      aria-label={message}>
      <div className="flex flex-col items-center gap-8">
        {/* Animation de cartes de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: "2s",
              }}>
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>

              {/* Content placeholder */}
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>

                {/* Tags placeholder */}
                <div className="flex gap-2 mt-4">
                  <div className="h-6 bg-orange-200 rounded-full w-16"></div>
                  <div className="h-6 bg-orange-200 rounded-full w-20"></div>
                  <div className="h-6 bg-orange-200 rounded-full w-14"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message avec animation de vague */}
        <div className="text-center">
          <p className="text-base font-medium text-gray-700 mb-3">{message}</p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
