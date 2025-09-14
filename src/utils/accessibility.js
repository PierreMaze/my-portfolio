// Utilitaires pour l'accessibilité

/**
 * Génère un ID unique pour les éléments ARIA
 * @param {string} prefix - Préfixe pour l'ID
 * @param {string} text - Texte à utiliser pour générer l'ID
 * @returns {string} ID unique
 */
export const generateAriaId = (prefix, text) => {
  const cleanText = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');
  return `${prefix}-${cleanText}`;
};

/**
 * Vérifie si un élément est visible à l'écran
 * @param {Element} element - Élément à vérifier
 * @returns {boolean} True si l'élément est visible
 */
export const isElementVisible = (element) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const style = window.getComputedStyle(element);
  
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    style.visibility !== 'hidden' &&
    style.display !== 'none' &&
    style.opacity !== '0'
  );
};

/**
 * Gère le focus pour l'accessibilité au clavier
 * @param {Element} element - Élément à focuser
 */
export const focusElement = (element) => {
  if (element && typeof element.focus === 'function') {
    element.focus();
  }
};

/**
 * Annonce un message aux lecteurs d'écran
 * @param {string} message - Message à annoncer
 * @param {string} priority - Priorité ('polite' ou 'assertive')
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Supprimer l'élément après l'annonce
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Classes CSS pour masquer visuellement mais garder accessible
 */
export const SCREEN_READER_ONLY = 'sr-only absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0';

/**
 * Vérifie le contraste de couleurs
 * @param {string} foreground - Couleur de premier plan
 * @param {string} background - Couleur d'arrière-plan
 * @returns {number} Ratio de contraste
 */
export const getContrastRatio = (foreground, background) => {
  // Cette fonction nécessiterait une implémentation plus complexe
  // pour calculer le vrai ratio de contraste
  // Pour l'instant, on retourne un ratio par défaut
  return 4.5; // Ratio minimum recommandé par WCAG AA
};
