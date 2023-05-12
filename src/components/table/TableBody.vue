<template>
  <div class="table-tbody">
    <v-context-menu ref="contextMenu">
      <slot
        name="context-menu"
        :values="displayCellValues(selectedRowId)"
      ></slot>
    </v-context-menu>

    <div
      class="table-row"
      v-for="row in table.getRowModel().rows"
      :key="row.id"
    >
      <div
        class="table-tr"
        @click="toggleExpanded(row)"
        @contextmenu.stop.prevent="(event: MouseEvent) => openContenxtMenu(event, row.id)"
      >
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
interface TableHeaderProps {
  table: Table<any>;
}
const props = defineProps<TableHeaderProps>();

const displayCell = props.table
  .getAllColumns()
  .find((column) => column.id === "Дії");

const displayCellValues = (id: string) => {
  const row = props.table.getCoreRowModel().rows.find((row) => row.id === id);

  return row?.getVisibleCells()[0].getContext().row.original;
};
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { Table, FlexRender, Row } from "@tanstack/vue-table";

import VContextMenu from "../contenxt-menu/VContextMenu.vue";

export default defineComponent({
  components: {
    VContextMenu,
  },
  data() {
    return {
      selectedRowId: "",
    };
  },
  methods: {
    openContenxtMenu(event: MouseEvent, rowId: string) {
      this.selectedRowId = rowId;
      const { clientX: x, clientY: y } = event;

      const contextMenu = this.$refs.contextMenu as typeof VContextMenu;
      contextMenu.open(x, y);
    },

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
