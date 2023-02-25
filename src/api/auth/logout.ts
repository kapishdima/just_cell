import { http } from "../client";
import { ApiRoutes } from "../routes";

export const logout = async () => {
  await http.post(ApiRoutes.LOGOUT);
};
