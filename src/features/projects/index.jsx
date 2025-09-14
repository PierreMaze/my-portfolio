import { lazy, Suspense } from "react";
import ImgProjectClou from "../../assets/clou.png";
import ImgProjectLumi from "../../assets/lumi.png";
import ImgProjectMakeSense from "../../assets/make_sense.png";
import ImgProjectSignature from "../../assets/signature.png";
import { ChunkErrorBoundary } from "../../components/ui/ChunkErrorBoundary";
import { FadeIn } from "../../components/ui/FadeIn";
import { MiniLoader } from "../../components/ui/MiniLoader";
import { useProjects } from "../../hooks/useProjects";
import { createImageArray } from "../../utils/imageUtils";
import { ProjectCard } from "./components/ProjectCard";

// Lazy loading du modal lourd
const ProjectModal = lazy(() => import("./components/ProjectModal"));

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: "Luminescence33",
    description:
      "App d’événements, connectée à Google Calendar, avec vitrine claire des services.",
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
    id: 4,
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
    selectedProject,
    filteredProjects,
    categories,
    handleCategoryChange,
    handleProjectClick,
    handleCloseModal,
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
        <div className="flex flex-wrap justify-start gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              aria-pressed={selectedCategory === category}
              aria-label={`Filtrer par ${category}`}
              className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded ${
                selectedCategory === category
                  ? "bg-orange-500 hover:bg-orange-600 text-white "
                  : "border border-zinc-500 text-zinc-500 hover:bg-orange-100 hover:text-orange-600 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-orange-500/50"
              }disabled:opacity-50 disabled:cursor-not-allowed`}>
              {category}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grille de projets */}
      <FadeIn className="delay-200">
        <div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="grid"
          aria-label="Liste des projets">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </FadeIn>

      {/* Modal de projet */}
      {selectedProject && (
        <ChunkErrorBoundary>
          <Suspense
            fallback={
              <MiniLoader message="Chargement des détails du projet..." />
            }>
            <ProjectModal
              project={selectedProject}
              isOpen={!!selectedProject}
              onClose={handleCloseModal}
              aria-label={`Détails du projet ${selectedProject.title}`}
            />
          </Suspense>
        </ChunkErrorBoundary>
      )}
    </div>
  );
};

export default Projects;
