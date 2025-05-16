export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-accent hover:bg-accent-600 text-white focus:ring-accent-500",
    secondary:
      "bg-background-tertiary hover:bg-gray-300 text-text-primary focus:ring-gray-400",
    outline:
      "border border-accent text-accent hover:bg-accent-50 focus:ring-accent-500",
    yellow:
      "bg-yellow-400 hover:bg-yellow-500 text-gray-900 focus:ring-yellow-500",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  );
};
