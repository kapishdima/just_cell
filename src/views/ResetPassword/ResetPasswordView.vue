<template>
  <auth-layout>
    <template #auth-link>
      Маєте аккаунт?
      <router-link to="signin">Увійти</router-link>
    </template>
    <template #auth-content>
      <reset-form />
    </template>
  </auth-layout>
</template>
<script lang="ts">
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout.vue";
import ResetForm from "./ResetPasswordForm.vue";
export default {
  components: {
    AuthLayout,
    ResetForm,
  },
};
</script>
<style lang=""></style>
