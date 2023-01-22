const IMAGES_EXT = ["png", "jpeg", "jgp"];

const getExtension = (filename: string) => {
  const parts = filename.split(".");
  return parts[parts.length - 1];
};

export const isImage = (file: File) => {
  const extension = getExtension(file.name);
  return IMAGES_EXT.includes(extension);
};
