<template>
  <form :class="classNames" @submit.prevent @submit.stop @submit="onSubmit">
    <slot
      name="fields"
      :values="values"
      :errors="errors"
      :hasErrors="hasErrors"
      :validateAt="validateAt"
      ref="slot"
    ></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Schema } from "yup";
import { validateAll, validateOne } from "./validate";
import set from "lodash.set";

type Error = { [key: string]: string };

export default defineComponent({
  emits: ["submit"],
  props: {
    classNames: {
      type: String,
      required: false,
    },
    initialValues: {
      type: Object,
      required: true,
    },
    schema: {
      required: false,
    },
  },

  data(): { errors: Error; values: any } {
    return {
      values: this.initialValues,
      errors: {},
    };
  },

  computed: {
    hasErrors() {
      return Boolean(Object.keys(this.errors).length > 0);
    },
  },

  watch: {
    initialValues(newValues) {
      this.values = newValues;
    },
    errors(values: any) {
      const firstField = Object.keys(values)[0];
      const field = document.querySelector(
        `[name="${firstField}"]`
      ) as HTMLInputElement;

      field.focus();
    },
  },

  methods: {
    async onSubmit() {
      const valid = await this.validate();

      if (valid) {
        this.$emit("submit", this.values);
      }
    },
    async validate() {
      if (!this.schema) {
        console.error("Validation schema doen't provided");
        return true;
      }

      this.errors = await validateAll(this.values, this.schema as Schema);
      return Boolean(Object.keys(this.errors).length <= 0);
    },

    async validateAt(field: string) {
      if (!this.schema) {
        console.error("Validation schema doen't provided");
        return true;
      }

      const error = await validateOne(
        field,
        this.values,
        this.schema as Schema
      );

      set(this.errors, field, error);
    },
  },
});
</script>

<style scoped></style>
