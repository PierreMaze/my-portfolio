import { FadeIn } from "../../../../components/ui";

/**
 * Composant de l'en-tête de la section projets
 * @returns {JSX.Element}
 */
const ProjectsHeader = () => {
  return (
    <FadeIn>
      <h2 className="relative mb-12 text-3xl font-bold">
        <span className="relative inline-block">
          <span
            className="absolute -inset-1 block -skew-y-3 bg-orange-200"
            aria-hidden="true"
          ></span>
          <span className="relative">Mes projets</span>
        </span>
      </h2>
    </FadeIn>
  );
};

export default ProjectsHeader;
