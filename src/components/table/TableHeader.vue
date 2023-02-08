<template>
  <thead class="table-thead">
    <tr
      class="table-tr"
      v-for="headerGroup in table.getHeaderGroups()"
      :key="headerGroup.id"
    >
      <th
        v-for="header in headerGroup.headers"
        :key="header.id"
        :colSpan="header.colSpan"
        class="table-th table-cell"
      >
        <FlexRender
          v-if="!header.isPlaceholder"
          :render="header.column.columnDef.header"
          :props="header.getContext()"
        />
      </th>
    </tr>
  </thead>
</template>
<script setup lang="ts">
import { Table, FlexRender } from "@tanstack/vue-table";

interface TableHeaderProps {
  table: Table<any>;
}

defineProps<TableHeaderProps>();
</script>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
