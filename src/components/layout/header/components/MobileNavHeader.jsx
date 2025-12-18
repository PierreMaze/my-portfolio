import PropTypes from "prop-types";
import { HiXMark } from "react-icons/hi2";
import LogoPixelStone from "../../../../assets/logo-pixel-stone.png";
import LogoPixelStoneWebp from "../../../../assets/logo-pixel-stone.webp";
import SmartImage from "../../../ui/images/SmartImage.jsx";

const MobileNavHeader = ({ onClose }) => (
  <div className="flex items-center justify-between px-4">
    <a href="/#" className="-m-1 inline-flex items-center p-1">
      <span className="sr-only">PIXEL STONE</span>
      <SmartImage
        alt="Logo"
        src={LogoPixelStone}
        webp={LogoPixelStoneWebp}
        className="h-10 w-auto"
        width={40}
        height={40}
        loading="eager"
        fetchPriority="high"
      />
    </a>
    <button
      type="button"
      onClick={onClose}
      className="-m-2 rounded p-2 text-neutral-600"
    >
      <span className="sr-only">Close menu</span>
      <HiXMark aria-hidden="true" className="size-6" />
    </button>
  </div>
);

MobileNavHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MobileNavHeader;
