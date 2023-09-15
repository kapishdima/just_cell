<template>
  <export-button
    :export-data="exportTransactions"
    :loading="exportLoading"
    @click="fetchExportData"
  />
</template>

<script lang="ts">
import ExportButton from "@/components/table/ExportButton.vue";
import { TransactionsActions } from "../store/transactions.store";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ExportButton,
  },

  computed: {
    allocType(): string {
      return this.$route.query.alloc_type as string;
    },
    exportLoading(): boolean {
      return this.$store.state.transactions.exportLoading;
    },
    exportTransactions(): any {
      return this.$store.state.transactions.exportTransactions;
    },
  },

  methods: {
    fetchExportData() {
      this.$store.dispatch(TransactionsActions.GET_EXPORT_TRANSACTIONS, {
        ...this.$route.query,
        alloc_type: this.allocType,
      });
    },
  },
});
</script>

<style lang="scss" scoped></style>
