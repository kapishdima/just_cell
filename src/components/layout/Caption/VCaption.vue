<template>
  <h4 class="app-caption">
    <slot></slot>
  </h4>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
.app-caption {
  font-size: 16px;
  font-weight: 500;
  color: $dark-secondary;
}
</style>
