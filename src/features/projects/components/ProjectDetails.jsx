import { IoArrowBack, IoOpenOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../../components/layout/Container";
import { FadeIn, LazyProjectImage } from "../../../components/ui";

// Import des données des projets depuis le fichier principal
import ImgProjectClou from "../../../assets/clou.png";
import ImgProjectLumi from "../../../assets/lumi.png";
import ImgProjectMakeSense from "../../../assets/make_sense.png";
import ImgProjectSignature from "../../../assets/signature.png";
import { createImageArray } from "../../../utils/imageUtils";

const projectsData = [
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
    technologies: [
      "React",
      "react-router-dom",
      "TailwindCSS",
      "framer-motion",
      "Figma",
      "calendly",
    ],
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
    technologies: ["React", "TailwindCSS", "Figma"],
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
      "Score de performance de 95/100",
      "Taux de rebond réduit de 40%",
      "Engagement utilisateur augmenté de 60%",
    ],
  },
];

/**
 * Composant ProjectDetails
 * Affiche les détails d'un projet spécifique
 */
export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Projet non trouvé</h1>
        <button
          onClick={() => navigate("/")}
          aria-label="Retourner à la page d'accueil"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-white rounded transition-all duration-300 bg-zinc-500 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed">
          <IoArrowBack className="w-4 h-4" />
          Retour à l'accueil
        </button>
      </Container>
    );
  }

  return (
    <div className="py-20">
      <Container>
        <FadeIn>
          <button
            onClick={() => navigate("/")}
            aria-label="Retourner à la liste des projets"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-medium border rounded transition-all duration-300 mb-8 border-zinc-600 text-zinc-700 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed">
            <IoArrowBack className="w-4 h-4" />
            Retour
          </button>
        </FadeIn>

        <FadeIn>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl mb-8 text-text-secondary">
            {project.description}
          </p>
        </FadeIn>

        <FadeIn className="delay-100">
          <div className="relative rounded-lg overflow-hidden aspect-video">
            <LazyProjectImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        <div className="flex flex-col gap-12">
          <FadeIn className="delay-200">
            <div>
              <h2 className="text-2xl font-bold mb-6">Problématique</h2>
              <p className="mb-8 text-zinc-700">{project.problem}</p>

              <h3 className="text-xl font-bold mb-4">Objectifs</h3>
              <ul className="space-y-2 mb-8">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 rounded-full mr-3 bg-orange-500" />
                    {objective}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">Solution</h3>
              <p className="mb-8 text-zinc-700">{project.solution}</p>
            </div>
          </FadeIn>

          <FadeIn className="delay-300">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-800">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Résultats</h3>
              <ul className="space-y-2 mb-8">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    {result}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-white rounded transition-all duration-300 bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
                    <IoOpenOutline className="w-4 h-4" />
                    Code source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-white rounded transition-all duration-300 bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    <IoOpenOutline className="w-4 h-4" />
                    Voir le projet
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};
