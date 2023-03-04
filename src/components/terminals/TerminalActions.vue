<template>
  <v-popover>
    <template #actions>
      <edit-action :terminal="terminal" />
    </template>
  </v-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VPopover from "@/components/popover/VPopover.vue";
import EditAction from "./buttons/EditAction.vue";

export default defineComponent({
  props: ["terminal"],
  components: {
    VPopover,
    EditAction,
  },
});
</script>

<style scoped></style>
