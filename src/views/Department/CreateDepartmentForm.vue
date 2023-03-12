<template>
  <v-form :initialValues="initialValues" @submit="onSubmit">
    <template #fields="{ values }">
      <div class="app-layout-form__row">
        <div class="app-layout-form">
          <form-field shadow label="Назва точки/відділення*:">
            <input-field
              name="name"
              placeholder="Введіть назву вашої точки/відділення"
              v-model="values.name"
            />
          </form-field>
          <form-field shadow label="Місто розташування*:">
            <select-field
              v-model="values.city"
              name="name"
              :options="options"
              :has-search="false"
              inputPlaceholder="Оберіть місто розташування вашої точки/відділення "
              searchPlaceholder="Місто"
            />
          </form-field>
          <form-field shadow label="Адреса точки/відділення*:">
            <input-field
              v-model="values.address"
              name="name"
              placeholder="Введіть адресу вашої точки/відділення "
            />
          </form-field>
          <form-field shadow label="Директор точки/відділення*:">
            <select-field
              v-model="values.director"
              name="name"
              inputPlaceholder="Оберіть дректора"
              searchPlaceholder="Пошук директора"
              :has-search="false"
              :options="withOptions"
            />
          </form-field>
          <form-field
            shadow
            label="Контактний номер директора точки/відділення*:"
          >
            <input-field
              name="name"
              placeholder="Введіть номер директора "
              v-model="values.dir_phone"
            />
          </form-field>
          <checkbox-group label="Оберіть тип точки">
            <checkbox-field
              v-model="values.isFiscal"
              name="checkbox"
              label="Фіскальна точка"
            />
          </checkbox-group>
        </div>
        <div class="app-layout-form" v-if="values.isFiscal">
          <form-field shadow label="Додати ключ для підпису*:">
            <file-field
              name="file"
              label="Ключ для підпису*:"
              v-model="values.key"
            />
          </form-field>
          <form-field shadow label="Фіскальний номер реєстратора*:">
            <input-field name="name" v-model="values.num" />
          </form-field>
          <form-field shadow label="Пароль ключа*:">
            <password-field name="password" v-model="values.pass" />
          </form-field>
          <form-field shadow label="В який час закривати зміну*:">
            <timepicker-field v-model="values.time" />
          </form-field>
          <form-field
            label="В які дні автоматично формувати Z-звіт та закривати зміну*:"
          >
            <schedule-field
              name="checkbox"
              label="ПН"
              v-model="values.schedule"
            />
          </form-field>
        </div>
      </div>
      <v-button type="submit">
        <template #text>Додати</template>
      </v-button>
    </template>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import VForm from "@/components/form/VForm.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import CheckboxGroup from "@/components/fields/CheckboxField/CheckboxGroupField.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import ScheduleField from "@/components/fields/ScheduleField/ScheduleField.vue";
import FileField from "@/components/fields/FileField/FileField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import TimepickerField from "@/components/fields/TimepickerField/TimepickerField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    CheckboxField,
    CheckboxGroup,
    InputField,
    FormField,
    SelectField,
    VForm,
    VButton,
    ScheduleField,
    FileField,
    PasswordField,
    TimepickerField,
  },

  data() {
    return {
      initialValues: {
        name: "",
        city: "",
        address: "",
        director: "",
        dir_phone: "",
        key: null,
        num: "",
        pass: "",
        time: "00:00",
        schedule: "",
        isFiscal: false,
      },
      options: [
        { label: "Option1", value: "Value1" },
        { label: "Option2", value: "Value2" },
        { label: "Option3", value: "Value3" },
      ],
      withOptions: [
        {
          label: "Option1",
          value: "Value1",
          icon: require("@/assets/avatar.png"),
        },
        { label: "Option2", value: "Value2" },
        {
          label: "Option3",
          value: "Value3",
          icon: require("@/assets/avatar.png"),
        },
      ],
    };
  },

  methods: {
    onSubmit(values: any) {
      console.log(values);
    },
  },
});
</script>
<style lang=""></style>
