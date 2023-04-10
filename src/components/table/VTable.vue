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
    <table-body :table="table" v-if="!empty" />
  </table>

  <v-pagination v-if="hasPagination" :total="total" />
</template>
<script setup lang="ts">
import {
  ColumnDef,
  getCoreRowModel,
  getExpandedRowModel,
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

const table = useVueTable({
  get data() {
    return props.data;
  },
  columns: props.columns,
  getSubRows: (row) => row.subRows,
  getCoreRowModel: getCoreRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
});
</script>
<script lang="ts">
import { defineComponent } from "vue";
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
<style lang=""></style>
