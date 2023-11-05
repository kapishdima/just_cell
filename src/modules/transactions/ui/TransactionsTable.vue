<template lang="">
  <v-table
    :data="data"
    :columns="columns"
    :empty="empty"
    :has-export="true"
    :total="total"
    v-if="Boolean(columns.length)"
  />
</template>

<script lang="ts">
import { defineComponent, h } from "vue";

import VTable from "@/components/table/VTable.vue";
import { createColumnHelper } from "@tanstack/vue-table";
import { TransactionStatuses } from "@/contants/statuses";

import { expandedButton } from "@/components/table/ExpandedButton";
import { TableField } from "@/api/terminals/terminal.model";

import { Transaction, TransactionsSubFields } from "../api/transactions.model";
import TransactionActions from "./TransactionActions.vue";

export default defineComponent({
  props: ["data", "total", "empty", "alloc_type", "fields"],
  components: {
    VTable,
  },

  data() {
    return {
      columns: [] as any,
    };
  },

  watch: {
    fields: {
      handler(value) {
        console.log("WATCH", value);
        this.setColumns(value);
      },
      immediate: true,
    },
  },

  methods: {
    setColumns(tableFields: TableField[]) {
      const columnHelper = createColumnHelper<Transaction>();
      const fields = tableFields
        .filter((field) => field.alloc_type === this.alloc_type)
        .filter((field) => !TransactionsSubFields.includes(field.name));

      const columns = fields.map((field: any, index) =>
        columnHelper.accessor(field.alias, {
          cell: (info) => {
            if (index === 0) {
              const value = info.getValue();
              const isExpanded = info.row.getIsExpanded();
              const onClick = info.row.getToggleExpandedHandler();
              return expandedButton(value, isExpanded, onClick);
            }

            return info.getValue();
          },
          header: field.name,
        })
      );

      this.columns = [
        ...columns,
        columnHelper.display({
          cell: (info) =>
            h(TransactionActions, {
              transaction: info.row.original,
              canReverse: JSON.parse(info.row.original.can_revers || "false"),
              hasReverse:
                info.row.original.status_name === TransactionStatuses.SUCCESS,
            }),
          header: "Дії",
        }),
      ];
    },
  },
});
</script>
