<template>
  <v-protected :rule="Rules.ADD_TERMINAL">
    <template #content="{ canRender }">
      <v-button
        :hasMaxWidth="false"
        @click="$emit('click')"
        :disabled="!canRender"
      >
        <template #text>Додати термінал через QR-code</template>
      </v-button>
    </template>
  </v-protected>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Rules } from "@/contants/rules";

import VProtected from "@/components/protected/VProtected.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  emits: ["click"],
  components: {
    VProtected,
    VButton,
  },
  setup() {
    return { Rules };
  },
});
</script>

<style scoped></style>
