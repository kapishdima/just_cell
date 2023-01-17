<template>
  <div class="signin-content">
    <h3 class="auth-layout__title signin-content__title">Вхід</h3>
    <form class="auth-layout__form" @submit.prevent @submit="signIn">
      <form-field label="Логін:">
        <tel-field
          required
          name="phone"
          placeholder="+38 (0_ _) _ _ _-_ _-_ _"
        />
      </form-field>

      <form-field label="Пароль*:">
        <password-field required name="password" placeholder="Введіть пароль" />
      </form-field>

      <div class="auth-layout__actions">
        <submit-button type="submit">
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
import FormField from "@/components/fields/FormField/FormField.vue";
import TelField from "@/components/fields/TelField/TelField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import SubmitButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    FormField,
    PasswordField,
    SubmitButton,
    TelField,
  },

  methods: {
    signIn() {
      this.$router.push({ name: "dashboard" });
    },
  },
});
</script>
<style lang=""></style>
