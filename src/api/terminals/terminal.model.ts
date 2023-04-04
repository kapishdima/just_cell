export type Terminal = {
  settings: any;
  name: string;
  terminal_type: string;
  address: string;
  ID: string;
  interface_type: string;
  system: string;
  can_offline: string;
  max_offline_sum: number;
  can_user_reversal: string;
  callback_url: string;
  callback_type: string;
  callback_headers: string;
  callback_req_tmpl: string;
  sign_stract: string;
  callback_req_type: string;
  inShifts: string;
  timeout: number;
  resendPeriod: number;
  shift_start: number;
  shift_end: number;
  status_code: number;
  status_color: string;
  status: string;
  last_online: string;
  last_start: string;
  allocation_type: string;
  dop_info: string;
};

export type TerminalPoint = {
  name: string;
  id: number;
};

export type TerminalType = {
  name: string;
  opis: string;
  id: number;
};

export type City = {
  name: string;
  id: number;
};

export type Transport = {
  name: string;
  id: number;
};

export type AllocType = {
  name: string;
  id: number;
};

export type CompanyType = {
  name: string;
  id: number;
};

export type TerminalModel = {
  name: string;
  opis: string;
  dep_on_opersys: string;
  is_sell: boolean;
  id: number;
};

export type TerminalCommand = {
  name: string;
  id: string;
};

export type TerminalRef = {
  code: 0;
  points: TerminalPoint[];
  terminals_type: TerminalType[];
  cities: City[];
  transport_list: Transport[];
  transport_support: TerminalModel[];
  offline_settings: TerminalOfflineSettings[];
  sync_type: TerminalSyncType[];
  alloc_type: AllocType[];
  parent_child: CompanyType[];
  trm_cmd: TerminalCommand[];
  status_list: {
    name: string;
    color: string;
    id: string;
  }[];
  sign: string;
};

export type TerminalOfflineSettings = {
  name: string;
  id: number;
};

export type TerminalSyncType = {
  name: string;
  id: number;
};

export type OfflineTerminalPayload = {
  settings: string;
  max_offline_sum: number;
  is_default_offline: boolean;
  is_for_all_card: boolean;
  can_user_add_card: boolean;
  sync_type: string;
  sync_period: number;
  endpoint_result: string;
  add_get: string;
  req_type: string;
  headers: string;
  payload: string;
  sign_stract: string;
  need_shift: boolean;
  card_wait: number;
  update_all_term: boolean;
};

export type CreateOfflineTerminalResponse = {
  code: number;
  public_key?: string;
};

export type EditTerminalData = {
  ID: string;
  status_code: string;
  name: string;
  address: string;
  can_offline: string;
  max_offline_sum: string;
  can_user_reversal: string;
  callback_url: string;
  callback_type: string;
  callback_headers: string;
  callback_req_tmpl: string;
  sign_stract: string;
  callback_req_type: string;
  inShifts: string;
  timeout: string;
  resendPeriod: string;
  shift_start: string;
  shift_end: string;
  allocation_type: string;
  dop_info: string;
  ptks_num: string;
};

export type TerminalFilters = {
  terminal_id: string;
  child_id: string;
};

export type SendCommandData = {
  terminal_id: string;
  cmd_id: string;
};
