<template>
  <div class="table-tbody">
    <div
      class="table-row"
      v-for="row in table.getCoreRowModel().rows"
      :key="row.id"
    >
      <div class="table-tr" @click="toggleExpanded(row)">
        <div
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
          class="table-td table-cell"
          :style="{
            color: row.original.status_color || '#000',
            fontStyle: row.original.fontStyle ? 'italic' : 'normal',
            ...setActionColumnSize(cell.column.columnDef.header as string),
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
          <div class="table-expanded__item-value" v-html="value"></div>
        </div>
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
import { Row } from "@tanstack/vue-table";
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    toggleExpanded(row: Row<any>) {
      row.getToggleExpandedHandler()();
    },

    setActionColumnSize(header: string) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (header !== "Дії") {
        return {
          minWidth: "",
          maxWidth: "",
        };
      }

      if (!isMobile && header === "Дії") {
        return {
          minWidth: "4%",
          maxWidth: "4%",
        };
      }

      return {
        minWidth: "15%",
        maxWidth: "15%",
      };
    },
  },
});
</script>
<style lang=""></style>
