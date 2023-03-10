<template>
  <div class="export-button">
    <v-button variant="ghost" @click="exportToXLS" :has-max-width="false">
      <template #text>Export XLS</template>
      <template #afterIcon>
        <img src="@/assets/icons/document-icon.svg" alt="" />
      </template>
    </v-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "../buttons/BaseButton/BaseButton.vue";
import { utils, writeFileXLSX } from "xlsx";

export default defineComponent({
  props: ["exportData", "table"],
  components: {
    VButton,
  },

  methods: {
    exportToXLS() {
      const data = this.table.getCoreRowModel().rows.map((row: any) => {
        let column: any = {};
        row.getVisibleCells().forEach((cell: any) => {
          const columnName = cell.column.columnDef.header;
          const columnValue = cell.getValue();

          if (columnName === "Дії") {
            return;
          }

          column[columnName] = columnValue;
        });
        return {
          ...column,
          ...row.originalSubRows[0],
        };
      });

      const wb = utils.book_new();
      const ws = utils.json_to_sheet(data);
      utils.book_append_sheet(wb, ws, "Transactions");
      writeFileXLSX(wb, "Transactions.xlsx");
    },
  },
});
</script>

<style scoped></style>
