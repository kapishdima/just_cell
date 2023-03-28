import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";

type OnSuccess = (url: string) => void;

const scannerOptions = {
  fps: 100,
  qrbox: 280,
  aspectRatio: 1,
};

let html5QrCode: Html5Qrcode;

const barcodes = [
  Html5QrcodeSupportedFormats.CODE_93,
  Html5QrcodeSupportedFormats.CODE_39,
  Html5QrcodeSupportedFormats.CODE_128,
  Html5QrcodeSupportedFormats.QR_CODE,
];

export const createScanner = async (
  selector: string,
  onSuccess: OnSuccess,
  onScanFailed: any
) => {
  let decoded = false;
  html5QrCode = new Html5Qrcode(selector, {
    verbose: true,
    formatsToSupport: barcodes,
    useBarCodeDetectorIfSupported: true,
    experimentalFeatures: {
      useBarCodeDetectorIfSupported: true,
    },
  });
  html5QrCode.start(
    { facingMode: "environment" },
    scannerOptions,
    (decodedText) => {
      decoded = true;
      const path = createUrl(decodedText);
      onSuccess(path);
      html5QrCode.stop();
    },
    (errorMessage) => {
      return errorMessage;
    }
  );

  const createUrl = (value: string) => {
    const isBarcode = !value.startsWith("https");

    const url = new URL(
      isBarcode ? `https://localhost/Terminal/Activate?id=${value}` : value
    );
    const path = url.pathname + url.search;

    return path;
  };

  const waitId = setInterval(() => {
    if (decoded) {
      return clearInterval(waitId);
    }

    onScanFailed();
  }, 1000 * 15);
};

export const stop = async () => {
  html5QrCode.stop();
};
