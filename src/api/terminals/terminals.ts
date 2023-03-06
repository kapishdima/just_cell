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
  const { data } = await http.post(ApiRoutes.CREATE_OFFLINE_TERMINAL, {
    settings: parseInt(terminalData.settings),
    max_offline_sum: parseInt(terminalData.max_offline_sum),
    is_default_offline: terminalData.is_default_offline,
    is_for_all_card: terminalData.is_for_all_card,
    can_user_add_card: terminalData.can_user_add_card,
    endpoint_result: terminalData.endpoint_result,
    add_get: terminalData.add_get,
    headers: terminalData.headers,
    payload: terminalData.payload,
    sign_stract: terminalData.sign_stract,
    card_wait: parseInt(terminalData.card_wait),
    req_type: terminalData.req_type,
    need_shift: terminalData.need_shift,
    sync_type: parseInt(terminalData.sync_type),
    sync_period: parseInt(terminalData.sync_period),
    update_all_term: terminalData.update_all_term,
  });

  return data;
};
export const getTerminalConfig = async () => {
  const { data } = await http.get(ApiRoutes.GET_TERMINAL_CONFIG);
  const terminalConfig = data.terminal_config.at(0);

  if (!terminalConfig) {
    return {};
  }

  return {
    settings: terminalConfig.settings,
    max_offline_sum: terminalConfig.max_offline_sum,
    is_default_offline: JSON.parse(terminalConfig.is_default_offline),
    is_for_all_card: JSON.parse(terminalConfig.is_for_all_card),
    can_user_add_card: JSON.parse(terminalConfig.can_user_add_card),
    sync_type: terminalConfig.sync_type,
    sync_period: terminalConfig.sync_period,
    endpoint_result: terminalConfig.endpoint_result,
    add_get: terminalConfig.add_get,
    req_type: terminalConfig.req_type,
    headers: terminalConfig.headers,
    payload: terminalConfig.payload,
    sign_stract: terminalConfig.sign_stract,
    need_shift: JSON.parse(terminalConfig.need_shift),
    card_wait: terminalConfig.card_wait,
  };
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
