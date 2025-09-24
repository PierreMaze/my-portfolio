import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import { ParallaxGrid } from "./components/ui";
import { ProjectsProvider } from "./contexts";
import { useSmoothScroll } from "./hooks";

// Lazy loading des pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Legal = lazy(() => import("./pages/Legal"));
const Error = lazy(() => import("./pages/Error"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="min-h-screen" />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div className="min-h-screen" />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "legal",
        element: (
          <Suspense fallback={<div className="min-h-screen" />}>
            <Legal />
          </Suspense>
        ),
      },
      {
        path: "projects/:id",
        element: (
          <Suspense fallback={<div className="min-h-screen" />}>
            <ProjectPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div className="min-h-screen" />}>
            <Error statusCode={404} />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  useSmoothScroll();

  // S'assurer que le scroll est à 0 au chargement initial
  useEffect(() => {
    // Forcer le scroll à 0 immédiatement au chargement
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    // Forcer à nouveau après un délai pour s'assurer
    const timer = setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ProjectsProvider>
      <div className="relative px-6 min-h-screen bg-light md:px-12 xl:px-24 2xl:px-96">
        <ParallaxGrid />
        <RouterProvider router={router} />
      </div>
    </ProjectsProvider>
  );
};

export default App;
