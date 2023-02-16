<template>
  <textarea
    :placeholder="placeholder"
    :name="name"
    :required="required"
    class="form-field__input form-field__textarea"
    :class="`form-field__input--${size} form-field__input--${variant}`"
    :value="modelValue"
    @input="input($event)"
  />
</template>

<script setup lang="ts">
import { InputHTMLAttributes } from "vue";

export interface InputFieldProps {
  name: string;
  type?: InputHTMLAttributes["type"];
  placeholder?: string;
  required?: boolean;
  size?: "lg" | "sm";
  variant?: "default" | "accent";
  modelValue?: string;
}

withDefaults(defineProps<InputFieldProps>(), {
  size: "lg",
  variant: "default",
});
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["update:modelValue"],
  methods: {
    input(event: Event) {
      const value = (event.target as HTMLInputElement)?.value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
