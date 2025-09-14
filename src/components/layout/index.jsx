import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ChunkErrorBoundary } from "../ui/ChunkErrorBoundary";
import { MiniLoader } from "../ui/MiniLoader";
import Header from "./Header";

// Lazy loading du Footer (non-critique pour le LCP)
const Footer = lazy(() => import("./Footer"));

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ChunkErrorBoundary>
        <Suspense fallback={<MiniLoader message="Chargement du footer..." />}>
          <Footer />
        </Suspense>
      </ChunkErrorBoundary>
    </div>
  );
};

export default Layout;
