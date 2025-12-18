import PropTypes from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { FadeIn } from "../../../components/ui/animation/index.jsx";
import { Button } from "../../../components/ui/buttons/index.jsx";
import SmartImage from "../../../components/ui/images/SmartImage.jsx";

/**
 * En-tête de la page projet avec bouton retour, titre, description et image principale
 * @param {Object} props
 * @param {string} props.title - Titre du projet
 * @param {string} props.description - Description du projet
 * @param {string} props.image - URL de l'image principale
 * @param {string} props.imageWebp - URL de l'image WebP
 * @param {Function} props.onBack - Fonction de callback pour le bouton retour
 * @returns {JSX.Element}
 */
const ProjectHeader = ({ title, description, image, imageWebp, onBack }) => (
  <>
    {/* En-tête du projet */}
    <FadeIn>
      <header className="mb-8">
        {/* Bouton de retour intégré dans le header */}
        <div className="my-12 flex items-center gap-4 lg:my-6">
          <Button
            variant="primary"
            size="md"
            onClick={onBack}
            ariaLabel="Retourner à la liste des projets"
            iconLeft={<IoArrowBack className="h-4 w-4" />}
          >
            Retour
          </Button>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-black md:text-4xl">
          {title}
        </h1>
        <p className="mb-6 text-lg text-zinc-900 md:text-xl">{description}</p>
      </header>
    </FadeIn>

    {/* Image principale du projet */}
    <FadeIn className="delay-100">
      <div className="relative mb-8 aspect-video overflow-hidden rounded shadow-lg">
        <SmartImage
          src={image}
          webp={imageWebp}
          alt={title}
          className="h-full w-full object-cover"
          width={600}
          height={400}
          priority
        />
      </div>
    </FadeIn>
  </>
);

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageWebp: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ProjectHeader;
