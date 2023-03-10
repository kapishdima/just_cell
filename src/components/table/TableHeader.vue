<template>
  <div class="table-thead">
    <div
      class="table-tr"
      v-for="headerGroup in table.getHeaderGroups()"
      :key="headerGroup.id"
    >
      <div
        v-for="header in headerGroup.headers"
        :key="header.id"
        class="table-th table-cell"
        :style="{
          ...setActionColumnSize(header.column.columnDef.header as string),
        }"
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
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
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
