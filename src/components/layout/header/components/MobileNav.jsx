import PropTypes from "prop-types";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HiChevronDown, HiXMark } from "react-icons/hi2";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import LogoPixelStone from "../../../../assets/logo-pixel-stone.png";
import LogoPixelStoneWebp from "../../../../assets/logo-pixel-stone.webp";
import {
  HEADER_ROUTE_ITEMS,
  HEADER_SECONDARY_LINKS,
} from "../../../../constants/navigation.constants";
import { useSectionSpy } from "../../../../hooks/header";
import { handleNavClick } from "../../../../utils/navigation.utils";
import { Button, ButtonIcon } from "../../../ui/buttons/index.jsx";
import SmartImage from "../../../ui/images/SmartImage.jsx";
import PortfolioSubItem from "./PortfolioSubItem.jsx";

const MobileNav = ({ open, onClose, navItems = [], onNavigate }) => {
  const [shouldRender, setShouldRender] = useState(open);
  const [animateOpen, setAnimateOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const submenuRef = useRef(null);
  const [submenuHeight, setSubmenuHeight] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll-spy pour les sections
  const { isSectionActive } = useSectionSpy({
    sectionIds: navItems.map((item) => item.href),
  });

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      // Ouvrir le sous-menu Portfolio seulement si on est sur la page d'accueil
      setIsSectionOpen(location.pathname === "/");
    } else {
      setAnimateOpen(false);
      const t = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(t);
    }
  }, [open, location.pathname]);

  useLayoutEffect(() => {
    if (shouldRender && open) {
      requestAnimationFrame(() => setAnimateOpen(true));
    }
  }, [shouldRender, open]);

  useEffect(() => {
    if (!shouldRender || !isSectionOpen) return;

    const measureHeight = () => {
      if (submenuRef.current) {
        setSubmenuHeight(submenuRef.current.scrollHeight);
      }
    };

    requestAnimationFrame(measureHeight);
  }, [shouldRender, isSectionOpen]);

  if (!shouldRender) return null;

  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
          animateOpen
            ? "bg-black/30 opacity-100 backdrop-blur-[2px]"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full transform overflow-y-auto bg-white p-4 transition-all duration-300 ease-out sm:max-w-sm ${
          animateOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-4">
          <a href="/#" className="-m-1 inline-flex items-center p-1">
            <span className="sr-only">PIXEL STONE</span>
            <SmartImage
              alt="Logo"
              src={LogoPixelStone}
              webp={LogoPixelStoneWebp}
              className="h-10 w-auto"
              width={40}
              height={40}
              loading="eager"
              fetchPriority="high"
            />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="-m-2 rounded p-2 text-neutral-600"
          >
            <span className="sr-only">Close menu</span>
            <HiXMark aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mx-4 mt-6 flow-root">
          <div className="-my-6 divide-y divide-black/10">
            {/* Section 1: Portfolio (sous-onglet) + A propos + Contact (sans séparateur) */}
            <div className="py-6">
              <button
                type="button"
                onClick={() => setIsSectionOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-lg font-semibold text-black hover:bg-neutral-100 hover:text-orange-600"
              >
                <span>Portfolio</span>
                <HiChevronDown
                  aria-hidden="true"
                  className={`size-5 transition-transform ${
                    isSectionOpen ? "rotate-180" : ""
                  }`}
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
                className="mt-0"
              >
                {navItems.map((item, index) => (
                  <PortfolioSubItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    isLast={index === navItems.length - 1}
                    onClick={(href) => {
                      const sectionItem = { kind: "section", href };
                      handleNavClick(sectionItem, navigate, location, onClose);
                    }}
                    isActive={
                      location.pathname === "/" && isSectionActive(item.href)
                    }
                  />
                ))}
              </div>
              {/* A propos (route) */}
              {HEADER_ROUTE_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={(e) => {
                    e.preventDefault();
                    const routeItem = { kind: "route", to: item.to };
                    handleNavClick(routeItem, navigate, location, onClose);
                  }}
                  className={`mb-6 block rounded px-3 py-2 text-lg font-semibold hover:bg-neutral-100 hover:text-orange-600 ${
                    location.pathname === item.to
                      ? "text-orange-600"
                      : "text-black hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              {/* Contact dans la même section, sans séparateur au-dessus */}
              <Button
                variant="primary"
                size="md"
                ariaLabel="Aller à la section contact"
                onClick={() => {
                  const contactItem = {
                    kind: "section",
                    target: "contact",
                    href: "/my-portfolio/#contact",
                  };
                  handleNavClick(contactItem, navigate, location, onClose);
                }}
                fullWidth
                className="text-lg"
              >
                Me contacter
              </Button>
            </div>
            {/* Section 2: Liens secondaires (icônes) */}
            <div className="py-6">
              <div className="flex items-center justify-center gap-4">
                {HEADER_SECONDARY_LINKS.map((link) => (
                  <ButtonIcon
                    key={link.label}
                    href={link.href}
                    size="small"
                    variant={link.icon}
                    title={link.label}
                    ariaLabel={link.label}
                  >
                    {link.icon === "github" && (
                      <IoLogoGithub className="h-full w-full" />
                    )}
                    {link.icon === "linkedin" && (
                      <IoLogoLinkedin className="h-full w-full" />
                    )}
                  </ButtonIcon>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileNav.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    }),
  ),
  onNavigate: PropTypes.func,
};

export default MobileNav;
