<template>
  <div class="search-input">
    <img
      src="@/assets/icons/search-icon.svg"
      class="search-input__icon search-input__before-icon"
    />
    <input :name="name" :placeholder="placeholder" type="text" ref="input" />
    <img
      src="@/assets/icons/clear-icon.svg"
      class="search-input__icon search-input__after-icon"
      @click="$emit('clear')"
    />
  </div>
</template>
<script setup lang="ts">
interface SearchInputProps {
  name: string;
  placeholder?: string;
}

defineProps<SearchInputProps>();
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: ["clear"],
  mounted() {
    const input = this.$refs.input as HTMLInputElement;
    input.focus();
  },
});
</script>
<style lang=""></style>
