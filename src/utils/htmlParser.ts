export const decodeHtml = (value: string) => {
  const text = document.createElement("textarea");
  text.innerHTML = value;
  return text.value;
};
