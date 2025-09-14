/**
 * Composant de chargement spécialisé pour les compétences
 * Loader avec animation de badges qui apparaissent progressivement
 */
export const SkillsLoader = ({ message = "Chargement des compétences..." }) => {
  return (
    <div
      className="flex items-center justify-center p-12"
      aria-busy="true"
      role="status"
      aria-label={message}>
      <div className="flex flex-col items-center gap-6">
        {/* Animation de badges qui apparaissent */}
        <div className="flex flex-wrap justify-center gap-2 max-w-md">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="h-8 rounded-full animate-pulse bg-gradient-to-r from-orange-200 to-orange-300"
              style={{
                width: `${60 + Math.random() * 40}px`,
                animationDelay: `${index * 0.1}s`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>

        {/* Message avec animation de typewriter */}
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-2">{message}</p>
          <div className="flex justify-center gap-1">
            <div className="w-1.h-1 5.rounded-full animate-bounce 5 bg-orange-500"></div>
            <div
              className="w-1.h-1 5.rounded-full animate-bounce 5 bg-orange-500"
              style={{ animationDelay: "0.2s" }}></div>
            <div
              className="w-1.h-1 5.rounded-full animate-bounce 5 bg-orange-500"
              style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
