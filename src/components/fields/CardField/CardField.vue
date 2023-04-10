<template>
  <input
    v-imask="mask"
    :value="modelValue"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    type="text"
    class="form-field__input"
    @accept="onAccept"
    @blur="$emit('blur')"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IMaskDirective } from "vue-imask";

export default defineComponent({
  emits: ["update:modelValue", "blur"],
  props: {
    name: String,
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: String,
      required: false,
    },
  },

  directives: {
    imask: IMaskDirective,
  },

  data() {
    return {
      mask: {
        mask: Number,
        lazy: false,
        thousandsSeparator: " ",
      },
    };
  },

  methods: {
    onAccept(event: any) {
      const maskRef = event.detail;
      this.$emit("update:modelValue", maskRef.unmaskedValue);
    },
  },
});
</script>
