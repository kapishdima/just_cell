import { Html5Qrcode } from "html5-qrcode";

type OnSuccess = (url: string) => void;

const scannerOptions = {
  fps: 10,
  qrbox: 250,
};

let html5QrCode: Html5Qrcode;

export const createScanner = async (selector: string, onSuccess: OnSuccess) => {
  html5QrCode = new Html5Qrcode(selector);
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

export const stop = async () => {
  html5QrCode.stop();
};
