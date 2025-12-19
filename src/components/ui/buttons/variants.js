/**
 * Système de variantes pour les boutons
 * Centralise toutes les classes TailwindCSS par variante et taille
 */

// Base commune à toutes les variantes
export const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";

// Variantes par type
export const variants = {
  primary: {
    base: "bg-orange-700 text-white hover:bg-orange-800",
    sizes: {
      sm: "px-3 py-1.5 text-sm rounded",
      md: "px-4 py-2 text-base rounded",
      lg: "px-6 py-3 text-lg rounded-lg",
    },
  },

  cvButton: {
    base: "bg-orange-700 text-white hover:bg-orange-800",
    sizes: {
      sm: "px-3 py-1.5 text-sm rounded",
      md: "px-4 py-2 text-base rounded",
      lg: "px-6 py-3 text-lg rounded-lg",
    },
  },

  secondary: {
    base: "bg-zinc-100 text-black ring-2 ring-zinc-500 hover:bg-white hover:ring-zinc-800",
    focus: "focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2",
    sizes: {
      sm: "px-3 py-1.5 text-sm rounded",
      md: "px-4 py-2 text-base rounded",
      lg: "px-6 py-3 text-lg rounded-lg",
    },
  },

  outline: {
    base: "bg-transparent border-2 border-zinc-300 text-black hover:border-zinc-800 hover:bg-zinc-50",
    focus: "focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2",
    sizes: {
      sm: "px-3 py-1.5 text-sm rounded",
      md: "px-4 py-2 text-base rounded",
      lg: "px-6 py-3 text-lg rounded-lg",
    },
  },

  ghost: {
    base: "bg-transparent text-black hover:bg-zinc-100",
    focus: "focus:ring-2 focus:ring-zinc-300",
    sizes: {
      sm: "px-2 py-1 text-sm rounded",
      md: "px-3 py-1.5 text-base rounded",
      lg: "px-4 py-2 text-lg rounded",
    },
  },

  link: {
    base: "underline underline-offset-4 transition-colors hover:text-orange-700 hover:font-medium",
    focus: "focus:ring-0",
    sizes: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },

  filter: {
    base: "rounded transition-all duration-300",
    inactive:
      "text-black bg-zinc-100 ring-zinc-500 ring-2 hover:ring-zinc-800 hover:bg-white",
    active: "bg-orange-700 text-white ring-orange-700 ring-2",
    sizes: {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base",
    },
  },

  nav: {
    // Mobile (rectangulaire)
    mobile: "w-full text-left px-4 py-3 rounded transition-all duration-200",
    mobileInactive: "text-zinc-700",
    mobileActive: "text-white no-underline bg-orange-700",

    // Desktop (underline avec pseudo-element)
    desktop:
      "lg:w-auto lg:text-center lg:px-4 lg:py-2 lg:rounded-none lg:ring-0 lg:bg-transparent lg:text-zinc-900 lg:hover:text-orange-700 lg:relative",
    desktopAfter:
      "lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-0.5 lg:after:transition-all lg:after:duration-300",
    desktopInactive: "lg:after:bg-transparent",
    desktopActive: "lg:text-orange-700 lg:after:bg-orange-700",

    focus: "focus:outline-none focus:ring-0 border-0",
    sizes: {
      sm: "",
      md: "",
      lg: "",
    },
  },
};

// Status pour ContactForm
export const statusVariants = {
  idle: {
    color: "bg-orange-700 hover:bg-orange-800",
  },
  loading: {
    color: "bg-orange-700",
  },
  success: {
    color: "bg-green-600 hover:bg-green-700",
  },
  error: {
    color: "bg-red-600 hover:bg-red-700",
  },
};
