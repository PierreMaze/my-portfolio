export const Badge = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-accent-50 text-accent-700 ${className}`}
      {...props}>
      {children}
    </span>
  );
};
