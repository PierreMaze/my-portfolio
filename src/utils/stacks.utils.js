import { TbError404 } from "react-icons/tb";
import {
  DEFAULT_STACK_CONFIG,
  ICON_SIZES,
  STACK_ERROR_MESSAGES,
} from "../constants/stacks.constants";
import { STACKS_DATA } from "../data/stacks.data";

/**
 * Nettoie le nom d'une technologie (supprime les espaces en début/fin)
 * @param {string} stackName - Nom de la technologie
 * @returns {string} Nom nettoyé
 */
export const cleanStackName = (stackName) => {
  return stackName?.trim() || "";
};

/**
 * Recherche une technologie dans les données par nom exact
 * @param {string} stackName - Nom de la technologie
 * @returns {Object|undefined} Données de la technologie ou undefined
 */
export const findStackByExactName = (stackName) => {
  const cleanName = cleanStackName(stackName);
  return STACKS_DATA.find((stack) => stack.name === cleanName);
};

/**
 * Recherche une technologie par correspondance partielle (insensible à la casse)
 * @param {string} stackName - Nom de la technologie
 * @returns {Object|undefined} Données de la technologie ou undefined
 */
export const findStackByPartialMatch = (stackName) => {
  const cleanName = cleanStackName(stackName);
  return STACKS_DATA.find(
    (stack) =>
      stack.name.toLowerCase().includes(cleanName.toLowerCase()) ||
      cleanName.toLowerCase().includes(stack.name.toLowerCase())
  );
};

/**
 * Récupère les données d'une technologie depuis stacks.js
 * @param {string} stackName - Nom de la technologie
 * @returns {Object} Objet avec iconComponent, iconColor et tagColor
 */
export const getStackData = (stackName) => {
  const cleanName = cleanStackName(stackName);

  // Recherche exacte d'abord
  let stackData = findStackByExactName(cleanName);

  // Si pas trouvé, recherche par correspondance partielle
  if (!stackData) {
    stackData = findStackByPartialMatch(cleanName);
  }

  if (!stackData) {
    console.warn(STACK_ERROR_MESSAGES.NOT_FOUND(cleanName));
    return {
      iconComponent: TbError404,
      iconColor: DEFAULT_STACK_CONFIG.iconColor,
      tagColor: DEFAULT_STACK_CONFIG.tagColor,
    };
  }

  const { iconComponent, iconColor, tagColor } = stackData;
  return { iconComponent, iconColor, tagColor };
};

/**
 * Extrait les classes de couleur d'une chaîne de classes CSS
 * @param {string} tagColor - Chaîne de classes CSS
 * @returns {Object} Objet avec bgClass, borderClass, textClass
 */
export const extractColorClasses = (tagColor) => {
  const tagColorClass = tagColor.split(" ");
  return {
    bgClass:
      tagColorClass.find((tagClass) => tagClass.startsWith("bg-")) ||
      DEFAULT_STACK_CONFIG.tagColor
        .split(" ")
        .find((cls) => cls.startsWith("bg-")),
    borderClass:
      tagColorClass.find((tagClass) => tagClass.startsWith("border-")) ||
      DEFAULT_STACK_CONFIG.tagColor
        .split(" ")
        .find((cls) => cls.startsWith("border-")),
    textClass:
      tagColorClass.find((tagClass) => tagClass.startsWith("text-")) ||
      DEFAULT_STACK_CONFIG.tagColor
        .split(" ")
        .find((cls) => cls.startsWith("text-")),
  };
};

/**
 * Crée les classes CSS pour une icône
 * @param {string} iconColor - Classes CSS de couleur
 * @param {string} size - Taille de l'icône (small, medium, large)
 * @returns {string} Classes CSS pour l'icône
 */
export const createStackIconClasses = (iconColor, size = "small") => {
  const sizeClass = ICON_SIZES[size.toUpperCase()] || ICON_SIZES.SMALL;
  return `${sizeClass} ${iconColor}`;
};

/**
 * Groupe les stacks par catégorie
 * @param {Array<Object>} stacks - Liste des stacks
 * @returns {Object} Objet avec les stacks groupés par catégorie
 */
export const groupStacksByCategory = (stacks = STACKS_DATA) => {
  return stacks.reduce((acc, stack) => {
    if (!acc[stack.category]) {
      acc[stack.category] = [];
    }

    const IconComponent = stack.iconComponent;
    acc[stack.category].push({
      name: stack.name,
      iconComponent: IconComponent,
      iconColor: stack.iconColor,
    });

    return acc;
  }, {});
};

/**
 * Extrait les catégories uniques des stacks
 * @param {Array<Object>} stacks - Liste des stacks
 * @returns {Array<string>} Liste des catégories uniques
 */
export const extractStackCategories = (stacks = STACKS_DATA) => {
  return [...new Set(stacks.map((stack) => stack.category))];
};

/**
 * Filtre les stacks par catégorie
 * @param {Array<Object>} stacks - Liste des stacks
 * @param {string} category - Catégorie à filtrer
 * @returns {Array<Object>} Liste des stacks filtrés
 */
export const filterStacksByCategory = (stacks = STACKS_DATA, category) => {
  if (!category || category === "Tous") {
    return stacks;
  }
  return stacks.filter((stack) => stack.category === category);
};
