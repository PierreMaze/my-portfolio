// Utilitaires pour la gestion des couleurs
export const getColorFromIcon = (iconElement) => {
  if (!iconElement || !iconElement.props || !iconElement.props.className) {
    return "stone";
  }

  const className = iconElement.props.className;

  // Détection des couleurs dans les classes
  if (className.includes("text-orange")) return "orange";
  if (className.includes("text-blue")) return "blue";
  if (className.includes("text-cyan")) return "cyan";
  if (className.includes("text-green")) return "green";
  if (className.includes("text-red")) return "red";
  if (className.includes("text-amber")) return "amber";
  if (className.includes("text-purple")) return "purple";
  if (className.includes("text-yellow")) return "yellow";
  if (className.includes("text-indigo")) return "indigo";
  if (className.includes("text-pink")) return "pink";
  if (className.includes("text-gray")) return "gray";
  if (className.includes("text-black")) return "black";

  return "stone";
};
