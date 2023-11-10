<template>
  <v-form :initialValues="initialValues" @submit="onSubmit">
    <template #fields="{ values }">
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
      </div>

      <div class="app-layout-form__actions">
        <v-button type="submit">
          <template #text>Додати</template>
        </v-button>
      </div>
    </template>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VForm from "@/components/form/VForm.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    InputField,
    FormField,
    SelectField,
    VForm,
    VButton,
  },

  data() {
    return {
      initialValues: {
        name: "",
        city: "",
        address: "",
        director: "",
        dir_phone: "",
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

<style lang="scss" scoped></style>
