import {
  MENU_STORE_KEY,
  RULES_STORAGE_KEY,
  TOKEN_STORE_KEY,
  USER_STATE_KEY,
} from "@/contants/storage";
import { User } from "./user.model";

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

export const clearUserSession = () => {
  window.localStorage.removeItem(USER_STATE_KEY);
  window.localStorage.removeItem(RULES_STORAGE_KEY);
  window.localStorage.removeItem(TOKEN_STORE_KEY);
  window.localStorage.removeItem(MENU_STORE_KEY);
};
