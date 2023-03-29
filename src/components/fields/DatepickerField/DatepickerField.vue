<template>
  <input
    ref="datepickerInput"
    type="text"
    v-imask="mask"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :class="`
    form-field__input--${size} form-field__input--${variant}`"
    :value="modelValue"
    autocomplete="false"
    @input="input($event)"
    @blur="$emit('blur')"
    class="form-field__input"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Datepicker } from "vanillajs-datepicker";
import { IMaskDirective } from "vue-imask";

import uk from "./uk";
import { format } from "./format";

import "vanillajs-datepicker/css/datepicker.css";

Object.assign(Datepicker.locales, uk);

const datepickerOptions = {
  language: "uk",
  // minDate: new Date("01.01.1900"),
  format: "yyyy-mm-dd",
  autohide: true,
};

const maskOptions = {
  mask: Date,
  pattern: "Y-`m-dd",
  autofix: true,
  overwrite: true,
};

export default defineComponent({
  emits: ["update:modelValue", "blur"],
  props: {
    name: {
      type: String,
    },
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: "md",
    },
    variant: {
      type: String,
      required: false,
      default: "default",
    },
    modelValue: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },

  data() {
    return {
      mask: maskOptions,
    };
  },
  setup() {
    return {};
  },

  mounted() {
    this.initDatepicker();
  },

  methods: {
    input(event: Event) {
      const value = (event.target as HTMLInputElement)?.value;
      this.$emit("update:modelValue", value);
    },
    initDatepicker() {
      const input = this.$refs.datepickerInput as HTMLInputElement;

      new Datepicker(input, datepickerOptions);

      input.addEventListener("changeDate", this.onDateChange);
      input.addEventListener("hide", this.onDatepickerHide);
    },

    onDateChange(event: Event) {
      const eventData = (event as CustomEvent).detail;
      const date = format(eventData.date);
      this.$emit("update:modelValue", date);
    },

    onDatepickerHide() {
      const input = this.$refs.datepickerInput as HTMLInputElement;
      input.blur();
    },
  },

  directives: {
    imask: IMaskDirective,
  },
});
</script>

<style scoped></style>
