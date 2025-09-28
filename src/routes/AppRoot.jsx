import { Outlet } from "react-router-dom";
import { ParallaxGrid } from "../components/ui";
import { ProjectsProvider } from "../contexts";
import { useScrollToTop, useSmoothScroll } from "../hooks";

const AppRoot = () => {
  useSmoothScroll();
  useScrollToTop();

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
