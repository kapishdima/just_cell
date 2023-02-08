<template lang="">
  <table class="table" border="0" rules="none">
    <table-header :table="table" />
    <table-body :table="table" />
  </table>
</template>
<script setup lang="ts">
import { ColumnDef, getCoreRowModel, useVueTable } from "@tanstack/vue-table";
interface TableProps {
  columns: ColumnDef<any>[];
  data: any;
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

export default defineComponent({
  components: {
    TableBody,
    TableHeader,
  },
});
</script>
<style lang=""></style>
