import { Code } from "../response";

export type LoginDTO = {
  phone: string;
  pass: string;
};

export type LoginRequest = {
  phone: string;
  pass: string;
  common_p: number;
  p_client: number;
};

export type LoginResponse = {
  code: Code;
  p_server: string;
};
