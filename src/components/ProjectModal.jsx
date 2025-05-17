import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBehance,
  FaCube,
  FaDribbble,
  FaFigma,
  FaGithub,
  FaPencilAlt,
  FaPlay,
  FaTag,
} from "react-icons/fa";
import {
  MdOutlineAssessment,
  MdOutlineCode,
  MdOutlineEmojiObjects,
  MdOutlineLightbulb,
  MdOutlineNote,
  MdOutlineScience,
} from "react-icons/md";

export const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = project?.images || [project?.image];

  // Gestion du scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
        onKeyDown={handleKeyDown}
        tabIndex={0}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-[95vw] h-[90vh] overflow-hidden bg-accent-200 rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}>
          {/* Bouton retour */}
          <button
            onClick={onClose}
            className="absolute z-10 p-3 transition-all duration-300 ease-in-out bg-white rounded-full top-4 left-4 hover:bg-accent hover:text-white">
            <FaArrowLeft className="w-6 h-6" />
          </button>

          {/* Contenu scrollable */}
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Device Frame avec Carousel */}
            <div className="relative w-full max-w-4xl px-8 mx-auto my-8">
              <div className="relative p-4 bg-gray-300 rounded-lg shadow-lg">
                {/* Barre de titre du device */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                {/* Image dans le device */}
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src={images[currentImageIndex]}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute p-3 transition-colors -translate-y-1/2 bg-white rounded-full left-4 top-1/2 hover:bg-accent hover:text-white">
                        <FaArrowLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute p-3 transition-colors -translate-y-1/2 bg-white rounded-full right-4 top-1/2 hover:bg-accent hover:text-white">
                        <FaArrowRight className="w-6 h-6" />
                      </button>
                      {/* Indicateurs de navigation */}
                      <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex
                                ? "bg-accent"
                                : "bg-white hover:bg-accent/80"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Contenu textuel */}
            <div className="flex-1 p-8 bg-accent-50">
              <div className="max-w-3xl mx-auto">
                {/* En-tête avec titre */}
                <div className="mb-8">
                  <h3 className="mb-4 text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-full bg-accent/10 text-accent">
                        <FaTag className="w-4 h-4" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {project.description}
                  </p>
                </div>

                {/* Tableau détaillé */}
                <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-sm">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="w-1/4 px-6 py-5 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineLightbulb className="w-5 h-5 text-accent" />
                            Problématique
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          {project.problem}
                        </td>
                      </tr>
                      <tr className="bg-[#fafaf8]">
                        <td className="w-1/4 px-6 py-5 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineEmojiObjects className="w-5 h-5 text-accent" />
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
                        <td className="w-1/4 px-6 py-5 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineScience className="w-5 h-5 text-accent" />
                            Solution
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          {project.solution}
                        </td>
                      </tr>
                      <tr className="bg-[#fafaf8]">
                        <td className="w-1/4 px-6 py-5 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineCode className="w-5 h-5 text-accent" />
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
                        <td className="w-1/4 px-6 py-5 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <FaTag className="w-5 h-5 text-accent" />
                            Technologies
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1.5 text-sm font-medium bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#fafaf8]">
                        <td className="w-1/4 px-6 py-5 font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <MdOutlineAssessment className="w-5 h-5 text-accent" />
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
                </div>

                {/* Liens du projet */}
                <div>
                  <h4 className="mb-4 text-lg font-semibold">
                    Liens du projet
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        <FaGithub className="w-5 h-5" />
                        GitHub
                      </a>
                    )}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        <FaFigma className="w-5 h-5" />
                        Figma
                      </a>
                    )}
                    {project.diagram && (
                      <a
                        href={project.diagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        <FaCube className="w-5 h-5" />
                        Diagram
                      </a>
                    )}
                    {project.excalidraw && (
                      <a
                        href={project.excalidraw}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        <FaPencilAlt className="w-5 h-5" />
                        Excalidraw
                      </a>
                    )}
                    {project.notion && (
                      <a
                        href={project.notion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        <MdOutlineNote className="w-5 h-5" />
                        Notion
                      </a>
                    )}
                    {project.behance && (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        <FaBehance className="w-5 h-5" />
                        Behance
                      </a>
                    )}
                    {project.dribbble && (
                      <a
                        href={project.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        <FaDribbble className="w-5 h-5" />
                        Dribbble
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white transition-colors rounded-lg bg-accent hover:bg-accent/90">
                        <FaPlay className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
