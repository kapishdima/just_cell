import { http } from "../client";
import { sign } from "../crypto/DeffiHellman";
import { getToken } from "../crypto/token";
import { ApiRoutes } from "../routes";
import { SendCommandData, Terminal, TerminalFilters } from "./terminal.model";

import omit from "lodash.omit";

export const getTerminalsList = async (
  filters: TerminalFilters
): Promise<Terminal[] | undefined> => {
  const { data } = await http.post(ApiRoutes.TERMINALS_LIST, filters);
  return data.data || [];
};

export const getTerminalRefs = async () => {
  const { data } = await http.get(ApiRoutes.TERMINALS_REFS);

  return data;
};

export const createOfflineTerminal = async (terminalData: any) => {
  const stringifiedTerminalData = {
    ...terminalData,
    is_default_offline: `${terminalData.is_default_offline}`,
    is_for_all_card: `${terminalData.is_for_all_card}`,
    can_user_add_card: `${terminalData.can_user_add_card}`,
    need_shift: `${terminalData.need_shift}`,
    update_all_term: `${terminalData.update_all_term}`,
    regen_key: `${terminalData.regen_key}`,
  };
  const offlineTerminalData = {
    ...stringifiedTerminalData,
    sign: await sign(stringifiedTerminalData, getToken()),
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

export const activateTeminal = async (terminalData: any) => {
  const stringifiedTerminalData = {
    ...terminalData,
    is_default_offline: `${terminalData.is_default_offline}`,
    is_for_all_card: `${terminalData.is_for_all_card}`,
    can_user_add_card: `${terminalData.can_user_add_card}`,
    need_shift: `${terminalData.need_shift}`,
  };
  const activeTerminalData = {
    ...stringifiedTerminalData,
    sign: await sign(stringifiedTerminalData, getToken()),
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
  const stringifiedTerminalData = {
    ...terminalData,
    can_offline: `${terminalData.can_offline}`,
    can_user_reversal: `${terminalData.can_user_reversal}`,
    inShifts: `${terminalData.inShifts}`,
  };
  const editTerminaData = {
    ...stringifiedTerminalData,
    sign: await sign(
      omit(stringifiedTerminalData, [
        "allocation_type",
        "dop_info",
        "ptks_num",
      ]),
      getToken()
    ),
  };

  const { data } = await http.post(ApiRoutes.EDIT_TERMINAL, editTerminaData);

  return data;
};

export const sendTerminalCommand = async (
  sendCommandPayload: SendCommandData
) => {
  const sendCommandData = {
    ...sendCommandPayload,
    sign: await sign(sendCommandPayload, getToken()),
  };
  const { data } = await http.post(
    ApiRoutes.SEND_TERMINAL_COMMAMD,
    sendCommandData
  );

  return data;
};
