<template>
  <div class="form-field">
    <label :for="id" class="form-field__label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      class="form-field__input"
    />
  </div>
</template>

<style scoped lang="scss">
// @import url("@/styles/components/form-fields.scss");
.form-field {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;

  row-gap: 14px;

  .form-field__label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    color: $dark-primary;
  }

  .form-field__input {
    padding: 10px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: $dark-primary;

    border: 1px solid $dark-secondary;
    box-shadow: $input-shadow;
    border-radius: 8px;

    &::placeholder {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: $dark-secondary;
    }
  }
}
</style>

<script setup lang="ts">
import { InputHTMLAttributes } from "@vue/runtime-dom";

interface InputFieldProps {
  id: string;
  name: string;
  type?: InputHTMLAttributes["type"];
  label?: string;
  placeholder?: string;
}

withDefaults(defineProps<InputFieldProps>(), {
  type: "text",
});
</script>

<script lang="ts">
export default {};
</script>
