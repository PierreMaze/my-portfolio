import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/ui";

const Error = ({ statusCode = 404, message = "Page non trouvée" }) => {
  const getErrorContent = () => {
    switch (statusCode) {
      case 404:
        return {
          title: "404",
          subtitle: "Page non trouvée",
          description:
            "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
          suggestion: "Retournez à l'accueil pour continuer votre navigation.",
        };
      case 500:
        return {
          title: "500",
          subtitle: "Erreur serveur",
          description:
            "Une erreur interne s'est produite. Nous travaillons pour résoudre ce problème.",
          suggestion: "Veuillez réessayer dans quelques instants.",
        };
      default:
        return {
          title: statusCode.toString(),
          subtitle: "Erreur",
          description: message,
          suggestion: "Retournez à l'accueil pour continuer votre navigation.",
        };
    }
  };

  const errorContent = getErrorContent();

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="px-6 mx-auto text-center max-w-2xl">
        <FadeIn>
          {/* Code d'erreur */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8">
            <h1 className="text-8xl font-bold md:text-9xl text-orange-500">
              {errorContent.title}
            </h1>
          </motion.div>

          {/* Titre de l'erreur */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-2xl font-semibold md:text-3xl mb-4 text-zinc-900">
            {errorContent.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-base leading-relaxed md:text-lg mb-6 text-zinc-700">
            {errorContent.description}
          </motion.p>

          {/* Suggestion */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-sm md:text-base mb-8 text-zinc-600">
            {errorContent.suggestion}
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:shadow-lg hover:shadow-orange-500/25">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Retour à l'accueil
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium border rounded-lg transition-all duration-300 text-zinc-700 bg-zinc-50 ring-zinc-300 ring-2 hover:ring-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-orange-600 focus:ring-offset-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Page précédente
            </button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Error;
