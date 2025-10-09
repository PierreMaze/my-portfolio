// Constantes de navigation pour le Header (routes et sections)

export const HEADER_NAV_ITEMS = [
  { label: "Accueil", href: "#home" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#timeline" },
];

export const HEADER_ROUTE_ITEMS = [{ label: "A propos", to: "/about" }];

export const HEADER_SECONDARY_LINKS = [
  { label: "GitHub", href: "https://github.com/PierreMaze", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://fr.linkedin.com/in/pierremazelaygue",
    icon: "linkedin",
  },
];

/**
 * Configuration pour le scroll-spy avec IntersectionObserver
 */
export const SCROLL_SPY_CONFIG = {
  rootMargin: "-60px 0px -60px 0px", // Offset pour la détection
  threshold: [0, 0.1, 0.5, 0.9, 1.0], // Seuils de visibilité
};
