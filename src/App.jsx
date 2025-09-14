import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout";
import { ParallaxGrid } from "./components/ui/ParallaxGrid";
import { ChunkErrorBoundary } from "./components/ui/ChunkErrorBoundary";
import { MiniLoader } from "./components/ui/MiniLoader";
import { useSmoothScroll } from "./hooks/useSmoothScroll.jsx";

// Lazy loading des pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Legal = lazy(() => import("./pages/Legal"));
const ProjectDetails = lazy(() => import("./features/projects/components/ProjectDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ChunkErrorBoundary>
            <Suspense fallback={<MiniLoader message="Chargement de l'accueil..." />}>
              <Home />
            </Suspense>
          </ChunkErrorBoundary>
        ),
      },
      {
        path: "about",
        element: (
          <ChunkErrorBoundary>
            <Suspense fallback={<MiniLoader message="Chargement de la page À propos..." />}>
              <About />
            </Suspense>
          </ChunkErrorBoundary>
        ),
      },
      {
        path: "legal",
        element: (
          <ChunkErrorBoundary>
            <Suspense fallback={<MiniLoader message="Chargement des mentions légales..." />}>
              <Legal />
            </Suspense>
          </ChunkErrorBoundary>
        ),
      },
      {
        path: "projects/:id",
        element: (
          <ChunkErrorBoundary>
            <Suspense fallback={<MiniLoader message="Chargement des détails du projet..." />}>
              <ProjectDetails />
            </Suspense>
          </ChunkErrorBoundary>
        ),
      },
    ],
  },
]);

const App = () => {
  useSmoothScroll();

  return (
    <div className="relative px-6 min-h-screen bg-light md:px-12 xl:px-24 2xl:px-96">
      <ParallaxGrid />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
