<template>
  <imask-input
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :mask="`0 0 0 0`"
    :max="4"
    :min="4"
    type="text"
    class="form-field__input"
  />
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
export interface InputFieldProps {
  name: string;
  placeholder?: string;
  required?: boolean;
}

defineProps<InputFieldProps>();
</script>
<script lang="ts">
import { defineComponent } from "vue";
import { IMaskComponent } from "vue-imask";

export default defineComponent({
  components: {
    "imask-input": IMaskComponent,
  },
});
</script>
