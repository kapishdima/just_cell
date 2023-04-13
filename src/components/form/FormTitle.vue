<template>
  <div class="form-title" :class="`form-title--${direction}`">
    <div class="form-title__content">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    direction: {
      type: String,
      required: false,
      default: "bottom",
    },
  },
});
</script>

<style scoped></style>
