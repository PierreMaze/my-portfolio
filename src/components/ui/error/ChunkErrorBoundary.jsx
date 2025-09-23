import { motion } from "framer-motion";
import React from "react";

/**
 * Error Boundary amélioré pour gérer les erreurs de chargement des chunks
 * Utilisé pour les composants lazy-loaded avec un design cohérent
 */
class ChunkErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="px-6 mx-auto text-center max-w-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6">
              <div className="flex items-center justify-center mx-auto w-20 h-20 rounded-full mb-4 bg-orange-100">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-zinc-900">
                Erreur de chargement
              </h2>
              <p className="text-base text-zinc-700 mb-6">
                Oups, échec de chargement du composant. Veuillez réessayer.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
              <button
                onClick={() => location.reload()}
                aria-label="Recharger la page pour réessayer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:shadow-lg hover:shadow-orange-500/25">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Réessayer
              </button>
            </motion.div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ChunkErrorBoundary;
