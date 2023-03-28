import axios from "axios";
import { sign } from "./crypto/DeffiHellman";
import { getToken } from "./crypto/token";
import { ApiRoutes } from "./routes";

import { useToast } from "vue-toastification";
import router from "@/router";

const toast = useToast();

export const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// http.interceptors.request.use(
//   async function (config) {
//     if (config.url === ApiRoutes.LOGIN || config.method === "get") {
//       return config;
//     }
//     const token = getToken();
//     // const signedData = await sign(config.data, token);
//     return {
//       ...config,
//       data: {
//         ...config.data,
//         sign: signedData,
//       },
//     };
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

http.interceptors.response.use(
  function (response) {
    const { code, msg } = response.data;
    const isLogout = response.config.url === ApiRoutes.LOGOUT;
    const isRoot = router.currentRoute.value.path === "/";

    if (code === undefined && !isLogout) {
      toast.error("Помилка відповіді сервера");
    }

    if (code === -3 && !isRoot) {
      toast.error(msg);
    }

    if (code !== 0 && code !== -3 && msg) {
      toast.error(msg);
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
