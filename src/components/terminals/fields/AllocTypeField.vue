<template>
  <form-field label="Тип встановлення" :error="error">
    <select-field
      :options="allocTypes"
      name="syncTypes"
      input-placeholder="Оберіть тип встановлення"
      search-placeholder="Введіть тип встановлення"
      :has-search="false"
      :model-value="value"
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

  data() {
    return { value: "" };
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

  watch: {
    modelValue: {
      handler(value: string) {
        if (Number.isNaN(parseInt(value))) {
          this.value =
            this.allocTypes.find((type) => type.label === value)?.value || "";
          this.$emit("update:modelValue", this.value);
          return;
        }

        this.value = value;
        return;
      },
      immediate: true,
    },
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
