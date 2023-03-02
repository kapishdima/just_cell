import { http } from "../client";
import { getToken } from "../crypto/token";
import { ApiRoutes } from "../routes";
import { getUserFromSession } from "../user/user";

export const isAuthorized = async () => {
  const user = getUserFromSession();
  const token = getToken();
  const code = await getAuthStatus();

  return Boolean(user && token) && code === 0;
};

export const getAuthStatus = async () => {
  const { data } = await http.get(ApiRoutes.GET_AUTH_STATUS);

  return data.code;
};
