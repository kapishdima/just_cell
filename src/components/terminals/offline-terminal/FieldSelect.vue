<template>
  <form-field :label="label">
    <select-field
      :hasSearch="false"
      :options="options"
      :model-value="value"
      @update:model-value="select"
    />
  </form-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import FormField from "@/components/fields/FormField/FormField.vue";

export default defineComponent({
  props: ["modelValue", "data", "label"],
  emits: ["update:modelValue"],

  components: {
    SelectField,
    FormField,
  },

  data() {
    return {
      options: [],
    };
  },

  watch: {
    data: {
      handler(value) {
        this.options = value
          .split("|")
          .map((record: string) => ({ label: record, value: record }));
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

<style lang="scss" scoped></style>
