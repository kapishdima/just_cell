import axios from "axios";
import { sign } from "./crypto/DeffiHellman";
import { getToken } from "./crypto/token";
import { ApiRoutes } from "./routes";

export const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.request.use(
  async function (config) {
    console.log(config.method);
    if (config.url === ApiRoutes.LOGIN || config.method === "get") {
      return config;
    }

    const token = getToken();
    const signedData = await sign(config.data, token);
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
