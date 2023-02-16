import { http } from "@/api/client";
import { ApiRoutes } from "@/api/routes";
import { generatePartClientKey } from "@/api/crypto/DeffiHellman";
import { generateToken, saveToken } from "@/api/crypto/token";
import { saveMenu } from "@/api/menu/menu.api";
import md5 from "md5";

import { LoginDTO, LoginRequest, LoginResponse } from "./login.model";

import { RequestOptions } from "../response";
import { saveUserToSession } from "../user/user";

export const login = async (
  credentials: LoginDTO,
  options: RequestOptions | undefined
) => {
  const { p_client, common_p } = generatePartClientKey();
  const { onSuccess, onError } = options || {};

  const payload: LoginRequest = {
    phone: credentials.phone,
    pass: md5(credentials.pass),
    common_p,
    p_client,
  };

  const { data } = await http.post(ApiRoutes.LOGIN, payload);

  if (data.code !== 0) {
    onError && onError();
    return false;
  }

  createAndSaveToken(data);
  saveUserToSession(data.user_info);
  saveMenu(data.user_menu);

  onSuccess && onSuccess();
  return true;
};

const createAndSaveToken = (response: LoginResponse) => {
  const token = generateToken(response.p_server);
  saveToken(token);
};
