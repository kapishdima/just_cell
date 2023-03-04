<template>
  <v-protected :rule="Rules.EDIT_TERMINAL">
    <template #content="{ canRender }">
      <div
        class="popover-action"
        :class="{ 'popover-action--disabled': !canRender }"
        @click="openEdit"
      >
        Редагувати
      </div>
    </template>
  </v-protected>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Rules } from "@/contants/rules";
import VProtected from "@/components/protected/VProtected.vue";

import { TERMINAL_STORAGE_KEY } from "@/contants/storage";

export default defineComponent({
  components: { VProtected },
  props: ["terminal"],
  setup() {
    return { Rules };
  },

  methods: {
    openEdit() {
      window.localStorage.setItem(
        TERMINAL_STORAGE_KEY,
        JSON.stringify(this.terminal)
      );
      this.$router.push({ name: "editTerminal" });
    },
  },
});
</script>

<style scoped></style>
