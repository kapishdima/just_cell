<template>
  <div class="export-button">
    <v-button variant="ghost" @click="$emit('click')" :has-max-width="false">
      <template #text>Export XLS</template>
      <template #afterIcon>
        <img v-if="!loading" src="@/assets/icons/document-icon.svg" alt="" />
        <img v-if="loading" src="@/assets/icons/loading-icon.gif" alt="" />
      </template>
    </v-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "../buttons/BaseButton/BaseButton.vue";
import { utils, writeFileXLSX } from "xlsx";

export default defineComponent({
  props: ["exportData", "loading"],
  emits: ["click"],
  components: {
    VButton,
  },

  watch: {
    exportData(value) {
      if (!value || !value.length) {
        return;
      }
      const wb = utils.book_new();
      const ws = utils.json_to_sheet(this.exportData);
      utils.book_append_sheet(wb, ws, "Transactions");
      writeFileXLSX(wb, "Transactions.xlsx");
    },
  },

  methods: {},
});
</script>

<style scoped></style>
