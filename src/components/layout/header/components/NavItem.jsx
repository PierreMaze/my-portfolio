import PropTypes from "prop-types";

/**
 * Composant d'item de navigation réutilisable
 * @param {Object} props
 * @param {Object} props.item - Item de navigation { label, href, icon }
 * @param {Function} props.onClick - Handler de clic
 * @param {boolean} props.isActive - État actif
 * @param {string} props.className - Classes CSS additionnelles
 * @param {string} props.variant - Variante du style ('desktop' | 'mobile')
 */
const NavItem = ({
  item,
  onClick,
  isActive,
  className,
  variant = "desktop",
}) => {
  const IconComponent = item.icon;

  // Styles selon la variante
  const styles = {
    desktop: {
      container:
        "relative flex items-center gap-x-4 p-3 rounded group text-base hover:underline hover:underline-offset-4 hover:decoration-2 decoration-orange-700 ",
      link: "flex items-center gap-x-2 font-medium ",
      icon: "w-4 h-4 ",
      activeText: "text-orange-700 ",
      inactiveText: "text-neutral-900 hover:text-orange-700 ",
      activeIcon: "text-orange-700",
      inactiveIcon: "text-black group-hover:text-orange-700 ",
    },
    mobile: {
      container:
        "flex items-center gap-x-2 py-2 pr-3 pl-6 font-semibold rounded-lg text-md ",
      link: "flex items-center gap-x-2 ",
      icon: "w-4 h-4 ",
      activeText: "text-orange-700 underline underline-offset-4 decoration-2 ",
      inactiveText: "text-black hover:text-orange-700 hover:bg-white/5 ",
      activeIcon: "text-orange-700 ",
      inactiveIcon: "text-black ",
    },
  };

  const currentStyles = styles[variant];

  return (
    <a
      href={item.href}
      onClick={(e) => {
        e.preventDefault();
        onClick(item.href);
      }}
      className={`${currentStyles.container}${isActive ? currentStyles.activeText : currentStyles.inactiveText}${className || ""}`}
    >
      {IconComponent && (
        <IconComponent
          className={`${currentStyles.icon}${isActive ? currentStyles.activeIcon : currentStyles.inactiveIcon}`}
        />
      )}
      {item.label}
      {variant === "desktop" && <span className="absolute inset-0" />}
    </a>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    kind: PropTypes.oneOf(["section", "route"]),
    target: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.elementType,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["desktop", "mobile"]),
};

export default NavItem;
