<template>
  <form-field label="Введіть пароль*:">
    <password-field
      :model-value="modelValue || ''"
      @update:model-value="(value: string) => $emit('update:model-value', value)"
      name="password"
      required
      placeholder="Введіть новий пароль"
    />
  </form-field>
  <form-field label="Введіть пароль ще раз*:" :error="error">
    <password-field
      v-model="confirmationPassword"
      name="confirmation_password"
      placeholder="Підтвердіть новий пароль"
      required
    />
  </form-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";

type Error = {
  message: string;
};

export default defineComponent({
  emit: ["update:model-value", "errors"],
  props: {
    modelValue: {
      type: String,
      required: false,
    },
  },
  data(): {
    confirmationPassword: string;
    error: Error | null;
  } {
    return {
      confirmationPassword: "",
      error: null,
    };
  },

  watch: {
    confirmationPassword(value: string) {
      if (value !== this.modelValue) {
        this.error = { message: "Паролі не співпадають" };
        return;
      }

      this.error = null;
      return;
    },

    error(value) {
      this.$emit("errors", value);
    },
  },

  components: {
    FormField,
    PasswordField,
  },
});
</script>

<style scoped></style>
