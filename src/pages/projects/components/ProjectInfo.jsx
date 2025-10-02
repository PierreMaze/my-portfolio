import PropTypes from "prop-types";

/**
 * Composant d'information sur le projet (version desktop améliorée)
 * @param {Object} props
 * @param {Object} props.project - Données du projet
 * @returns {JSX.Element}
 */
const ProjectInfo = ({ project }) => {
  return (
    <div className="relative bg-white rounded shadow-lg overflow-hidden shadow-zinc-200/50 mb-8">
      {/* Header avec gradient */}
      <div className="relative px-8 py-6 bg-orange-600">
        <div className="relative flex items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Défis relevés</h3>
            <p className="text-sm text-zinc-50 mt-1">
              Obstacles surmontés durant le développement
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal - Défis uniquement */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {project.challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-white rounded-lg transition-all duration-300 sm:gap-4 sm:p-4 group">
              <div className="flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-300 sm:w-7 sm:h-7 bg-orange-100 mt-0.5 flex-shrink-0">
                <span className="text-xs font-bold sm:text-sm text-orange-600">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm leading-relaxed text-black transition-colors duration-300 sm:text-base">
                  {challenge}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectInfo.propTypes = {
  project: PropTypes.shape({
    challenges: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectInfo;
