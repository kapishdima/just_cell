<template>
  <div class="table-thead">
    <div
      class="table-tr"
      v-for="headerGroup in table.getHeaderGroups()"
      :key="headerGroup.id"
    >
      <!-- :style="{ minWidth: `${header.column.getSize()}px` }" -->
      <div
        v-for="header in headerGroup.headers"
        :key="header.id"
        class="table-th table-cell"
      >
        <FlexRender
          v-if="!header.isPlaceholder"
          :render="header.column.columnDef.header"
          :props="header.getContext()"
        />
      </div>
    </div>
  </div>
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
