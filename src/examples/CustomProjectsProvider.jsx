import { ProjectsProvider } from "../contexts/ProjectsContext";
import { PROJECTS_DATA } from "../data/projects";

/**
 * Exemple d'utilisation du ProjectsProvider avec des données personnalisées
 * Ce composant montre comment passer des projets depuis un fetch/état externe
 * @param {Object} props
 * @param {React.ReactNode} props.children - Composants enfants
 * @param {Array<Object>} props.customProjects - Projets personnalisés (optionnel)
 * @returns {JSX.Element}
 */
const CustomProjectsProvider = ({ children, customProjects }) => {
  // Exemple : si customProjects est fourni, on l'utilise, sinon on utilise les données par défaut
  const projectsToUse = customProjects || PROJECTS_DATA;

  return (
    <ProjectsProvider projects={projectsToUse}>{children}</ProjectsProvider>
  );
};

export default CustomProjectsProvider;
