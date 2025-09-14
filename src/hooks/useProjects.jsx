import { useCallback, useMemo, useState } from "react";
import { PROJECT_CATEGORIES } from "../constants/projects";

/**
 * Hook personnalisé pour gérer la logique des projets
 * Centralise la gestion des filtres et de la sélection
 */
export const useProjects = (projects) => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);

  // Mémoriser les projets filtrés
  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          selectedCategory === "Tous" || project.category === selectedCategory
      ),
    [projects, selectedCategory]
  );

  // Mémoriser les catégories
  const categories = useMemo(() => PROJECT_CATEGORIES, []);

  // Handlers optimisés
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return {
    selectedCategory,
    selectedProject,
    filteredProjects,
    categories,
    handleCategoryChange,
    handleProjectClick,
    handleCloseModal,
  };
};
