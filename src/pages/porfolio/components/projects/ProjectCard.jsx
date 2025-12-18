import PropTypes from "prop-types";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import SmartImage from "../../../../components/ui/images/SmartImage.jsx";
import { StackTag } from "../../../../components/ui/tags/index.jsx";
import { STACK_TAG_TYPES } from "../../../../constants";
/**
 * Composant ProjectCard
 * Affiche une carte de projet avec image, titre, description et tags
 */
const ProjectCard = memo(function ProjectCard({
  id,
  title,
  description,
  image,
  tags,
  className,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <article
      className={`group flex h-full cursor-pointer flex-col overflow-hidden rounded bg-zinc-100 shadow-2xl ring-2 ring-neutral-300 transition-colors hover:bg-zinc-200 hover:shadow-amber-500/30 hover:ring-orange-400 ${className}`}
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
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <SmartImage
          src={image?.image}
          webp={image?.imageWebp}
          alt={`Aperçu du projet ${title}`}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex grow flex-col p-6">
        <h3
          id={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="mb-3 text-xl font-semibold text-zinc-900"
        >
          {title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm text-zinc-800">{description}</p>
        <ul
          className="mt-auto flex list-none flex-wrap gap-2"
          aria-label={`Technologies utilisées pour ${title}`}
        >
          {tags.map((tag) => (
            <li key={tag}>
              <StackTag name={tag} type={STACK_TAG_TYPES.ROUNDED} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
});

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
