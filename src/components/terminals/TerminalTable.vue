<template lang="">
  <v-table :data="data" :columns="columns" />
</template>
<script setup lang="ts">
import { Terminal } from "@/api/terminals/terminal.model";
import { createColumnHelper } from "@tanstack/vue-table";

interface TerminalTableProps {
  data: Terminal[];
}

const columnHelper = createColumnHelper<Terminal>();

const columns = [
  columnHelper.accessor("ID", {
    cell: (info) => info.getValue(),
    header: (props) => props.column.id,
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Назва",
  }),
  columnHelper.accessor("terminal_type", {
    cell: (info) => info.getValue(),
    header: "Тип терміналу",
  }),
  columnHelper.accessor("address", {
    cell: (info) => info.getValue(),
    header: "Адреса",
  }),
  columnHelper.accessor("interface_type", {
    cell: (info) => info.getValue(),
    header: "Тип інтерфейсу",
  }),
  columnHelper.accessor("system", {
    cell: (info) => info.getValue(),
    header: "Система",
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
  mounted() {
    // console.log(this.data);
  },
};
</script>
