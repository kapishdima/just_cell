<template>
  <form-field label="Компанії">
    <select-field
      :options="companies"
      name="companies"
      input-placeholder="Оберіть компанію"
      search-placeholder="Введіть компанію"
      :has-search="false"
      :model-value="modelValue"
      @update:model-value="select"
      size="sm"
      :disabled="disabled"
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

  data() {
    return {
      value: "",
    };
  },

  watch: {
    modelValue: {
      handler(value) {
        // Значение которое приходит это label, а для селекта нужен id. Поэтому выбираем по label нужные option и получаем его id
        if (!this.companies || Number.isInteger(Number(value))) {
          return;
        }

        const company =
          this.companies.find((company) => company.label === value)?.value ||
          "";

        this.value = company;
        this.$emit("update:modelValue", company);
      },
      immediate: true,
    },
  },

  computed: {
    companies(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      const companies = ref.parent_child.map((type) => ({
        value: type.id.toString(),
        label: type.name || "",
      }));

      companies.unshift({
        value: "",
        label: "Не обрано",
      });

      return companies;
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
