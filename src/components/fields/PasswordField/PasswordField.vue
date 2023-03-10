<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :value="password"
    class="form-field__input"
    @input="input($event)"
    @blur="$emit('blur')"
  />
  <div class="form-field__extra-container">
    <password-visibility-button @change="changeType" />
    <password-generate-button
      v-if="hasGenerateButton"
      @generated-password="onGeneratePassword"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PasswordVisibilityButton from "./PasswordVisibilityButton.vue";
import PasswordGenerateButton from "./PasswordGenerateButton.vue";

type InputType = "text" | "password";

interface PasswordDataValues {
  type: InputType;
  password: string;
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
    hasGenerateButton: {
      type: Boolean,
      default: false,
    },
    modelValue: String,
  },
  emits: ["update:modelValue", "blur"],
  components: {
    PasswordVisibilityButton,
    PasswordGenerateButton,
  },
  data(): PasswordDataValues {
    return { type: "password", password: this.modelValue || "" };
  },

  watch: {
    modelValue(value) {
      this.password = value;
    },
  },

  methods: {
    changeType(type: InputType) {
      this.type = type;
    },
    input(event: Event) {
      const value = (event.target as HTMLInputElement)?.value;
      this.$emit("update:modelValue", value);
    },
    onGeneratePassword(value: string) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
