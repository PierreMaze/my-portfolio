import { useMemo } from "react";
import { STACKS_DATA } from "../data";
import {
  createStackIconClasses,
  extractStackCategories,
  filterStacksByCategory,
  groupStacksByCategory,
} from "../utils";

/**
 * Hook personnalisé pour gérer les données des stacks
 * Centralise la logique de manipulation des stacks avec mémorisation
 * @param {Array<Object>} stacks - Liste des stacks (optionnel, utilise STACKS_DATA par défaut)
 * @param {string} selectedCategory - Catégorie sélectionnée pour le filtrage (optionnel)
 * @returns {Object} Objet contenant les données mémorisées des stacks
 */
const useStacksData = (stacks = STACKS_DATA, selectedCategory = null) => {
  // Mémorisation des catégories uniques
  const categories = useMemo(() => {
    return extractStackCategories(stacks);
  }, [stacks]);

  // Mémorisation des stacks groupés par catégorie avec icônes React
  const stacksByCategory = useMemo(() => {
    const grouped = groupStacksByCategory(stacks);

    // Transformer les données pour inclure les icônes React
    const result = {};
    Object.entries(grouped).forEach(([category, categoryStacks]) => {
      result[category] = categoryStacks.map((stack) => ({
        name: stack.name,
        icon: (
          <stack.iconComponent
            className={createStackIconClasses(stack.iconColor)}
          />
        ),
      }));
    });

    return result;
  }, [stacks]);

  // Mémorisation des stacks filtrés par catégorie
  const filteredStacks = useMemo(() => {
    if (!selectedCategory) {
      return stacks;
    }
    return filterStacksByCategory(stacks, selectedCategory);
  }, [stacks, selectedCategory]);

  // Mémorisation des stacks filtrés groupés par catégorie avec icônes React
  const filteredStacksByCategory = useMemo(() => {
    const grouped = groupStacksByCategory(filteredStacks);

    // Transformer les données pour inclure les icônes React
    const result = {};
    Object.entries(grouped).forEach(([category, categoryStacks]) => {
      result[category] = categoryStacks.map((stack) => ({
        name: stack.name,
        icon: (
          <stack.iconComponent
            className={createStackIconClasses(stack.iconColor)}
          />
        ),
      }));
    });

    return result;
  }, [filteredStacks]);

  return {
    categories,
    stacksByCategory,
    filteredStacks,
    filteredStacksByCategory,
    totalStacks: stacks.length,
  };
};

export default useStacksData;
