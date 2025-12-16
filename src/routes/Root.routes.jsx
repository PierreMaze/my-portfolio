import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/index.jsx";
import { LoadingFallback } from "../components/ui/index.jsx";
import RouteErrorBoundary from "../components/ui/error/RouteErrorBoundary.jsx";
import AppRoot from "./RootLayout.routes.jsx";

// Lazy loading des pages
const Home = lazy(() => import("../pages/porfolio/HomePage"));
const About = lazy(() => import("../pages/AboutPage"));
const Legal = lazy(() => import("../pages/LegalPage"));
const Error = lazy(() => import("../pages/ErrorPage"));
const ProjectPage = lazy(() => import("../pages/projects/ProjectPage"));

// Composant de fallback amélioré pour les routes
const RouteFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <LoadingFallback message="Chargement de la page..." />
  </div>
);

// Configuration du router avec layout route
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: "/my-portfolio/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<RouteFallback />}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: "about",
            element: (
              <Suspense fallback={<RouteFallback />}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "legal",
            element: (
              <Suspense fallback={<RouteFallback />}>
                <Legal />
              </Suspense>
            ),
          },
          {
            path: "projects/:id",
            element: (
              <Suspense fallback={<RouteFallback />}>
                <ProjectPage />
              </Suspense>
            ),
          },
          {
            path: "*",
            element: (
              <Suspense fallback={<RouteFallback />}>
                <Error />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

// Composant principal du router
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
