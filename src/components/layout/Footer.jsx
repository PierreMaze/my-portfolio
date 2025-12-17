import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Button, ButtonIcon } from "../ui/buttons";

const Footer = () => {
  return (
    <footer className="group pt-16 pb-12 text-center xl:pt-32">
      <div className="mx-auto w-full">
        <div className="mb-6 flex justify-center gap-6">
          <ButtonIcon
            href="https://github.com/PierreMaze"
            size="small"
            variant="github"
            title="Github"
            ariaLabel="GitHub"
          >
            <IoLogoGithub className="h-full w-full" />
          </ButtonIcon>
          <ButtonIcon
            href="https://fr.linkedin.com/in/pierremazelaygue"
            size="small"
            variant="linkedin"
            title="LinkedIn"
            ariaLabel="LinkedIn"
          >
            <IoLogoLinkedin className="h-full w-full" />
          </ButtonIcon>
        </div>
        <div className="my-4">
          <Button variant="link" size="md" to="/legal">
            Mentions légales
          </Button>
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
