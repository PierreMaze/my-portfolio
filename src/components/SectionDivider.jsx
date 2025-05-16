export const SectionDivider = ({ className = "" }) => {
  return (
    <div className={`w-full py-12 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-black/5"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
            <svg
              className="w-6 h-6 text-accent/40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
