import { FadeIn } from "../../ui";

/**
 * Composant de l'en-tête de la section projets
 * @returns {JSX.Element}
 */
const ProjectsHeader = () => {
  return (
    <FadeIn>
      <h2 className="relative text-3xl font-bold mb-12">
        <span className="relative inline-block">
          <span
            className="absolute block -skew-y-3 bg-orange-200 -inset-1"
            aria-hidden="true"></span>
          <span className="relative">Mes projets</span>
        </span>
      </h2>
    </FadeIn>
  );
};

export default ProjectsHeader;
