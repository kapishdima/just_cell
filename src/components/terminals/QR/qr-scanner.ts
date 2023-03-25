import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";

type OnSuccess = (url: string) => void;

const scannerOptions = {
  fps: 10,
  qrbox: 250,
  formatsToSupport: [
    Html5QrcodeSupportedFormats.CODE_128,
    Html5QrcodeSupportedFormats.QR_CODE,
  ],
};

let html5QrCode: Html5QrcodeScanner;

export const createScanner = async (selector: string, onSuccess: OnSuccess) => {
  html5QrCode = new Html5QrcodeScanner(selector, scannerOptions, false);
  const onSuccessDecoded = (decodedText: string, response: any) => {
    const isBardcode = response.result.format.formatName === "CODE_128";

    const url = new URL(
      isBardcode
        ? `https://localhost/Terminal/Activate?id=${decodedText}`
        : decodedText
    );

    const path = url.pathname + url.search;
    onSuccess(path);
    html5QrCode.clear();
  };

  html5QrCode.render(onSuccessDecoded, (error) => {
    // console.log(error);
  });
  // html5QrCode.start(
  //   { facingMode: "environment" },
  //   scannerOptions,
  //   (decodedText) => {
  //     onSuccess(decodedText);
  //     html5QrCode.stop();
  //   },
  //   (errorMessage) => {
  //     return errorMessage;
  //   }
  // );
};

export const stop = async () => {
  // html5QrCode.stop();
  html5QrCode.clear();
};
