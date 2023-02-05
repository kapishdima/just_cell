<template>
  <nav class="app-navbar">
    <div class="app-navbar__logo">
      <!-- <img src="@/assets/logo.png" alt="Just sell" /> -->
      <app-logo />
    </div>
    <div class="app-navbar__tools">
      <app-locales />
      <app-user />
      <logout-button />
    </div>
  </nav>
</template>
<script lang="ts">
import AppLocales from "../AppLocales/AppLocales.vue";
import AppUser from "../AppUser/AppUser.vue";
import LogoutButton from "../../buttons/LogoutButton/LogoutButton.vue";
import AppLogo from "../AppLogo/AppLogo.vue";

export default {
  components: {
    AppLocales,
    AppUser,
    LogoutButton,
    AppLogo,
  },
};
</script>
<style lang=""></style>
