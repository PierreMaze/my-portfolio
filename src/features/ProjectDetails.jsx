import { useNavigate, useParams } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";

// Simulons une base de données de projets
const projectsData = {
  1: {
    title: "Plateforme E-commerce",
    description:
      "Solution e-commerce complète avec panier d'achat, paiement sécurisé et tableau de bord administrateur.",
    longDescription:
      "Une plateforme e-commerce complète développée avec React et Node.js. Le projet inclut un système de panier d'achat, des paiements sécurisés via Stripe, et un tableau de bord administrateur pour la gestion des produits et des commandes.",
    image: "/api/placeholder/800/400",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    features: [
      "Système de panier d'achat en temps réel",
      "Intégration de paiement sécurisée",
      "Tableau de bord administrateur",
      "Gestion des stocks",
      "Système de recherche avancé",
    ],
    technologies: {
      frontend: ["React", "TailwindCSS", "Redux Toolkit"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      tools: ["Docker", "Git", "Jest"],
    },
    link: "#",
  },
  // Ajoutez d'autres projets ici
};

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id];

  if (!project) {
    return (
      <Container className="py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold">Projet non trouvé</h1>
        <Button onClick={() => navigate("/")} variant="accent">
          Retour à l'accueil
        </Button>
      </Container>
    );
  }

  return (
    <div className="py-20">
      <Container>
        <FadeIn>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="mb-8">
            ← Retour
          </Button>
        </FadeIn>

        <FadeIn>
          <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
          <p className="mb-8 text-xl text-text-secondary">
            {project.description}
          </p>
        </FadeIn>

        <FadeIn className="delay-100">
          <div className="mb-12 overflow-hidden rounded-lg aspect-video">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn className="delay-200">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Description</h2>
              <p className="mb-8 text-text-secondary">
                {project.longDescription}
              </p>

              <h3 className="mb-4 text-xl font-bold">Fonctionnalités</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 mr-3 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn className="delay-300">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Technologies</h2>
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category} className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-background-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <Button
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
                className="mt-8">
                Voir le projet
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};
