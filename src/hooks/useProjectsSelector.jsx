import { useContext, useMemo } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";

/**
 * Hook personnalisé pour sélectionner une partie du contexte (optimisation des rerenders)
 * @param {Function} selector - Fonction de sélection
 * @returns {any} Valeur sélectionnée
 * @throws {Error} Si utilisé en dehors du Provider
 */
const useProjectsSelector = (selector) => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error(
      "useProjectsSelector doit être utilisé dans un ProjectsProvider"
    );
  }

  return useMemo(() => selector(context), [selector, context]);
};

export default useProjectsSelector;
