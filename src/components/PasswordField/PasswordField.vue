<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    class="form-field__input"
  />
  <password-visibility-button @change="changeType" />
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
export interface PasswordFieldProps {
  name: string;
  placeholder?: string;
}

defineProps<PasswordFieldProps>();
</script>
<script lang="ts">
import { defineComponent } from "vue";
import PasswordVisibilityButton from "./PasswordVisibilityButton.vue";

type InputType = "text" | "password";

interface PasswordDataValues {
  type: InputType;
}

export default defineComponent({
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
  },
});
</script>
