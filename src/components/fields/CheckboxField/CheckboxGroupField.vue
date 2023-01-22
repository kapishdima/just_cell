<template>
  <div class="checkbox-field__group">
    <h4 class="checkbox-field__group-title">{{ label }}</h4>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
interface CheckboxGroupProps {
  label?: string;
}

defineProps<CheckboxGroupProps>();
</script>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
