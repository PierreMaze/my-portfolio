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
    <div className="flex items-center justify-center min-h-screen bg-zinc-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-300 mb-4">{statusCode}</h1>
        <p className="text-xl text-zinc-600 mb-8">{message}</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-colors bg-orange-600 hover:bg-orange-700">
          <IoArrowBack className="w-4 h-4" />
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
