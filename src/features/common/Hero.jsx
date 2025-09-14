import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdDownloadDone } from "react-icons/md";
import ImgAvatar from "../../assets/avatar.png";
import { FadeIn } from "../../components/ui/FadeIn";
import OptimizedImage from "../../components/ui/OptimizedImage";

const Hero = () => {
  const [downloadState, setDownloadState] = useState("default"); // 'default', 'loading', 'done'

  const handleDownload = () => {
    setDownloadState("loading");

    // Créer un lien temporaire pour le téléchargement
    const link = document.createElement("a");
    link.href = "/docs/CV_SPONTANEE.pdf";
    link.download = "CV_PierreMazelaygue.pdf";

    // Simuler un délai de téléchargement
    setTimeout(() => {
      link.click();
      setDownloadState("done");
      // Réinitialiser après 2 secondes
      setTimeout(() => {
        setDownloadState("default");
      }, 2000);
    }, 1500);
  };

  const getDownloadIcon = () => {
    switch (downloadState) {
      case "loading":
        return <FiLoader className="animate-spin" />;
      case "done":
        return <MdDownloadDone />;
      default:
        return <IoMdDownload />;
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center 2xl:gap-48">
        <FadeIn>
          <div className="text-center max-w-3xl md:text-left 2xl:max-w-screen-lg">
            <h1 className="text-5xl font-bold mb-6 md:text-6xl 2xl:text-7xl">
              Développeur
              <span className="relative inline-block ml-4">
                <span
                  className="absolute block -skew-y-3 bg-orange-200 -inset-1"
                  aria-hidden="true"></span>
                <span className="relative">Fullstack</span>
              </span>
            </h1>
            <p className="text-base md:text-xl mb-8 text-dark/70">
              Je crée des applications web modernes et performantes avec React,
              Node.js et TailwindCSS.
            </p>
            {/* Btn et liens sociaux */}
            <div className="flex justify-center md:justify-start">
              <div className="flex items-center justify-between m-4">
                <div className="flex items-center space-x-6 text-orange-500">
                  <a
                    href="https://github.com/PierreMaze"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 transition-transform hover:rotate-12">
                    <IoLogoGithub className="w-full h-full transition-colors hover:text-purple-600" />
                  </a>

                  <a
                    href="https://fr.linkedin.com/in/pierremazelaygue"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 transition-transform hover:rotate-12">
                    <IoLogoLinkedin className="w-full h-full transition-colors hover:text-blue-600" />
                  </a>
                </div>
                <div>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 mx-8 text-base font-medium text-white rounded transition-all duration-300 bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed">
                    {getDownloadIcon()}
                    Mon CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        {/* Avatar */}
        <a
          href="/about"
          className="mx-auto h-48 mt-16 hover:shadow-2xl hover:shadow-amber-600 md:mt-0w-48 md:w-80 md:h-80 2xl:scale-150">
          <OptimizedImage
            src={ImgAvatar}
            alt="Mon avatar"
            className="w-full h-full rounded-md transition-transform object-cover hover:scale-105"
            width="256"
            height="256"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
