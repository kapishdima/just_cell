<template>
  <div class="confirm-password-content">
    <h3 class="auth-layout__title reset-password-content__title">
      Новий пароль
    </h3>
    <v-form
      class-names="auth-layout__form"
      :schema="confirmationSchema"
      :initial-values="initialValues"
      @submit="submitPassword"
    >
      <template #fields="{ errors, values, validateAt }">
        <form-field label="Логін*:" :error="errors.phone">
          <tel-field
            v-model="values.phone"
            name="phone"
            placeholder=""
            @blur="validateAt('phone')"
          />
        </form-field>
        <form-field label="Поточний пароль*:" :error="errors.oldPassword">
          <password-field
            v-model="values.oldPassword"
            name="oldPassword"
            placeholder="Введіть поточний пароль"
            @blur="validateAt('oldPassword')"
          />
        </form-field>
        <form-field label="Введіть пароль*:" :error="errors.newPassword">
          <password-field
            v-model="values.newPassword"
            name="password"
            placeholder="Введіть новий пароль"
            @blur="validateAt('newPassword')"
          />
        </form-field>
        <form-field
          label="Введіть пароль ще раз*:"
          :error="errors.confirmationPassword"
        >
          <password-field
            v-model="values.confirmationPassword"
            name="confirmation_password"
            placeholder="Підтвердіть новий пароль"
            @blur="validateAt('confirmationPassword')"
          />
        </form-field>
        <div class="auth-layout__actions">
          <v-button type="submit">
            <template #text>Надіслати</template>
          </v-button>
        </div>
      </template>
    </v-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import TelField from "@/components/fields/TelField/TelField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import VForm from "@/components/form/VForm.vue";
import { confirmationSchema } from "./confiramtion-schema";

import { AuthActions } from "@/store/modules/auth";
import { useToast } from "vue-toastification";

export default defineComponent({
  components: {
    FormField,
    TelField,
    PasswordField,
    VButton,
    VForm,
  },

  setup() {
    const toast = useToast();
    const initialValues = {
      phone: "",
      oldPassword: "",
      newPassword: "",
      confirmationPassword: "",
    };

    return { toast, confirmationSchema, initialValues };
  },

  methods: {
    async submitPassword(values: any) {
      this.$store.dispatch(AuthActions.RESET_PASSWORD, {
        resetPayload: {
          phone: values.phone,
          old_pass: values.oldPassword,
          pass: values.newPassword,
        },
        toast: this.toast,
      });
    },
  },
});
</script>
<style lang=""></style>
