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
          ref="phoneInput"
        />
      </form-field>

      <form-field label="Пароль*:">
        <password-field
          required
          name="password"
          placeholder="Введіть пароль"
          v-model="pass"
          ref="passwordInput"
        />
      </form-field>

      <div class="auth-layout__actions">
        <submit-button type="submit" :loading="loading">
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

import { AuthActions } from "@/store/modules/auth";

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
    return {
      phone: "",
      pass: "",
      isLoading: false,
    };
  },

  computed: {
    loading(): boolean {
      return this.$store.state.terminals.loading;
    },
  },

  methods: {
    signIn() {
      this.blurAllInputs();

      const loginData = {
        pass: this.pass,
        phone: this.phone,
      };
      this.$store.dispatch(AuthActions.LOGIN, {
        loginData,
        toast: this.toast,
        route: this.$route,
      });
    },

    blurAllInputs() {
      const inputsEls = document.querySelectorAll("input");
      if (!inputsEls) {
        return;
      }

      inputsEls.forEach((inputEl) => inputEl.blur());
    },
  },
});
</script>
<style lang=""></style>
