import PropTypes from "prop-types";
import { FadeIn } from "../../../../components/ui";
import ProjectCard from "./ProjectCard";

/**
 * Composant de la grille de projets
 * @param {Object} props
 * @param {Array<Object>} props.projects - Liste des projets à afficher
 * @returns {JSX.Element}
 */
const ProjectGrid = ({ projects }) => {
  return (
    <FadeIn className="delay-200">
      <ul
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 list-none"
        aria-label="Liste des projets">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </FadeIn>
  );
};

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ProjectGrid;
