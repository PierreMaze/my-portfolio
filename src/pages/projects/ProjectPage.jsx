import { useCallback, useMemo } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import { FadeIn, SmartImage } from "../../components/ui";
import { ButtonRectangularPrimary } from "../../components/ui/buttons";
import { ProjectError } from "../../components/ui/error";
import { useProjects } from "../../contexts/ProjectsContext";
import { useMeta } from "../../hooks";
import {
  ProjectInfo,
  ProjectLinks,
  ProjectNavigation,
  ProjectResults,
  StacksTagsList,
} from "./components";

/**
 * Page de détail d'un projet
 * @returns {JSX.Element}
 */
const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProjectById, getAdjacentProjects } = useProjects();

  // Mémorisation du projet pour éviter les recalculs inutiles
  const project = useMemo(() => {
    return getProjectById(id);
  }, [getProjectById, id]);

  // Destructuration des propriétés du projet
  const {
    title,
    description,
    tags,
    image,
    imageWebp,
    problem,
    objectives,
    solution,
    results,
    github,
    demo,
  } = project || {};

  // Mémorisation des projets adjacents
  const { previous, next } = useMemo(() => {
    return getAdjacentProjects(parseInt(id));
  }, [getAdjacentProjects, id]);

  // Mémorisation des métadonnées SEO pour éviter les recalculs
  const seoMeta = useMemo(
    () => ({
      title: project ? `${title} | Portfolio` : "Projet non trouvé",
      description: description || "Projet non trouvé",
      keywords: tags?.join(", ") || "portfolio, projet",
      ogTitle: project
        ? `${title} - Portfolio Pierre Mazelaygue`
        : "Projet non trouvé",
      ogDescription: description || "Projet non trouvé",
    }),
    [project, title, description, tags],
  );

  // SEO dynamique unifié
  useMeta(seoMeta);

  const handleNavigate = useCallback(
    (projectId) => {
      navigate(`/my-portfolio/projects/${projectId}`);
    },
    [navigate],
  );

  const handleBack = useCallback(() => {
    navigate("/my-portfolio/");
  }, [navigate]);

  if (!project) {
    return (
      <ProjectError
        statusCode={404}
        message="Le projet que vous recherchez n'existe pas ou a été supprimé."
      />
    );
  }

  return (
    <div className="py-12 lg:py-24">
      <Container>
        {/* En-tête du projet */}
        <FadeIn>
          <header className="mb-8">
            {/* Bouton de retour intégré dans le header */}
            <div className="my-12 flex items-center gap-4 lg:my-6">
              <ButtonRectangularPrimary
                onClick={handleBack}
                ariaLabel="Retourner à la liste des projets"
              >
                <IoArrowBack className="h-4 w-4" />
                Retour
              </ButtonRectangularPrimary>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-black md:text-4xl">
              {title}
            </h1>
            <p className="mb-6 text-lg text-zinc-900 md:text-xl">
              {description}
            </p>
          </header>
        </FadeIn>

        {/* Image principale du projet */}
        <FadeIn className="delay-100">
          <div className="relative mb-8 aspect-video overflow-hidden rounded shadow-lg">
            <SmartImage
              src={image}
              webp={imageWebp}
              alt={title}
              className="h-full w-full object-cover"
              width={600}
              height={400}
              priority
            />
          </div>
        </FadeIn>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Colonne principale */}
          <div className="space-y-8 lg:col-span-2">
            {/* Problématique */}
            <FadeIn className="delay-200">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  Problématique
                </h2>
                <p className="mb-6 leading-relaxed text-zinc-700">{problem}</p>

                <h3 className="mb-4 text-xl font-semibold text-black">
                  Objectifs
                </h3>
                <ul className="mb-6 space-y-3">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                      <span className="text-zinc-700">{objective}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-4 text-xl font-semibold text-black">
                  Solution
                </h3>
                <p className="leading-relaxed text-zinc-700">{solution}</p>
              </section>
            </FadeIn>

            {/* Stacks */}
            <FadeIn className="delay-300">
              <section>
                <StacksTagsList stacks={tags} />
              </section>
            </FadeIn>

            {/* Résultats */}
            <FadeIn className="delay-400">
              <section>
                <ProjectResults results={results} />
              </section>
            </FadeIn>

            {/* Liens */}
            <FadeIn className="delay-500">
              <section>
                <h3 className="mb-4 text-xl font-bold text-black">
                  Liens du projet
                </h3>
                <ProjectLinks github={github} demo={demo} />
              </section>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn className="delay-300">
              <aside>
                <ProjectInfo project={project} />
              </aside>
            </FadeIn>
          </div>
        </div>

        {/* Navigation entre projets */}
        <FadeIn className="delay-600">
          <ProjectNavigation
            previous={previous}
            next={next}
            onNavigate={handleNavigate}
          />
        </FadeIn>
      </Container>
    </div>
  );
};

export default ProjectPage;
