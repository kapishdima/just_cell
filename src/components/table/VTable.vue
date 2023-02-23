<template lang="">
  <table
    class="table"
    border="0"
    rules="none"
    :class="{ 'table--empty': empty }"
  >
    <table-header :table="table" />
    <table-body :table="table" v-if="!empty" />
    <table-empty v-else />
  </table>
</template>
<script setup lang="ts">
import { ColumnDef, getCoreRowModel, useVueTable } from "@tanstack/vue-table";
interface TableProps {
  columns: ColumnDef<any>[];
  data: any;
  empty: boolean;
}

const props = defineProps<TableProps>();

const table = useVueTable({
  get data() {
    return props.data;
  },
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
});
</script>
<script lang="ts">
import { defineComponent } from "vue";
import TableBody from "./TableBody.vue";
import TableHeader from "./TableHeader.vue";
import TableEmpty from "./EmptyTable.vue";

export default defineComponent({
  components: {
    TableBody,
    TableHeader,
    TableEmpty,
  },
});
</script>
<style lang=""></style>
