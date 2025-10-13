import PropTypes from "prop-types";
import LogoPixelStone from "../../../../assets/logo-pixel-stone.png";
import LogoPixelStoneWebp from "../../../../assets/logo-pixel-stone.webp";
import { SmartImage } from "../../../ui";

/**
 * Composant du logo de marque réutilisable
 * @param {Object} props
 * @param {Function} props.onClick - Handler de clic
 * @param {string} props.className - Classes CSS additionnelles
 */
const BrandLogo = ({ onClick, className }) => {
  return (
    <a
      href="/"
      onClick={onClick}
      className={`inline-flex items-center p-1 -m-1${className}`}>
      <span className="sr-only">PIXEL STONE</span>
      <SmartImage
        alt="Logo PIXEL STONE"
        src={LogoPixelStone}
        webp={LogoPixelStoneWebp}
        className="w-auto h-10"
        width={40}
        height={40}
        loading="eager"
        fetchPriority="high"
      />
      <span className="text-lg font-extrabold ml-2 text-neutral-900">
        PIXEL STONE
      </span>
    </a>
  );
};

BrandLogo.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default BrandLogo;
