<template>
  <form-field label="Операційна система">
    <select-field
      :options="os"
      name="os"
      input-placeholder="Оберіть операційна систему"
      search-placeholder="Введіть операційна систему"
    />
  </form-field>
</template>
<script lang="ts">
import FormField from "@/components/fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
export default {
  components: {
    FormField,
    SelectField,
  },

  data() {
    return {
      os: [
        { value: "Android", label: "Android" },
        { value: "Windows", label: "Windows" },
      ],
    };
  },
};
</script>
