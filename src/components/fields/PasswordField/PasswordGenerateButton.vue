<template>
  <button
    type="button"
    class="form-field__extra password-visibility-button"
    tabindex="-1"
    @click="generatePassword"
  >
    <img src="@/assets/icons/key_icon.svg" alt="Generate" />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["generatedPassword"],
  data() {
    return {
      generatedPassword: "",
    };
  },

  watch: {
    generatedPassword(value: string) {
      this.$emit("generatedPassword", value);
    },
  },

  methods: {
    generatePassword() {
      const chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const passwordLength = 15;
      let password = "";

      for (var i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }

      this.generatedPassword = password;
    },
  },
});
</script>
<style lang=""></style>
