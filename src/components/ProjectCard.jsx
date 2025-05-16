import { Button } from "./ui/Button";

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
      className="flex flex-col h-full transition-colors bg-white rounded-lg cursor-pointer hover:bg-accent-50"
      onClick={onClick}
      {...props}>
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
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
