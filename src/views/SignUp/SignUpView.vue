<template lang="">
  <auth-layout>
    <template #auth-link>
      Маєте аккаунт?
      <router-link :to="{ name: 'signin' }">Увійти</router-link>
    </template>
    <template #auth-content>
      <signup-form />
    </template>
  </auth-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout.vue";
import SignupForm from "./SignUpForm.vue";

export default defineComponent({
  components: {
    AuthLayout,
    SignupForm,
  },
});
</script>
