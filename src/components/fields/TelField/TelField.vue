<template>
  <input
    v-imask="mask"
    :value="modelValue"
    :placeholder="placeholder || '+38 (0_ _) _ _ _-_ _-_ _'"
    :name="name"
    :required="required"
    type="tel"
    class="form-field__input"
    @accept="onAccept"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IMaskDirective } from "vue-imask";

export default defineComponent({
  emits: ["update:modelValue"],
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
        mask: "+{38}(000)000-00-00",
        lazy: false,
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
