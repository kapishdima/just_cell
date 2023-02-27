<template>
  <div class="confirm-password-content">
    <h3 class="auth-layout__title reset-password-content__title">
      Новий пароль
    </h3>
    <form class="auth-layout__form">
      <form-field label="Логін*:">
        <tel-field v-model="phone" name="phone" placeholder="" required />
      </form-field>
      <form-field label="Поточний пароль*:">
        <password-field
          v-model="oldPassword"
          name="oldPassword"
          placeholder="Введіть поточний пароль"
        />
      </form-field>
      <confirmation-password v-model="newPassword" @errors="onError" />
      <div class="auth-layout__actions">
        <v-button type="button" :disabled="hasError" @click="submitPassword">
          <template #text>Надіслати</template>
        </v-button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import TelField from "@/components/fields/TelField/TelField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import ConfirmationPassword from "@/components/fields/ConfirmationPassword/ConfirmationPassword.vue";

import { AuthActions } from "@/store/modules/auth";
import { useToast } from "vue-toastification";

export default defineComponent({
  components: {
    FormField,
    TelField,
    ConfirmationPassword,
    PasswordField,
    VButton,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  data() {
    return {
      phone: "",
      oldPassword: "",
      newPassword: "",
      hasError: false,
    };
  },

  methods: {
    async submitPassword() {
      this.$store.dispatch(AuthActions.RESET_PASSWORD, {
        resetPayload: {
          phone: this.$data.phone,
          old_pass: this.$data.oldPassword,
          pass: this.$data.newPassword,
        },
        toast: this.toast,
      });
    },
    onError(value: any) {
      this.hasError = Boolean(value);
    },
  },
});
</script>
<style lang=""></style>
