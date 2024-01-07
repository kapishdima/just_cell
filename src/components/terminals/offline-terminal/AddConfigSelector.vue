<template lang="">
  <!-- {{ formValues }} -->
  <div
    class="fields-container"
    v-if="Boolean(values.add_config && values.add_config.length)"
  >
    <AddDataFields
      v-for="value of values.add_config"
      :key="value.name"
      :fieldData="value.field"
      :values="value"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AddDataFields from "./AddDataFields.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";

export default defineComponent({
  props: ["formValues", "formErrors"],

  components: {
    AddDataFields,
  },

  data() {
    return {
      values: this.formValues || { add_config: [], add_data: {} },
      errors: this.formErrors || {},
    };
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

      const addDataFields = this.terminalRef.add_data_fields.filter(
        (field: any) => field.alloc_type === this.allocType
      );

      return addDataFields;
    },
  },

  watch: {
    formValues: {
      handler(values) {
        if (
          !values.add_config?.length ||
          !Object.keys(values.add_data).length
        ) {
          return;
        }
        this.values = values;
      },
      immediate: true,
    },
    formErrors: {
      handler(values) {
        this.errors = values || {};
      },
      immediate: true,
    },
    addDataFields: {
      handler(values) {
        console.log("ADD", values);

        // eslint-disable-next-line vue/no-mutating-props
        this.values.add_config = values.map((field: any) => {
          const defaultValues = {
            text: field.data || "",
            tag: field.data || "",
            bool: field.data || false,
            select: "",
            array_text: [],
          } as any;

          return {
            name: field.field_name,
            label: field.info,
            type: field.type,
            value:
              this.values.add_data[field.field_name] ||
              defaultValues[
                field.type as "text" | "bool" | "select" | "array_text"
              ],
            data: field.data,
            field,
          };
        });

        console.log("this.values.add_config", this.formValues.add_config);
      },
      immediate: true,
    },
  },
});
</script>
<style lang="scss">
.fields-container {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 24px;

  width: 50%;

  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
  }
}
</style>
