import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 transition-colors text-dark/70 hover:text-accent">
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 w-48 py-2 mt-1 bg-white rounded-lg shadow-lg top-full">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 transition-colors text-text-primary/70 hover:bg-background-primary hover:text-accent"
              onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
