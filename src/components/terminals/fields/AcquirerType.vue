<template>
  <form-field label="Еквайер" :error="error">
    <select-field
      :options="acquirerTypes"
      name="comissionTypes"
      input-placeholder="Оберіть тип еквайер"
      search-placeholder="Введіть тип еквайер"
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
import FormField from "../../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectFieldMultiple.vue";
import { EcommTerminalRef } from "@/api/terminals/terminal.model";
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
    acquirerTypes(): { value: string; label: string }[] {
      const ref: EcommTerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.banks_list.map((type) => ({
        value: type.id.toString(),
        label: type.name || "",
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
