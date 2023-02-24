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
    cell: (info) => {
      return h("div", { class: "table-expanded__column" }, [
        h(
          "button",
          {
            class: `table-expanded__button ${
              info.row.getIsExpanded() ? "expanded" : ""
            }`,
            onClick: info.row.getToggleExpandedHandler(),
          },
          [h("img", { src: require("@/assets/icons/chevron-right.svg") })]
        ),
        info.getValue(),
      ]);
    },
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
];

defineProps<TerminalTableProps>();
</script>
<script lang="ts">
import VTable from "../table/VTable.vue";
import { h } from "vue";

export default {
  components: {
    VTable,
  },
};
</script>
