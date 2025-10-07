import { useCallback, useMemo } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import { FadeIn } from "../../components/ui";
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
    [project, title, description, tags]
  );

  // SEO dynamique unifié
  useMeta(seoMeta);

  const handleNavigate = useCallback(
    (projectId) => {
      navigate(`/projects/${projectId}`);
    },
    [navigate]
  );

  const handleBack = useCallback(() => {
    navigate("/");
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
            <div className="flex items-center gap-4 my-12 lg:my-6">
              <ButtonRectangularPrimary
                onClick={handleBack}
                ariaLabel="Retourner à la liste des projets">
                <IoArrowBack className="w-4 h-4" />
                Retour
              </ButtonRectangularPrimary>
            </div>
            <h1 className="text-3xl font-bold text-black md:text-4xl mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-900 mb-6">
              {description}
            </p>
          </header>
        </FadeIn>

        {/* Image principale du projet */}
        <FadeIn className="delay-100">
          <div className="relative rounded shadow-lg overflow-hidden aspect-video mb-8">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              fetchPriority="eager"
              width="600"
              height="400"
              priority="true"
            />
          </div>
        </FadeIn>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Problématique */}
            <FadeIn className="delay-200">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Problématique
                </h2>
                <p className="leading-relaxed text-zinc-700 mb-6">{problem}</p>

                <h3 className="text-xl font-semibold text-black mb-4">
                  Objectifs
                </h3>
                <ul className="space-y-3 mb-6">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2 bg-orange-500" />
                      <span className="text-zinc-700">{objective}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-black mb-4">
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
                <h3 className="text-xl font-bold text-black mb-4">
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
