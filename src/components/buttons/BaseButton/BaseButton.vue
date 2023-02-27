<template>
  <button
    :type="type"
    :class="`v-button--${variant} ${rounded ? 'v-button--rounded' : ''} ${
      hasMaxWidth ? 'v-button--max-width' : ''
    } ${fixed ? 'v-button--fixed' : ''} ${className} `"
    @click="$emit('click')"
    class="v-button"
    :disabled="disabled"
  >
    <template v-if="loading"> <v-spinner /> </template>
    <template v-else>
      <slot name="beforeIcon"></slot>
      <slot name="text"></slot>
      <slot name="afterIcon"></slot>
    </template>
  </button>
</template>
<script setup lang="ts">
import { ButtonHTMLAttributes } from "vue";

type ButtonVariants = "primary" | "secondary" | "danger" | "ghost";

interface ButtonProps {
  type?: ButtonHTMLAttributes["type"];
  variant?: ButtonVariants;
  rounded?: boolean;
  hasMaxWidth?: boolean;
  loading?: boolean;
  fixed?: boolean;
  className?: string;
  disabled?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  variant: "primary",
  rounded: false,
  hasMaxWidth: true,
  loading: false,
  fixed: false,
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
import VSpinner from "@/components/spinner/VSpinner.vue";
export default defineComponent({
  emits: ["click"],
  components: {
    VSpinner,
  },
});
</script>
