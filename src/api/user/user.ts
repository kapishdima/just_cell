import { RULES_STORAGE_KEY } from "@/contants/storage";
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

export const saveUserRulesToSession = (rules: any[]) => {
  window.localStorage.setItem(RULES_STORAGE_KEY, JSON.stringify(rules));
};

export const getUserRulesFromSession = (): any => {
  const userRoles = window.localStorage.getItem(RULES_STORAGE_KEY);

  if (!userRoles) {
    return [];
  }

  return JSON.parse(userRoles);
};
