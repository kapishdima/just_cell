import bigInt from "@/lib/bigint.js";

const TOKEN_STORE_KEY = "token";

export const generateToken = (p_server: string) => {
  console.log(window.secret_num_client, window.GLOBAL_P);
  return bigInt(p_server)
    .modPow(window.secret_num_client, window.GLOBAL_P)
    .toString();
};

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_STORE_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_STORE_KEY) || "";
};

export const hasToken = () => {
  const token = getToken();
  return Boolean(token);
};
