import { Link } from "react-router-dom";
import { baseStyles, variants, statusVariants } from "./variants";

/**
 * Détermine le composant à rendre selon les props
 * @param {Object} params
 * @param {string} params.as - Type de composant forcé
 * @param {string} params.href - URL pour lien <a>
 * @param {string} params.to - Route pour React Router Link
 * @returns {string|Component} - 'a', 'button', ou Link
 */
export const getComponent = ({ as, href, to }) => {
  if (as === "a" || href) return "a";
  if (as === "Link" || to) return Link;
  return "button";
};

/**
 * Prépare les props selon le type de composant
 * @param {Object} params - Toutes les props du bouton
 * @returns {Object} - Props filtrées pour le composant
 */
export const getComponentProps = ({
  Component,
  href,
  to,
  target,
  rel,
  type,
  onClick,
  disabled,
  ariaLabel,
  ariaPressed,
  ariaBusy,
  ariaLive,
  ariaAtomic,
  ...rest
}) => {
  const baseProps = {
    onClick,
    "aria-label": ariaLabel,
    ...rest,
  };

  // <a> element
  if (Component === "a") {
    return {
      ...baseProps,
      href,
      target: target || (href ? "_blank" : undefined),
      rel: rel || (href ? "noopener noreferrer" : undefined),
      // Note: disabled n'est pas standard sur <a>, on le gère via styles
      "aria-disabled": disabled || undefined,
    };
  }

  // <Link> component (React Router)
  if (Component === Link) {
    return {
      ...baseProps,
      to,
      "aria-disabled": disabled || undefined,
    };
  }

  // <button> element
  return {
    ...baseProps,
    type: type || "button",
    disabled,
    "aria-pressed": ariaPressed,
    "aria-busy": ariaBusy,
    "aria-live": ariaLive,
    "aria-atomic": ariaAtomic,
  };
};

/**
 * Construit les classes CSS finales
 * @param {Object} params
 * @param {string} params.variant - Variante du bouton
 * @param {string} params.size - Taille du bouton
 * @param {boolean} params.isActive - État actif (pour filters)
 * @param {string} params.status - Status (pour ContactForm)
 * @param {boolean} params.fullWidth - Pleine largeur
 * @param {boolean} params.disabled - État disabled
 * @param {string} params.className - Classes custom
 * @returns {string} - Classes CSS combinées
 */
export const buildClassName = ({
  variant,
  size,
  isActive,
  status,
  fullWidth,
  disabled,
  className,
}) => {
  const classes = [baseStyles];

  // Récupération de la config de variante
  const variantConfig = variants[variant];
  if (!variantConfig) {
    console.warn(`Variant "${variant}" not found, falling back to "primary"`);
    return buildClassName({
      variant: "primary",
      size,
      isActive,
      status,
      fullWidth,
      disabled,
      className,
    });
  }

  const sizeClasses = variantConfig.sizes[size];

  // Variante filter (avec état actif/inactif)
  if (variant === "filter") {
    classes.push(variantConfig.base);
    classes.push(isActive ? variantConfig.active : variantConfig.inactive);
    classes.push(variantConfig.focus);
    classes.push(sizeClasses);
  }
  // Variante nav (responsive mobile/desktop)
  else if (variant === "nav") {
    classes.push(variantConfig.mobile);
    classes.push(
      isActive ? variantConfig.mobileActive : variantConfig.mobileInactive
    );
    classes.push(variantConfig.desktop);
    classes.push(variantConfig.desktopAfter);
    classes.push(
      isActive ? variantConfig.desktopActive : variantConfig.desktopInactive
    );
    classes.push(variantConfig.focus);
  }
  // Variantes standard
  else {
    classes.push(variantConfig.base);
    classes.push(variantConfig.focus);
    classes.push(sizeClasses);
  }

  // Override couleur par status (ContactForm)
  if (status && statusVariants[status]) {
    const statusConfig = statusVariants[status];
    // Remplacer les classes de couleur de base par celles du status
    const colorClassIndex = classes.findIndex((c) =>
      c.includes("bg-orange-600")
    );
    if (colorClassIndex !== -1) {
      classes[colorClassIndex] = statusConfig.color;
    } else {
      classes.push(statusConfig.color);
    }
  }

  // Full width
  if (fullWidth) {
    classes.push("w-full");
  }

  // Disabled sur <a> (pointer-events)
  if (disabled) {
    classes.push("pointer-events-none");
  }

  // Classes custom
  if (className) {
    classes.push(className);
  }

  return classes.filter(Boolean).join(" ");
};
