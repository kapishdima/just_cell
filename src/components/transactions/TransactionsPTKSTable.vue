<template lang="">
  <v-table :data="data" :columns="columns" :empty="empty" />
</template>
<script setup lang="ts">
import { Transaction } from "@/api/transactions/transactions.model";
import { createColumnHelper } from "@tanstack/vue-table";

interface TerminalTableProps {
  data: Transaction[];
  empty?: boolean;
}

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("term_name", {
    cell: (info) => info.getValue(),
    header: "Темінал",
  }),
  columnHelper.accessor("terminal_id", {
    cell: (info) => info.getValue(),
    header: "ID терміналу",
  }),
  columnHelper.accessor("order_id", {
    cell: (info) => info.getValue(),
    header: "ID замовлення",
  }),
  columnHelper.accessor("ptks_num", {
    cell: (info) => info.getValue(),
    header: "ID ПТКС",
  }),
  columnHelper.accessor("amount", {
    cell: (info) => info.getValue(),
    header: "Сума",
    size: 120,
  }),
  columnHelper.accessor("bank_name", {
    cell: (info) => info.getValue(),
    header: "Банк",
  }),
  columnHelper.accessor("pan_mask", {
    cell: (info) => info.getValue(),
    header: "Маска",
  }),
  columnHelper.accessor("rrn", {
    cell: (info) => info.getValue(),
    header: "RRN",
  }),
  columnHelper.accessor("tax_num", {
    cell: (info) => info.getValue(),
    header: "Tax",
    size: 100,
  }),
  columnHelper.accessor("is_revers", {
    cell: (info) => (JSON.parse(info.getValue()) === true ? "Так" : "Ні"),
    header: "Чи повернення?",
    size: 50,
  }),
  columnHelper.accessor("revers_amount", {
    cell: (info) => info.getValue(),
    header: "Сумма повернення",
    size: 100,
  }),
  columnHelper.accessor("revers_time", {
    cell: (info) => info.getValue(),
    header: "Час повернення",
    size: 100,
  }),
  columnHelper.accessor("FISCAL_TRANSACTION_ID", {
    cell: (info) => info.getValue(),
    header: "FISCAL_TRANSACTION_ID",
  }),
  columnHelper.accessor("answ_code", {
    cell: (info) => info.getValue(),
    header: "Код відповіді",
    size: 100,
  }),
  columnHelper.accessor("answ_description", {
    cell: (info) => info.getValue(),
    header: "Відповідь",
    size: 180,
  }),
  columnHelper.accessor("status_name", {
    cell: (info) => info.getValue(),
    header: "Статус",
  }),
  columnHelper.accessor("add_time", {
    cell: (info) => info.getValue(),
    header: "Час створення",
  }),
];

defineProps<TerminalTableProps>();
</script>
<script lang="ts">
import VTable from "../table/VTable.vue";

export default {
  components: {
    VTable,
  },
};
</script>
