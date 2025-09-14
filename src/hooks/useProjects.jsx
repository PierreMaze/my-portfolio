import { useCallback, useMemo, useState } from "react";
import { PROJECT_CATEGORIES } from "../constants/projects";

/**
 * Hook personnalisé pour gérer la logique des projets
 * Centralise la gestion des filtres
 */
const useProjects = (projects) => {
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

export default useProjects;
