import { User } from "./user.model";

const USER_STATE_KEY = "user";
const USER_ROLES_KEY = "user_roles";

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

export const saveUserRulesToSession = (rules: any[]) => {
  window.localStorage.setItem(USER_ROLES_KEY, JSON.stringify(rules));
};

export const getUserRulesFromSession = (): any => {
  const userRoles = window.localStorage.getItem(USER_ROLES_KEY);

  if (!userRoles) {
    return null;
  }

  return JSON.parse(userRoles);
};
