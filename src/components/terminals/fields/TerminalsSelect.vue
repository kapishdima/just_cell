<template>
  <form-field label="Термінали на які не поширюється знижка" :error="error">
    <select-field
      :options="terminals"
      name="terminal"
      input-placeholder="Оберіть термінал"
      search-placeholder="Введіть назву терміналу"
      has-searh
      :model-value="modelValue"
      @update:model-value="select"
    />
  </form-field>
</template>
<script lang="ts">
import FormField from "../../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectFieldMultiple.vue";
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
    terminals(): { value: string; label: string }[] {
      //   const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      //   if (!ref) {
      //     return [];
      //   }

      //   return ref.sync_type.map((type) => ({
      //     value: type.id.toString(),
      //     label: type.name || "",
      //   }));

      return [
        { value: "1", label: "Terminal 1" },
        { value: "2", label: "Terminal 2" },
      ];
    },
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
