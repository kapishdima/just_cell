<template lang="">
  <div class="table-actions" v-if="!empty && hasExport">
    <export-button :export-data="data" :table="table" />
  </div>
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

  <v-pagination v-if="hasPagination && total > 0" :total="total" />
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
  hasExport: boolean;
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
import ExportButton from "./ExportButton.vue";
import VPagination from "../panigation/VPagination.vue";

export default defineComponent({
  components: {
    TableBody,
    TableHeader,
    TableEmpty,
    ExportButton,
    VPagination,
  },
});
</script>
<style lang=""></style>
