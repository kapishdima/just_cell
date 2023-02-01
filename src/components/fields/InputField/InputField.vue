<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    class="form-field__input"
    :class="`form-field__input--${size} form-field__input--${variant}`"
  />
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { InputHTMLAttributes } from "vue";

export interface InputFieldProps {
  name: string;
  type?: InputHTMLAttributes["type"];
  placeholder?: string;
  required?: boolean;
  size?: "lg" | "sm";
  variant?: "default" | "accent";
}

withDefaults(defineProps<InputFieldProps>(), {
  size: "lg",
  variant: "default",
});
</script>
<script lang="ts">
export default {};
</script>
