<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>
    <template #appTitle>
      <transactions-header
        :alloc_type="allocType"
        v-if="Boolean(allocType.length)"
      />
    </template>
    <template #appContent>
      <transaction-filters @update:filters="filter" :alloc-type="allocType" />
      <div class="table-actions" v-if="total > 0">
        <h2 class="form-title" v-if="parseInt(sum) > 0">
          Загальна сума: <strong>{{ sum }}</strong>
        </h2>
        <export-transactions-button />
      </div>
      <transactions-table
        v-if="Boolean(tableFields.length)"
        :data="transactions"
        :empty="!hasTransactions"
        :total="total"
        :has-pagination="true"
        :alloc_type="allocType"
        :fields="tableFields"
      />
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";

import TransactionsTable from "../ui/TransactionsTable.vue";
import TransactionFilters from "../ui/TransactionFilters.vue";
import ExportTransactionsButton from "../ui/ExportTransactionsButton.vue";
import TransactionsHeader from "../ui/TransactionsHeader.vue";

import { TransactionsActions } from "../store/transactions.store";
import { TerminalsActions } from "@/store/modules/terminals";
import { TableField, TerminalRef } from "@/api/terminals/terminal.model";

export default defineComponent({
  components: {
    AppLayout,
    AppLoading,
    TransactionsTable,
    TransactionFilters,
    ExportTransactionsButton,
    TransactionsHeader,
  },

  computed: {
    loading(): boolean {
      return this.$store.state.transactions.loading;
    },
    transactions(): any {
      return this.$store.state.transactions.transactions;
    },
    sum(): string {
      return this.$store.state.transactions.sum;
    },
    allocType(): string {
      return this.$route.query.alloc_type as string;
    },
    sum(): string {
      return this.$store.state.transactions.sum;
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
    tableFields(): TableField[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.table_fields;
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
        alloc_type: this.allocType,
      });
    },
  },
});
</script>

<style lang="scss">
.table-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
