import { http } from "../client";
import { sign } from "../crypto/DeffiHellman";
import { getToken } from "../crypto/token";
import { ApiRoutes } from "../routes";
import md5 from "md5";

type ResetPasswordPayload = {
  phone: string;
  old_pass: string;
  pass: string;
};

export const resetPassword = async (resetPayload: ResetPasswordPayload) => {
  const reset = {
    phone: resetPayload.phone,
    old_pass: md5(resetPayload.old_pass),
    pass: md5(resetPayload.pass),
  };

  const resetData = {
    ...reset,
    sign: await sign(reset, getToken()),
  };

  const { data } = await http.post(ApiRoutes.RESET_PASSWORD, resetData);

  return data;
};
