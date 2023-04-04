import { http } from "../client";
import { ApiRoutes } from "../routes";

export const scanQr = async (file: Blob) => {
  const formaData = new FormData();
  formaData.append("file", file);

  const { data } = await http.postForm(ApiRoutes.SCAN_QR, { file });

  return data;
};
