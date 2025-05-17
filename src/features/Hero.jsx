import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import ImgAvatar from "../assets/avatar.png";
import { FadeIn } from "../components/FadeIn";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-20">
      <div className="container flex">
        <FadeIn>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Développeur
              <span className="relative inline-block ml-4">
                <span
                  className="absolute block -skew-y-3 bg-yellow-200 -inset-1"
                  aria-hidden="true"></span>
                <span className="relative">Fullstack</span>
              </span>
            </h1>
            <p className="mb-8 text-xl text-dark/70">
              Je crée des applications web modernes et performantes avec React,
              Node.js et TailwindCSS.
            </p>
            {/* Btn et liens sociaux */}
            <div className="flex">
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
        <a href="/about" className="flex-shrink-0 w-1/4 mx-auto">
          <img
            src={ImgAvatar}
            alt="Mon avatar"
            className="object-cover w-full h-full transition-transform rounded-full hover:scale-105"
            width="64"
            height="64"
          />
        </a>
      </div>
    </section>
  );
};
