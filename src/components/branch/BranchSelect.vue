<template>
  <form-field label="Точка">
    <select-field
      :options="branches"
      name="branch"
      inputPlaceholder="Оберіть точку"
      searchPlaceholder="Введіть назву точки"
    />
  </form-field>
</template>
<script lang="ts">
import FormField from "../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
export default {
  components: {
    FormField,
    SelectField,
  },

  data() {
    return {
      branches: [
        { value: "Точка “Цукерка”", label: "Точка “Цукерка”" },
        { value: "Точка “Квітка”", label: "Точка “Квітка”" },
        { value: "Точка “Цукерка”", label: "Точка “Цукерка”" },
        { value: "Точка “Квітка”", label: "Точка “Квітка”" },
      ],
    };
  },
};
</script>
