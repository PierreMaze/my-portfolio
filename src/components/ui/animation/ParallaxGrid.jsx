import { useCallback, useEffect, useState } from "react";

const ParallaxGrid = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // Throttle le scroll pour améliorer les performances
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Grille de fond */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(93, 123, 138, 0.5) 2px, transparent 2px),
            linear-gradient(90deg, rgba(93, 123, 138, 0.5) 2px, transparent 2px)
          `,
          backgroundSize: "50px 50px",
          backgroundPosition: `0 ${scrollY * 0.1}px`,
          transition: "background-position 0.05s ease-out",
        }}
      />

      {/* Dégradé de fond */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-accent-50 via-gray-50 to-orange-50"
        style={{
          opacity: 0.9,
        }}
      />
    </div>
  );
};

export default ParallaxGrid;
