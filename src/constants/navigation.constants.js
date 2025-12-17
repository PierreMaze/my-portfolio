// Constantes de navigation pour le Header (routes et sections)
import {
  HiAcademicCap,
  HiCodeBracket,
  HiFolder,
  HiHome,
} from "react-icons/hi2";

export const HEADER_NAV_ITEMS_DESKTOP = [
  { label: "Accueil", kind: "section", target: "home", icon: HiHome },
  {
    label: "Compétences",
    kind: "section",
    target: "skills",
    icon: HiCodeBracket,
  },
  { label: "Projets", kind: "section", target: "projects", icon: HiFolder },
  {
    label: "Parcours",
    kind: "section",
    target: "timeline",
    icon: HiAcademicCap,
  },
];

export const HEADER_NAV_ITEMS_MOBILE = [
  { label: "Accueil", kind: "section", target: "home", icon: HiHome },
  {
    label: "Compétences",
    kind: "section",
    target: "skills",
    icon: HiCodeBracket,
  },
  { label: "Projets", kind: "section", target: "projects", icon: HiFolder },
  {
    label: "Parcours",
    kind: "section",
    target: "timeline",
    icon: HiAcademicCap,
  },
];

export const HEADER_NAV_ITEMS = HEADER_NAV_ITEMS_DESKTOP;

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
  rootMargin: "-60px 0px -60px 0px",
  threshold: 0.5,
};
