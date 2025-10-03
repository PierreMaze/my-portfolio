// Configuration des stacks et constantes associées

/**
 * Types de badges disponibles pour les stacks
 */
export const STACK_TAG_TYPES = {
  ROUNDED: "rounded",
  RECTANGULAR: "rectangular",
};

/**
 * Configuration par défaut pour les stacks non trouvés
 */
export const DEFAULT_STACK_CONFIG = {
  iconColor: "text-neutral-800",
  tagColor: "border-neutral-600 text-neutral-800 bg-neutral-100",
  fallbackIcon: "TbError404",
};

/**
 * Classes CSS par défaut pour les tags
 */
export const DEFAULT_TAG_CLASSES = {
  bg: "bg-neutral-100",
  border: "border-neutral-600",
  text: "text-neutral-800",
};

/**
 * Messages d'erreur pour les stacks
 */
export const STACK_ERROR_MESSAGES = {
  NOT_FOUND: (stackName) => `Technologie non trouvée: "${stackName}"`,
};

/**
 * Configuration des tailles d'icônes
 */
export const ICON_SIZES = {
  SMALL: "w-4 h-4",
  MEDIUM: "w-6 h-6",
  LARGE: "w-8 h-8",
};

/**
 * Configuration des styles de tags
 */
export const TAG_STYLES = {
  ROUNDED: {
    container:
      "flex items-center justify-center w-8 h-8 border-2 rounded-full transition-shadow duration-200",
    icon: "scale-75",
  },
  RECTANGULAR: {
    container:
      "flex items-center gap-2 px-2 py-1 border-2 rounded transition-all duration-300",
    icon: "scale-75 text-md",
    text: "text-sm font-medium lg:text-base",
  },
};
