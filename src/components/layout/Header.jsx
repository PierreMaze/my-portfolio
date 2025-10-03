import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAVIGATION_ITEMS, SECTIONS } from "../../constants";
import { ButtonNavigationResponsiveUnderlineSecondaryHoveredUnderlinePrimaryFocusedAllPrimary } from "../ui/buttons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Navigation pour la page Legal
  const legalNavigationItems = [
    { path: "#informations-legales", label: "Informations Légales" },
    { path: "#hebergement", label: "Hébergement" },
    { path: "#propriete-intellectuelle", label: "Propriété Intellectuelle" },
    { path: "#protection-donnees", label: "Protection des Données" },
    { path: "#politique-cookies", label: "Politique des Cookies" },
    { path: "#contact-legal", label: "Contact" },
  ];

  // Mémoriser les sections pour éviter de les recalculer à chaque rendu
  const sections = useMemo(() => SECTIONS, []);

  // Optimiser la fonction de gestion du scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);

    // Déterminer les sections à surveiller selon la page
    const sectionsToWatch =
      location.pathname === "/legal"
        ? legalNavigationItems.map((item) => item.path.substring(1))
        : sections;

    const currentSection = sectionsToWatch.find((section) => {
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
  }, [sections, location.pathname, legalNavigationItems]);

  useEffect(() => {
    // Afficher le header immédiatement pour éviter les décalages
    setIsVisible(true);
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup: restaurer le scroll quand le composant est démonté
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Optimiser la fonction de navigation
  const handleNavClick = useCallback((path) => {
    if (path.startsWith("#")) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        // Ajuster l'offset pour la version mobile
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 60 : -10; // Plus d'offset sur mobile

        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } else if (path === "/") {
      // Navigation vers l'accueil
      window.location.href = "/";
    }
  }, []);

  // Mémoriser les classes conditionnelles
  const headerClasses = useMemo(() => {
    return `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled
        ? "bg-stone-200/50 backdrop-blur-lg shadow-sm"
        : "bg-transparent"
    } ${isVisible ? "opacity-100" : "opacity-0"}`;
  }, [isScrolled, isVisible]);

  return (
    <header className={headerClasses}>
      <div className="px-8 mx-auto w-full max-w-6xl 2xl:max-w-[1850px]">
        <nav className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-bold 2xl:text-4xl text-orange-500 focus:outline-none focus:ring-0 hover:outline-none">
            MAZE Dev.
          </Link>

          {/* Navigation desktop */}
          <div className="hidden items-center space-x-1 md:flex 2xl:text-xl">
            {location.pathname === "/legal" ||
            location.pathname === "/about" ? (
              // Navigation simplifiée pour les pages Legal et About
              <NavLink
                to="/"
                aria-label="Retour à l'accueil"
                className={({ isActive }) =>
                  `px-4 py-2 transition-colors focus:outline-none focus:ring-0 ${
                    isActive
                      ? "text-orange-600"
                      : "text-zinc-900 hover:text-orange-600"
                  }`
                }>
                Accueil
              </NavLink>
            ) : (
              // Navigation par défaut (page d'accueil)
              NAVIGATION_ITEMS.map((item) => (
                <ButtonNavigationResponsiveUnderlineSecondaryHoveredUnderlinePrimaryFocusedAllPrimary
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  isActive={activeSection === item.path.substring(1)}
                  ariaLabel={`Aller à la section ${item.label}`}>
                  {item.label}
                </ButtonNavigationResponsiveUnderlineSecondaryHoveredUnderlinePrimaryFocusedAllPrimary>
              ))
            )}
          </div>

          {/* Bouton menu mobile */}
          <button
            className="p-2 md:hidden focus:outline-none focus:ring-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}>
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay sombre */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 right-0 bottom-0 left-0 w-full h-full z-[9999]bg-black/20 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu principal */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                  duration: 0.4,
                }}
                className="fixed right-0 left-0 z-[10000]h-fit bg-white shadow-2xl md:hidden">
                {/* En-tête du menu */}
                <div className="p-6 border-none ring-1 ring-zinc-100">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Navigation
                  </h3>
                </div>

                {/* Liens de navigation */}
                <div className="flex-1 p-6">
                  <nav className="space-y-4">
                    {location.pathname === "/legal" ||
                    location.pathname === "/about" ? (
                      // Navigation mobile simplifiée pour les pages Legal et About
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1,
                          ease: "easeOut",
                        }}>
                        <NavLink
                          to="/"
                          onClick={() => setIsMobileMenuOpen(false)}
                          aria-label="Retour à l'accueil"
                          className={({ isActive }) =>
                            `px-4 py-3 w-full text-left rounded-lg transition-all duration-200 group focus:outline-none focus:ring-0 ${
                              isActive
                                ? "bg-orange-50 text-orange-600"
                                : "text-zinc-700 hover:bg-zinc-50 hover:text-orange-600"
                            }`
                          }>
                          <span className="text-lg font-medium transition-transform duration-200 group-hover:translate-x-1">
                            Accueil
                          </span>
                        </NavLink>
                      </motion.div>
                    ) : (
                      // Navigation mobile par défaut (page d'accueil)
                      NAVIGATION_ITEMS.map((item, index) => (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}>
                          <ButtonNavigationResponsiveUnderlineSecondaryHoveredUnderlinePrimaryFocusedAllPrimary
                            onClick={() => {
                              handleNavClick(item.path);
                              setIsMobileMenuOpen(false);
                            }}
                            isActive={activeSection === item.path.substring(1)}
                            ariaLabel={`Aller à la section ${item.label}`}
                            className="text-lg font-medium">
                            {item.label}
                          </ButtonNavigationResponsiveUnderlineSecondaryHoveredUnderlinePrimaryFocusedAllPrimary>
                        </motion.div>
                      ))
                    )}
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
