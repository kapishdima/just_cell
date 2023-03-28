import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";

type OnSuccess = (url: string) => void;

const scannerOptions = {
  fps: 10,
  qrbox: 300,
};

let html5QrCode: Html5Qrcode;

const barcodes = [
  Html5QrcodeSupportedFormats.CODE_93,
  Html5QrcodeSupportedFormats.CODE_39,
  Html5QrcodeSupportedFormats.CODE_128,
];

export const createScanner = async (selector: string, onSuccess: OnSuccess) => {
  html5QrCode = new Html5Qrcode(selector, {
    verbose: true,
    formatsToSupport: [
      Html5QrcodeSupportedFormats.CODE_93,
      Html5QrcodeSupportedFormats.CODE_39,
      Html5QrcodeSupportedFormats.CODE_128,
      Html5QrcodeSupportedFormats.QR_CODE,
    ],
  });
  html5QrCode.start(
    { facingMode: "environment" },
    scannerOptions,
    (decodedText, decodedTextResult) => {
      const isBarcode = decodedTextResult.result.format?.format
        ? barcodes.includes(decodedTextResult.result.format?.format)
        : false;

      const url = new URL(
        isBarcode
          ? `https://localhost/Terminal/Activate?id=${decodedText}`
          : decodedText
      );

      const path = url.pathname + url.search;

      onSuccess(path);
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
