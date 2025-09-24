import { useCallback } from "react";
import {
  IoArrowBack,
  IoChevronBack,
  IoChevronForward,
  IoOpenOutline,
} from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { FadeIn, LazyProjectImage, TechBadge } from "../components/ui";
import { useProjects } from "../contexts";
import { useDocumentTitle, useMeta } from "../hooks";

/**
 * Composant de navigation entre projets
 * @param {Object} props
 * @param {Object|null} props.previous - Projet précédent
 * @param {Object|null} props.next - Projet suivant
 * @param {Function} props.onNavigate - Fonction de navigation
 * @returns {JSX.Element|null}
 */
const ProjectNavigation = ({ previous, next, onNavigate }) => {
  if (!previous && !next) return null;

  return (
    <nav
      className="flex items-center justify-between py-8 border-t border-zinc-200"
      aria-label="Navigation entre projets">
      <div className="flex-1">
        {previous && (
          <button
            onClick={() => onNavigate(previous.id)}
            className="flex items-center gap-3 transition-colors duration-200 group text-zinc-600 hover:text-zinc-900"
            aria-label={`Aller au projet précédent: ${previous.title}`}>
            <IoChevronBack className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <div className="text-left">
              <div className="text-sm text-zinc-500">Projet précédent</div>
              <div className="font-medium">{previous.title}</div>
            </div>
          </button>
        )}
      </div>

      <div className="flex justify-end flex-1">
        {next && (
          <button
            onClick={() => onNavigate(next.id)}
            className="flex items-center gap-3 transition-colors duration-200 group text-zinc-600 hover:text-zinc-900"
            aria-label={`Aller au projet suivant: ${next.title}`}>
            <div className="text-right">
              <div className="text-sm text-zinc-500">Projet suivant</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <IoChevronForward className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </nav>
  );
};

/**
 * Composant d'information sur le projet (version desktop améliorée)
 * @param {Object} props
 * @param {Object} props.project - Données du projet
 * @returns {JSX.Element}
 */
const ProjectInfo = ({ project }) => {
  return (
    <div className="relative bg-white border rounded-2xl shadow-lg overflow-hidden border-zinc-200/60 shadow-zinc-200/50 mb-8">
      {/* Header avec gradient */}
      <div className="relative px-8 py-6 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 border rounded-xl bg-white/20 backdrop-blur-sm border-white/30">
            <span className="text-2xl">🚧</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Défis relevés</h3>
            <p className="text-sm text-orange-100 mt-1">
              Obstacles surmontés durant le développement
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal - Défis uniquement */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {project.challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 border rounded-lg transition-all duration-300 sm:gap-4 sm:p-4 group bg-gradient-to-r from-zinc-50 to-white border-zinc-200/60 hover:border-amber-300/60 hover:shadow-md">
              <div className="flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-300 sm:w-7 sm:h-7 bg-amber-100 group-hover:bg-amber-200 mt-0.5 flex-shrink-0">
                <span className="text-xs font-bold sm:text-sm text-amber-600">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm leading-relaxed transition-colors duration-300 sm:text-base text-zinc-700 group-hover:text-zinc-800">
                  {challenge}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Composant des technologies utilisées
 * @param {Object} props
 * @param {Array<string>} props.technologies - Liste des technologies
 * @returns {JSX.Element}
 */
const TechnologiesList = ({ technologies }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-zinc-900">
        Technologies utilisées
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
};

/**
 * Composant des résultats du projet
 * @param {Object} props
 * @param {Array<string>} props.results - Liste des résultats
 * @returns {JSX.Element}
 */
const ProjectResults = ({ results }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4 text-zinc-900">Résultats obtenus</h3>
    <ul className="space-y-3">
      {results.map((result, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2" />
          <span className="text-zinc-700">{result}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Composant des liens du projet
 * @param {Object} props
 * @param {string} props.github - Lien GitHub
 * @param {string} props.demo - Lien de démonstration
 * @returns {JSX.Element}
 */
const ProjectLinks = ({ github, demo }) => (
  <div className="flex flex-col gap-4 sm:flex-row">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
        aria-label="Voir le code source sur GitHub">
        <IoOpenOutline className="w-5 h-5" />
        Code source
      </a>
    )}
    {demo && (
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        aria-label="Voir la démonstration du projet">
        <IoOpenOutline className="w-5 h-5" />
        Voir le projet
      </a>
    )}
  </div>
);

/**
 * Page de détail d'un projet
 * @returns {JSX.Element}
 */
const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProjectById, getAdjacentProjects } = useProjects();

  const project = getProjectById(id);
  const { previous, next } = getAdjacentProjects(parseInt(id));

  // Gestion du titre de la page et des meta tags
  useDocumentTitle(
    project ? `${project.title} | Portfolio` : "Projet non trouvé"
  );
  useMeta({
    description: project?.description || "Projet non trouvé",
    keywords: project?.tags?.join(", ") || "portfolio, projet",
  });

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
      <Container className="py-20 text-center">
        <FadeIn>
          <div className="mx-auto max-w-md">
            <h1 className="text-3xl font-bold mb-4 text-zinc-900">
              Projet non trouvé
            </h1>
            <p className="text-lg text-zinc-600 mb-8">
              Le projet que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <button
              onClick={handleBack}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
              aria-label="Retourner à la page d'accueil">
              <IoArrowBack className="w-5 h-5" />
              Retour à l'accueil
            </button>
          </div>
        </FadeIn>
      </Container>
    );
  }

  return (
    <div className="py-8 md:py-12">
      <Container>
        {/* En-tête du projet */}
        <FadeIn>
          <header className="mb-8">
            {/* Bouton de retour intégré dans le header */}
            <div className="flex items-center gap-4 my-12 lg:my-6">
              <button
                onClick={handleBack}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg shadow-sm transition-all duration-300 bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:shadow-md"
                aria-label="Retourner à la liste des projets">
                <IoArrowBack className="w-4 h-4" />
                Retour
              </button>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl mb-4 text-zinc-900">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-6">
              {project.description}
            </p>
          </header>
        </FadeIn>

        {/* Image principale du projet */}
        <FadeIn className="delay-100">
          <div className="relative rounded-xl shadow-lg overflow-hidden aspect-video mb-8">
            <LazyProjectImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
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
                <h2 className="text-2xl font-bold mb-4 text-zinc-900">
                  Problématique
                </h2>
                <p className="leading-relaxed text-zinc-700 mb-6">
                  {project.problem}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-zinc-900">
                  Objectifs
                </h3>
                <ul className="space-y-3 mb-6">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2 bg-orange-500" />
                      <span className="text-zinc-700">{objective}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-zinc-900">
                  Solution
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  {project.solution}
                </p>
              </section>
            </FadeIn>

            {/* Technologies */}
            <FadeIn className="delay-300">
              <section>
                <TechnologiesList technologies={project.technologies} />
              </section>
            </FadeIn>

            {/* Résultats */}
            <FadeIn className="delay-400">
              <section>
                <ProjectResults results={project.results} />
              </section>
            </FadeIn>

            {/* Liens */}
            <FadeIn className="delay-500">
              <section>
                <h3 className="text-xl font-bold mb-4 text-zinc-900">
                  Liens du projet
                </h3>
                <ProjectLinks github={project.github} demo={project.demo} />
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
