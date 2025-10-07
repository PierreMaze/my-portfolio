import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import LogoPixelStone from "../../assets/logo-pixel-stone.png";
import { HEADER_NAV_ITEMS, HEADER_SECONDARY_LINKS } from "../../constants";
import { useActiveNav } from "../../hooks";
import { ButtonRectangularPrimary } from "../ui/buttons/ButtonRectangularPrimary";
import { HeaderMobileMenu, HeaderNav } from "./header/index";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { isAnchorActive, isRouteActive } = useActiveNav({
    sectionAnchors: HEADER_NAV_ITEMS.map((i) => i.href),
  });
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (href) => {
    if (!href) return;
    if (href.startsWith("#")) {
      const elementId = href.substring(1);
      if (location.pathname !== "/") {
        navigate(`/#${elementId}`);
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          const isMobile = window.innerWidth < 768;
          const offset = isMobile ? 60 : -10;
          const top = element.offsetTop - offset;
          window.scrollTo({ top, behavior: "smooth" });
          navigate(`#${elementId}`, { replace: false });
        } else {
          navigate(`/#${elementId}`);
        }
      }
    } else {
      window.location.href = href;
    }
    setMobileMenuOpen(false);
    setIsPopoverOpen(false);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      // laisser useScrollToTop remonter
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/#home", { replace: false });
    }
    setMobileMenuOpen(false);
    setIsPopoverOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-40 w-full bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 px-6 w-full lg:px-8">
        <div className="flex lg:flex-1">
          <a
            href="/"
            onClick={handleBrandClick}
            className="inline-flex items-center p-1 -m-1">
            <span className="sr-only">PIXEL STONE</span>
            <img alt="" src={LogoPixelStone} className="w-auto h-10" />
            <span className="text-lg font-extrabold ml-2 text-neutral-900">
              PIXEL STONE
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded -m-2 text-neutral-600">
            <span className="sr-only">Open main menu</span>
            <HiBars3 aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden items-center h-10 lg:flex lg:gap-x-12">
          <HeaderNav
            buttonLabel="Portfolio"
            open={isPopoverOpen}
            onToggle={() => setIsPopoverOpen((v) => !v)}>
            <div className="p-2">
              {HEADER_NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className={`relative flex items-center gap-x-4 p-3 rounded group text-sm/6 ${
                    location.pathname === "/" && isAnchorActive(item.href)
                      ? "text-orange-600 underline underline-offset-4 decoration-2"
                      : "hover:text-orange-600 hover:underline hover:underline-offset-4 hover:decoration-2"}`}>
                  <div className="flex-auto">
                    <a
                      href={item.href}
                      className={`block font-medium ${
                        location.pathname === "/" && isAnchorActive(item.href)
                          ? "text-orange-600"
                          : "text-neutral-900 hover:text-orange-600"}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}>
                      {item.label}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </HeaderNav>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              navigate("/about");
              setIsPopoverOpen(false);
            }}
            className={`inline-flex items-center h-10 font-semibold text-sm/6 ${
              isRouteActive("/about")
                ? "text-orange-600"
                : "text-black hover:text-orange-600"}`}>
            A propos
          </a>

          <div className="flex items-center h-10">
            <ButtonRectangularPrimary
              ariaLabel="Aller à la section contact"
              onClick={() => handleNavClick("#contact")}
              className="px-4 py-2 text-sm">
              Contact
            </ButtonRectangularPrimary>
          </div>
        </div>
      </nav>
      <HeaderMobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={HEADER_NAV_ITEMS}
        secondary={HEADER_SECONDARY_LINKS}
        onNavigate={handleNavClick}
      />
    </header>
  );
}
