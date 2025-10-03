import { useCallback, useMemo } from "react";
import {
  createProjectsByCategoryMap,
  extractUniqueCategories,
  findAdjacentProjects,
  findProjectById,
  getProjectsByCategory,
} from "../../utils";

/**
 * Hook personnalisé pour gérer les données des projets
 * Centralise la logique de manipulation des projets
 * @param {Array<Object>} projects - Liste des projets
 * @returns {Object} Objet contenant les fonctions et données mémorisées
 */
const useProjectsData = (projects) => {
  // Mémorisation des catégories
  const categories = useMemo(() => {
    return extractUniqueCategories(projects);
  }, [projects]);

  // Mémorisation de la map des projets par catégorie
  const projectsByCategoryMap = useMemo(() => {
    return createProjectsByCategoryMap(projects);
  }, [projects]);

  // Actions stabilisées avec useCallback
  const getProjectById = useCallback(
    (id) => {
      return findProjectById(projects, id);
    },
    [projects]
  );

  const getProjectsByCategoryCallback = useCallback(
    (category) => {
      return getProjectsByCategory(projectsByCategoryMap, category);
    },
    [projectsByCategoryMap]
  );

  const getAdjacentProjects = useCallback(
    (currentId) => {
      return findAdjacentProjects(projects, currentId);
    },
    [projects]
  );

  return {
    categories,
    projectsByCategoryMap,
    getProjectById,
    getProjectsByCategory: getProjectsByCategoryCallback,
    getAdjacentProjects,
  };
};

export default useProjectsData;
