<template>
  <form-field label="Логін:">
    <input-field
      type="text"
      id="login"
      name="login"
      placeholder="+38 (0_ _) _ _ _-_ _-_ _"
    />
  </form-field>

  <form-field label="Введіть пароль:">
    <password-field
      id="password"
      name="password"
      placeholder="Введіть пароль"
    />
  </form-field>
</template>

<script lang="ts">
import FormField from "@/components/FormField/FormField.vue";
import InputField from "@/components/InputField/InputField.vue";
import PasswordField from "@/components/PasswordField/PasswordField.vue";
export default {
  components: {
    InputField,
    FormField,
    PasswordField,
  },
};
</script>
