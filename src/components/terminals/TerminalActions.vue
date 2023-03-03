<template>
  <v-popover>
    <template #actions>
      <div class="popover-action" @click="openEdit">Редагувати</div>
    </template>
  </v-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VPopover from "@/components/popover/VPopover.vue";
import { TERMINAL_STORAGE_KEY } from "@/contants/storage";

export default defineComponent({
  props: ["terminal"],
  components: {
    VPopover,
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
