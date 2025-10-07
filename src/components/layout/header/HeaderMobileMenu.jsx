import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HiChevronDown, HiXMark } from "react-icons/hi2";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import LogoPixelStone from "../../../assets/logo-pixel-stone.png";
import { useActiveNav } from "../../../hooks";
import { ButtonIconsSecondaryHoveredColoredQuarteRotate } from "../../ui/buttons/ButtonIconsSecondaryHoveredColoredQuarteRotate";
import { ButtonRectangularPrimary } from "../../ui/buttons/ButtonRectangularPrimary";

const HeaderMobileMenu = ({
  open,
  onClose,
  navItems = [],
  secondary = [],
  onNavigate,
}) => {
  const [shouldRender, setShouldRender] = useState(open);
  const [animateOpen, setAnimateOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const submenuRef = useRef(null);
  const [submenuHeight, setSubmenuHeight] = useState(0);
  const { isAnchorActive, isRouteActive } = useActiveNav({
    sectionAnchors: navItems.map((n) => n.href).concat(["about", "#contact"]),
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsSectionOpen(true);
    } else {
      setAnimateOpen(false);
      const t = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useLayoutEffect(() => {
    if (shouldRender && open) {
      requestAnimationFrame(() => setAnimateOpen(true));
    }
  }, [shouldRender, open]);

  useEffect(() => {
    const measure = () => {
      if (submenuRef.current) {
        setSubmenuHeight(submenuRef.current.scrollHeight);
      }
    };
    if (shouldRender) {
      requestAnimationFrame(() => {
        requestAnimationFrame(measure);
      });
    }
  }, [navItems.length, isSectionOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
          animateOpen
            ? "opacity-100 bg-black/30 backdrop-blur-[2px]"
            : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 p-4 w-full bg-white overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-neutral-100/10 transform transition-all duration-300 ease-out ${
          animateOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <a href="#" className="p-1 -m-1">
            <span className="sr-only">PIXEL STONE</span>
            <img alt="Logo" src={LogoPixelStone} className="w-auto h-10" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded -m-2 text-neutral-600">
            <span className="sr-only">Close menu</span>
            <HiXMark aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="flow-root mx-4 mt-6">
          <div className="-my-6 divide-y divide-black/10">
            {/* Section 1: Portfolio (sous-onglet) + A propos + Contact (sans séparateur) */}
            <div className="py-6 space-y-2">
              <button
                type="button"
                onClick={() => setIsSectionOpen((v) => !v)}
                className="flex items-center justify-between py-2 pr-3 w-full font-semibold text-black rounded-lg text-base/7 hover:bg-white/5">
                <span>Portfolio</span>
                <HiChevronDown
                  aria-hidden="true"
                  className={`size-5 transition-transform ${
                    isSectionOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                aria-hidden={!isSectionOpen}
                ref={submenuRef}
                style={{
                  maxHeight: isSectionOpen ? submenuHeight : 0,
                  overflow: "hidden",
                  transition: "max-height 250ms ease-in-out",
                }}
                className="mt-2 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = (item.href || "").replace("#", "");
                      if (location.pathname !== "/") {
                        navigate(`/#${id}`);
                      } else {
                        onNavigate?.(item.href);
                      }
                      onClose?.();
                    }}
                    className={`block py-2 pr-3 pl-6 font-semibold rounded-lg text-sm/7 ${
                      location.pathname === "/" && isAnchorActive(item.href)
                        ? "text-orange-600 underline underline-offset-4 decoration-2"
                        : "text-black hover:bg-white/5"}`}>
                    {item.label}
                  </a>
                ))}
              </div>
              {/* A propos (route) */}
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about");
                  onClose?.();
                }}
                className={`block px-3  py-2 font-semibold rounded -mx-3 text-base/7 !mb-6 ${
                  isRouteActive("/about")
                    ? "text-orange-600"
                    : "text-black hover:bg-white/5"}`}>
                A propos
              </a>
              {/* Contact dans la même section, sans séparateur au-dessus */}
              <ButtonRectangularPrimary
                ariaLabel="Aller à la section contact"
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/#contact");
                  } else {
                    onNavigate?.("#contact");
                  }
                  onClose?.();
                }}
                className="w-full">
                Contact
              </ButtonRectangularPrimary>
            </div>
            {/* Section 2: Liens secondaires (icônes) */}
            <div className="py-6">
              <div className="flex items-center justify-center gap-4">
                <ButtonIconsSecondaryHoveredColoredQuarteRotate
                  href="https://github.com/PierreMaze"
                  size="small"
                  variant="github"
                  title="GitHub"
                  ariaLabel="GitHub">
                  <IoLogoGithub className="w-full h-full" />
                </ButtonIconsSecondaryHoveredColoredQuarteRotate>
                <ButtonIconsSecondaryHoveredColoredQuarteRotate
                  href="https://fr.linkedin.com/in/pierremazelaygue"
                  size="small"
                  variant="linkedin"
                  title="LinkedIn"
                  ariaLabel="LinkedIn">
                  <IoLogoLinkedin className="w-full h-full" />
                </ButtonIconsSecondaryHoveredColoredQuarteRotate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
