<template lang="">
  <div class="selected-input">
    <div class="selected-input__field">
      <span v-if="!label && placeholder" class="selected-input__placeholder">{{
        placeholder
      }}</span>
      {{ label }}
    </div>
    <img src="@/assets/icons/chevron-down-accent.svg" />
  </div>
</template>
<script setup lang="ts">
interface SelectedInputProps {
  placeholder?: string;
  label?: string;
}

defineProps<SelectedInputProps>();
</script>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
