<template>
  <tbody class="table-tbody">
    <tr class="table-tr" v-for="row in table.getRowModel().rows" :key="row.id">
      <td
        v-for="cell in row.getVisibleCells()"
        :key="cell.id"
        class="table-td table-cell"
        :style="{ color: row.original.status_color || '#000' }"
      >
        <div
          class="table-cell__content"
          :style="{ width: `${cell.column.getSize()}px` }"
        >
          <FlexRender
            :render="cell.column.columnDef.cell"
            :props="cell.getContext()"
          />
        </div>
      </td>
    </tr>
  </tbody>
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
