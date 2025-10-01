import { useCallback } from "react";
import {
  IoArrowBack,
  IoChevronBack,
  IoChevronForward,
  IoLogoGithub,
  IoOpenOutline,
} from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/layout/Container";
import {
  ButtonRectangularPrimary,
  FadeIn,
  TechRectangularBadge,
} from "../components/ui";
import { useProjects } from "../contexts";
import { STACKS_DATA } from "../data/stacks/stacks.js";
import { useMeta } from "../hooks";
import Error from "./ErrorPage";

/**
 * Récupère les données d'une technologie depuis stacks.js
 * @param {string} techName - Nom de la technologie
 * @returns {Object} Objet avec iconComponent et iconColor
 */
const getTechData = (techName) => {
  // Nettoyer le nom de la technologie (supprimer les espaces en début/fin)
  const cleanTechName = techName.trim();

  // Recherche exacte d'abord
  let stackData = STACKS_DATA.find((stack) => stack.name === cleanTechName);

  // Si pas trouvé, recherche par correspondance partielle (insensible à la casse)
  if (!stackData) {
    stackData = STACKS_DATA.find(
      (stack) =>
        stack.name.toLowerCase().includes(cleanTechName.toLowerCase()) ||
        cleanTechName.toLowerCase().includes(stack.name.toLowerCase())
    );
  }

  if (!stackData) {
    console.warn(`Technologie non trouvée: "${cleanTechName}"`);
    return {
      iconComponent: STACKS_DATA[0].iconComponent,
      iconColor: "text-zinc-600",
    };
  }

  const { iconComponent, iconColor } = stackData;
  return { iconComponent, iconColor };
};

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
      className="flex items-center justify-between py-8"
      aria-label="Navigation entre projets">
      <div className="flex-1">
        {previous && (
          <button
            onClick={() => onNavigate(previous.id)}
            className="relative flex items-center gap-3 text-black border-none transition-all duration-200 group"
            aria-label={`Aller au projet précédent: ${previous.title}`}>
            <IoChevronBack className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <div className="text-left">
              <div className="text-sm text-zinc-900">Projet précédent</div>
              <div className="font-medium">{previous.title}</div>
            </div>
            {/* Underline personnalisée */}
            <div className="absolute left-0 w-full h-1 transition-transform duration-200 transform -bottom-1 bg-orange-600 hover:bg-orange-700 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></div>
          </button>
        )}
      </div>

      <div className="flex justify-end flex-1">
        {next && (
          <button
            onClick={() => onNavigate(next.id)}
            className="relative flex items-center gap-3 text-black transition-all duration-200 group ring-0 focus:outline-none focus:ring-0"
            aria-label={`Aller au projet suivant: ${next.title}`}>
            <div className="text-right">
              <div className="text-sm text-zinc-900">Projet suivant</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <IoChevronForward className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            {/* Underline personnalisée */}
            <div className="absolute left-0 w-full h-1 transition-transform duration-200 transform -bottom-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></div>
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
        {technologies.map((tech) => {
          const { iconComponent: IconComponent, iconColor } = getTechData(tech);
          return (
            <TechRectangularBadge
              key={tech}
              name={tech}
              icon={<IconComponent className={`w-4 h-4${iconColor}`} />}
            />
          );
        })}
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
  <div className="flex flex-col gap-4 sm:flex-row">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-black rounded transition-all duration-300 bg-zinc-100 ring-inset ring-zinc-500 ring-2 hover:ring-zinc-800 hover:bg-white"
        aria-label="Voir le code source sur GitHub">
        <IoLogoGithub className="w-5 h-5" />
        Code source
      </a>
    )}
    {demo && (
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-white rounded transition-all duration-300 bg-orange-600 hover:bg-orange-700"
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
