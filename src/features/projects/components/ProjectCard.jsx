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
import OptimizedImage from "../../../components/ui/OptimizedImage";

// Mapping des tags vers les icônes
const getTagIcon = (tag) => {
  const tagLower = tag.toLowerCase();

  // Tags exacts des projets
  if (tagLower === "calendly")
    return <SiCalendly className="w-4 h-4 text-blue-500" />;
  if (tagLower === "chakraui")
    return <SiChakraui className="w-4 h-4 text-teal-500" />;
  if (tagLower === "framer-motion")
    return <TbBrandFramerMotion className="w-4 h-4 text-purple-500" />;
  if (tagLower === "react")
    return <SiReact className="w-4 h-4 text-cyan-500" />;
  if (tagLower === "tailwindcss")
    return <SiTailwindcss className="w-4 h-4 text-sky-500" />;
  if (tagLower === "figma")
    return <TbBrandFigma className="w-4 h-4 text-orange-500" />;
  if (tagLower === "api") return <TbApi className="w-4 h-4 text-blue-500" />;
  if (tagLower === "react-router-dom")
    return <SiReactrouter className="w-4 h-4 text-red-500" />;
  if (tagLower === "headlessui")
    return <TbBrandHeadlessui className="w-4 h-4 text-purple-500" />;
  if (tagLower === "dotenv")
    return <SiDotenv className="w-4 h-4 text-green-600" />;
  if (tagLower === "node" || tagLower === "node.js")
    return <SiNodedotjs className="w-4 h-4 text-green-600" />;
  if (tagLower === "d3.js")
    return <FaChartBar className="w-4 h-4 text-orange-500" />;

  // Icône par défaut
  return <SiGithub className="w-4 h-4 text-gray-500" />;
};

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
      className="flex flex-col h-full rounded-lg shadow-lg cursor-pointer transition-colors hover:shadow-amber-500/40 group bg-zinc-100 hover:bg-zinc-200 overflow-hidden"
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
        <p className="text-sm mb-4 text-text-secondary line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center justify-center w-8 h-8 bg-white border rounded-full shadow-sm transition-shadow duration-200 border-zinc-200 hover:shadow-md"
              title={tag}>
              {getTagIcon(tag)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
