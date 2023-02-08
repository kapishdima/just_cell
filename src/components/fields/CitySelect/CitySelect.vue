<template>
  <form-field label="Місто">
    <select-field
      :options="cities"
      name="city"
      input-placeholder="Оберіть місто"
      search-placeholder="Введіть місто"
    />
  </form-field>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";
export default defineComponent({
  components: {
    FormField,
    SelectField,
  },

  computed: {
    cities(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.cities.map((city) => ({
        value: city.id.toString(),
        label: city.name,
      }));
    },
  },
});
</script>
