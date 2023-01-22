<template>
  <imask-input
    :placeholder="placeholder || '+38 (0_ _) _ _ _-_ _-_ _'"
    :name="name"
    :required="required"
    :mask="`+{38}(000)000-00-00`"
    type="tel"
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
