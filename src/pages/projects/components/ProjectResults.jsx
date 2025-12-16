import PropTypes from "prop-types";

/**
 * Composant des résultats du projet
 * @param {Object} props
 * @param {Array<string>} props.results - Liste des résultats
 * @returns {JSX.Element}
 */
const ProjectResults = ({ results }) => (
  <div className="mb-8">
    <h3 className="mb-4 text-xl font-bold text-black">Résultats obtenus</h3>
    <ul className="space-y-3">
      {results.map((result, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
          <span className="text-zinc-700">{result}</span>
        </li>
      ))}
    </ul>
  </div>
);

ProjectResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectResults;
