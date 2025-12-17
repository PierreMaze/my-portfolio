import PropTypes from "prop-types";
import { IoLogoGithub } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";
import { Button } from "../../../components/ui/buttons";

/**
 * Composant des liens du projet
 * @param {Object} props
 * @param {string} props.github - Lien GitHub
 * @param {string} props.demo - Lien de démonstration
 * @returns {JSX.Element}
 */
const ProjectLinks = ({ github, demo }) => (
  <section className="mb-8">
    <div className="flex flex-wrap gap-4">
      {github && (
        <Button
          as="a"
          href={github}
          variant="secondary"
          size="md"
          iconLeft={<IoLogoGithub className="h-4 w-4" />}
          ariaLabel="Voir le code source sur GitHub"
          className="bg-zinc-800 text-white hover:bg-zinc-700 ring-0"
        >
          Code source
        </Button>
      )}
      {demo && (
        <Button
          as="a"
          href={demo}
          variant="primary"
          size="md"
          iconLeft={<HiExternalLink className="h-4 w-4" />}
          ariaLabel="Voir la démonstration du projet"
        >
          Voir le projet
        </Button>
      )}
    </div>
  </section>
);

ProjectLinks.propTypes = {
  github: PropTypes.string,
  demo: PropTypes.string,
};

export default ProjectLinks;
