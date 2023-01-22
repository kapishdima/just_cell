<template lang="">
  <div class="app-layout-form">
    <form-field shadow label="Фіскальний номер реєстратора*:">
      <input-field name="name" />
    </form-field>
    <form-field shadow label="Додати ключ для підпису*:">
      <file-field name="file" label="Ключ для підпису*:" />
    </form-field>
    <form-field shadow label="Пароль ключа*:">
      <password-field name="password" />
    </form-field>
    <form-field shadow label="В який час закривати зміну*:">
      <input-field name="password" />
    </form-field>
    <form-field
      label="В які дні автоматично формувати Z-звіт та закривати зміну*:"
    >
      <schedule-field name="checkbox" label="ПН" />
    </form-field>
  </div>
</template>
<script lang="ts">
// import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import FileField from "@/components/fields/FileField/FileField.vue";
import ScheduleField from "@/components/fields/ScheduleField/ScheduleField.vue";

export default {
  components: {
    // CheckboxField,
    FormField,
    InputField,
    PasswordField,
    FileField,
    ScheduleField,
  },
};
</script>
<style lang=""></style>
