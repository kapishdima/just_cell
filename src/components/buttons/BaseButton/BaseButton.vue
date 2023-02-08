<template>
  <button
    :type="type"
    :class="`button--${variant} ${rounded ? 'button--rounded' : ''} ${
      hasMaxWidth ? 'button--max-width' : ''
    } `"
    @click="$emit('click')"
    class="button"
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
}

withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  variant: "primary",
  rounded: false,
  hasMaxWidth: true,
  loading: false,
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
