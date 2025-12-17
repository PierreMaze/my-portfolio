import PropTypes from "prop-types";
import { getComponent, getComponentProps, buildClassName } from "./utils";

/**
 * Composant Button Unifié
 * Remplace tous les anciens composants boutons par un système de variantes
 *
 * @example
 * // Bouton primaire
 * <Button variant="primary">Click me</Button>
 *
 * @example
 * // Bouton avec icône
 * <Button variant="primary" iconLeft={<Icon />}>Click me</Button>
 *
 * @example
 * // Bouton filtre avec état actif
 * <Button variant="filter" isActive={true}>Filter</Button>
 *
 * @example
 * // Lien stylisé en bouton
 * <Button variant="link" to="/about">About</Button>
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  isActive = false,
  isLoading = false,
  status,
  disabled = false,
  as,
  href,
  to,
  target,
  rel,
  iconLeft,
  iconRight,
  onClick,
  type = "button",
  ariaLabel,
  ariaPressed,
  ariaBusy,
  className,
  fullWidth = false,
  ...props
}) => {
  // Déterminer le composant à rendre
  const Component = getComponent({ as, href, to });

  // États dérivés pour accessibilité
  const actualAriaPressed =
    ariaPressed ?? (variant === "filter" && typeof isActive === "boolean")
      ? isActive
      : undefined;

  const actualAriaBusy = ariaBusy ?? (isLoading ? true : undefined);

  // État disabled dérivé
  const actualDisabled = disabled || isLoading;

  // Status dérivé (pour ContactForm)
  const actualStatus = status || (isLoading ? "loading" : undefined);

  // ARIA live region pour status dynamiques (accessibilité)
  const ariaLive =
    actualStatus && actualStatus !== "idle" ? "polite" : undefined;
  const ariaAtomic =
    actualStatus && actualStatus !== "idle" ? "true" : undefined;

  // Classes CSS
  const buttonClasses = buildClassName({
    variant,
    size,
    isActive,
    status: actualStatus,
    fullWidth,
    disabled: actualDisabled,
    className,
  });

  // Props du composant
  const componentProps = getComponentProps({
    Component,
    href,
    to,
    target,
    rel,
    type,
    onClick,
    disabled: actualDisabled,
    ariaLabel,
    ariaPressed: actualAriaPressed,
    ariaBusy: actualAriaBusy,
    ariaLive,
    ariaAtomic,
    ...props,
  });

  // Wrapper pour navigation responsive (variant='nav')
  // Le span avec translate est nécessaire pour l'animation du texte au hover
  const content =
    variant === "nav" ? (
      <span className="transition-transform duration-200 lg:group-hover:translate-x-1">
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </span>
    ) : (
      <>
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </>
    );

  return (
    <Component {...componentProps} className={buttonClasses}>
      {content}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "ghost",
    "link",
    "nav",
    "filter",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
  status: PropTypes.oneOf(["idle", "loading", "success", "error"]),
  disabled: PropTypes.bool,
  as: PropTypes.oneOf(["button", "a", "Link"]),
  href: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string,
  ariaPressed: PropTypes.bool,
  ariaBusy: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export { Button };
