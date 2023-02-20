<template>
  <div
    class="app-sidebar__mobile-btn"
    :class="{ active: active }"
    @click="toggle"
  >
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      active: false,
    };
  },

  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
});
</script>

<style scoped></style>
