import { getTransactionsList } from "@/api/transactions/transactions";
import {
  Transaction,
  TransactionFilters,
} from "@/api/transactions/transactions.model";
import { format } from "@/components/fields/DatepickerField/format";

type TransactionState = {
  transactions: Transaction[];
  loading: boolean;
  total: number;
};

export enum TransactionsActions {
  GET_TRANSACTIONS = "get_transactions",
  SET_TRANSACTIONS = "set_transactions",
  SET_LOADING = "set_loading",
  SET_TOTAL = "set_total",
}

const state = (): TransactionState => ({
  transactions: [],
  loading: false,
  total: 0,
});

const mutations = {
  [TransactionsActions.SET_TRANSACTIONS](
    state: TransactionState,
    transactions: Transaction[]
  ) {
    state.transactions = transactions;
  },
  [TransactionsActions.SET_LOADING](state: TransactionState, loading: boolean) {
    state.loading = loading;
  },
  [TransactionsActions.SET_TOTAL](state: TransactionState, total: number) {
    state.total = total;
  },
};

const actions = {
  async [TransactionsActions.GET_TRANSACTIONS](
    { commit }: any,
    filters: TransactionFilters
  ) {
    try {
      commit(TransactionsActions.SET_LOADING, true);

      const DateFrom = filters.DateFrom || format(new Date());
      const DateTo = filters.DateTo || format(new Date());
      const filtersData = {
        ...filters,
        DateFrom,
        DateTo,
      };

      const transactionsList = await getTransactionsList(filtersData);

      commit(
        TransactionsActions.SET_TRANSACTIONS,
        transactionsList.transactions || []
      );

      commit(TransactionsActions.SET_TOTAL, transactionsList.total);
      commit(TransactionsActions.SET_LOADING, false);
    } catch (error) {
      commit(TransactionsActions.SET_TRANSACTIONS, []);
      commit(TransactionsActions.SET_LOADING, false);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
