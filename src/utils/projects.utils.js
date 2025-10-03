/**
 * Utilitaires pour la gestion des projets
 */

/**
 * Trouve un projet par son ID
 * @param {Array<Object>} projects - Liste des projets
 * @param {string|number} id - ID du projet
 * @returns {Object|undefined} Projet trouvé ou undefined
 */
export const findProjectById = (projects, id) => {
  return projects.find((project) => project.id === Number(id));
};

/**
 * Trouve les projets adjacents (précédent et suivant)
 * @param {Array<Object>} projects - Liste des projets
 * @param {string|number} currentId - ID du projet actuel
 * @returns {Object} Objet contenant previous et next
 */
export const findAdjacentProjects = (projects, currentId) => {
  const currentIndex = projects.findIndex(
    (project) => project.id === Number(currentId)
  );

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return { previous, next };
};

/**
 * Extrait les catégories uniques des projets
 * @param {Array<Object>} projects - Liste des projets
 * @returns {Array<string>} Liste des catégories uniques
 */
export const extractUniqueCategories = (projects) => {
  const uniqueCategories = [
    ...new Set(projects.map((project) => project.category)),
  ];
  return ["Tous", ...uniqueCategories];
};

/**
 * Crée une map des projets par catégorie pour optimiser les recherches
 * @param {Array<Object>} projects - Liste des projets
 * @returns {Map<string, Array<Object>>} Map des projets par catégorie
 */
export const createProjectsByCategoryMap = (projects) => {
  const map = new Map();
  map.set("Tous", projects);

  projects.forEach((project) => {
    if (!map.has(project.category)) {
      map.set(project.category, []);
    }
    map.get(project.category).push(project);
  });

  return map;
};

/**
 * Récupère les projets d'une catégorie donnée
 * @param {Map<string, Array<Object>>} projectsByCategoryMap - Map des projets par catégorie
 * @param {string} category - Catégorie recherchée
 * @returns {Array<Object>} Liste des projets de la catégorie
 */
export const getProjectsByCategory = (projectsByCategoryMap, category) => {
  return projectsByCategoryMap.get(category) || [];
};
