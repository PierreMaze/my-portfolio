import { lazy, Suspense, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdDownloadDone } from "react-icons/md";
import ImgAvatar from "../../assets/avatar.png";
import { FadeIn, ImageLoader } from "../../components/ui";

// Lazy loading de l'image simple
const SimpleImage = lazy(() => import("../../components/ui/image/SimpleImage"));

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
      <div className="flex flex-col-reverse items-center gp-8 lg:gap-0 md:flex-row md:items-center 2xl:gap-48">
        <FadeIn>
          <div className="text-center mt-4 max-w-3xl md:text-left 2xl:max-w-screen-lg">
            <h1 className="text-4xl font-bold mb-6 md:text-6xl 2xl:text-6xl">
              Développeur
              <span className="relative inline-block ml-4">
                <span
                  className="absolute block -skew-y-3 bg-orange-200 -inset-1"
                  aria-hidden="true"></span>
                <span className="relative">Fullstack</span>
              </span>
            </h1>
            <p className="text-base md:text-xl mb-8 text-zinc-800">
              Je crée des applications web modernes et performantes avec React,
              Node.js et TailwindCSS.
            </p>
            {/* Btn et liens sociaux */}
            <div className="flex justify-center md:justify-start">
              <div className="flex items-center justify-between m-4">
                <div className="flex items-center space-x-6">
                  <a
                    href="https://github.com/PierreMaze"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 transition-transform hover:rotate-12 focus:outline-none focus:ring-0">
                    <IoLogoGithub className="w-full h-full transition-colors text-zinc-900 hover:text-zinc-700" />
                  </a>

                  <a
                    href="https://fr.linkedin.com/in/pierremazelaygue"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 transition-transform hover:rotate-12 focus:outline-none focus:ring-0">
                    <IoLogoLinkedin className="w-full h-full transition-colors text-zinc-900 hover:text-blue-600" />
                  </a>
                </div>
                <div>
                  <button
                    onClick={handleDownload}
                    aria-label="Télécharger mon CV au format PDF"
                    className="inline-flex items-center justify-center gap-2 py-2 mx-8 w-3/4 text-base font-medium text-white rounded transition-all duration-300 bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed">
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
          className="inline-block mx-auto h-52 md:mx-4 lg:mt-16 hover:shadow-2xl hover:shadow-amber-600/50 md:mt-48 lg:w-80 lg:h-80 2xl:scale-150 focus:outline-none focus:ring-0">
          <Suspense
            fallback={<ImageLoader className="w-full h-full rounded-md" />}>
            <SimpleImage
              src={ImgAvatar}
              alt="Mon avatar"
              fetchpriority="high"
              className="w-full h-full rounded-md transition-transform object-cover hover:scale-105"
              width="256"
              height="256"
              priority={true}
            />
          </Suspense>
        </a>
      </div>
    </section>
  );
};

export default Hero;
