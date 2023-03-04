<template>
  <v-protected :rule="Rules.ADD_TERMINAL">
    <template #content="{ canRender }">
      <router-link
        :to="{ name: 'activateTerminal' }"
        class="terminal-create-btn"
      >
        <v-button :hasMaxWidth="false" :disabled="!canRender">
          <template #text>Додати термінал по номеру</template>
        </v-button>
      </router-link>
    </template>
  </v-protected>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Rules } from "@/contants/rules";
import VProtected from "@/components/protected/VProtected.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
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
