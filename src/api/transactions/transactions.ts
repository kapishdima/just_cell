import { http } from "../client";
import { ApiRoutes } from "../routes";
import { Transaction, TransactionFilters } from "./transactions.model";

export const getTransactionsList = async (
  filters: TransactionFilters
): Promise<Transaction[]> => {
  const { data } = await http.post(ApiRoutes.TRANSACTIONS_LIST, filters);

  return data.data;
};
