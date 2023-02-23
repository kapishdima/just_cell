<template>
  <div
    class="form-field"
    :class="{
      'form-field--centered': centered,
      'form-field--shadow': shadow,
      'form-field--iconed': hasBeforeIcon,
      'form-field--small': small,
    }"
  >
    <label class="form-field__label">{{ label }}</label>
    <div class="form-field__before-icon" v-if="hasBeforeIcon">
      <slot name="beforeIcon"></slot>
    </div>
    <slot></slot>
    <div class="form-field__hint" v-if="hasHint">
      <slot name="hint"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
export interface FormFieldProps {
  label?: string;
  helpText?: string;
  centered?: boolean;
  shadow?: boolean;
  small?: boolean;
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
  },
});
</script>
