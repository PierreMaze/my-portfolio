import PropTypes from "prop-types";
import { useLayoutEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const HeaderNav = ({
  buttonLabel = "Portfolio",
  children,
  onToggle,
  open,
  className,
}) => {
  const buttonId = "header-nav-button";
  const [shouldRender, setShouldRender] = useState(open);
  const [animateOpen, setAnimateOpen] = useState(false);

  // Gestion du montage/démontage avec animation
  useLayoutEffect(() => {
    if (open) {
      setShouldRender(true);
      requestAnimationFrame(() => setAnimateOpen(true));
    } else {
      setAnimateOpen(false);
      const t = setTimeout(() => setShouldRender(false), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  return (
    <div className="relative">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`group inline-flex h-10 items-center gap-x-1 rounded px-3 py-0 text-base leading-none font-semibold text-black hover:text-orange-700 ${
          className || ""
        }`}
      >
        <span>{buttonLabel}</span>
        <HiChevronDown
          aria-hidden="true"
          className={`size-5 flex-none text-neutral-600 transition-transform group-hover:text-orange-700 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {shouldRender && (
        <div
          role="menu"
          aria-labelledby={buttonId}
          className={`m-fit absolute left-1/2 z-20 mt-4 -translate-x-1/2 overflow-hidden rounded border border-neutral-200/60 bg-white/90 p-2 shadow-xl ring-1 ring-black/5 backdrop-blur-md transition-all duration-200 ease-out ${
            animateOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          {/* caret */}
          <div
            className={`absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-t border-l border-neutral-200/60 bg-white/90 transition-opacity duration-200 ${
              animateOpen ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
          <div className="relative">{children}</div>
        </div>
      )}
    </div>
  );
};

HeaderNav.propTypes = {
  buttonLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default HeaderNav;
