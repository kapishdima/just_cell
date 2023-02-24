<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>
    <template #appTitle>Перегляд ПТКС транзакцій</template>
    <template #appContent>
      <transaction-filters @change="onFilterChange" />
      <transactions-table :data="transactions" :empty="!hasTransactions" />
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import TransactionsTable from "@/components/transactions/TransactionsPTKSTable.vue";

import TransactionFilters from "@/components/transactions/TransactionFilters.vue";
import { TransactionsActions } from "@/store/modules/transactions";
import { format } from "@/components/fields/DatepickerField/format";
import { TerminalsActions } from "@/store/modules/terminals";

export default defineComponent({
  components: {
    AppLayout,
    AppLoading,
    TransactionsTable,
    TransactionFilters,
  },

  computed: {
    loading() {
      return this.$store.state.transactions.loading;
    },
    transactions() {
      return this.$store.state.transactions.transactions;
    },
    hasTransactions() {
      return (
        this.$store.state.transactions.transactions &&
        this.$store.state.transactions.transactions.length > 0
      );
    },
  },

  mounted() {
    this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
    this.$store.dispatch(TransactionsActions.GET_TRANSACTIONS, {
      DateFrom: format(new Date()),
      DateTo: format(new Date()),
      type: "PTKS",
    });
  },

  methods: {
    onFilterChange(data: any) {
      this.$store.dispatch(TransactionsActions.GET_TRANSACTIONS, {
        type: "PTKS",
        ...data,
      });
    },
  },
});
</script>
<style lang=""></style>
