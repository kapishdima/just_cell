<template>
  <auth-layout>
    <template #auth-link>
      Немає аккаунта?
      <router-link :to="{ name: 'signup' }">Зареєструватись</router-link>
    </template>
    <template #auth-content>
      <signin-form />
    </template>
  </auth-layout>
  <router-view></router-view>
</template>
<script lang="ts">
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout.vue";
import SigninForm from "./SignInForm.vue";
import { clearUserSession } from "@/api/user/user";

export default {
  components: {
    AuthLayout,
    SigninForm,
  },

  mounted() {
    clearUserSession();
  },
};
</script>
<style lang=""></style>
