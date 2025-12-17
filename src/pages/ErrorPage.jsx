import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/buttons/index.jsx";
import { FadeIn } from "../components/ui/index.jsx";
import { useMeta } from "../hooks/index.jsx";

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

  // SEO dynamique unifié
  useMeta({
    title: `Erreur ${errorContent.title}`,
    description: errorContent.description,
    keywords: "erreur, page non trouvée, portfolio, Pierre Mazelaygue",
    ogTitle: `${errorContent.title} - Portfolio Pierre Mazelaygue`,
    ogDescription: errorContent.description,
  });

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          {/* Code d'erreur */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-8xl font-bold text-orange-500 md:text-9xl">
              {errorContent.title}
            </h1>
          </motion.div>

          {/* Titre de l'erreur */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-4 text-2xl font-semibold text-zinc-900 md:text-3xl"
          >
            {errorContent.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mb-6 text-base leading-relaxed text-zinc-700 md:text-lg"
          >
            {errorContent.description}
          </motion.p>

          {/* Suggestion */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mb-8 text-sm text-zinc-600 md:text-base"
          >
            {errorContent.suggestion}
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/">
              <Button
                variant="primary"
                size="lg"
                className="hover:shadow-lg hover:shadow-orange-500/25"
                iconLeft={
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                }
              >
                Retour à l'accueil
              </Button>
            </Link>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.history.back()}
              iconLeft={
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              }
            >
              Page précédente
            </Button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Error;
