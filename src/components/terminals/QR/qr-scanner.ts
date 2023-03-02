import { Html5Qrcode } from "html5-qrcode";

type OnSuccess = (url: string) => void;

const scannerOptions = {
  fps: 10,
  qrbox: 250,
};

export const createScanner = async (selector: string, onSuccess: OnSuccess) => {
  const html5QrCode = new Html5Qrcode(selector);
  html5QrCode.start(
    { facingMode: "environment" },
    scannerOptions,
    (decodedText) => {
      onSuccess(decodedText);
      html5QrCode.stop();
    },
    (errorMessage) => {
      return errorMessage;
    }
  );
};
