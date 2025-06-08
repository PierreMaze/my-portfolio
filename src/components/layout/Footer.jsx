import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 text-center bg-dark text-light">
      <div className="container">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#"
            className="text-2xl transition-colors hover:text-highlight">
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-2xl transition-colors hover:text-highlight">
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; 2025 - Portfolio Développeur Fullstack</p>
        <Link to="/legal">Mentions légales</Link>
      </div>
    </footer>
  );
};

export default Footer;
