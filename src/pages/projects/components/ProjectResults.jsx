import PropTypes from "prop-types";

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

ProjectResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectResults;
