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
  const basePath = import.meta.env.BASE_URL;
  const href =
    item.href || (item.target ? `${basePath}#${item.target}` : null);
  if (!href) return;

  if (href.startsWith(`${basePath}#`)) {
    // Extrait l'ID après le #
    const elementId = href.split("#")[1];
    if (location.pathname !== basePath) {
      navigate(`${basePath}#${elementId}`);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 60 : -10;
        const top = Math.max(0, element.offsetTop - offset);
        window.scrollTo({ top, behavior: "smooth" });
        navigate(`${basePath}#${elementId}`, { replace: false });
      } else {
        navigate(`${basePath}#${elementId}`);
      }
    }
  } else {
    // Lien absolu (externe)
    window.location.href = href;
  }

  onAfter?.(item);
};
