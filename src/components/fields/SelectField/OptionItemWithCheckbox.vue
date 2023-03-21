<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="select-field__item" @click="$emit('select', option)">
    <div class="select-field__item-value">
      <checkbox-field
        name=""
        v-model="selected"
        :label="option.label"
        direction="left"
        size="sm"
      />
      <div class="select-field__item-content">
        <span class="select-field__item-hint">{{ option.hint }}</span>
      </div>
    </div>
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
import { defineComponent } from "vue";
import CheckboxField from "../CheckboxField/CheckboxField.vue";

export default defineComponent({
  emits: ["select"],
  components: {
    CheckboxField,
  },

  data() {
    return {
      selected: this.checked,
    };
  },

  watch: {
    checked: {
      handler(value) {
        this.selected = value;
      },
      immediate: true,
    },
  },
});
</script>
<style lang=""></style>
