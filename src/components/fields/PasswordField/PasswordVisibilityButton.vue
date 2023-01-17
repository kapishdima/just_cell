<template>
  <button
    type="button"
    class="form-field__extra password-visibility-button"
    tabindex="-1"
    @click="changeVisibility"
  >
    <img
      v-if="!visibility"
      src="@/assets/icons/eye_hidden.svg"
      alt="Show
    password"
    />
    <img
      v-else
      src="@/assets/icons/eye_visible.svg"
      alt="Show
    password"
    />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["change"],
  data() {
    return {
      visibility: false,
    };
  },

  watch: {
    visibility(visible: boolean) {
      const type = visible ? "text" : "password";
      this.$emit("change", type);
    },
  },

  methods: {
    changeVisibility() {
      this.visibility = !this.visibility;
    },
  },
});
</script>
<style lang=""></style>
