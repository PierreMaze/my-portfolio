import { IoArrowBack, IoOpenOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../../components/layout/Container";
import { FadeIn, LazyProjectImage } from "../../../components/ui";

/**
 * Composant ProjectDetails
 * Affiche les détails d'un projet spécifique
 */
export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id];

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
              <h2 className="text-2xl font-bold mb-6">Description</h2>
              <p className="mb-8 text-text-secondary">
                {project.longDescription}
              </p>

              <h3 className="text-xl font-bold mb-4">Fonctionnalités</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 rounded-full mr-3 bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn className="delay-300">
            <div>
              <h2 className="text-2xl font-bold mb-6">Technologies</h2>
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold capitalize mb-3">
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

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-white rounded transition-all duration-300 mt-8 bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed">
                <IoOpenOutline className="w-4 h-4" />
                Voir le projet
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};
