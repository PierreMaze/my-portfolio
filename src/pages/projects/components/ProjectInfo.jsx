import PropTypes from "prop-types";

/**
 * Composant d'information sur le projet (version desktop améliorée)
 * @param {Object} props
 * @param {Object} props.project - Données du projet
 * @returns {JSX.Element}
 */
const ProjectInfo = ({ project }) => {
  return (
    <div className="relative mb-8 overflow-hidden rounded bg-white shadow-lg shadow-zinc-200/50">
      {/* Header avec gradient */}
      <div className="relative bg-orange-600 px-8 py-6">
        <div className="relative flex items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Défis relevés</h3>
            <p className="mt-1 text-sm text-zinc-50">
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
              className="group flex items-start gap-3 rounded-lg bg-white p-3 transition-all duration-300 sm:gap-4 sm:p-4"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 transition-colors duration-300 sm:h-7 sm:w-7">
                <span className="text-xs font-bold text-orange-600 sm:text-sm">
                  {index + 1}
                </span>
              </div>
              <div className="min-w-0 flex-1">
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
