import { lazy, Suspense } from "react";
import { MiniLoader } from "./MiniLoader";

// Lazy loading des icônes de compétences
const SkillIcons = lazy(() => import("./SkillIcons"));

/**
 * Composant LazySkillBadges
 * Wrapper pour lazy-load les badges de compétences avec Suspense
 */
export const LazySkillBadges = ({ children, ...props }) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center p-4">
          <MiniLoader message="Chargement des compétences..." />
        </div>
      }>
      {children}
    </Suspense>
  );
};
