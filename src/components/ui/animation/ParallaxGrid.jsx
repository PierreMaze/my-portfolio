import { useEffect, useRef } from "react";

const ParallaxGrid = () => {
  const gridRef = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (!gridRef.current) return;

    const grid = gridRef.current;

    const throttledHandleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;

        requestAnimationFrame(() => {
          // Lire scrollY et appliquer directement au style (pas de setState)
          const scrollY = window.scrollY;
          const offset = scrollY * 0.1;

          // Utiliser transform au lieu de backgroundPosition (GPU-accelerated)
          grid.style.transform = `translateY(${offset}px)`;

          tickingRef.current = false;
        });
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0" style={{ zIndex: -1 }}>
      {/* Grille de fond */}
      <div
        ref={gridRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(93, 123, 138, 0.5) 2px, transparent 2px),
            linear-gradient(90deg, rgba(93, 123, 138, 0.5) 2px, transparent 2px)
          `,
          backgroundSize: "50px 50px",
          willChange: "transform", // Hint pour GPU
        }}
      />

      {/* Dégradé de fond */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-slate-50 to-slate-100"
        style={{
          opacity: 0.9,
        }}
      />
    </div>
  );
};

export default ParallaxGrid;
