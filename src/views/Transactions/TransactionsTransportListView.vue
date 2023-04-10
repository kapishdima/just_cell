<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>
    <template #appTitle>Перегляд транспортних транзакцій</template>
    <template #appContent>
      <transaction-filters @update:filters="filter" />
      <div class="table-actions" v-if="total > 0">
        <export-button
          :export-data="exportTransactions"
          :loading="exportLoading"
          @click="fetchExportData"
        />
      </div>
      <transactions-table
        :data="transactions"
        :empty="!hasTransactions"
        :total="total"
        :has-pagination="true"
      />
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
import { TerminalsActions } from "@/store/modules/terminals";
import ExportButton from "@/components/table/ExportButton.vue";

export default defineComponent({
  components: {
    AppLayout,
    AppLoading,
    TransactionsTable,
    TransactionFilters,
    ExportButton,
  },

  computed: {
    loading(): boolean {
      return this.$store.state.transactions.loading;
    },
    transactions(): any {
      return this.$store.state.transactions.transactions;
    },
    hasTransactions(): boolean {
      return (
        this.$store.state.transactions.transactions &&
        this.$store.state.transactions.transactions.length > 0
      );
    },
    total(): number {
      console.log(this.$store.state.transactions.total);
      return this.$store.state.transactions.total;
    },
    exportLoading(): boolean {
      return this.$store.state.transactions.exportLoading;
    },
    exportTransactions(): any {
      return this.$store.state.transactions.exportTransactions;
    },
  },

  watch: {
    "$route.query": {
      handler(value) {
        this.filter(value);
      },
      deep: true,
      immediate: true,
    },
  },

  mounted() {
    this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
  },

  methods: {
    filter(filterData: any) {
      this.$store.dispatch(TransactionsActions.GET_TRANSACTIONS, {
        ...filterData,
        type: "TRANSPORT",
      });
    },
    fetchExportData() {
      this.$store.dispatch(TransactionsActions.GET_EXPORT_TRANSACTIONS, {
        ...this.$route.query,
        type: "PTKS",
      });
    },
  },
});
</script>
<style lang=""></style>
