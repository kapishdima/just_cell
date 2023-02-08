import { getToken } from "../crypto/token";
import { getUserFromSession } from "../user/user";

export const isAuthorized = () => {
  const user = getUserFromSession();
  const token = getToken();
  console.log("user", user);
  console.log("token", token);

  return Boolean(user && token);
};
