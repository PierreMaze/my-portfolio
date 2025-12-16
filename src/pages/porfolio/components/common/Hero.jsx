import { lazy, Suspense, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdDownloadDone } from "react-icons/md";
import ImgAvatar from "../../../../assets/avatar.png";
import ImgAvatarWebp from "../../../../assets/avatar.webp";
import {
  ButtonIconsSecondaryHoveredColoredQuarteRotate,
  ButtonRectangularPrimary,
  FadeIn,
  ImageLoader,
  SmartImage,
} from "../../../../components/ui";

// Lazy loading de l'image simple
const SimpleImage = lazy(
  () => import("../../../../components/ui/loader/ImageLoader"),
);

const Hero = () => {
  const [downloadState, setDownloadState] = useState("default"); // 'default', 'loading', 'done'

  const handleDownload = () => {
    setDownloadState("loading");

    // Créer un lien temporaire pour le téléchargement
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}docs/CV_SPONTANEE.pdf`;
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
    <section
      className="flex min-h-screen items-center justify-center"
      style={{ paddingTop: "-200px" }}
    >
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center lg:gap-0 2xl:gap-48">
        <FadeIn>
          <div className="mt-4 max-w-3xl text-center md:text-left 2xl:max-w-screen-lg">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl 2xl:text-6xl">
              Développeur
              <span className="relative ml-4 inline-block">
                <span
                  className="absolute -inset-1 block -skew-y-3 bg-orange-200"
                  aria-hidden="true"
                ></span>
                <span className="relative">Fullstack</span>
              </span>
            </h1>
            <p className="mb-8 text-base text-zinc-800 md:text-xl">
              Je crée des applications web modernes et performantes avec React,
              Node.js et TailwindCSS.
            </p>
            {/* Btn et liens sociaux */}
            <div className="flex justify-center md:justify-start">
              <div className="m-4 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <ButtonIconsSecondaryHoveredColoredQuarteRotate
                    href="https://github.com/PierreMaze"
                    size="medium"
                    variant="github"
                    title="GitHub"
                    ariaLabel="GitHub"
                  >
                    <IoLogoGithub className="h-full w-full" />
                  </ButtonIconsSecondaryHoveredColoredQuarteRotate>

                  <ButtonIconsSecondaryHoveredColoredQuarteRotate
                    href="https://fr.linkedin.com/in/pierremazelaygue"
                    size="medium"
                    variant="linkedin"
                    title="LinkedIn"
                    ariaLabel="LinkedIn"
                  >
                    <IoLogoLinkedin className="h-full w-full" />
                  </ButtonIconsSecondaryHoveredColoredQuarteRotate>
                </div>
                <div>
                  <ButtonRectangularPrimary
                    onClick={handleDownload}
                    ariaLabel="Télécharger mon CV au format PDF"
                    className="mx-8 w-3/4"
                  >
                    {getDownloadIcon()}
                    Mon CV
                  </ButtonRectangularPrimary>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        {/* Avatar */}
        <a
          href="/about"
          className="mx-auto mt-12 inline-block h-52 w-52 hover:shadow-2xl hover:shadow-amber-600/50 focus:ring-0 focus:outline-none md:mx-4 md:mt-48 lg:mt-16 lg:h-80 lg:w-80 2xl:scale-150"
        >
          <Suspense
            fallback={<ImageLoader className="h-full w-full rounded-md" />}
          >
            <SmartImage
              src={ImgAvatar}
              webp={ImgAvatarWebp}
              alt="Mon avatar"
              className="h-full w-full rounded-md object-cover transition-transform hover:scale-105"
              width={256}
              height={256}
              priority
            />
          </Suspense>
        </a>
      </div>
    </section>
  );
};

export default Hero;
