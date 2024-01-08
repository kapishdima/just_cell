<template>
  <export-button
    :export-data="exportData"
    :loading="exportLoading"
    @click="fetchExportData"
  />
</template>

<script lang="ts">
import ExportButton from "@/components/table/ExportButton.vue";
import { TransactionsActions } from "../store/transactions.store";
import { defineComponent } from "vue";
import { TableField, TerminalRef } from "@/api/terminals/terminal.model";

export default defineComponent({
  components: {
    ExportButton,
  },

  data() {
    return {
      exportData: [],
    };
  },

  computed: {
    allocType(): string {
      return this.$route.query.alloc_type as string;
    },
    sum(): string {
      return this.$store.state.transactions.sum;
    },
    exportLoading(): boolean {
      return this.$store.state.transactions.exportLoading;
    },
    exportTransactions(): any {
      return this.$store.state.transactions.exportTransactions;
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
    exportTransactions: {
      handler(values) {
        console.log(this.sum);
        const fields = this.tableFields.filter(
          (field) => field.alloc_type === this.allocType
        );

        if (!fields || !fields.length) {
          return [];
        }

        const exportData = values.map((record: any) => {
          return Object.keys(record).reduce((acc: any, value: string) => {
            const field = fields.find((field) => field.alias === value);
            if (!field) {
              return acc;
            }
            acc[field.name] = record[value];
            return acc;
          }, {});
        });

        const sumFieldIndex =
          fields.findIndex((field) => field.name === "Сума") || 1;

        exportData.push({
          [fields[sumFieldIndex - 1].name]: "Усього",
          [fields[sumFieldIndex].name]: this.sum.replace(".", ","),
        });
        this.exportData = exportData;
      },
      immediate: true,
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
