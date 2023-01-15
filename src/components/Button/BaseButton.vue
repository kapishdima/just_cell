<template>
  <button
    :type="type"
    :class="`button--${variant} ${rounded ? 'button--rounded' : ''}`"
    @click="$emit('click')"
    class="button"
  >
    <slot name="beforeIcon"></slot>
    <slot name="text"></slot>
    <slot name="afterIcon"></slot>
  </button>
</template>
<script setup lang="ts">
import { ButtonHTMLAttributes } from "vue";

type ButtonVariants = "primary" | "secondary" | "danger";

interface ButtonProps {
  type?: ButtonHTMLAttributes["type"];
  variant?: ButtonVariants;
  rounded?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  variant: "primary",
  rounded: false,
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: ["click"],
});
</script>
