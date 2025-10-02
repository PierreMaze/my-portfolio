import { useProjects } from "../../../contexts/ProjectsContext";
import { useProjectCategoryFilter } from "../../../hooks";
import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";
import ProjectsHeader from "./ProjectsHeader";

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
      <ProjectsHeader />
      <ProjectFilters
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
};

export default Projects;
