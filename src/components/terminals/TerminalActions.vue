<template>
  <v-popover>
    <template #actions>
      <router-link
        :to="{
          name: 'editTerminal',
          params: { terminal: JSON.stringify(terminal) },
        }"
        class="popover-action"
        >Редагувати</router-link
      >
    </template>
  </v-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VPopover from "@/components/popover/VPopover.vue";

export default defineComponent({
  props: ["terminal"],
  components: {
    VPopover,
  },
});
</script>

<style scoped></style>
