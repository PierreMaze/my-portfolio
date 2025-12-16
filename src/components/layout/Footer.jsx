import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import {
  ButtonIconsSecondaryHoveredColoredQuarteRotate,
  ButtonUnderlineSecondaryHoveredPrimary,
} from "../ui/buttons";

const Footer = () => {
  return (
    <footer className="group pt-16 pb-12 text-center xl:pt-32">
      <div className="mx-auto w-full">
        <div className="mb-6 flex justify-center gap-6">
          <ButtonIconsSecondaryHoveredColoredQuarteRotate
            href="https://github.com/PierreMaze"
            size="small"
            variant="github"
            title="Github"
            ariaLabel="GitHub"
          >
            <IoLogoGithub className="h-full w-full" />
          </ButtonIconsSecondaryHoveredColoredQuarteRotate>
          <ButtonIconsSecondaryHoveredColoredQuarteRotate
            href="https://fr.linkedin.com/in/pierremazelaygue"
            size="small"
            variant="linkedin"
            title="LinkedIn"
            ariaLabel="LinkedIn"
          >
            <IoLogoLinkedin className="h-full w-full" />
          </ButtonIconsSecondaryHoveredColoredQuarteRotate>
        </div>
        <div className="my-4">
          <ButtonUnderlineSecondaryHoveredPrimary to="/my-portfolio/legal">
            Mentions légales
          </ButtonUnderlineSecondaryHoveredPrimary>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col gap-y-2 px-8 text-sm">
        <p>Pierre MAZELAYGUE | Développeur Fullstack</p>
        <p>&copy; 2025 - Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
