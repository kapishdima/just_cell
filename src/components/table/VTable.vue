<template lang="">
  <table-empty v-if="empty" />
  <table
    v-else
    class="table"
    border="0"
    rules="none"
    :class="{ 'table--empty': empty }"
  >
    <table-header :table="table" />
    <table-body :table="table" v-if="!empty">
      <template #context-menu="{ values }">
        <slot name="context-menu" :values="values"></slot>
      </template>
    </table-body>
  </table>

  <v-pagination v-if="hasPagination" :total="total" />
</template>
<script setup lang="ts">
import {
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";

interface TableProps {
  columns: ColumnDef<any>[];
  data: any;
  empty: boolean;
  hasPagination: boolean;
  total?: number;
}

const props = defineProps<TableProps>();
const sorting = ref<SortingState>([]);

console.log("VTable", props.columns);

const table = useVueTable({
  get data() {
    return props.data;
  },
  state: {
    get sorting() {
      return sorting.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  columns: props.columns,
  getSubRows: (row) => row.subRows,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
});
</script>
<script lang="ts">
import { defineComponent, ref } from "vue";
import TableBody from "./TableBody.vue";
import TableHeader from "./TableHeader.vue";
import TableEmpty from "./EmptyTable.vue";
import VPagination from "../panigation/VPagination.vue";

export default defineComponent({
  components: {
    TableBody,
    TableHeader,
    TableEmpty,
    VPagination,
  },
});
</script>
