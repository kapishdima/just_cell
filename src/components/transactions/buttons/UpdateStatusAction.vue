<template>
  <v-protected :rule="Rules.CHANGE_TRANSACTION_STATUS">
    <template #content="{ canRender }">
      <div
        class="popover-action"
        :class="{ 'popover-action--disabled': !canRender }"
      >
        Оновити статус
      </div>
    </template>
  </v-protected>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Rules } from "@/contants/rules";

import VProtected from "@/components/protected/VProtected.vue";

export default defineComponent({
  components: { VProtected },
  setup() {
    return {
      Rules,
    };
  },
});
</script>

<style scoped></style>
