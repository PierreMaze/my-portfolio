import { createContext, useContext, useMemo } from "react";
import { createImageArray } from "../utils/imageUtils";

// Import des images des projets
import ImgProjectClou from "../assets/clou.png";
import ImgProjectLumi from "../assets/lumi.png";
import ImgProjectMakeSense from "../assets/make_sense.png";
import ImgProjectPortfolio from "../assets/portfolio.png";
import ImgProjectSignature from "../assets/signature.png";

/**
 * Données des projets
 * @type {Array<Object>}
 */
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Mon Portfolio",
    description:
      "Site vitrine personnel moderne avec animations fluides et design responsive.",
    image: ImgProjectPortfolio,
    images: createImageArray(ImgProjectPortfolio),
    tags: [
      "React",
      "react-router-dom",
      "TailwindCSS",
      "framer-motion",
      "Figma",
    ],
    category: "Frontend",
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio-demo.com",
    problem:
      "Création d'une identité visuelle forte et moderne pour présenter mes compétences",
    objectives: [
      "Développer une expérience utilisateur immersive",
      "Optimiser les performances et l'accessibilité",
      "Assurer la compatibilité mobile et desktop",
    ],
    solution:
      "Site vitrine moderne avec animations fluides et design responsive",
    challenges: [
      "Optimisation des animations et transitions",
      "Performance sur mobile et desktop",
      "Accessibilité et SEO",
    ],
    technologies: [
      "React",
      "react-router-dom",
      "TailwindCSS",
      "framer-motion",
      "Figma",
    ],
    results: [
      "Score de performance de 95/100",
      "Taux de rebond réduit de 40%",
      "Engagement utilisateur augmenté de 60%",
    ],
  },
  {
    id: 2,
    title: "La Voix Intime",
    description:
      "App vitrine de prestations via WhatsApp et prise de RDV avec Calendly.",
    image: ImgProjectSignature,
    images: createImageArray(ImgProjectSignature),
    tags: [
      "React",
      "react-router-dom",
      "TailwindCSS",
      "framer-motion",
      "Figma",
      "calendly",
    ],
    category: "Frontend",
    github: "https://github.com/username/la-voix-intime",
    demo: "https://la-voix-intime-demo.com",
    problem:
      "Créer une vitrine professionnelle pour des prestations de coaching avec intégration de prise de rendez-vous",
    objectives: [
      "Développer une interface claire et professionnelle",
      "Intégrer Calendly pour la prise de RDV",
      "Faciliter le contact via WhatsApp",
    ],
    solution:
      "Application vitrine moderne avec intégration Calendly et WhatsApp",
    challenges: [
      "Intégration seamless de Calendly",
      "Optimisation de l'expérience mobile",
      "Design professionnel et rassurant",
    ],
    technologies: [
      "React",
      "react-router-dom",
      "TailwindCSS",
      "framer-motion",
      "Figma",
      "calendly",
    ],
    results: [
      "Augmentation de 150% des prises de RDV",
      "Réduction de 60% du temps de réponse",
      "Satisfaction client de 98%",
    ],
  },
  {
    id: 3,
    title: "Clou & Cie",
    description:
      "Site vitrine dans le BTP : services clairs, chantiers mis en valeur, demande de devis.",
    image: ImgProjectClou,
    images: [ImgProjectClou, ImgProjectClou, ImgProjectClou],
    tags: ["React", "TailwindCSS", "Figma"],
    category: "Frontend",
    github: "https://github.com/username/clou-cie",
    demo: "https://clou-cie-demo.com",
    problem:
      "Créer une vitrine professionnelle pour une entreprise BTP avec mise en valeur des services et chantiers",
    objectives: [
      "Présenter clairement les services BTP",
      "Mettre en valeur les réalisations et chantiers",
      "Faciliter les demandes de devis",
    ],
    solution:
      "Site vitrine moderne avec galerie de projets et formulaire de contact",
    challenges: [
      "Organisation claire des services BTP",
      "Mise en valeur visuelle des chantiers",
      "Optimisation pour les recherches locales",
    ],
    technologies: ["React", "TailwindCSS", "Figma"],
    results: [
      "Augmentation de 80% des demandes de devis",
      "Amélioration de 70% du référencement local",
      "Satisfaction client de 95%",
    ],
  },
  {
    id: 4,
    title: "Luminescence33",
    description:
      "App d'événements, connectée à Google Calendar, avec vitrine claire des services.",
    image: ImgProjectLumi,
    images: [ImgProjectLumi, ImgProjectLumi, ImgProjectLumi],
    tags: [
      "React",
      "react-router-dom",
      "TailwindCSS",
      "HeadlessUI",
      "Node",
      "Dotenv",
      "Figma",
    ],
    category: "Fullstack",
    github: "https://github.com/username/luminescence33",
    demo: "https://luminescence33-demo.com",
    problem:
      "Créer une plateforme événementielle avec synchronisation Google Calendar et vitrine des services",
    objectives: [
      "Développer une interface événementielle moderne",
      "Intégrer Google Calendar pour la synchronisation",
      "Créer une vitrine claire des services proposés",
    ],
    solution:
      "Application fullstack avec intégration Google Calendar et gestion d'événements",
    challenges: [
      "Intégration complexe avec Google Calendar API",
      "Gestion des fuseaux horaires",
      "Interface utilisateur intuitive pour les événements",
    ],
    technologies: [
      "React",
      "react-router-dom",
      "TailwindCSS",
      "HeadlessUI",
      "Node",
      "Dotenv",
      "Figma",
    ],
    results: [
      "Augmentation de 120% des inscriptions aux événements",
      "Réduction de 50% des conflits de planning",
      "Satisfaction utilisateur de 92%",
    ],
  },
  {
    id: 5,
    title: "Make Sense",
    description:
      "Application web de gestion d'actions pour l'entreprise Make_Sense.",
    image: ImgProjectMakeSense,
    images: [ImgProjectMakeSense, ImgProjectMakeSense, ImgProjectMakeSense],
    tags: [
      "React",
      "react-router-dom",
      "chakraui",
      "HeadlessUI",
      "Node",
      "Dotenv",
      "Figma",
    ],
    category: "Fullstack",
    github: "https://github.com/username/make-sense",
    demo: "https://make-sense-demo.com",
    problem:
      "Développer une plateforme de gestion d'actions pour l'entreprise Make_Sense avec interface intuitive",
    objectives: [
      "Créer un système de gestion d'actions efficace",
      "Développer une interface utilisateur moderne avec Chakra UI",
      "Implémenter un backend robuste avec Node.js",
    ],
    solution:
      "Application fullstack de gestion d'actions avec React et Node.js",
    challenges: [
      "Gestion complexe des états d'actions",
      "Interface utilisateur intuitive avec Chakra UI",
      "Optimisation des performances backend",
    ],
    technologies: [
      "React",
      "react-router-dom",
      "chakraui",
      "HeadlessUI",
      "Node",
      "Dotenv",
      "Figma",
    ],
    results: [
      "Amélioration de 75% de l'efficacité de gestion",
      "Réduction de 60% du temps de traitement des actions",
      "Adoption par 100% des équipes Make_Sense",
    ],
  },
];

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
  // Mémorisation des données pour éviter les re-calculs
  const contextValue = useMemo(() => {
    /**
     * Récupère un projet par son ID
     * @param {number} id - ID du projet
     * @returns {Object|undefined} Projet trouvé ou undefined
     */
    const getProjectById = (id) => {
      return PROJECTS_DATA.find((project) => project.id === parseInt(id));
    };

    /**
     * Récupère tous les projets
     * @returns {Array<Object>} Liste de tous les projets
     */
    const getAllProjects = () => {
      return PROJECTS_DATA;
    };

    /**
     * Récupère les projets par catégorie
     * @param {string} category - Catégorie des projets
     * @returns {Array<Object>} Liste des projets de la catégorie
     */
    const getProjectsByCategory = (category) => {
      if (category === "Tous") {
        return PROJECTS_DATA;
      }
      return PROJECTS_DATA.filter((project) => project.category === category);
    };

    /**
     * Récupère les catégories uniques
     * @returns {Array<string>} Liste des catégories
     */
    const getCategories = () => {
      const categories = [
        ...new Set(PROJECTS_DATA.map((project) => project.category)),
      ];
      return ["Tous", ...categories];
    };

    /**
     * Récupère les projets suivants et précédents
     * @param {number} currentId - ID du projet actuel
     * @returns {Object} Objet avec previous et next
     */
    const getAdjacentProjects = (currentId) => {
      const currentIndex = PROJECTS_DATA.findIndex(
        (project) => project.id === currentId
      );

      if (currentIndex === -1) {
        return { previous: null, next: null };
      }

      const previous =
        currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : null;
      const next =
        currentIndex < PROJECTS_DATA.length - 1
          ? PROJECTS_DATA[currentIndex + 1]
          : null;

      return { previous, next };
    };

    return {
      projects: PROJECTS_DATA,
      getProjectById,
      getAllProjects,
      getProjectsByCategory,
      getCategories,
      getAdjacentProjects,
    };
  }, []);

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
