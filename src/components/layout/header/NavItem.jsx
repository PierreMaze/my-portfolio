import PropTypes from "prop-types";

/**
 * Composant d'item de navigation réutilisable
 * @param {Object} props
 * @param {Object} props.item - Item de navigation { label, href, icon }
 * @param {Function} props.onClick - Handler de clic
 * @param {boolean} props.isActive - État actif
 * @param {string} props.className - Classes CSS additionnelles
 */
const NavItem = ({ item, onClick, isActive, className }) => {
  const IconComponent = item.icon;
  const baseClasses =
    " relative flex items-center gap-x-4 p-3 rounded group text-base";
  const activeClasses = "text-orange-600 ";
  const inactiveClasses = "hover:text-orange-600";

  return (
    <div
      className={`hover:underline hover:underline-offset-4 hover:decoration-2 decoration-orange-600${baseClasses}${isActive?activeClasses : inactiveClasses}${className||""}`}>
      <div className="flex-auto">
        <a
          href={item.href}
          className={`flex items-center gap-x-2 font-medium ${
            isActive
              ? "text-orange-600"
              : "text-neutral-900 hover:text-orange-600"}`}
          onClick={(e) => {
            e.preventDefault();
            onClick(item.href);
          }}>
          {IconComponent && (
            <IconComponent
              className={`w-4 h-4 ${
                isActive
                  ? "text-orange-600"
                  : "text-black group-hover:text-orange-600"}`}
            />
          )}
          {item.label}
          <span className="absolute inset-0" />
        </a>
      </div>
    </div>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

export default NavItem;
