import { useCallback, useEffect, useState } from "react";

export const Background = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Grille de fond */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(93, 123, 138, 0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(93, 123, 138, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: "50px 50px",
          backgroundPosition: `0 ${scrollY * 0.2}px`,
          transition: "background-position 0.1s ease-out",
        }}
      />

      {/* Dégradé de fond */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"
        style={{
          opacity: 0.9,
        }}
      />
    </div>
  );
};
