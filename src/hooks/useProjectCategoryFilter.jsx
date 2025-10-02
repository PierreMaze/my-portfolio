import { useCallback, useMemo, useState } from "react";
import { PROJECT_CATEGORIES } from "../constants/categories";

/**
 * Hook personnalisé pour gérer le filtrage des projets par catégorie
 * Centralise la logique de filtrage des projets selon leur catégorie
 */
const useProjectCategoryFilter = (projects) => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Mémoriser les projets filtrés
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Tous") {
      return projects;
    }

    return projects.filter((project) => {
      // Si le projet est Fullstack, il apparaît dans Backend, Frontend ET Fullstack
      if (project.category === "Fullstack") {
        return (
          selectedCategory === "Backend" ||
          selectedCategory === "Frontend" ||
          selectedCategory === "Fullstack"
        );
      }

      // Sinon, correspondance exacte
      return project.category === selectedCategory;
    });
  }, [projects, selectedCategory]);

  // Mémoriser les catégories
  const categories = useMemo(() => PROJECT_CATEGORIES, []);

  // Handler optimisé
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  return {
    selectedCategory,
    filteredProjects,
    categories,
    handleCategoryChange,
  };
};

export default useProjectCategoryFilter;
