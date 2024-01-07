<template>
  <form-field label="Тип налаштування" :error="error">
    <select-field
      name="syncTypes"
      input-placeholder="Оберіть тип налаштування"
      :options="addDataFields"
      :has-search="false"
      :model-value="value"
      @update:model-value="select"
    />
  </form-field>
  <add-data-fields :fieldData="fieldData" :values="values" />
</template>
<script lang="ts">
import FormField from "../../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import AddDataFields from "./AddDataFields.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["modelValue", "error", "values"],
  emits: ["update:modelValue"],
  components: {
    FormField,
    AddDataFields,
    SelectField,
  },

  data() {
    return { value: "", fieldData: null };
  },

  computed: {
    allocType(): string {
      return this.$route.query.alloc_type as string;
    },
    terminalRef(): TerminalRef {
      return this.$store.state.terminals.terminalsRef;
    },
    addDataFields(): any[] {
      if (!this.terminalRef || !this.terminalRef.add_data_fields) {
        return [];
      }

      const addDataFields = this.terminalRef.add_data_fields
        .filter((field: any) => field.alloc_type === this.allocType)
        .map((field, index) => ({
          value: index,
          label: field.info,
        }));

      return addDataFields;
    },
  },

  methods: {
    select(value: any) {
      this.$emit("update:modelValue", value);
      const field = this.terminalRef?.add_data_fields.filter(
        (field: any) => field.alloc_type === this.allocType
      )[value];

      const defaultValues = {
        text: field.data || "",
        tag: field.data || "",
        bool: field.data || false,
        select: "",
        array_text: [],
      };

      this.fieldData = field;
      // eslint-disable-next-line vue/no-mutating-props
      this.values.name = field.field_name;
      // eslint-disable-next-line vue/no-mutating-props
      this.values.label = field.info;
      // eslint-disable-next-line vue/no-mutating-props
      this.values.type = field.type;
      // eslint-disable-next-line vue/no-mutating-props
      this.values.value =
        defaultValues[field.type as "text" | "bool" | "select" | "array_text"];
      // eslint-disable-next-line vue/no-mutating-props
      this.values.data = field.data;
      // eslint-disable-next-line vue/no-mutating-props
      this.values.canEdit = JSON.parse(field.can_user_edit);
    },
  },
});
</script>
