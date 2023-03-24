import { http } from "../client";
import { ApiRoutes } from "../routes";
import {
  ExportTransactionFilters,
  Transaction,
  TransactionFilters,
} from "./transactions.model";

type TransactionsList = {
  transactions: Transaction[];
  total: number;
};

export const getTransactionsList = async (
  filters: TransactionFilters
): Promise<TransactionsList> => {
  const { data } = await http.post(ApiRoutes.TRANSACTIONS_LIST, filters);

  return {
    transactions: data.data?.map((item: any) => ({
      ...item,
      subRows: [
        {
          "ID термінала": item.terminal_id,
          RRN: item.rrn,
          tax_num: item.tax_num,
          "Чи повернення": JSON.parse(item.is_revers) ? "Так" : "Ні",
          "Сумма повернення": item.revers_amount,
          "Час повернення": item.revers_time,
          "Фіскальний номер": item.FISCAL_TRANSACTION_ID,
          Відповідь: item.answ_description,
          "Код відповіді": item.answ_code,
          Дата: item.add_time,
        },
      ],
    })),
    total: parseInt(data.total),
  };
};

export const getAllTransactions = async (filters: ExportTransactionFilters) => {
  const { data } = await http.post(ApiRoutes.TRANSACTIONS_LIST, filters);

  return data.data?.map((item: any) => ({
    Темінал: item.term_name,
    "Order ID": item.order_id,
    [item.ptks_num ? "ID ПТКС" : "ID квитка"]: item.ptks_num
      ? item.ptks_num
      : item.ticket_num,
    Сума: item.amount,
    Банк: item.bank_name,
    "Карта/Токен": item.pan_mask,
    Статус: item.status_name,
    "ID термінала": item.terminal_id,
    RRN: item.rrn,
    tax_num: item.tax_num,
    "Чи повернення": JSON.parse(item.is_revers) ? "Так" : "Ні",
    "Сумма повернення": item.revers_amount,
    "Час повернення": item.revers_time,
    "Фіскальний номер": item.FISCAL_TRANSACTION_ID,
    Відповідь: item.answ_description,
    "Код відповіді": item.answ_code,
    Дата: item.add_time,
  }));
};
