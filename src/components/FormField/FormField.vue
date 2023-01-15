<template>
  <div class="form-field" :class="{ 'form-field--centered': centered }">
    <label class="form-field__label">{{ label }}</label>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
export interface FormFieldProps {
  label?: string;
  helpText?: string;
  centered?: boolean;
}

defineProps<FormFieldProps>();
</script>
<script lang="ts">
export default {};
</script>
