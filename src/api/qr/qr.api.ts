import { http } from "../client";

export const scanQr = async (file: Blob) => {
  const formaData = new FormData();
  formaData.append("file", file);

  const { data } = await http.postForm("/Terminals/Scan/index.php", { file });

  return data;
};
