<template>
  <div
    class="form-field"
    :class="{
      'form-field--centered': centered,
      'form-field--shadow': shadow,
      'form-field--iconed': hasBeforeIcon,
      'form-field--small': small,
      'form-field--error': hasError,
    }"
  >
    <label class="form-field__label">{{ label }}</label>
    <div class="form-field__before-icon" v-if="hasBeforeIcon">
      <slot name="beforeIcon"></slot>
    </div>
    <div class="form-field__container">
      <slot></slot>
    </div>
    <div class="form-field__error" v-if="hasError">
      {{ error?.message }}
    </div>
    <div class="form-field__hint" v-if="hasHint">
      <slot name="hint"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
type Error = {
  message: string;
};

interface FormFieldProps {
  label?: string;
  helpText?: string;
  centered?: boolean;
  shadow?: boolean;
  small?: boolean;
  error?: Error | null;
}

defineProps<FormFieldProps>();
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    hasBeforeIcon(): boolean {
      return Boolean(this.$slots.beforeIcon);
    },
    hasHint(): boolean {
      return Boolean(this.$slots.hint);
    },
    hasError(): boolean {
      return Boolean((this.$props as any).error);
    },
  },
});
</script>
