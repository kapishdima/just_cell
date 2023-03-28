import { http } from "@/api/client";
import { ApiRoutes } from "@/api/routes";
import { generatePartClientKey, sign } from "@/api/crypto/DeffiHellman";
import { generateToken, getToken, saveToken } from "@/api/crypto/token";
import { saveMenu } from "@/api/menu/menu.api";
import md5 from "md5";

import { LoginDTO, LoginRequest, LoginResponse } from "./login.model";

import { saveUserRulesToSession, saveUserToSession } from "../user/user";

export const login = async (credentials: LoginDTO) => {
  const { p_client, common_p } = generatePartClientKey();

  const payload: LoginRequest = {
    phone: credentials.phone,
    pass: md5(credentials.pass),
    common_p,
    p_client,
  };

  const { data } = await http.post(ApiRoutes.LOGIN, payload);

  if (data.code === 0) {
    createAndSaveToken(data);
    saveUserToSession(data.user_info);
    saveUserRulesToSession(data.rules);
    saveMenu(data.user_menu);
  }

  return data;
};

const createAndSaveToken = (response: LoginResponse) => {
  const token = generateToken(response.p_server);
  saveToken(token);
};
