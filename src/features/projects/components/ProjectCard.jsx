import OptimizedImage from "../../../components/ui/OptimizedImage";

/**
 * Composant ProjectCard
 * Affiche une carte de projet avec image, titre, description et tags
 */
export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  onClick,
  ...props
}) => {
  return (
    <div
      className="flex flex-col h-full rounded-lg cursor-pointer transition-colors group bg-accent-50 hover:bg-accent-100"
      onClick={onClick}
      {...props}>
      <div className="relative overflow-hidden aspect-video">
        <OptimizedImage
          src={image}
          alt={title}
          className="w-full h-full transition-transform object-cover group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="mb-4 text-text-secondary line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 font-mono text-xs rounded-full font-base xl:text-base bg-accent/10 text-accent">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
