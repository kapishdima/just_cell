import { http } from "../client";
import { ApiRoutes } from "../routes";
import { Terminal } from "./terminal.model";

export const getTerminalsList = async (): Promise<Terminal[] | undefined> => {
  const { data } = await http.get(ApiRoutes.TERMINALS_LIST);
  return data.data || [];
};

export const getTerminalRefs = async () => {
  const { data } = await http.get(ApiRoutes.TERMINALS_REFS);

  return data;
};

export const createOfflineTerminal = async (terminalData: any) => {
  const { data } = await http.post(
    ApiRoutes.CREATE_OFFLINE_TERMINAL,
    terminalData
  );

  return data;
};
export const getTerminalConfig = async () => {
  const { data } = await http.get(ApiRoutes.GET_TERMINAL_CONFIG);
  const terminalConfig = data.terminal_config.at(0);

  if (!terminalConfig) {
    return {};
  }

  return terminalConfig;
};

export const activateTeminal = async (terminal: any) => {
  const { data } = await http.post(ApiRoutes.ACTIVATE_TERMINAL, terminal);

  return data.code;
};

export const createKeyFile = (publicKey: string) => {
  return "data:text/plain;charset=utf-8," + encodeURIComponent(publicKey);
};

export const editTerminal = async (terminalData: any) => {
  const { data } = await http.post(ApiRoutes.EDIT_TERMINAL, terminalData);

  return data;
};
