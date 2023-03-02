<template lang="">
  <v-table :data="data" :columns="columns" />
</template>
<script setup lang="ts">
import { Terminal } from "@/api/terminals/terminal.model";
import { expandedButton } from "@/components/table/ExpandedButton";
import { createColumnHelper } from "@tanstack/vue-table";

interface TerminalTableProps {
  data: Terminal[];
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
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Назва",
  }),

  columnHelper.accessor("can_offline", {
    header: "Чи працює оффлайн",
    cell: (info) => (JSON.parse(info.getValue()) ? "Так" : "Ні"),
  }),
  columnHelper.accessor("max_offline_sum", {
    header: "Максимальна оффлайн сумма",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("inShifts", {
    cell: (info) => (JSON.parse(info.getValue()) ? "Так" : "Ні"),
    header: "У змінах",
  }),
  columnHelper.accessor("last_online", {
    cell: (info) => info.getValue(),
    header: "Востаннє онлайн",
  }),
  columnHelper.accessor("last_start", {
    cell: (info) => info.getValue(),
    header: "Останній старт",
  }),
  columnHelper.display({
    cell: (info) => {
      return h(TerminalActions);
    },

    header: "Дії",
  }),
];

defineProps<TerminalTableProps>();
</script>
<script lang="ts">
import VTable from "../table/VTable.vue";
import { h } from "vue";
import TerminalActions from "@/components/terminals/TerminalActions.vue";

export default {
  components: {
    VTable,
  },
};
</script>
