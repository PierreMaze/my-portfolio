import React from "react";

/**
 * Error Boundary minimal pour gérer les erreurs de chargement des chunks
 * Utilisé pour les composants lazy-loaded
 */
export class ChunkErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 h-screen text-center">
          <p className="text-lg text-gray-600 mb-4">
            Oups, échec de chargement du composant.
          </p>
          <button
            onClick={() => location.reload()}
            className="px-4 py-2 text-white rounded-lg transition-colors bg-orange-500 hover:bg-orange-600">
            Réessayer
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
