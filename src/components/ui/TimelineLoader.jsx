/**
 * Composant de chargement spécialisé pour la timeline
 * Loader avec animation de timeline qui se construit progressivement
 */
export const TimelineLoader = ({ message = "Chargement du parcours..." }) => {
  return (
    <div
      className="flex items-center justify-center p-16"
      aria-busy="true"
      role="status"
      aria-label={message}>
      <div className="flex flex-col items-center gap-8">
        {/* Animation de timeline */}
        <div className="relative w-full max-w-2xl">
          {/* Ligne centrale */}
          <div className="absolute w-1 h-full rounded-full transform left-1/2 -translate-x-1/2 bg-gradient-to-b from-orange-200 to-orange-300"></div>

          {/* Éléments de timeline */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: "1.5s",
              }}>
              {/* Point sur la ligne */}
              <div className="absolute w-4 h-4 border-4 border-white rounded-full shadow-lg animate-pulse transform left-1/2 -translate-x-1/2 bg-orange-500"></div>

              {/* Contenu de la carte */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
                }`}>
                <div className="p-6 bg-white rounded-lg shadow-lg animate-pulse">
                  <div className="space-y-3">
                    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-full h-3 bg-gray-200 rounded"></div>
                    <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                    <div className="w-20 h-6 rounded bg-orange-200 mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message avec animation de vague */}
        <div className="text-center">
          <p className="text-base font-medium text-gray-700 mb-3">{message}</p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse bg-orange-500"></div>
            <div
              className="w-2 h-2 rounded-full animate-pulse bg-orange-500"
              style={{ animationDelay: "0.2s" }}></div>
            <div
              className="w-2 h-2 rounded-full animate-pulse bg-orange-500"
              style={{ animationDelay: "0.4s" }}></div>
            <div
              className="w-2 h-2 rounded-full animate-pulse bg-orange-500"
              style={{ animationDelay: "0.6s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
