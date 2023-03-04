<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :class="`form-field__input--${size} form-field__input--${variant}`"
    :value="modelValue"
    :disabled="disabled"
    @input="input($event)"
    @blur="$emit('blur')"
    class="form-field__input"
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
  modelValue?: string | number;
  disabled?: any;
}

withDefaults(defineProps<InputFieldProps>(), {
  size: "lg",
  variant: "default",
});
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: ["update:modelValue", "blur"],

  methods: {
    input(event: Event) {
      const value = (event.target as HTMLInputElement)?.value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
