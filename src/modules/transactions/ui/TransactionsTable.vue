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
import { CellContext, createColumnHelper } from "@tanstack/vue-table";

import { extraColumn } from "../config/columns";
import { Transaction } from "../api/transactions.model";

interface TerminalTableProps {
  data: Transaction[];
  total: number;
  empty?: boolean;
  alloc_type: string;
}
const props = defineProps<TerminalTableProps>();

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
  // @ts-ignore
  columnHelper.accessor(extraColumn[props.alloc_type].accessor, {
    cell: (info: CellContext<Transaction, string>): string => info.getValue(),
    // @ts-ignore
    header: extraColumn[props.alloc_type].header,
  }),
  columnHelper.accessor("amount", {
    cell: (info) => info.getValue(),
    header: "Сума",
  }),
  columnHelper.accessor("pay_type", {
    cell: (info) => info.getValue(),
    header: "Форма оплати",
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
        canReverse: JSON.parse(info.row.original.can_revers || "false"),
        hasReverse:
          info.row.original.status_name === TransactionStatuses.SUCCESS,
      }),
    header: "Дії",
  }),
];
</script>
<script lang="ts">
import { h } from "vue";
import { expandedButton } from "@/components/table/ExpandedButton";
import VTable from "@/components/table/VTable.vue";
import { TransactionStatuses } from "@/contants/statuses";

import TransactionActions from "./TransactionActions.vue";

export default {
  components: {
    VTable,
  },
};
</script>
