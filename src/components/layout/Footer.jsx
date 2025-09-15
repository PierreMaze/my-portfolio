import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-12 text-center xl:pt-32 group">
      <div className="mx-auto w-full">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/PierreMaze"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-transform hover:text-highlight hover:rotate-12">
            <FaGithub className="transition-colors text-zinc-900 hover:text-zinc-700" />
          </a>
          <a
            href="https://fr.linkedin.com/in/pierremazelaygue"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-transform hover:text-highlight hover:rotate-12">
            <FaLinkedin className="transition-colors text-zinc-900 hover:text-blue-600" />
          </a>
        </div>
        <div className="my-4 underline transition-colors underline-offset-auto hover:text-orange-500">
          <Link to="/legal">Mentions légales</Link>
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
