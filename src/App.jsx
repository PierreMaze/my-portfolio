import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import { ParallaxGrid } from "./components/ui/ParallaxGrid";
import { ProjectDetails } from "./features/projects/components/ProjectDetails";
import { useSmoothScroll } from "./hooks/useSmoothScroll.jsx";
import About from "./pages/About";
import Home from "./pages/Home";
import Legal from "./pages/Legal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "legal",
        element: <Legal />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetails />,
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
