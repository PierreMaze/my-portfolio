import PropTypes from "prop-types";
import { createContext, useContext, useMemo } from "react";
import { PROJECTS_DATA } from "../data";
import { useProjectsData } from "../hooks";

/**
 * Contexte des projets
 * @type {React.Context<Object>}
 */
export const ProjectsContext = createContext(null);

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
 * @param {Array<Object>} props.projects - Liste des projets (optionnel, utilise PROJECTS_DATA par défaut)
 * @returns {JSX.Element}
 */
export const ProjectsProvider = ({ children, projects = PROJECTS_DATA }) => {
  // Utilisation du hook personnalisé pour gérer les données des projets
  const projectsData = useProjectsData(projects);

  // Mémorisation de la valeur du contexte pour éviter les re-calculs
  const contextValue = useMemo(
    () => ({
      projects,
      ...projectsData,
    }),
    [projects, projectsData]
  );

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      problem: PropTypes.string.isRequired,
      objectives: PropTypes.arrayOf(PropTypes.string).isRequired,
      solution: PropTypes.string.isRequired,
      results: PropTypes.arrayOf(PropTypes.string).isRequired,
      challenges: PropTypes.arrayOf(PropTypes.string).isRequired,
      github: PropTypes.string,
      demo: PropTypes.string,
    })
  ),
};

export default ProjectsContext;
