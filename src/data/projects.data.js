// Import des images des projets
import ImgProjectClou from "../assets/clou.png";
import ImgProjectClouWebp from "../assets/clou.webp";
import ImgProjectLumi from "../assets/lumi.png";
import ImgProjectLumiWebp from "../assets/lumi.webp";
import ImgProjectMakeSense from "../assets/make_sense.png";
import ImgProjectMakeSenseWebp from "../assets/make_sense.webp";
import ImgProjectPortfolio from "../assets/portfolio.png";
import ImgProjectPortfolioWebp from "../assets/portfolio.webp";
import ImgProjectSignature from "../assets/signature.png";
import ImgProjectSignatureWebp from "../assets/signature.webp";

/**
 * Données des projets
 * @type {Array<Object>}
 */
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Mon Portfolio",
    description:
      "Site vitrine personnel moderne avec animations fluides et design responsive.",
    image: ImgProjectPortfolio,
    imageWebp: ImgProjectPortfolioWebp,
    tags: [
      "ReactJS",
      "React Router DOM",
      "TailwindCSS",
      "Framer Motion",
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
    imageWebp: ImgProjectSignatureWebp,
    tags: [
      "ReactJS",
      "React Router DOM",
      "TailwindCSS",
      "Framer Motion",
      "Figma",
      "Calendly",
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
    imageWebp: ImgProjectClouWebp,
    tags: ["ReactJS", "TailwindCSS", "Figma"],
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
    imageWebp: ImgProjectLumiWebp,
    tags: [
      "ReactJS",
      "React Router DOM",
      "TailwindCSS",
      "HeadlessUI",
      "NodeJS",
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
    imageWebp: ImgProjectMakeSenseWebp,
    tags: [
      "ReactJS",
      "React Router DOM",
      "ChakraUI",
      "HeadlessUI",
      "NodeJS",
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
    results: [
      "Amélioration de 75% de l'efficacité de gestion",
      "Réduction de 60% du temps de traitement des actions",
      "Adoption par 100% des équipes Make_Sense",
    ],
  },
];
