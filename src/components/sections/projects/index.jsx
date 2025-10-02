import { useProjects } from "../../../contexts/ProjectsContext";
import { useProjectCategoryFilter } from "../../../hooks";
import {
  ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary,
  FadeIn,
} from "../../ui";
import { ProjectCard } from "./components/ProjectCard";

export const Projects = () => {
  const { projects } = useProjects();
  const {
    selectedCategory,
    filteredProjects,
    categories,
    handleCategoryChange,
  } = useProjectCategoryFilter(projects);

  return (
    <div className="py-16 lg:py-24 xl:py-32">
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

      {/* Filtres */}
      <FadeIn className="delay-100">
        <fieldset className="mb-12">
          <legend className="sr-only">Filtres de catégories de projets</legend>
          <ul
            className="flex flex-wrap justify-start gap-2"
            role="radiogroup"
            aria-label="Filtres de catégories de projets">
            {categories.map((category) => (
              <li key={category}>
                <ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  isActive={selectedCategory === category}
                  ariaLabel={`Filtrer par ${category}`}>
                  {category}
                </ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary>
              </li>
            ))}
          </ul>
        </fieldset>
      </FadeIn>

      {/* Grille de projets */}
      <FadeIn className="delay-200">
        <ul
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 list-none"
          aria-label="Liste des projets">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
};

export default Projects;
