import PropTypes from "prop-types";

export default function SmartImage({
  webp,
  src,
  alt,
  className,
  sizes = "100vw",
  loading,
  decoding = "async",
  width,
  height,
  priority = false,
  fetchPriority,
  ...rest
}) {
  const isPriority = priority === true;
  const finalLoading = isPriority ? "eager" : loading || "lazy";
  const finalFetchPriority = isPriority ? "high" : fetchPriority;

  return (
    <picture>
      {webp && <source type="image/webp" srcSet={webp} sizes={sizes} />}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={finalLoading}
        decoding={decoding}
        width={width}
        height={height}
        fetchPriority={finalFetchPriority}
        {...rest}
      />
    </picture>
  );
}

SmartImage.propTypes = {
  webp: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  sizes: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  decoding: PropTypes.oneOf(["async", "auto", "sync"]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  priority: PropTypes.bool,
  fetchPriority: PropTypes.oneOf(["high", "low", "auto"]),
};
