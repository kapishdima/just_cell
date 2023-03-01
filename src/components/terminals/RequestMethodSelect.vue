<template>
  <form-field :label="label || 'Тип запиту'">
    <select-field
      :options="types"
      name="req_type"
      input-placeholder="Оберіть тип запиту"
      search-placeholder="Введіть тип запиту"
      :model-value="modelValue"
      @update:model-value="select"
    />
  </form-field>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormField from "../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
export default defineComponent({
  props: {
    modelValue: String,
    label: String,
  },
  emits: ["update:modelValue"],
  components: {
    FormField,
    SelectField,
  },

  data() {
    return {
      types: [
        { value: "POST", label: "POST" },
        { value: "GET", label: "GET" },
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
