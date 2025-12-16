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
        className="grid list-none gap-8 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Liste des projets"
      >
        {projects.map(({ id, title, description, image, imageWebp, tags }) => (
          <li key={id}>
            <ProjectCard
              id={id}
              title={title}
              description={description}
              image={{ image, imageWebp }}
              tags={tags}
            />
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
      imageWebp: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default ProjectGrid;
