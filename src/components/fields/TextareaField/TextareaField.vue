<template>
  <textarea
    ref="textarea"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    class="form-field__input form-field__textarea"
    :class="`form-field__input--${size} form-field__input--${variant}`"
    :value="modelValue"
    :disabled="disabled !== undefined ? disabled : !canEdit"
    @input="input($event)"
    @keydown="onTabPressed"
    :maxlength="maxLength"
  />
</template>

<script setup lang="ts">
export interface InputFieldProps {
  name: string;
  placeholder?: string;
  required?: boolean;
  size?: "lg" | "sm";
  variant?: "default" | "accent";
  modelValue?: string;
  disabled?: any;
  maxLength?: number;
}

withDefaults(defineProps<InputFieldProps>(), {
  size: "lg",
  variant: "default",
});
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["update:modelValue", "update:selection"],
  inject: ["rules"],

  data() {
    return {
      canEdit: false,
    };
  },

  mounted() {
    this.canEdit = Boolean(this.rules !== null);

    document.addEventListener("selectionchange", this.onSelectionChange);
  },

  methods: {
    input(event: Event) {
      const value = (event.target as HTMLInputElement)?.value;
      this.$emit("update:modelValue", value);
    },
    onTabPressed(event: any) {
      const textarea = this.$refs.textarea as HTMLTextAreaElement;
      let value = event.target.value;
      if (event.key == "Tab") {
        event.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        event.target.value =
          value.substring(0, start) + "\t" + value.substring(end);

        textarea.selectionStart = textarea.selectionEnd = start + 1;

        this.$emit("update:modelValue", value);
      }
    },

    onSelectionChange() {
      const activeElement = document.activeElement as HTMLTextAreaElement;
      const textarea = this.$refs.textarea as HTMLTextAreaElement;

      if (activeElement && activeElement === textarea) {
        const selection = {
          start: activeElement.selectionStart,
          end: activeElement.selectionEnd,
        };
        this.$emit("update:selection", selection);
      }
    },
  },
});
</script>
