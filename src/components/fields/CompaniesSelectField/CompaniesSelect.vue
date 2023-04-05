<template>
  <div class="filters-item" v-if="companies.length">
    <form-field label="Компанії" small shadow>
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
  </div>
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
