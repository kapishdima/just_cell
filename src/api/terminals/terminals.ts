import { http } from "../client";
import { sign } from "../crypto/DeffiHellman";
import { getToken } from "../crypto/token";
import { ApiRoutes } from "../routes";

import {
  SendCommandData,
  Terminal,
  TerminalFilters,
  EcommTerminalRef,
  TerminalRef,
} from "./terminal.model";

import omit from "lodash.omit";

type TerminalsList = {
  terminals: Terminal[];
  total: number;
};

export const getTerminalsList = async (
  filters: TerminalFilters
): Promise<TerminalsList | undefined> => {
  const { data } = await http.post(ApiRoutes.TERMINALS_LIST, filters);

  return {
    terminals: data.data?.map((terminal: Terminal) => ({
      ...terminal,
      amount_list: terminal.amount_list?.replaceAll("|", ","),
    })),
    total: parseInt(data.total),
  };
};

export const getTerminalRefs = async (): Promise<TerminalRef> => {
  const { data } = await http.get(ApiRoutes.TERMINALS_REFS);

  return data;
};

export const getEcommTermilaRefs = async (): Promise<EcommTerminalRef> => {
  const { data } = await http.get(ApiRoutes.ECOMM_TERMINAL_REF);

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
    amount_list: terminalData.amount_list.replaceAll(",", "|"),
    can_offline: `${terminalData.can_offline}`,
    can_user_reversal: `${terminalData.can_user_reversal}`,
    inShifts: `${terminalData.inShifts}`,
  };
  const editTerminaData = {
    ...stringifiedTerminalData,
    sign: await sign(
      omit(stringifiedTerminalData, [
        "amount_list",
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
