<template>
  <form-field label="Тип встановлення" :error="error">
    <select-field
      :options="allocTypes"
      name="syncTypes"
      input-placeholder="Оберіть тип встановлення"
      search-placeholder="Введіть тип встановлення"
      :has-search="false"
      :model-value="modelValue"
      @update:model-value="select"
    />
  </form-field>
</template>
<script lang="ts">
import FormField from "../../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    error: String,
  },
  emits: ["update:modelValue"],
  components: {
    FormField,
    SelectField,
  },

  computed: {
    allocTypes(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      const allocTypes = ref.alloc_type.map((type) => ({
        value: type.id.toString(),
        label: type.name || "",
      }));

      allocTypes.push({ label: "Не вибрано", value: "" });

      return allocTypes;
    },
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
