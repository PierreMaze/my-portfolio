import { Button } from "./ui/Button";
import { OptimizedImage } from "./ui/OptimizedImage";

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
      className="flex flex-col h-full bg-white rounded-lg cursor-pointer transition-colors hover:bg-accent-50"
      onClick={onClick}
      {...props}>
      <div className="relative overflow-hidden aspect-video">
        <OptimizedImage
          src={image}
          alt={title}
          className="w-full h-full transition-transform object-cover hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="mb-4 text-text-secondary line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
              {tag}
            </span>
          ))}
        </div>
        <Button
          variant="primary"
          className="w-full mt-6"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}>
          Voir plus
        </Button>
      </div>
    </div>
  );
};
