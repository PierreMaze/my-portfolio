import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { RiPokerHeartsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 text-center xl:pt-16 group bg-dark text-light">
      <div className="container">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/PierreMaze"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-transform hover:text-highlight hover:rotate-12">
            <FaGithub className="transition-colors hover:text-purple-600" />
          </a>
          <a
            href="https://fr.linkedin.com/in/pierremazelaygue"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-transform hover:text-highlight hover:rotate-12">
            <FaLinkedin className="transition-colors hover:text-blue-600" />
          </a>
        </div>
        <div className="my-4 hover:text-accent-600">
          <Link to="/legal">Mentions légales</Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 px-8 w-full text-sm">
        <p>Pierre MAZELAYGUE | Développeur Fullstack</p>
        <p>&copy; 2025 - Tous droits réservés.</p>
        <p className="flex flex-row justify-center gap-x-2 text-center">
          Fait avec{" "}
          <RiPokerHeartsLine className="transition-colors group-hover:text-red-500 group-hover:animate-pulse" />{" "}
          et beaucoup de{" "}
          <GiCoffeeCup className="transition-colors group-hover:text-amber-900 group-hover:animate-pulse" />
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
