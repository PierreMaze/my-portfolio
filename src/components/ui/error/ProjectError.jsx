import PropTypes from "prop-types";
import { IoArrowBack } from "react-icons/io5";

/**
 * Composant d'erreur simple pour les projets
 * @param {Object} props
 * @param {number} props.statusCode - Code d'erreur
 * @param {string} props.message - Message d'erreur
 * @returns {JSX.Element}
 */
const ProjectError = ({ statusCode = 404, message = "Page non trouvée" }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-zinc-300">{statusCode}</h1>
        <p className="mb-8 text-xl text-zinc-600">{message}</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-white transition-colors hover:bg-orange-700"
        >
          <IoArrowBack className="h-4 w-4" />
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

ProjectError.propTypes = {
  statusCode: PropTypes.number,
  message: PropTypes.string,
};

export default ProjectError;
