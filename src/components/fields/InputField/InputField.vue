<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :class="`form-field__input--${size} form-field__input--${variant}`"
    :value="modelValue"
    :disabled="!canEdit"
    @input="input($event)"
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
}

withDefaults(defineProps<InputFieldProps>(), {
  size: "lg",
  variant: "default",
});
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inject: ["rules"],
  emits: ["update:modelValue"],

  data() {
    return {
      canEdit: false,
    };
  },

  mounted() {
    this.canEdit = Boolean(this.rules);
  },

  methods: {
    input(event: Event) {
      const value = (event.target as HTMLInputElement)?.value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
