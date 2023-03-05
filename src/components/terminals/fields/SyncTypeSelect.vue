<template>
  <form-field label="Тип синхронізації">
    <select-field
      :options="syncTypes"
      name="syncTypes"
      input-placeholder="Оберіть тип синхронізації"
      search-placeholder="Введіть тип синхронізації"
      :has-search="false"
      :model-value="modelValue"
      @update:model-value="select"
    />
    <template #hint>
      Дає змогу налаштувати синхронізацію чорних списків (банківські карти по
      яким не пройшла оплата) між учасниками системи JustSel
    </template>
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
  },
  emits: ["update:modelValue"],
  components: {
    FormField,
    SelectField,
  },

  computed: {
    syncTypes(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.sync_type.map((type) => ({
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
