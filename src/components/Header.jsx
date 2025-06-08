import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  {
    label: "Accueil",
    path: "#home",
  },
  {
    label: "Compétences",
    path: "#skills",
  },
  {
    label: "Projets",
    path: "#projects",
  },
  {
    label: "Parcours",
    path: "#timeline",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Mémoriser les sections pour éviter de les recalculer à chaque rendu
  const sections = useMemo(
    () => ["home", "projects", "skills", "timeline", "contact"],
    []
  );

  // Optimiser la fonction de gestion du scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);

    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, [sections]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Optimiser la fonction de navigation
  const handleNavClick = useCallback((path) => {
    if (path.startsWith("#")) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Mémoriser les classes conditionnelles
  const headerClasses = useMemo(() => {
    return `fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    } ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
    }`;
  }, [isScrolled, isVisible]);

  return (
    <header className={headerClasses}>
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-accent">
            Portfolio
          </Link>

          {/* Navigation desktop */}
          <div className="hidden items-center space-x-1 md:flex">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 text-dark/70 hover:text-accent transition-colors ${
                  activeSection === item.path.substring(1) ? "text-accent" : ""
                }`}>
                {item.label}
              </button>
            ))}
          </div>

          {/* Bouton menu mobile */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t md:hidden">
            <div className="container py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left px-4 py-2 text-dark/70 hover:text-accent transition-colors ${
                    activeSection === item.path.substring(1)
                      ? "text-accent"
                      : ""
                  }`}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
