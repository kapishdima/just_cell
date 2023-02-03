import axios from "axios";
import { sign } from "./crypto/DeffiHellman";
import { getToken } from "./crypto/token";
import { ApiRoutes } from "./routes";

const CORS_PROXY = "https://proxy.cors.sh/";

export const http = axios.create({
  baseURL: CORS_PROXY + process.env.VUE_APP_API_BASE_URL,
  headers: {
    "x-cors-api-key": "temp_ac1fb286376b61708a37600107cfca5d",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    if (config.url === ApiRoutes.LOGIN) {
      return config;
    }

    const token = getToken();
    const signedData = sign(config.data, token);
    return {
      ...config,
      data: {
        ...config.data,
        sign: signedData,
      },
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);
