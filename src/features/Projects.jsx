import { useState } from "react";
import ImgProjectClou from "../assets/clou.png";
import ImgProjectLumi from "../assets/lumi.png";
import ImgProjectMakeSense from "../assets/make_sense.png";
import ImgProjectSignature from "../assets/signature.png";
import { FadeIn } from "../components/FadeIn";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";

const categories = ["Tous", "Frontend", "Backend", "Fullstack", "Design"];

const projects = [
  {
    id: 1,
    title: "Application web Responsive (en cours de développement)",
    description:
      "Site vitrine optimisé pour les performances et parfaitement responsive pour l'agence Signature.",
    image: { ImgProjectSignature },
    images: [
      { ImgProjectSignature },
      { ImgProjectSignature },
      { ImgProjectSignature },
    ],
    tags: ["React", "TailwindCSS", "Dotenv"],
    category: "Backend",
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
    title: "Landing Page Responsive",
    description:
      "Site vitrine  optimisé pour les performances et parfaitement responsive pour l'entreprise Clou&Cie.",
    image: { ImgProjectClou },
    images: [{ ImgProjectClou }, { ImgProjectClou }, { ImgProjectClou }],
    tags: ["React", "TailwindCSS"],
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
    title: "Site Vitrine Responsive",
    description:
      "Site vitrine optimisé pour les performances et parfaitement responsive pour l'entreprise Luminescence33.",
    image: { ImgProjectLumi },
    images: [{ ImgProjectLumi }, { ImgProjectLumi }, { ImgProjectLumi }],
    tags: ["React", "TailwindCSS", "Node", "Dotenv"],
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
    title: "Application Web de getions d'actions",
    description:
      "Application web de gestion de getions d'actions pour l'entreprise Make_Sense.",
    image: { ImgProjectMakeSense },
    images: [
      { ImgProjectMakeSense },
      { ImgProjectMakeSense },
      { ImgProjectMakeSense },
    ],
    tags: ["HTML/CSS", "JavaScript", "Figma"],
    category: "Design",
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
  {
    id: 5,
    title: "Jeu application web",
    description: "Application web de jeu nommé MemoryLand.",
    image: "/api/placeholder/400/320",
    images: [
      "/api/placeholder/400/320",
      "/api/placeholder/400/320",
      "/api/placeholder/400/320",
    ],
    tags: ["React", "D3.js", "Node.js"],
    category: "Fullstack",
    github: "https://github.com/username/analytics-dashboard",
    figma: "https://figma.com/file/...",
    diagram: "https://draw.io/...",
    notion: "https://notion.so/...",
    demo: "https://analytics-demo.com",
    problem: "Besoin d'un système d'analyse de données en temps réel",
    objectives: [
      "Créer des visualisations interactives",
      "Implémenter l'export de données",
      "Développer un système de rapports automatisés",
    ],
    solution: "Application fullstack avec visualisations en temps réel",
    challenges: [
      "Performance des visualisations",
      "Gestion des données en temps réel",
      "Export de données volumineuses",
    ],
    technologies: ["React", "D3.js", "Node.js", "WebSocket", "MongoDB"],
    results: [
      "Temps de chargement réduit de 60%",
      "Précision des données de 99.9%",
      "Satisfaction utilisateur de 90%",
    ],
  },
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "Tous" || project.category === selectedCategory
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="py-20">
      <div className="container">
        <FadeIn>
          <h2 className="relative mb-12 text-3xl font-bold">
            <span className="relative inline-block">
              <span
                className="absolute block -skew-y-3 bg-yellow-200 -inset-1"
                aria-hidden="true"></span>
              <span className="relative">Mes projets</span>
            </span>
          </h2>
        </FadeIn>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-accent text-white"
                  : "bg-accent/10 text-accent hover:bg-accent/20"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} className="delay-[${index * 100}ms]">
              <div className="h-full">
                <ProjectCard
                  {...project}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
