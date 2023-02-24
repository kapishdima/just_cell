<template>
  <div class="table-tbody">
    <div
      class="table-row"
      v-for="row in table.getCoreRowModel().rows"
      :key="row.id"
    >
      <div class="table-tr">
        <div
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
          class="table-td table-cell"
          :style="{
            color: row.original.status_color || '#000',
            // minWidth: `${cell.column.getSize()}px`,
            // maxWidth: `${cell.column.getSize()}px`,
          }"
        >
          <FlexRender
            :render="cell.column.columnDef.cell"
            :props="cell.getContext()"
          />
        </div>
      </div>
      <div
        class="table-expanded"
        v-if="(table.getState().expanded as any)[row.id]"
      >
        <div
          class="table-expanded__item"
          v-for="[label, value] in Object.entries(row.subRows[0].original)"
          :key="label"
        >
          <div class="table-expanded__item-label">{{ label }}:</div>
          <div class="table-expanded__item-value">{{ value }}</div>
        </div>
      </div>
    </div>

    <!-- <div class="div" v-if=""></div> -->
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
