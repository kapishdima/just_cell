<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>
    <template #appTitle>Перегляд ПТКС транзакцій</template>
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
import TransactionsTable from "@/components/transactions/TransactionsPTKSTable.vue";
import ExportButton from "@/components/table/ExportButton.vue";

import TransactionFilters from "@/components/transactions/TransactionFilters.vue";
import { TransactionsActions } from "@/store/modules/transactions";
import { TerminalsActions } from "@/store/modules/terminals";
import { TerminalRef } from "@/api/terminals/terminal.model";

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
    terminalRef(): TerminalRef {
      return this.$store.state.terminals.terminalRef;
    },
    allocType(): number {
      return this.$store.getters.allocTypeId("ПТКС");
    },
    exportLoading(): boolean {
      return this.$store.state.transactions.exportLoading;
    },
    exportTransactions(): any {
      console.log(this.$store.state.transactions.exportTransactions);
      return this.$store.state.transactions.exportTransactions;
    },
    hasTransactions(): boolean {
      return (
        this.$store.state.transactions.transactions &&
        this.$store.state.transactions.transactions.length > 0
      );
    },
    total(): number {
      return this.$store.state.transactions.total;
    },
  },

  watch: {
    "$route.query": {
      handler(value) {
        this.filter(value);
      },
      deep: true,
    },
  },

  mounted() {
    this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
    this.filter({});
  },

  methods: {
    filter(filterData: any) {
      this.$store.dispatch(TransactionsActions.GET_TRANSACTIONS, {
        ...filterData,
        alloc_type: this.allocType,
      });
    },
    fetchExportData() {
      this.$store.dispatch(TransactionsActions.GET_EXPORT_TRANSACTIONS, {
        ...this.$route.query,
        alloc_type: this.allocType,
      });
    },
  },
});
</script>
<style lang=""></style>
