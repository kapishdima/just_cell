<template>
  <form-field label="Тип підключення" :error="error">
    <select-field
      :options="connectionTypes"
      name="request_type"
      input-placeholder="Оберіть тип підключення"
      search-placeholder="Введіть тип підключення"
      :has-search="false"
      :model-value="modelValue"
      @update:model-value="select"
    />
    <template #hint>
      <!-- Дає змогу налаштувати синхронізацію чорних списків (банківські карти по
      яким не пройшла оплата) між учасниками системи JustSel -->
    </template>
  </form-field>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import { EcommTerminalRef } from "@/api/terminals/terminal.model";

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
    connectionTypes(): { value: string; label: string }[] {
      const ref: EcommTerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.request_type.map((type) => ({
        value: type.id.toString(),
        label: type.name || "",
        hint: type.opis,
      }));
    },
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
