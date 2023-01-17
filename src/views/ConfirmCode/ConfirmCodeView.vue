<template>
  <auth-layout>
    <template #auth-link>
      Маєте аккаунт?
      <router-link to="signin">Увійти</router-link>
    </template>
    <template #auth-content>
      <confirm-form />
    </template>
  </auth-layout>
</template>
<script lang="ts">
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout.vue";
import ConfirmForm from "./ConfirmCodeForm.vue";
export default {
  components: {
    AuthLayout,
    ConfirmForm,
  },
};
</script>
<style lang=""></style>
