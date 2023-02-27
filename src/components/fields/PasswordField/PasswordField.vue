<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :value="modelValue"
    class="form-field__input"
    @input="input($event)"
    @blur="$emit('blur')"
  />
  <password-visibility-button @change="changeType" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PasswordVisibilityButton from "./PasswordVisibilityButton.vue";

type InputType = "text" | "password";

interface PasswordDataValues {
  type: InputType;
}

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    modelValue: String,
  },
  emits: ["update:modelValue", "blur"],
  components: {
    PasswordVisibilityButton,
  },
  data(): PasswordDataValues {
    return { type: "password" };
  },
  methods: {
    changeType(type: InputType) {
      this.type = type;
    },
    input(event: Event) {
      const value = (event.target as HTMLInputElement)?.value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
