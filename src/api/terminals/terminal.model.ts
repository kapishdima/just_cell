export type Terminal = {
  settings: null;
  name: string;
  terminal_type: string;
  address: string;
  ID: string;
  interface_type: string;
  system: string;
  can_offline: boolean;
  max_offline_sum: number;
  can_user_reversal: boolean;
  callback_url: string;
  callback_type: string;
  callback_headers: string;
  callback_req_tmpl: string;
  sign_stract: string;
  callback_req_type: string;
  inShifts: boolean;
  timeout: number;
  resendPeriod: number;
  shift_start: number;
  shift_end: number;
  status_code: number;
  status_color: string;
  status: string;
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

export type TerminalModel = {
  name: string;
  opis: string;
  dep_on_opersys: string;
  is_sell: boolean;
  id: number;
};

export type TerminalRef = {
  code: 0;
  points: TerminalPoint[];
  terminals_type: TerminalType[];
  cities: City[];
  transport_list: Transport[];
  transport_support: TerminalModel[];
  sign: string;
};
