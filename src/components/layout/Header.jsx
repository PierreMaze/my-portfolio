import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HEADER_NAV_ITEMS, HEADER_SECONDARY_LINKS } from "../../constants";
import { useActiveNav, useHeaderMenu } from "../../hooks/header";
import { handleNavClick as handleNavClickShared } from "../../utils/navigation.utils";
import { ButtonRectangularPrimary } from "../ui/buttons/ButtonRectangularPrimary";
import BrandLogo from "./header/BrandLogo";
import {
  MobileMenu,
  MobileMenuButton,
  NavDropdown,
  NavItem,
} from "./header/index";

export default function Header() {
  const { isAnchorActive, isRouteActive } = useActiveNav({
    sectionAnchors: HEADER_NAV_ITEMS.map((i) => i.href),
  });
  const location = useLocation();
  const navigate = useNavigate();
  const {
    isMobileMenuOpen: mobileMenuOpen,
    setIsMobileMenuOpen: setMobileMenuOpen,
    isPopoverOpen,
    setIsPopoverOpen,
    handleNavClick: handleMenuNavClick,
  } = useHeaderMenu({
    navItems: HEADER_NAV_ITEMS.map((i) => ({ label: i.label, href: i.href })),
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
      const item = href?.startsWith("#")
        ? { kind: "section", href }
        : { kind: "route", to: href };
      handleNavClickShared(item, navigate, location, closeMenus);
    },
    [navigate, location, closeMenus]
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
    [location.pathname, navigate, closeMenus]
  );

  return (
    <header className="fixed top-0 right-0 left-0 z-40 w-full bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-4 py-3 w-full lg:px-12 xl:px-18">
        <div className="flex lg:flex-1">
          <BrandLogo onClick={handleBrandClick} />
        </div>
        <div className="flex lg:hidden">
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
        </div>
        <div className="hidden items-center h-10 lg:flex lg:gap-x-12">
          <NavDropdown
            buttonLabel="Portfolio"
            open={isPopoverOpen}
            onToggle={() => setIsPopoverOpen((v) => !v)}>
            <div className="p-2">
              {HEADER_NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.label}
                  item={item}
                  onClick={handleNavClick}
                  isActive={
                    location.pathname === "/" && isAnchorActive(item.href)
                  }
                />
              ))}
            </div>
          </NavDropdown>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              navigate("/about");
              closeMenus();
            }}
            className={`inline-flex items-center h-10 font-semibold text-base ${
              isRouteActive("/about")
                ? "text-orange-600"
                : "text-black hover:text-orange-600"}`}>
            A propos
          </a>

          <div className="flex items-center h-10">
            <ButtonRectangularPrimary
              ariaLabel="Aller à la section contact"
              onClick={() => handleNavClick("#contact")}
              className="px-4 py-2 text-base">
              Contact
            </ButtonRectangularPrimary>
          </div>
        </div>
      </nav>
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={HEADER_NAV_ITEMS}
        secondary={HEADER_SECONDARY_LINKS}
        onNavigate={handleNavClick}
      />
    </header>
  );
}
