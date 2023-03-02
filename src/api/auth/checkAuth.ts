import { http } from "../client";
import { ApiRoutes } from "../routes";

export const isAuthorized = async () => {
  const code = await getAuthStatus();

  return code === 0;
};

export const getAuthStatus = async () => {
  const { data } = await http.get(ApiRoutes.GET_AUTH_STATUS);

  return data.code;
};
