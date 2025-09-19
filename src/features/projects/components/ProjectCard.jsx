import { FaChartBar } from "react-icons/fa";
import {
  SiCalendly,
  SiChakraui,
  SiDotenv,
  SiGithub,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbApi,
  TbBrandFigma,
  TbBrandFramerMotion,
  TbBrandHeadlessui,
} from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { LazyProjectImage } from "../../../components/ui";

// Mapping des tags vers les icônes
const getTagIcon = (tag) => {
  const tagLower = tag.toLowerCase();

  // Tags exacts des projets
  if (tagLower === "calendly")
    return <SiCalendly className="w-4 h-4 text-blue-600" />;
  if (tagLower === "chakraui")
    return <SiChakraui className="w-4 h-4 text-teal-600" />;
  if (tagLower === "framer-motion")
    return <TbBrandFramerMotion className="w-4 h-4 text-purple-600" />;
  if (tagLower === "react")
    return <SiReact className="w-4 h-4 text-cyan-600" />;
  if (tagLower === "tailwindcss")
    return <SiTailwindcss className="w-4 h-4 text-sky-600" />;
  if (tagLower === "figma")
    return <TbBrandFigma className="w-4 h-4 text-orange-600" />;
  if (tagLower === "api") return <TbApi className="w-4 h-4 text-blue-600" />;
  if (tagLower === "react-router-dom")
    return <SiReactrouter className="w-4 h-4 text-red-600" />;
  if (tagLower === "headlessui")
    return <TbBrandHeadlessui className="w-4 h-4 text-purple-600" />;
  if (tagLower === "dotenv")
    return <SiDotenv className="w-4 h-4 text-zinc-800" />;
  if (tagLower === "node" || tagLower === "node.js")
    return <SiNodedotjs className="w-4 h-4 text-green-700" />;
  if (tagLower === "d3.js")
    return <FaChartBar className="w-4 h-4 text-orange-600" />;

  // Icône par défaut
  return <SiGithub className="w-4 h-4 text-gray-700" />;
};

/**
 * Composant ProjectCard
 * Affiche une carte de projet avec image, titre, description et tags
 */
export const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <article
      className="flex flex-col h-full border-2 rounded-lg shadow-2xl cursor-pointer transition-colors hover:shadow-amber-500/30 group bg-zinc-100 hover:bg-zinc-200 overflow-hidden focus:outline-none focus:ring-0"
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
      {...props}>
      <div className="relative overflow-hidden aspect-video">
        <LazyProjectImage
          src={image}
          alt={`Aperçu du projet ${title}`}
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
            <li
              key={tag}
              className="flex items-center justify-center w-8 h-8 bg-white border rounded-full shadow-sm transition-shadow duration-200 border-zinc-200 hover:shadow-md"
              title={tag}
              aria-label={`Technologie: ${tag}`}>
              {getTagIcon(tag)}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
