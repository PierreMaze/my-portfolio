export const Card = ({
  title,
  description,
  image,
  tags = [],
  className = "",
  ...props
}) => {
  return (
    <div
      className={`bg-background-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
      {...props}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover object-center w-full h-full"
          />
        </div>
      )}
      <div className="p-6">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-accent-50 text-accent-700">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="mb-2 text-xl font-semibold text-text-primary">
          {title}
        </h3>
        <p className="text-text-secondary">{description}</p>
      </div>
    </div>
  );
};
