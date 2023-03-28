import bigInt from "@/lib/bigint.js";
import { sha256 } from "./sha256";

export const generatePartClientKey = () => {
  let GLOBAL_P = 0;
  let secret_num_client = 0;
  let p_client_send = 0;

  GLOBAL_P = bigInt.randBetween("1e50", "9e50");
  secret_num_client = bigInt.randBetween("100", "999");
  p_client_send = bigInt(3).modPow(secret_num_client, GLOBAL_P);

  window.GLOBAL_P = GLOBAL_P;
  window.secret_num_client = secret_num_client;

  return { p_client: p_client_send, common_p: GLOBAL_P };
};

export const sign = async (data: any, token: string) => {
  if (!data) {
    return "";
  }
  const values = Object.values(data).filter((value) => Boolean(value)) || {};
  const message = values.join("") + token;

  return await sha256(message);
};
