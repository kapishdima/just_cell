<template>
  <form class="app-layout-form__row">
    <div class="app-layout-form">
      <form-field shadow label="Назва точки/відділення*:">
        <input-field
          name="name"
          placeholder="Введіть назву вашої точки/відділення"
        />
      </form-field>
      <form-field shadow label="Місто розташування*:">
        <select-field
          name="name"
          :options="options"
          inputPlaceholder="Оберіть місто розташування вашої точки/відділення "
          searchPlaceholder="Місто"
        />
      </form-field>
      <form-field shadow label="Адреса точки/відділення*:">
        <input-field
          name="name"
          placeholder="Введіть адресу вашої точки/відділення "
        />
      </form-field>
      <form-field shadow label="Директор точки/відділення*:">
        <select-field
          name="name"
          inputPlaceholder="Оберіть дректора"
          searchPlaceholder="Пошук директора"
          :options="withOptions"
        />
      </form-field>
      <form-field shadow label="Контактний номер директора точки/відділення*:">
        <input-field name="name" placeholder="Введіть номер директора " />
      </form-field>
      <checkbox-group label="Оберіть тип точки">
        <checkbox-field
          name="checkbox"
          label="Фіскальна точка"
          @change="onFiscalChange"
        />
      </checkbox-group>
    </div>
    <fiscal-form v-if="showFiscalForm" />
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import CheckboxGroup from "@/components/fields/CheckboxField/CheckboxGroupField.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import FiscalForm from "./FiscalInfoForm.vue";

export default defineComponent({
  components: {
    CheckboxField,
    CheckboxGroup,
    InputField,
    FormField,
    SelectField,
    FiscalForm,
  },

  data() {
    return {
      showFiscalForm: false,
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
    onFiscalChange(checked: boolean) {
      this.showFiscalForm = checked;
    },
  },
});
</script>
<style lang=""></style>
