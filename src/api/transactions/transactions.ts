import { http } from "../client";
import { ApiRoutes } from "../routes";
import { Transaction, TransactionFilters } from "./transactions.model";

export const getTransactionsList = async (
  filters: TransactionFilters
): Promise<Transaction[]> => {
  const { data } = await http.post(ApiRoutes.TRANSACTIONS_LIST, filters);

  return data.data?.map((item: any) => ({
    ...item,
    subRows: [
      {
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
  }));
};
