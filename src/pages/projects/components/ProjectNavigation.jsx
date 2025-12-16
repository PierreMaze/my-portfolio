import PropTypes from "prop-types";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

/**
 * Composant de navigation entre projets
 * @param {Object} props
 * @param {Object|null} props.previous - Projet précédent
 * @param {Object|null} props.next - Projet suivant
 * @param {Function} props.onNavigate - Fonction de navigation
 * @returns {JSX.Element}
 */
const ProjectNavigation = ({ previous, next, onNavigate }) => {
  return (
    <nav className="mt-12 flex items-center justify-between border-t border-zinc-200 pt-8">
      <div className="flex-1">
        {previous ? (
          <button
            onClick={() => onNavigate(previous.id)}
            className="group flex items-center gap-3 text-black transition-colors hover:text-orange-600"
          >
            <IoChevronBack className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <p className="text-sm font-medium text-zinc-800">
                Projet précédent
              </p>
              <p className="font-medium">{previous.title}</p>
            </div>
          </button>
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex flex-1 justify-end">
        {next ? (
          <button
            onClick={() => onNavigate(next.id)}
            className="group flex items-center gap-3 text-black transition-colors hover:text-orange-600"
          >
            <div className="text-right">
              <p className="text-sm font-medium text-zinc-800">
                Projet suivant
              </p>
              <p className="font-medium">{next.title}</p>
            </div>
            <IoChevronForward className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

ProjectNavigation.propTypes = {
  previous: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }),
  next: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }),
  onNavigate: PropTypes.func.isRequired,
};

export default ProjectNavigation;
