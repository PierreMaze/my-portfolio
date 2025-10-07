import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const findElementWithRetry = (id, attempts = 10, intervalMs = 100) => {
  return new Promise((resolve) => {
    let tries = 0;
    const tryFind = () => {
      const el = document.getElementById(id);
      if (el || tries >= attempts) {
        resolve(el || null);
      } else {
        tries += 1;
        setTimeout(tryFind, intervalMs);
      }
    };
    // first attempt ASAP
    requestAnimationFrame(tryFind);
  });
};

const useScrollToHash = ({
  mobileOffset = 60,
  desktopOffset = -10,
  behavior = "smooth",
} = {}) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash || hash.length <= 1) return;
    const id = hash.slice(1);

    const run = async () => {
      const element = await findElementWithRetry(id, 12, 80);
      if (!element) return;
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? mobileOffset : desktopOffset;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior });
    };

    run();
  }, [location.pathname, location.hash, mobileOffset, desktopOffset, behavior]);
};

export default useScrollToHash;
