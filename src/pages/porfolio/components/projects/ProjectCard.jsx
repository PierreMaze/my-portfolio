import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { SmartImage, StackTag } from "../../../../components/ui";
import { STACK_TAG_TYPES } from "../../../../constants";
/**
 * Composant ProjectCard
 * Affiche une carte de projet avec image, titre, description et tags
 */
const ProjectCard = ({ id, title, description, image, tags, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <article
      className={`flex flex-col h-full border-2 rounded shadow-2xl cursor-pointer transition-colors hover:shadow-amber-500/30 group bg-zinc-100 hover:bg-zinc-200 overflow-hidden focus:outline-none focus:ring-0${className}`}
      aria-labelledby={`project-title-${title
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}>
      <div className="relative overflow-hidden aspect-video">
        <SmartImage
          src={image?.image}
          webp={image?.imageWebp}
          alt={`Aperçu du projet ${title}`}
          width={600}
          height={400}
          className="w-full h-full transition-transform object-cover group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-6 flex-grow">
        <h3
          id={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-xl font-semibold mb-3 text-zinc-900">
          {title}
        </h3>
        <p className="text-sm mb-4 text-zinc-800 line-clamp-3">{description}</p>
        <ul
          className="flex flex-wrap gap-2 mt-auto list-none"
          aria-label={`Technologies utilisées pour ${title}`}>
          {tags.map((tag) => (
            <li key={tag}>
              <StackTag name={tag} type={STACK_TAG_TYPES.ROUNDED} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    image: PropTypes.string,
    imageWebp: PropTypes.string,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default ProjectCard;
