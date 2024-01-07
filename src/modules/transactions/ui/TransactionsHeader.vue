<template>
  <span> Перегляд {{ allocTypeName }} транзакцій </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TerminalRef } from "@/api/terminals/terminal.model";

export default defineComponent({
  props: ["alloc_type"],

  computed: {
    allocTypeName(): string {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return "";
      }

      const name =
        ref.alloc_type.find((type) => type.id === this.alloc_type)?.name || "";

      return name;
    },
  },
});
</script>

<style scoped></style>
