<template lang="">
  <v-table
    :data="data"
    :columns="columns"
    :empty="empty"
    :has-export="true"
    :total="total"
  />
</template>
<script setup lang="ts">
import { Transaction } from "@/api/transactions/transactions.model";
import { createColumnHelper } from "@tanstack/vue-table";

interface TerminalTableProps {
  data: Transaction[];
  total: number;
  empty?: boolean;
}

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("term_name", {
    cell: (info) => {
      const value = info.getValue();
      const isExpanded = info.row.getIsExpanded();
      const onClick = info.row.getToggleExpandedHandler();
      return expandedButton(value, isExpanded, onClick);
    },
    header: "Темінал",
  }),
  columnHelper.accessor("order_id", {
    cell: (info) => info.getValue(),
    header: "Order ID",
  }),
  columnHelper.accessor("ptks_num", {
    cell: (info) => info.getValue(),
    header: "ID ПТКС",
  }),
  columnHelper.accessor("amount", {
    cell: (info) => info.getValue(),
    header: "Сума",
  }),
  columnHelper.accessor("bank_name", {
    cell: (info) => info.getValue(),
    header: "Банк",
  }),
  columnHelper.accessor("pan_mask", {
    cell: (info) => info.getValue(),
    header: "Карта/Токен",
  }),
  columnHelper.accessor("status_name", {
    cell: (info) => info.getValue(),
    header: "Статус",
  }),
  columnHelper.display({
    cell: (info) =>
      h(TransactionActions, {
        transaction: info.row.original,
        hasReverse:
          info.row.original.status_name === TransactionStatuses.SUCCESS,
      }),
    header: "Дії",
  }),
];

defineProps<TerminalTableProps>();
</script>
<script lang="ts">
import VTable from "../table/VTable.vue";
import { h } from "vue";
import { expandedButton } from "../table/ExpandedButton";
import TransactionActions from "./TransactionActions.vue";
import { TransactionStatuses } from "@/contants/statuses";

export default {
  components: {
    VTable,
  },
};
</script>
