<template>
  <v-popover>
    <template #actions="{ close }">
      <terminal-actions @close="close" :terminal="terminal" />
    </template>
  </v-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VPopover from "@/components/popover/VPopover.vue";

import TerminalActions from "./TerminalActions.vue";

export default defineComponent({
  props: ["terminal"],
  components: {
    VPopover,
    TerminalActions,
  },
});
</script>

<style scoped></style>
