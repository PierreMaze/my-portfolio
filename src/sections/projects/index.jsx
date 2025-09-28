import ImgProjectClou from "../../assets/clou.png";
import ImgProjectLumi from "../../assets/lumi.png";
import ImgProjectMakeSense from "../../assets/make_sense.png";
import ImgProjectPortfolio from "../../assets/portfolio.png";
import ImgProjectSignature from "../../assets/signature.png";
import { FadeIn } from "../../components/ui";
import { useProjects } from "../../hooks";
import { createImageArray } from "../../utils/imageUtils";
import { ProjectCard } from "./components/ProjectCard";

const projects = [
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
    figma: "https://figma.com/file/...",
    diagram: "https://draw.io/...",
    excalidraw: "https://excalidraw.com/...",
    notion: "https://notion.so/...",
    behance: "https://behance.net/...",
    dribbble: "https://dribbble.com/...",
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
    github: "https://github.com/username/microservices",
    diagram: "https://draw.io/...",
    notion: "https://notion.so/...",
    demo: "https://api-demo.com",
    problem: "Besoin d'une architecture scalable et maintenable",
    objectives: [
      "Créer une architecture microservices",
      "Implémenter un système de service discovery",
      "Mettre en place un monitoring avancé",
    ],
    solution: "Architecture microservices avec Node.js et Docker",
    challenges: [
      "Gestion de la complexité distribuée",
      "Monitoring des services",
      "Déploiement continu",
    ],
    technologies: ["Node.js", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    results: [
      "Réduction de 70% du temps de déploiement",
      "Amélioration de 80% de la scalabilité",
      "Disponibilité de 99.9%",
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
    github: "https://github.com/username/project",
    figma: "https://figma.com/file/...",
    diagram: "https://draw.io/...",
    excalidraw: "https://excalidraw.com/...",
    notion: "https://notion.so/...",
    behance: "https://behance.net/...",
    dribbble: "https://dribbble.com/...",
    demo: "https://demo-project.com",
    problem: "Besoin d'une solution e-commerce complète et évolutive",
    objectives: [
      "Créer une interface utilisateur intuitive",
      "Implémenter un système de paiement sécurisé",
      "Développer un tableau de bord administrateur",
    ],
    solution: "Développement d'une application fullstack avec React et Node.js",
    challenges: [
      "Optimisation des performances",
      "Gestion des paiements en temps réel",
      "Scalabilité de l'application",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    results: [
      "Réduction de 40% du temps de chargement",
      "Augmentation de 60% des conversions",
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
    github: "https://github.com/username/task-manager",
    figma: "https://figma.com/file/...",
    diagram: "https://draw.io/...",
    excalidraw: "https://excalidraw.com/...",
    notion: "https://notion.so/...",
    behance: "https://behance.net/...",
    dribbble: "https://dribbble.com/...",
    demo: "https://task-manager-demo.com",
    problem: "Besoin d'un système de gestion de tâches collaboratif.",
    objectives: [
      "Créer une interface utilisateur moderne",
      "Implémenter un système de notifications",
      "Développer des tableaux de bord personnalisables",
    ],
    solution: "Application web progressive avec React et Prisma",
    challenges: [
      "Gestion des notifications en temps réel",
      "Optimisation des performances",
      "Synchronisation multi-appareils",
    ],
    technologies: ["React", "Prisma", "TailwindCSS", "WebSocket"],
    results: [
      "Augmentation de 50% de la productivité",
      "Réduction de 30% des délais",
      "Adoption par plus de 1000 utilisateurs",
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
    github: "https://github.com/username/portfolio",
    figma: "https://figma.com/file/...",
    diagram: "https://draw.io/...",
    excalidraw: "https://excalidraw.com/...",
    notion: "https://notion.so/...",
    behance: "https://behance.net/...",
    dribbble: "https://dribbble.com/...",
    demo: "https://portfolio-demo.com",
    problem: "Création d'une identité visuelle forte et moderne",
    objectives: [
      "Développer une expérience utilisateur immersive",
      "Optimiser les performances",
      "Assurer la compatibilité mobile",
    ],
    solution: "Site vitrine moderne avec animations et design responsive",
    challenges: [
      "Optimisation des animations",
      "Performance sur mobile",
      "Accessibilité",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    results: [
      "Score de performance de 95/100",
      "Taux de rebond réduit de 40%",
      "Engagement utilisateur augmenté de 60%",
    ],
  },
];

export const Projects = () => {
  const {
    selectedCategory,
    filteredProjects,
    categories,
    handleCategoryChange,
  } = useProjects(projects);

  return (
    <div className="py-16 lg:py-24 xl:py-32">
      <FadeIn>
        <h2 className="relative text-3xl font-bold mb-12">
          <span className="relative inline-block">
            <span
              className="absolute block -skew-y-3 bg-orange-200 -inset-1"
              aria-hidden="true"></span>
            <span className="relative">Mes projets</span>
          </span>
        </h2>
      </FadeIn>

      {/* Filtres */}
      <FadeIn className="delay-100">
        <fieldset className="mb-12">
          <legend className="sr-only">Filtres de catégories de projets</legend>
          <div
            className="flex flex-wrap justify-start gap-2"
            role="radiogroup"
            aria-label="Filtres de catégories de projets">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                aria-pressed={selectedCategory === category}
                aria-label={`Filtrer par ${category}`}
                className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded gap-2  ${
                  selectedCategory === category
                    ? "bg-orange-600 text-white ring-orange-600 ring-2 "
                    : "text-black bg-zinc-100 ring-zinc-500 ring-2 hover:ring-zinc-800 hover:bg-white"}`}>
                {category}
              </button>
            ))}
          </div>
        </fieldset>
      </FadeIn>

      {/* Grille de projets */}
      <FadeIn className="delay-200">
        <ul
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 list-none"
          aria-label="Liste des projets">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
};

export default Projects;
