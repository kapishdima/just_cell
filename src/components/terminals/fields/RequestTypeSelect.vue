<template>
  <form-field :label="label || 'Тип запиту'" :error="error">
    <select-field
      :options="types"
      name="callback_req_type"
      input-placeholder="Оберіть тип запиту"
      search-placeholder="Введіть тип запиту"
      :model-value="modelValue"
      @update:model-value="select"
      :has-search="false"
    />
  </form-field>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormField from "../../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
export default defineComponent({
  props: {
    modelValue: String,
    label: String,
    error: String,
  },
  emits: ["update:modelValue"],
  components: {
    FormField,
    SelectField,
  },

  data() {
    return {
      types: [
        { value: "json", label: "JSON" },
        { value: "xml", label: "XML" },
        { value: "x-www-form", label: "X-WWW-FORM" },
      ],
    };
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
