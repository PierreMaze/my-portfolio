import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ParallaxGrid } from "../components/ui";
import { ProjectsProvider } from "../contexts";
import { useSmoothScroll } from "../hooks";

const AppRoot = () => {
  useSmoothScroll();

  // Remonter la page en haut au rafraîchissement
  useEffect(() => {
    // Forcer la position en haut immédiatement et de manière répétée
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Exécuter immédiatement
    forceScrollToTop();

    // Répéter plusieurs fois pour s'assurer que ça reste en haut
    const intervals = [
      setTimeout(forceScrollToTop, 0),
      setTimeout(forceScrollToTop, 10),
      setTimeout(forceScrollToTop, 50),
      setTimeout(forceScrollToTop, 100),
      setTimeout(forceScrollToTop, 200),
    ];

    // Cleanup
    return () => {
      intervals.forEach(clearTimeout);
    };
  }, []);

  return (
    <ProjectsProvider>
      <div className="relative px-6 min-h-screen bg-light md:px-12 xl:px-24 2xl:px-96">
        <ParallaxGrid />
        <Outlet />
      </div>
    </ProjectsProvider>
  );
};

export default AppRoot;
