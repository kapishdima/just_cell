import { http } from "../client";
import { sign } from "../crypto/DeffiHellman";
import { getToken } from "../crypto/token";
import { ApiRoutes } from "../routes";
import { Terminal } from "./terminal.model";

import omit from "lodash.omit";

export const getTerminalsList = async (): Promise<Terminal[] | undefined> => {
  const { data } = await http.get(ApiRoutes.TERMINALS_LIST);
  return data.data || [];
};

export const getTerminalRefs = async () => {
  const { data } = await http.get(ApiRoutes.TERMINALS_REFS);

  return data;
};

export const createOfflineTerminal = async (terminalData: any) => {
  const offlineTerminalData = {
    ...terminalData,
    sign: await sign(terminalData, getToken()),
  };
  const { data } = await http.post(
    ApiRoutes.CREATE_OFFLINE_TERMINAL,
    offlineTerminalData
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
  const activeTerminalData = {
    ...terminal,
    sign: await sign(terminal, getToken()),
  };

  const { data } = await http.post(
    ApiRoutes.ACTIVATE_TERMINAL,
    activeTerminalData
  );

  return data.code;
};

export const createKeyFile = (publicKey: string) => {
  return "data:text/plain;charset=utf-8," + encodeURIComponent(publicKey);
};

export const editTerminal = async (terminalData: any) => {
  const editTerminaData = {
    ...terminalData,
    sign: await sign(
      omit(terminalData, ["allocation_type", "dop_info", "ptks_num"]),
      getToken()
    ),
  };

  const { data } = await http.post(ApiRoutes.EDIT_TERMINAL, editTerminaData);

  return data;
};
