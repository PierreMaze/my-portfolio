import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import ImgAvatar from "../assets/avatar.png";
import { FadeIn } from "../components/FadeIn";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center py-20 min-h-screen">
      <div className="container flex flex-col-reverse items-center gap-8 md:flex-row md:items-center">
        <FadeIn>
          <div className="text-center max-w-3xl md:text-left">
            <h1 className="text-5xl font-bold mb-6 md:text-6xl">
              Développeur
              <span className="relative inline-block ml-4">
                <span
                  className="absolute block -skew-y-3 bg-yellow-200 -inset-1"
                  aria-hidden="true"></span>
                <span className="relative">Fullstack</span>
              </span>
            </h1>
            <p className="text-xl mb-8 text-dark/70">
              Je crée des applications web modernes et performantes avec React,
              Node.js et TailwindCSS.
            </p>
            {/* Btn et liens sociaux */}
            <div className="flex justify-center md:justify-start">
              <div className="flex items-center justify-between m-4">
                <div className="flex items-center space-x-6">
                  <a
                    href="https://github.com/votre-profil"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 transition-transform hover:rotate-12">
                    <IoLogoGithub className="w-full h-full transition-colors hover:text-purple-600" />
                  </a>

                  <a
                    href="https://linkedin.com/in/votre-profil"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 transition-transform hover:rotate-12">
                    <IoLogoLinkedin className="w-full h-full transition-colors hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        {/* Avatar */}
        <a href="/about" className="w-48 h-48 md:w-64 md:h-64">
          <img
            src={ImgAvatar}
            alt="Mon avatar"
            className="w-full h-full rounded-full transition-transform object-cover hover:scale-105"
            width="256"
            height="256"
          />
        </a>
      </div>
    </section>
  );
};
