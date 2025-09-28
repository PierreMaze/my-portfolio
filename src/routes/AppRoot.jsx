import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ParallaxGrid } from "../components/ui";
import { ProjectsProvider } from "../contexts";
import { useSmoothScroll } from "../hooks";

const AppRoot = () => {
  useSmoothScroll();
  const location = useLocation();

  // Scroll vers le haut à chaque changement de route
  useEffect(() => {
    // Scroll immédiat et fluide vers le haut
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

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
