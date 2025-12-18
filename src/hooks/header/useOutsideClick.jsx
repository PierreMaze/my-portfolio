import { useEffect } from "react";

const useOutsideClick = (ref, onOutside) => {
  useEffect(() => {
    if (!onOutside) return;

    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onOutside(e);
      }
    };

    document.addEventListener("mousedown", handler, false);
    return () => {
      document.removeEventListener("mousedown", handler, false);
    };
  }, [ref, onOutside]);
};

export default useOutsideClick;
