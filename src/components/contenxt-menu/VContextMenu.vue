<template>
  <div
    class="context-menu"
    v-if="opened"
    :style="{ top: `${y}px`, left: `${x}px` }"
    v-click-outside="close"
    ref="contextMenu"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      opened: false,
      x: 0,
      y: 0,
    };
  },

  methods: {
    open(x: number, y: number) {
      this.opened = true;
      this.x = x;
      this.y = y;
    },
    close() {
      this.opened = false;
    },
  },
});
</script>

<style scoped></style>
