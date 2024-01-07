<template>
  <div class="filters-item filters-companies-select" v-if="refValues.length">
    <form-field :label="label" small shadow>
      <select-field
        :options="refValues"
        :name="name"
        input-placeholder=""
        search-placeholder=""
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
import { defineComponent } from "vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";
import FormField from "../../fields/FormField/FormField.vue";

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
    label: String,
    refTag: String,
    name: String,
  },
  emits: ["update:modelValue", "blur"],
  components: {
    FormField,
    SelectField,
  },

  computed: {
    refValues(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref || !this.refTag) {
        return [];
      }

      // @ts-ignore
      const values = ref[this.refTag].map((type) => ({
        value: type.id.toString(),
        label: type.name || "",
      }));

      if (this.refTag === "status_list") {
        values.unshift({ value: "", label: "Усі" });
      }

      return values;
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
