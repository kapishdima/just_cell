<template>
  <form-field label="Статус" :small="small" shadow>
    <select-field
      :options="statuses"
      name="syncTypes"
      input-placeholder="Оберіть статус"
      search-placeholder="Введіть статус"
      :has-search="false"
      :model-value="modelValue"
      @update:model-value="select"
      :size="small ? 'sm' : 'md'"
      :disabled="disabled"
    />
  </form-field>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";

export default defineComponent({
  props: {
    modelValue: String,
    small: {
      type: Boolean,
      required: false,
    },
    disabled: {
      required: false,
    },
  },
  emits: ["update:modelValue", "blur"],
  components: {
    FormField,
    SelectField,
  },

  computed: {
    statuses(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      const statuses = ref.status_list.map((type) => ({
        value: type.id.toString(),
        label: type.name || "",
      }));

      statuses.unshift({ value: "", label: "Усі" });

      return statuses;
    },
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
      this.$emit("blur", value);
    },
  },
});
</script>
