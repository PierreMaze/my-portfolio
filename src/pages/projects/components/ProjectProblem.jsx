import PropTypes from "prop-types";
import { FadeIn } from "../../../components/ui/animation/index.jsx";

/**
 * Section problématique du projet avec objectifs et solution
 * @param {Object} props
 * @param {string} props.problem - Description de la problématique
 * @param {string[]} props.objectives - Liste des objectifs
 * @param {string} props.solution - Description de la solution
 * @returns {JSX.Element}
 */
const ProjectProblem = ({ problem, objectives, solution }) => (
  <FadeIn className="delay-200">
    <section>
      <h2 className="mb-4 text-2xl font-bold text-black">Problématique</h2>
      <p className="mb-6 leading-relaxed text-zinc-700">{problem}</p>

      <h3 className="mb-4 text-xl font-semibold text-black">Objectifs</h3>
      <ul className="mb-6 space-y-3">
        {objectives.map((objective, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-orange-500" />
            <span className="text-zinc-700">{objective}</span>
          </li>
        ))}
      </ul>

      <h3 className="mb-4 text-xl font-semibold text-black">Solution</h3>
      <p className="leading-relaxed text-zinc-700">{solution}</p>
    </section>
  </FadeIn>
);

ProjectProblem.propTypes = {
  problem: PropTypes.string.isRequired,
  objectives: PropTypes.arrayOf(PropTypes.string).isRequired,
  solution: PropTypes.string.isRequired,
};

export default ProjectProblem;
