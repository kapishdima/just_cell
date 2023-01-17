<template>
  <div class="confirm-password-content">
    <h3 class="auth-layout__title reset-password-content__title">
      Новий пароль
    </h3>
    <form class="auth-layout__form" @submit.prevent @submit="submitPassword">
      <form-field label="Введіть пароль*:">
        <password-field v-model="password" name="password" required />
      </form-field>
      <form-field label="Введіть пароль ще раз*:">
        <password-field
          v-model="confirmation_password"
          name="confirmation_password"
          required
        />
      </form-field>
      <div class="auth-layout__actions">
        <v-button type="submit">
          <template #text>Надіслати</template>
        </v-button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    FormField,
    PasswordField,
    VButton,
  },

  data() {
    return {
      password: "",
      confirmation_password: "",
    };
  },

  methods: {
    async submitPassword() {
      console.log(this.$data);
      this.$router.push({ name: "signin" });
    },
  },
});
</script>
<style lang=""></style>
