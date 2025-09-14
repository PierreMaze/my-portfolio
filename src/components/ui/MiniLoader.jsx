/**
 * Composant de chargement minimal et réutilisable
 * Utilisé comme fallback pour les composants Suspense
 */
export const MiniLoader = ({ message = "Chargement..." }) => {
  return (
    <div 
      className="flex items-center justify-center p-8"
      aria-busy="true"
      role="status"
      aria-label={message}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 rounded-full animate-spin border-orange-500 border-t-transparent"></div>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
};
