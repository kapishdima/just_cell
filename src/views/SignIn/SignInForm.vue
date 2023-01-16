<template>
  <div class="signin-content">
    <h3 class="auth-layout__title signin-content__title">Вхід</h3>
    <form class="auth-layout__form">
      <form-field label="Логін:">
        <input-field name="phone" placeholder="+38 (0_ _) _ _ _-_ _-_ _" />
      </form-field>

      <form-field label="Пароль*:">
        <password-field name="password" placeholder="Введіть пароль" />
      </form-field>

      <div class="auth-layout__actions">
        <submit-button @click="signIn">
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
import FormField from "@/components/FormField/FormField.vue";
import InputField from "@/components/InputField/InputField.vue";
import PasswordField from "@/components/PasswordField/PasswordField.vue";
import SubmitButton from "@/components/Button/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    InputField,
    FormField,
    PasswordField,
    SubmitButton,
  },

  methods: {
    signIn() {
      this.$router.push({ name: "dashboard" });
    },
  },
});
</script>
<style lang=""></style>
