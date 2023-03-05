<template>
  <form-field label="Тип транспорту">
    <select-field
      :options="transports"
      name="transport_type"
      input-placeholder="Оберіть тип транспорту"
      search-placeholder="Введіть тип транспорту"
    />
  </form-field>
</template>
<script lang="ts">
import { TerminalRef } from "@/api/terminals/terminal.model";
import FormField from "../../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    FormField,
    SelectField,
  },

  computed: {
    transports(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.transport_list.map((transport) => ({
        value: transport.id.toString(),
        label: transport.name,
      }));
    },
  },
});
</script>
