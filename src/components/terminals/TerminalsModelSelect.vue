<template>
  <form-field label="Модель терміналу">
    <select-field
      name="model"
      :options="models"
      @update:model-value="onSelect"
      input-placeholder="Оберіть модель терміналу"
      search-placeholder="Введіть модель терміналу"
    />
  </form-field>
  <os-select v-if="showOsSelect" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormField from "../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import OsSelect from "../fields/OSSelect/OSSelect.vue";
import { TerminalRef, TerminalModel } from "@/api/terminals/terminal.model";
export default defineComponent({
  components: {
    FormField,
    SelectField,
    OsSelect,
  },

  data() {
    return {
      model: "",
    };
  },

  computed: {
    showOsSelect(): boolean {
      const terminal: TerminalModel = this.$store.getters.terminalModel(
        this.model
      );

      return JSON.parse(terminal?.dep_on_opersys || "false");
    },

    models() {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.transport_support.map((model) => ({
        value: model.id.toString(),
        label: model.name,
        hint: model.opis,
      }));
    },
  },

  methods: {
    onSelect(value: string) {
      this.model = value;
    },
  },
});
</script>
