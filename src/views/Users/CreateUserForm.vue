<template>
  <form class="create-user__form app-layout-form__row">
    <div class="app-layout-form">
      <form-field shadow label="Номер телефона*:">
        <tel-field name="phone" />
      </form-field>
      <form-field shadow label="Ім’я*:">
        <input-field name="fullName" placeholder="Введіть ім’я користувача" />
      </form-field>
      <form-field shadow label="Посада*:">
        <input-field name="fullName" placeholder="Введіть посаду користувача" />
      </form-field>
      <form-field shadow label="Точка роботи*:">
        <select-field
          name="name"
          inputPlaceholder="Оберіть точку"
          searchPlaceholder="Точка"
          :options="options"
        />
      </form-field>
      <form-field shadow label="Точки, до яких користувач має доступ*:">
        <select-field
          name="name"
          inputPlaceholder="Оберіть точку"
          searchPlaceholder="Точка"
          :options="options"
        />
      </form-field>
    </div>
    <div class="app-layout-form">
      <form-field shadow label="Додати фото нового користувача*:">
        <file-field name="file" label="Фото користувача:" accept="images/*" />
      </form-field>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import TelField from "@/components/fields/TelField/TelField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import FileField from "@/components/fields/FileField/FileField.vue";

export default defineComponent({
  components: {
    FormField,
    InputField,
    SelectField,
    TelField,
    FileField,
  },

  data() {
    return {
      options: [
        { label: "Option1", value: "Value1" },
        { label: "Option2", value: "Value2" },
        { label: "Option3", value: "Value3" },
      ],
    };
  },
});
</script>
<style lang=""></style>
