import { http } from "../client";
import { ApiRoutes } from "../routes";
import { Terminal } from "./terminal.model";

export const getTerminalsList = async (): Promise<Terminal[] | undefined> => {
  const { data } = await http.get(ApiRoutes.TERMINALS_LIST);

  return data.data;
};

export const getTerminalRefs = async () => {
  const { data } = await http.get(ApiRoutes.TERMINALS_REFS);

  return data;
};
