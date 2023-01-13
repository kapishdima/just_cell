<template>
  <input-field
    type="text"
    id="login"
    name="login"
    label="Логін:"
    placeholder="+38 (0_ _) _ _ _-_ _-_ _"
  />

  <input-field
    type="password"
    id="password"
    name="password"
    label="Введіть пароль:"
    placeholder="Введіть пароль"
  />
</template>

<script lang="ts">
import InputField from "@/components/InputField/InputField.vue";
export default {
  components: {
    InputField,
  },
};
</script>
