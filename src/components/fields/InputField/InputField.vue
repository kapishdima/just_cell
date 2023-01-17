<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    class="form-field__input"
  />
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { InputHTMLAttributes } from "vue";

export interface InputFieldProps {
  name: string;
  type?: InputHTMLAttributes["type"];
  placeholder?: string;
}

defineProps<InputFieldProps>();
</script>
<script lang="ts">
export default {};
</script>
