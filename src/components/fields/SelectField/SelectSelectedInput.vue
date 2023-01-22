<template lang="">
  <div class="selected-input">
    <div class="selected-input__field">
      <span v-if="!value && placeholder" class="selected-input__placeholder">{{
        placeholder
      }}</span>
      {{ value }}
    </div>
    <img src="@/assets/icons/chevron-down-accent.svg" />
  </div>
</template>
<script setup lang="ts">
interface SelectedInputProps {
  placeholder?: string;
  value?: string;
}

defineProps<SelectedInputProps>();
</script>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
