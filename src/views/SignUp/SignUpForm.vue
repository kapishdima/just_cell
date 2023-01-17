<template>
  <div class="signup-content">
    <h3 class="auth-layout__title">Реєстрація</h3>
    <form class="auth-layout__form" @submit="signUp" @submit.prevent>
      <form-field label="ПІБ*:">
        <input-field
          required
          name="full_name"
          placeholder="Введіть Ваше прізвище, ім’я, по батькові"
        />
      </form-field>
      <form-field label="Телефон*:">
        <tel-field
          required
          name="phone"
          placeholder="+38 (0_ _) _ _ _-_ _-_ _"
        />
      </form-field>
      <form-field
        label="ІПН (Реєстраційний номер облікової картки платника податків) за наявності:"
      >
        <input-field
          required
          name="ipn"
          placeholder="Введіть ваш податковий номер"
        />
      </form-field>
      <form-field label="Пароль*:">
        <password-field
          required
          name="password"
          placeholder="Вигадайте пароль від 6 символів"
        />
      </form-field>
      <form-field label="Повторіть пароль*:">
        <password-field
          required
          name="verify_password"
          placeholder="Введіть пароль ще раз"
        />
      </form-field>

      <p class="auth-layout__caption">
        Реєструючись, Ви погоджуєтесь з
        <a href="#">
          умовами тарифного плану, положенням про конфіденційність та договором
          публічної оферти.
        </a>
      </p>

      <div class="auth-layout__actions">
        <submit-button type="submit">
          <template #text>Зареєструватись</template>
        </submit-button>
        <a href="#" class="sigup-link">
          Пройти реєстрацію в нашому додатку
          <img src="@/assets/icons/double-arrow-right.svg" alt="Go" />
        </a>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import TelField from "@/components/fields/TelField/TelField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import SubmitButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    TelField,
    FormField,
    PasswordField,
    SubmitButton,
    InputField,
  },

  methods: {
    signUp() {
      this.$router.push({ name: "banking" });
    },
  },
});
</script>
<style lang=""></style>
