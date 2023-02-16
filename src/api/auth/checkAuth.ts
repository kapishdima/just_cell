import { getToken } from "../crypto/token";
import { getUserFromSession } from "../user/user";

export const isAuthorized = () => {
  const user = getUserFromSession();
  const token = getToken();

  return Boolean(user && token);
};
