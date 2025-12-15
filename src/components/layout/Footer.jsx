import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
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
            size="small"
            variant="github"
            title="Github"
            ariaLabel="GitHub">
            <IoLogoGithub className="w-full h-full" />
          </ButtonIconsSecondaryHoveredColoredQuarteRotate>
          <ButtonIconsSecondaryHoveredColoredQuarteRotate
            href="https://fr.linkedin.com/in/pierremazelaygue"
            size="small"
            variant="linkedin"
            title="LinkedIn"
            ariaLabel="LinkedIn">
            <IoLogoLinkedin className="w-full h-full" />
          </ButtonIconsSecondaryHoveredColoredQuarteRotate>
        </div>
        <div className="my-4">
          <ButtonUnderlineSecondaryHoveredPrimary to="/my-portfolio/legal">
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
