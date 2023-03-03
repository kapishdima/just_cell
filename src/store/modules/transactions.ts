import { getTransactionsList } from "@/api/transactions/transactions";
import {
  Transaction,
  TransactionFilters,
} from "@/api/transactions/transactions.model";

type TransactionState = {
  transactions: Transaction[];
  loading: boolean;
};

export enum TransactionsActions {
  GET_TRANSACTIONS = "get_transactions",
  SET_TRANSACTIONS = "set_transactions",
  SET_LOADING = "set_loading",
}

const state = (): TransactionState => ({
  transactions: [],
  loading: false,
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
};

const actions = {
  async [TransactionsActions.GET_TRANSACTIONS](
    { commit }: any,
    filters: TransactionFilters
  ) {
    try {
      commit(TransactionsActions.SET_LOADING, true);

      const transactions = await getTransactionsList(filters);

      commit(TransactionsActions.SET_TRANSACTIONS, transactions || []);
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
