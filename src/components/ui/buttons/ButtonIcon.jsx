import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * Composant ButtonIcon Spécialisé
 * Bouton d'icône avec effet de rotation au hover (Framer Motion)
 * Conserve l'API de ButtonIconsSecondaryHoveredColoredQuarteRotate pour éviter breaking changes
 *
 * @example
 * // Icône GitHub
 * <ButtonIcon href="https://github.com" variant="github" size="medium">
 *   <IoLogoGithub className="h-full w-full" />
 * </ButtonIcon>
 *
 * @example
 * // Icône LinkedIn
 * <ButtonIcon href="https://linkedin.com" variant="linkedin" size="large">
 *   <IoLogoLinkedin className="h-full w-full" />
 * </ButtonIcon>
 *
 * @example
 * // Icône custom avec couleurs personnalisées
 * <ButtonIcon
 *   href="https://example.com"
 *   variant="custom"
 *   baseColor="purple-900"
 *   hoverColor="purple-600"
 * >
 *   <Icon className="h-full w-full" />
 * </ButtonIcon>
 */
const ButtonIcon = ({
  children,
  href,
  onClick,
  disabled = false,
  size = "large",
  variant = "github",
  animate = true,
  hoverColor,
  baseColor,
  className = "",
  ariaLabel,
  title,
  ...props
}) => {
  // Styles de taille
  const sizeStyles = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-12 h-12",
  };

  // Styles de variante
  // Note: Les classes sont statiques pour éviter le purge de TailwindCSS
  const variantStyles = {
    github: "transition-colors text-zinc-900 hover:text-zinc-700",
    linkedin: "transition-colors text-zinc-900 hover:text-sky-600",
    custom: hoverColor && baseColor
      ? `transition-colors text-${baseColor} hover:text-${hoverColor}`
      : "transition-colors text-zinc-900 hover:text-zinc-700", // fallback
  };

  // Styles disabled
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  // Composant de base (avec ou sans Framer Motion)
  const Component = animate ? motion.a : "a";

  // Props d'animation Framer Motion
  const motionProps = animate
    ? {
        whileHover: { rotate: 12 },
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }
    : {};

  const containerSize = sizeStyles[size];
  const colorStyles = variantStyles[variant];
  const iconSize = "w-full h-full";

  return (
    <Component
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus:outline-none focus:ring-0 ${containerSize} ${disabledStyles} ${className}`}
      {...motionProps}
      {...props}
    >
      <span className={`${iconSize} ${colorStyles}`}>{children}</span>
    </Component>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["github", "linkedin", "custom"]),
  animate: PropTypes.bool,
  hoverColor: PropTypes.string,
  baseColor: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
};

export { ButtonIcon };
