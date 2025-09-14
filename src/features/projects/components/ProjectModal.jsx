import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBehance,
  FaCube,
  FaDribbble,
  FaFigma,
  FaGithub,
  FaPencilAlt,
  FaPlay,
  FaTag,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
  MdOutlineAssessment,
  MdOutlineCode,
  MdOutlineEmojiObjects,
  MdOutlineLightbulb,
  MdOutlineNote,
  MdOutlineScience,
} from "react-icons/md";
import OptimizedImage from "../../../components/ui/OptimizedImage";

/**
 * Composant ProjectModal
 * Affiche une modal détaillée pour un projet avec carousel d'images et informations
 */
export const ProjectModal = ({ project, isOpen, onClose }) => {
  // State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const images = project?.images || [project?.image];

  // Gestion du scroll et des touches
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Handlers
  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") onClose();
  };

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        tabIndex={0}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative rounded-xl shadow-2xl w-[95vw]h-[90vh]overflow-hidden bg-accent-200"
          onClick={(e) => e.stopPropagation()}>
          {/* Bouton retour */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute z-10 top-4 left-4">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center p-4 text-base font-medium bg-white border rounded transition-all duration-300 border-stone-500 hover:bg-stone-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 disabled:opacity-50 disabled:cursor-not-allowed">
              <IoClose className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Contenu scrollable */}
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Device Frame avec Carousel */}
            <div className="relative px-8 mx-auto my-8 w-full max-w-4xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative p-4 bg-gray-300 rounded-lg shadow-lg">
                {/* Barre de titre du device */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                {/* Image dans le device */}
                <div className="relative rounded-lg overflow-hidden aspect-video">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                      }}
                      className="absolute inset-0">
                      <OptimizedImage
                        src={images[currentImageIndex]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onLoad={() => setIsLoaded(true)}
                      />
                    </motion.div>
                  </AnimatePresence>
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <div className="w-8 h-8 border-4 rounded-full animate-spin border-accent border-t-transparent"></div>
                    </div>
                  )}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute inline-flex items-center justify-center p-4 text-base font-medium bg-white border rounded transition-all duration-300 -translate-y-1/2 left-4 top-1/2 border-stone-500 hover:bg-stone-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 disabled:opacity-50 disabled:cursor-not-allowed">
                        <IoChevronBack className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute inline-flex items-center justify-center p-4 text-base font-medium bg-white border rounded transition-all duration-300 -translate-y-1/2 right-4 top-1/2 border-stone-500 hover:bg-stone-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 disabled:opacity-50 disabled:cursor-not-allowed">
                        <IoChevronForward className="w-5 h-5" />
                      </button>
                      {/* Indicateurs de navigation */}
                      <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
                        {images.map((_, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? "bg-stone-500 scale-125"
                                : "bg-white hover:bg-stone-500/80"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Contenu textuel */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 p-8 bg-accent-50">
              <div className="mx-auto max-w-3xl">
                {/* En-tête avec titre */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-1.px-4 py-2 text-sm rounded-full transition-all duration-300 5 bg-stone-100 text-stone-700 hover:bg-stone-200">
                        <FaTag className="w-4 h-4" />
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {project.description}
                  </p>
                </motion.div>

                {/* Tableau détaillé */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="px-6 py-5 w-1/4 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineLightbulb className="w-5 h-5 text-stone-600" />
                            Problématique
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          {project.problem}
                        </td>
                      </tr>
                      <tr className="bg-[#fafaf8]">
                        <td className="px-6 py-5 w-1/4 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineEmojiObjects className="w-5 h-5 text-stone-600" />
                            Objectifs
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          <ul className="space-y-2 list-disc list-inside">
                            {project.objectives?.map((objective, index) => (
                              <li key={index} className="text-gray-700">
                                {objective}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-5 w-1/4 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineScience className="w-5 h-5 text-stone-600" />
                            Solution
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          {project.solution}
                        </td>
                      </tr>
                      <tr className="bg-[#fafaf8]">
                        <td className="px-6 py-5 w-1/4 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineCode className="w-5 h-5 text-stone-600" />
                            Obstacles
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          <ul className="space-y-2 list-disc list-inside">
                            {project.challenges?.map((challenge, index) => (
                              <li key={index} className="text-gray-700">
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-5 w-1/4 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <FaTag className="w-5 h-5 text-stone-600" />
                            Technologies
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech, index) => (
                              <motion.span
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1.text-sm font-medium text-gray-700 bg-white rounded-full transition-all duration-300 5 hover:bg-gray-50">
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#fafaf8]">
                        <td className="px-6 py-5 w-1/4 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineAssessment className="w-5 h-5 text-stone-600" />
                            Résultats
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          <ul className="space-y-2 list-disc list-inside">
                            {project.results?.map((result, index) => (
                              <li key={index} className="text-gray-700">
                                {result}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </motion.div>

                {/* Liens du projet */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}>
                  <h4 className="text-lg font-semibold mb-4">
                    Liens du projet
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-lg transition-all duration-300 hover:bg-gray-200">
                        <FaGithub className="w-5 h-5" />
                        GitHub
                      </motion.a>
                    )}
                    {project.figma && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-lg transition-all duration-300 hover:bg-gray-200">
                        <FaFigma className="w-5 h-5" />
                        Figma
                      </motion.a>
                    )}
                    {project.diagram && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.diagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-lg transition-all duration-300 hover:bg-gray-200">
                        <FaCube className="w-5 h-5" />
                        Diagram
                      </motion.a>
                    )}
                    {project.excalidraw && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.excalidraw}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-lg transition-all duration-300 hover:bg-gray-200">
                        <FaPencilAlt className="w-5 h-5" />
                        Excalidraw
                      </motion.a>
                    )}
                    {project.notion && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.notion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-lg transition-all duration-300 hover:bg-gray-200">
                        <MdOutlineNote className="w-5 h-5" />
                        Notion
                      </motion.a>
                    )}
                    {project.behance && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-lg transition-all duration-300 hover:bg-gray-200">
                        <FaBehance className="w-5 h-5" />
                        Behance
                      </motion.a>
                    )}
                    {project.dribbble && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-lg transition-all duration-300 hover:bg-gray-200">
                        <FaDribbble className="w-5 h-5" />
                        Dribbble
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white rounded-lg transition-all duration-300 bg-stone-500 hover:bg-stone-600">
                        <FaPlay className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
