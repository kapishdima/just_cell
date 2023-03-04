<template>
  <slot name="content" :canRender="canRender"></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  inject: ["rules"],
  props: {
    rule: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      canRender: false,
    };
  },

  mounted() {
    this.canRender = this.canMakeAction();
  },

  methods: {
    canMakeAction() {
      return (this.rules as string[])?.includes(this.rule) || false;
    },
  },
});
</script>

<style scoped></style>
