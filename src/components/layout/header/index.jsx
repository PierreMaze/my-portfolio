import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HEADER_NAV_ITEMS_DESKTOP,
  HEADER_NAV_ITEMS_MOBILE,
  HEADER_SECONDARY_LINKS,
} from "../../../constants";
import { useActiveNav, useNavMenu } from "../../../hooks/header";
import { handleNavClick as handleNavClickShared } from "../../../utils/navigation.utils";
import {
  BrandLogo,
  DesktopNav,
  MobileMenuButton,
  MobileNav,
} from "./components/index.jsx";

export default function Header() {
  const { isAnchorActive, isRouteActive } = useActiveNav({
    sectionAnchors: HEADER_NAV_ITEMS_DESKTOP.map((item) => item.href),
  });
  const location = useLocation();
  const navigate = useNavigate();
  const {
    isMobileMenuOpen: mobileMenuOpen,
    setIsMobileMenuOpen: setMobileMenuOpen,
    isPopoverOpen,
    setIsPopoverOpen,
    handleNavClick: handleMenuNavClick,
  } = useNavMenu({
    navItems: HEADER_NAV_ITEMS_MOBILE,
    onNavigate: () => {
      // noop: fermeture déjà gérée dans le hook
    },
  });

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenus = useCallback(() => {
    setMobileMenuOpen(false);
    setIsPopoverOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (href) => {
      // Gérer les hash fragments (avec ou sans slash initial)
      const isHash = href?.startsWith("#") || href?.startsWith("/#");

      if (isHash) {
        // Extraire le fragment sans préfixe (ex: "#projects" → "#projects", "/#skills" → "#skills")
        const fragment = href.replace(/^\/?/, ""); // Retire le "/" initial si présent
        const basePath = import.meta.env.BASE_URL;
        const normalizedHref = `${basePath}${fragment}`; // "/my-portfolio/#projects"
        handleNavClickShared(
          { kind: "section", href: normalizedHref },
          navigate,
          location,
          closeMenus,
        );
      } else {
        handleNavClickShared(
          { kind: "route", to: href },
          navigate,
          location,
          closeMenus,
        );
      }
    },
    [navigate, location, closeMenus],
  );

  const handleBrandClick = useCallback(
    (e) => {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/#home", { replace: false });
      }
      closeMenus();
    },
    [location.pathname, navigate, closeMenus],
  );

  return (
    <header className="fixed top-0 right-0 left-0 z-40 w-full">
      {/* Container avec effet glassmorphism pour desktop */}
      <div className="border border-white/20 bg-white/80 shadow-xl shadow-black/10 backdrop-blur-lg">
        <nav
          aria-label="Global"
          className="flex w-full items-center justify-between px-8 py-3 lg:px-12 xl:px-18 2xl:px-32"
        >
          <div className="flex lg:flex-1">
            <BrandLogo onClick={handleBrandClick} />
          </div>
          <div className="flex lg:hidden">
            <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
          </div>
          <DesktopNav
            handleNavClick={handleNavClick}
            closeMenus={closeMenus}
            isAnchorActive={isAnchorActive}
            isRouteActive={isRouteActive}
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
            location={location}
            navigate={navigate}
          />
        </nav>
      </div>
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={HEADER_NAV_ITEMS_MOBILE}
        secondary={HEADER_SECONDARY_LINKS}
        onNavigate={handleNavClick}
      />
    </header>
  );
}
