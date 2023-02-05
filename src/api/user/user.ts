import { User } from "./user.model";

const USER_STATE_KEY = "user";

export const saveUserToSession = (user: User) => {
  window.localStorage.setItem(USER_STATE_KEY, JSON.stringify(user));
};

export const getUserFromSession = (): User | null => {
  const userJson = window.localStorage.getItem(USER_STATE_KEY);

  if (!userJson) {
    return null;
  }

  return JSON.parse(userJson);
};
