import { AxiosResponse } from "axios";
import { http } from "@/api/client";
import { ApiRoutes } from "@/api/routes";
import { generatePartClientKey } from "@/api/crypto/DeffiHellman";
import { generateToken, saveToken } from "@/api/crypto/token";

import { LoginDTO, LoginRequest, LoginResponse } from "./login.model";

import { RequestOptions } from "../response";

export const login = async (
  credentials: LoginDTO,
  options: RequestOptions | undefined
) => {
  const { p_client, common_p } = generatePartClientKey();
  const { onSuccess, onError } = options || {};

  const payload: LoginRequest = {
    ...credentials,
    common_p,
    p_client,
  };

  const { data } = await http.post<
    LoginResponse,
    AxiosResponse<LoginResponse>,
    LoginRequest
  >(ApiRoutes.LOGIN, payload, { params: { lng: "UA" } });

  if (data.code !== 0) {
    onError && onError();
    return false;
  }

  createAndSaveToken(data);
  onSuccess && onSuccess();
  return true;
};

const createAndSaveToken = (response: LoginResponse) => {
  const token = generateToken(response.p_server);
  saveToken(token);
};
