import { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/layout/Container.jsx";
import { FadeIn } from "../../components/ui/animation/index.jsx";
import { ProjectError } from "../../components/ui/error/index.jsx";
import { useProjects } from "../../contexts/ProjectsContext.jsx";
import { useMeta } from "../../hooks/index.jsx";
import {
  ProjectHeader,
  ProjectInfo,
  ProjectLinks,
  ProjectNavigation,
  ProjectProblem,
  ProjectResults,
  StacksTagsList,
} from "./components/index.jsx";

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
      navigate(`/projects/${projectId}`);
    },
    [navigate],
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
        <ProjectHeader
          title={title}
          description={description}
          image={image}
          imageWebp={imageWebp}
          onBack={handleBack}
        />

        {/* Contenu principal */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Colonne principale */}
          <div className="space-y-8 lg:col-span-2">
            {/* Problématique */}
            <ProjectProblem
              problem={problem}
              objectives={objectives}
              solution={solution}
            />

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
