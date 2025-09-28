// Utilitaires pour la gestion des images
export const getImageSource = (image) => {
  return image?.default || image;
};

export const createImageArray = (image, count = 3) => {
  const imageSource = getImageSource(image);
  return Array(count).fill(imageSource);
};
