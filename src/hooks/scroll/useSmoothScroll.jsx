import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (target?.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
};

export default useSmoothScroll;
