// Utilitaires de navigation partagés pour le header et le menu mobile

/**
 * Gère la navigation selon l'item (route ou section)
 * @param {object} item - { kind: 'route'|'section', to?, href?, target? }
 * @param {function} navigate - navigate de react-router
 * @param {object} location - location de react-router
 * @param {function} [onAfter] - callback après navigation (ex: fermer menu)
 */
export const handleNavClick = (item, navigate, location, onAfter) => {
  if (!item) return;

  // Lien de route
  if (item.kind === "route" && item.to) {
    if (location.pathname !== item.to) {
      navigate(item.to);
    }
    onAfter?.(item);
    return;
  }

  // Lien de section (hash)
  const href =
    item.href || (item.target ? `/my-portfolio/#${item.target}` : null);
  if (!href) return;

  if (href.startsWith("/my-portfolio/#")) {
    const elementId = href.substring(1);
    if (location.pathname !== "/my-portfolio/") {
      navigate(`/my-portfolio/#${elementId}`);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 60 : -10;
        const top = element.offsetTop - offset;
        window.scrollTo({ top, behavior: "smooth" });
        navigate(`/my-portfolio/#${elementId}`, { replace: false });
      } else {
        navigate(`/my-portfolio/#${elementId}`);
      }
    }
  } else {
    // Lien absolu (externe)
    window.location.href = href;
  }

  onAfter?.(item);
};
