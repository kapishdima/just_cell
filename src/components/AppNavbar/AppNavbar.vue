<template>
  <nav class="app-navbar">
    <div class="app-navbar__logo">
      <img src="@/assets/logo.png" alt="Just sell" />
    </div>
    <div class="app-navbar__tools">
      <app-locales />
      <app-user />
      <logout-button />
    </div>
  </nav>
</template>
<script lang="ts">
import AppLocales from "@/components/AppLocales/AppLocales.vue";
import AppUser from "@/components/AppUser/AppUser.vue";
import LogoutButton from "@/components/Button/LogoutButton/LogoutButton.vue";
export default {
  components: {
    AppLocales,
    AppUser,
    LogoutButton,
  },
};
</script>
<style lang=""></style>
