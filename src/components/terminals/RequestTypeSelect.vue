<template>
  <form-field label="Тип запиту">
    <select-field
      :options="types"
      name="callback_req_type"
      input-placeholder="Оберіть тип запиту"
      search-placeholder="Введіть тип запиту"
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
      types: [
        { value: "JSON", label: "JSON" },
        { value: "XML", label: "XML" },
      ],
    };
  },
};
</script>
