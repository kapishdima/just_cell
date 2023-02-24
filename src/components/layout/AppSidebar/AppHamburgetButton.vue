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
  emits: ["mobileButtonClick"],
  data() {
    return {
      active: false,
    };
  },

  watch: {
    active() {
      this.$emit("mobileButtonClick", this.active);
    },
  },

  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
});
</script>

<style scoped></style>
