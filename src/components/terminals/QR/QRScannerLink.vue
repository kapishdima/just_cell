<template>
  <v-protected :rule="Rules.ADD_TERMINAL">
    <template #content="{ canRender }">
      <router-link to="/qr">
        <v-button :disabled="!canRender">
          <template #text> Додати термінал через QR-code </template>
        </v-button>
      </router-link>
    </template>
  </v-protected>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import VProtected from "@/components/protected/VProtected.vue";
import { Rules } from "@/contants/rules";

export default defineComponent({
  components: {
    VButton,
    VProtected,
  },
  setup() {
    return {
      Rules,
    };
  },
});
</script>

<style scoped></style>
