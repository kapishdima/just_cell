<template>
  <v-protected :rule="Rules.REVERSE_TRANSACTION_SUM">
    <template #content="{ canRender }">
      <div
        class="popover-action"
        :class="{ 'popover-action--disabled': !canRender }"
        @click="$emit('click')"
      >
        Сторнувати
      </div>
    </template>
  </v-protected>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Rules } from "@/contants/rules";

import VProtected from "@/components/protected/VProtected.vue";

export default defineComponent({
  emits: ["click"],
  components: { VProtected },
  setup() {
    return {
      Rules,
    };
  },
});
</script>

<style scoped></style>
