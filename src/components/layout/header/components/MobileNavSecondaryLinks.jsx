import PropTypes from "prop-types";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { ButtonIcon } from "../../../ui/buttons/index.jsx";

const MobileNavSecondaryLinks = ({ links }) => (
  <div className="py-6">
    <div className="flex items-center justify-center gap-4">
      {links.map((link) => (
        <ButtonIcon
          key={link.label}
          href={link.href}
          size="small"
          variant={link.icon}
          title={link.label}
          ariaLabel={link.label}
        >
          {link.icon === "github" && <IoLogoGithub className="h-full w-full" />}
          {link.icon === "linkedin" && (
            <IoLogoLinkedin className="h-full w-full" />
          )}
        </ButtonIcon>
      ))}
    </div>
  </div>
);

MobileNavSecondaryLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MobileNavSecondaryLinks;
