import { createContext, useCallback, useContext, useMemo } from "react";
import { PROJECTS_DATA } from "../data/projects";

/**
 * Contexte des projets
 * @type {React.Context<Object>}
 */
const ProjectsContext = createContext(null);

/**
 * Hook personnalisé pour accéder au contexte des projets
 * @returns {Object} Contexte des projets
 * @throws {Error} Si utilisé en dehors du Provider
 */
export const useProjects = () => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error("useProjects doit être utilisé dans un ProjectsProvider");
  }

  return context;
};

/**
 * Provider des projets avec logique métier
 * @param {Object} props
 * @param {React.ReactNode} props.children - Composants enfants
 * @returns {JSX.Element}
 */
export const ProjectsProvider = ({ children }) => {
  // Mémorisation des catégories (calcul coûteux, fait une seule fois)
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(PROJECTS_DATA.map((project) => project.category)),
    ];
    return ["Tous", ...uniqueCategories];
  }, []);

  // Map pour optimiser les recherches par catégorie (O(1) au lieu de O(n))
  const projectsByCategoryMap = useMemo(() => {
    const map = new Map();
    map.set("Tous", PROJECTS_DATA);

    PROJECTS_DATA.forEach((project) => {
      if (!map.has(project.category)) {
        map.set(project.category, []);
      }
      map.get(project.category).push(project);
    });

    return map;
  }, []);

  // Actions stabilisées (seulement celles qui en ont besoin)
  const getProjectById = useCallback((id) => {
    return PROJECTS_DATA.find((project) => project.id === parseInt(id));
  }, []);

  const getProjectsByCategory = useCallback(
    (category) => {
      return projectsByCategoryMap.get(category) || [];
    },
    [projectsByCategoryMap]
  );

  const getAdjacentProjects = useCallback((currentId) => {
    const currentIndex = PROJECTS_DATA.findIndex(
      (project) => project.id === currentId
    );

    if (currentIndex === -1) {
      return { previous: null, next: null };
    }

    const previous = currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : null;
    const next =
      currentIndex < PROJECTS_DATA.length - 1
        ? PROJECTS_DATA[currentIndex + 1]
        : null;

    return { previous, next };
  }, []);

  // Mémorisation de la valeur du contexte pour éviter les re-calculs
  const contextValue = useMemo(
    () => ({
      projects: PROJECTS_DATA,
      categories,
      getProjectById,
      getProjectsByCategory,
      getAdjacentProjects,
    }),
    [categories, getProjectById, getProjectsByCategory, getAdjacentProjects]
  );

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
