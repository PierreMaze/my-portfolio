import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ButtonIconsSecondaryHoveredColoredQuarteRotate,
  ButtonUnderlineSecondaryHoveredPrimary,
} from "../ui/buttons";

const Footer = () => {
  return (
    <footer className="pt-16 pb-12 text-center xl:pt-32 group">
      <div className="mx-auto w-full">
        <div className="flex justify-center gap-6 mb-6">
          <ButtonIconsSecondaryHoveredColoredQuarteRotate
            href="https://github.com/PierreMaze"
            size="large"
            variant="github"
            title="Github"
            ariaLabel="GitHub">
            <FaGithub />
          </ButtonIconsSecondaryHoveredColoredQuarteRotate>
          <ButtonIconsSecondaryHoveredColoredQuarteRotate
            href="https://fr.linkedin.com/in/pierremazelaygue"
            size="large"
            variant="linkedin"
            title="LinkedIn"
            ariaLabel="LinkedIn">
            <FaLinkedin />
          </ButtonIconsSecondaryHoveredColoredQuarteRotate>
        </div>
        <div className="my-4">
          <ButtonUnderlineSecondaryHoveredPrimary to="/legal">
            Mentions légales
          </ButtonUnderlineSecondaryHoveredPrimary>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 px-8 w-full text-sm mt-8">
        <p>Pierre MAZELAYGUE | Développeur Fullstack</p>
        <p>&copy; 2025 - Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
