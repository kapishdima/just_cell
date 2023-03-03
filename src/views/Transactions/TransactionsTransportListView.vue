<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>
    <template #appTitle>Перегляд транспортних транзакцій</template>
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
import TransactionsTable from "@/components/transactions/TransactionsTransportTable.vue";

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
    const DateFrom = this.$route.query.DateFrom || format(new Date());
    const DateTo = this.$route.query.DateTo || format(new Date());
    const filters = {
      ...this.$route.query,
      DateFrom,
      DateTo,
    };

    this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
    this.$store.dispatch(TransactionsActions.GET_TRANSACTIONS, {
      ...filters,
      type: "TRANSPORT",
    });
  },

  methods: {
    onFilterChange(data: any) {
      this.$store.dispatch(TransactionsActions.GET_TRANSACTIONS, {
        type: "TRANSPORT",
        ...data,
      });
    },
  },
});
</script>
<style lang=""></style>
