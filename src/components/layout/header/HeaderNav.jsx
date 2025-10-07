import { useLayoutEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const HeaderNav = ({ buttonLabel = "Portfolio", children, onToggle, open }) => {
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
        className="inline-flex items-center gap-x-1 px-3 py-0 h-10 font-semibold leading-none text-black rounded text-sm/6 group hover:text-orange-600">
        <span>{buttonLabel}</span>
        <HiChevronDown
          aria-hidden="true"
          className={`flex-none size-5 transition-transform text-neutral-600 group-hover:text-orange-600 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {shouldRender && (
        <div
          role="menu"
          aria-labelledby={buttonId}
          className={`absolute left-1/2 z-20 mt-4 m-fit -translate-x-1/2 overflow-hidden rounded border border-neutral-200/60 bg-white/90 p-2 shadow-xl ring-1 ring-black/5 backdrop-blur-md transition-all duration-200 ease-out ${
            animateOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}>
          {/* caret */}
          <div
            className={`absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-white/90 border-l border-t border-neutral-200/60 transition-opacity duration-200 ${
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

export default HeaderNav;
