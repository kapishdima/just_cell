export const ellipsis = (str: string, max = 30) => {
  return str.length > max ? str.slice(0, max - 1) + "..." : str;
};
