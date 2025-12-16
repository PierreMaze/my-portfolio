import { Outlet } from "react-router-dom";
import { ParallaxGrid } from "../components/ui/index.jsx";
import { ProjectsProvider } from "../contexts/index.jsx";
import {
  useScrollToHash,
  useScrollToTop,
  useSmoothScroll,
} from "../hooks/index.jsx";

const AppRoot = () => {
  useSmoothScroll();
  useScrollToTop();
  useScrollToHash();

  return (
    <ProjectsProvider>
      <div className="bg-light relative min-h-screen px-6 md:px-12 xl:px-24 2xl:px-96">
        <ParallaxGrid />
        <Outlet />
      </div>
    </ProjectsProvider>
  );
};

export default AppRoot;
