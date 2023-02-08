<template>
  <div class="select-field__item" @click="$emit('select', option)">
    <div class="select-field__item-value">
      <img v-if="option.icon" :src="option.icon" alt="" />
      <div class="select-field__item-content">
        {{ option.label }}
        <span class="select-field__item-hint">{{ option.hint }}</span>
      </div>
    </div>
    <img
      v-if="checked"
      src="@/assets/icons/select-check-icon.svg"
      alt="Checked"
    />
  </div>
</template>
<script setup lang="ts">
interface Option {
  label: string;
  value: string;
  icon?: string;
  hint?: string;
}

interface OptionItemProps {
  option: Option;
  checked: boolean;
}

defineProps<OptionItemProps>();
</script>
<script lang="ts">
export default {
  emits: ["select"],
};
</script>
<style lang=""></style>
