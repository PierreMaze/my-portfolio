import PropTypes from "prop-types";
import { StackTag } from "../../../components/ui/tags";

/**
 * Composant des stacks utilisées
 * @param {Object} props
 * @param {Array<string>} props.stacks - Liste des stacks
 * @returns {JSX.Element}
 */
const StacksTagsList = ({ stacks }) => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-xl font-bold text-black">Stacks utilisées</h3>
      <div className="flex flex-wrap gap-2">
        {stacks.map((stack) => (
          <StackTag key={stack} name={stack} type="rectangular" />
        ))}
      </div>
    </div>
  );
};

StacksTagsList.propTypes = {
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StacksTagsList;
