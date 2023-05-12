<template lang="">
  <v-table :data="data" :columns="columns" :empty="empty">
    <template #context-menu="{ values }">
      <terminal-actions :terminal="values" />
    </template>
  </v-table>
</template>
<script setup lang="ts">
import { Terminal } from "@/api/terminals/terminal.model";
import { expandedButton } from "@/components/table/ExpandedButton";
import { createColumnHelper } from "@tanstack/vue-table";

interface TerminalTableProps {
  data: Terminal[];
  empty: boolean;
}

const columnHelper = createColumnHelper<Terminal>();

const columns = [
  columnHelper.accessor("ID", {
    cell: (info) => {
      const value = info.getValue();
      const isExpanded = info.row.getIsExpanded();
      const onClick = info.row.getToggleExpandedHandler();
      return expandedButton(value, isExpanded, onClick);
    },
    header: (props) => props.column.id,
    sortDescFirst: true,
  }),
  columnHelper.accessor("serial_number", {
    cell: (info) => info.getValue(),
    header: "SN пристрою",
    sortDescFirst: true,
  }),

  columnHelper.accessor("can_offline", {
    header: "Чи працює оффлайн",
    cell: (info) => (JSON.parse(info.getValue()) ? "Так" : "Ні"),
    sortDescFirst: true,
  }),
  columnHelper.accessor("max_offline_sum", {
    header: "Максимальна оффлайн сумма",
    cell: (info) => info.getValue(),
    sortDescFirst: true,
  }),

  columnHelper.accessor("last_online", {
    cell: (info) => info.getValue(),
    header: "Востаннє онлайн",
    sortDescFirst: true,
  }),
  columnHelper.accessor("last_start", {
    cell: (info) => info.getValue(),
    header: "Останній старт",
    sortDescFirst: true,
  }),
  columnHelper.accessor("add_time", {
    cell: (info) => info.getValue(),
    header: "Дата активації",
    sortDescFirst: true,
  }),
  columnHelper.display({
    cell: (info) => h(TerminalActionsColumn, { terminal: info.row.original }),
    header: "Дії",
  }),
];

defineProps<TerminalTableProps>();
</script>
<script lang="ts">
import VTable from "../table/VTable.vue";
import { defineComponent, h } from "vue";
import TerminalActionsColumn from "./actions/TerminalActionsColumn.vue";
import TerminalActions from "./actions/TerminalActions.vue";

export default defineComponent({
  components: {
    VTable,
  },
});
</script>
