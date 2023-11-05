export type Transaction = {
  term_name: string;
  terminal_id: string;
  ptks_num: number;
  add_time: string;
  amount: string;
  order_id: string;
  bank_name: string;
  status_name: string;
  rrn: string;
  status_color: string;
  answ_code: number;
  answ_description: string;
  tax_num: number;
  status: number;
  FISCAL_TRANSACTION_ID: number;
  pan_mask: string;
  is_revers: string;
  revers_amount: number;
  revers_time: string;
  ticket_num: number;
  pay_type: string;
  can_revers: string;
};

export type TransactionFilters = {
  DateFrom: string;
  DateTo: string;
  alloc_type: number;
  page: number;
  perPage: number;
};

export type ExportTransactionFilters = {
  DateFrom: string;
  DateTo: string;
};

export const TransactionsSubFields = [
  "ID термінала",
  "RRN",
  "Фіскальний номер",
  "Транзакцію повернуто",
  "Сумма повернення",
  "Час повернення",
  "Час оплати",
  "Відповідь",
  "Код відповіді",
  "Дата",
  "Компанія",
  "Маска карти",
  "Форма оплати",
];
