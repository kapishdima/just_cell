<template>
  <form-field label="Тип терміналу">
    <select-field
      :options="types"
      name="terminal_type"
      input-placeholder="Оберіть тип терміналу"
      search-placeholder="Введіть тип терміналу"
      :has-search="false"
    />
  </form-field>
</template>
<script lang="ts">
import FormField from "../../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FormField,
    SelectField,
  },

  computed: {
    types(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.terminals_type.map((type) => ({
        value: type.id.toString(),
        label: type.name || "Test",
      }));
    },
  },
});
</script>
