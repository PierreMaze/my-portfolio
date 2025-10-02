import { useCallback } from "react";
import { IoArrowBack, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { FadeIn } from "../components/ui";
import { ButtonRectangularPrimary } from "../components/ui/buttons";
import { StackTag } from "../components/ui/tags";
import { useProjects } from "../contexts/ProjectsContext";
import { useMeta } from "../hooks";

/**
 * Composant d'erreur simple pour les projets
 * @param {Object} props
 * @param {number} props.statusCode - Code d'erreur
 * @param {string} props.message - Message d'erreur
 * @returns {JSX.Element}
 */
const Error = ({ statusCode = 404, message = "Page non trouvée" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-300 mb-4">{statusCode}</h1>
        <p className="text-xl text-zinc-600 mb-8">{message}</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
          <IoArrowBack className="w-4 h-4" />
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

/**
 * Composant de navigation entre projets
 * @param {Object} props
 * @param {Object|null} props.previous - Projet précédent
 * @param {Object|null} props.next - Projet suivant
 * @param {Function} props.onNavigate - Fonction de navigation
 * @returns {JSX.Element}
 */
const ProjectNavigation = ({ previous, next, onNavigate }) => {
  return (
    <nav className="flex justify-between items-center mt-12 pt-8 border-t border-zinc-200">
      <div className="flex-1">
        {previous ? (
          <button
            onClick={() => onNavigate(previous.id)}
            className="flex items-center gap-3 text-zinc-600 hover:text-orange-600 transition-colors group">
            <IoChevronBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <p className="text-sm text-zinc-500">Projet précédent</p>
              <p className="font-medium">{previous.title}</p>
            </div>
          </button>
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {next ? (
          <button
            onClick={() => onNavigate(next.id)}
            className="flex items-center gap-3 text-zinc-600 hover:text-orange-600 transition-colors group">
            <div className="text-right">
              <p className="text-sm text-zinc-500">Projet suivant</p>
              <p className="font-medium">{next.title}</p>
            </div>
            <IoChevronForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <div></div>
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
    <div className="relative bg-white rounded shadow-lg overflow-hidden shadow-zinc-200/50 mb-8">
      {/* Header avec gradient */}
      <div className="relative px-8 py-6 bg-orange-600">
        <div className="relative flex items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Défis relevés</h3>
            <p className="text-sm text-zinc-50 mt-1">
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
              className="flex items-start gap-3 p-3 bg-white rounded-lg transition-all duration-300 sm:gap-4 sm:p-4 group">
              <div className="flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-300 sm:w-7 sm:h-7 bg-orange-100 mt-0.5 flex-shrink-0">
                <span className="text-xs font-bold sm:text-sm text-orange-600">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm leading-relaxed text-black transition-colors duration-300 sm:text-base">
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
      <h3 className="text-xl font-bold text-black mb-4">
        Technologies utilisées
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <StackTag key={tech} name={tech} type="rectangular" />
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
    <h3 className="text-xl font-bold text-black mb-4">Résultats obtenus</h3>
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
  <section className="mb-8">
    <h3 className="text-xl font-bold text-black mb-4">Liens du projet</h3>
    <div className="flex flex-wrap gap-4">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Code source
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Voir le projet
        </a>
      )}
    </div>
  </section>
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

  // SEO dynamique unifié
  useMeta({
    title: project ? `${project.title} | Portfolio` : "Projet non trouvé",
    description: project?.description || "Projet non trouvé",
    keywords: project?.tags?.join(", ") || "portfolio, projet",
    ogTitle: project
      ? `${project.title} - Portfolio Pierre Mazelaygue`
      : "Projet non trouvé",
    ogDescription: project?.description || "Projet non trouvé",
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
      <Error
        statusCode={404}
        message="Le projet que vous recherchez n'existe pas ou a été supprimé."
      />
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
              <ButtonRectangularPrimary
                onClick={handleBack}
                ariaLabel="Retourner à la liste des projets">
                <IoArrowBack className="w-4 h-4" />
                Retour
              </ButtonRectangularPrimary>
            </div>
            <h1 className="text-3xl font-bold text-black md:text-4xl mb-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-900 mb-6">
              {project.description}
            </p>
          </header>
        </FadeIn>

        {/* Image principale du projet */}
        <FadeIn className="delay-100">
          <div className="relative rounded shadow-lg overflow-hidden aspect-video mb-8">
            <img
              src={project.image}
              alt={project.title}
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
                <p className="leading-relaxed text-zinc-700 mb-6">
                  {project.problem}
                </p>

                <h3 className="text-xl font-semibold text-black mb-4">
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

                <h3 className="text-xl font-semibold text-black mb-4">
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
                <TechnologiesList technologies={project.tags} />
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
                <h3 className="text-xl font-bold text-black mb-4">
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
