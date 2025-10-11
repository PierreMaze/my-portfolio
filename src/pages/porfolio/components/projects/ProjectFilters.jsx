import PropTypes from "prop-types";
import { FadeIn } from "../../../../components/ui";
import { ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary } from "../../../../components/ui/buttons";

/**
 * Composant des filtres de projets
 * @param {Object} props
 * @param {Array<string>} props.categories - Liste des catégories disponibles
 * @param {string} props.selectedCategory - Catégorie actuellement sélectionnée
 * @param {Function} props.handleCategoryChange - Fonction de changement de catégorie
 * @returns {JSX.Element}
 */
const ProjectFilters = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <FadeIn className="delay-100">
      <fieldset className="mb-12">
        <legend className="sr-only">Filtres de catégories de projets</legend>
        <ul
          className="flex flex-wrap justify-start gap-2"
          role="radiogroup"
          aria-label="Filtres de catégories de projets">
          {categories.map((category) => (
            <li key={category}>
              <ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary
                key={category}
                onClick={() => handleCategoryChange(category)}
                isActive={selectedCategory === category}
                ariaLabel={`Filtrer par ${category}`}>
                {category}
              </ButtonRectangularSecondaryHoveredSecondaryFocusedPrimary>
            </li>
          ))}
        </ul>
      </fieldset>
    </FadeIn>
  );
};

ProjectFilters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

export default ProjectFilters;
