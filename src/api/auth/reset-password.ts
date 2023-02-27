import { http } from "../client";
import { ApiRoutes } from "../routes";
import md5 from "md5";

type ResetPasswordPayload = {
  phone: string;
  old_pass: string;
  pass: string;
};

export const resetPassword = async (resetPayload: ResetPasswordPayload) => {
  console.log(resetPayload);
  const { data } = await http.post(ApiRoutes.RESET_PASSWORD, {
    phone: resetPayload.phone,
    old_pass: md5(resetPayload.old_pass),
    pass: md5(resetPayload.pass),
  });

  console.log(data);

  return data;
};
