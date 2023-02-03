<template>
  <div class="signin-content">
    <h3 class="auth-layout__title signin-content__title">Вхід</h3>
    <form class="auth-layout__form" @submit.prevent @submit="signIn">
      <form-field label="Логін:">
        <tel-field
          required
          name="phone"
          placeholder="+38 (0_ _) _ _ _-_ _-_ _"
          v-model="phone"
        />
      </form-field>

      <form-field label="Пароль*:">
        <password-field
          required
          name="password"
          placeholder="Введіть пароль"
          v-model="pass"
        />
      </form-field>

      <div class="auth-layout__actions">
        <submit-button type="submit" :loading="isLoading">
          <template #text>Увійти</template>
        </submit-button>

        <router-link :to="{ name: 'reset' }" class="signin-link"
          >Забули <span>пароль</span>?</router-link
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";

import FormField from "@/components/fields/FormField/FormField.vue";
import TelField from "@/components/fields/TelField/TelField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import SubmitButton from "@/components/buttons/BaseButton/BaseButton.vue";

import { login } from "@/api/auth/login";

export default defineComponent({
  components: {
    FormField,
    PasswordField,
    SubmitButton,
    TelField,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  data() {
    // phone: "380222222222",
    // pass: "202cb962ac59075b964b07152d234b70",
    return {
      phone: "",
      pass: "",
      isLoading: false,
    };
  },

  methods: {
    async signIn() {
      this.isLoading = true;
      await login(
        { phone: this.phone, pass: this.pass },
        {
          onSuccess: () => {
            this.toast.success("Авторизація пройшла успішно!");
            this.$router.push({ name: "dashboard" });
          },
          onError: () => {
            this.toast.error(
              "Помилка входу! Введений номер телефону чи пароль невірні"
            );
          },
        }
      );
      this.isLoading = false;
    },
  },
});
</script>
<style lang=""></style>
