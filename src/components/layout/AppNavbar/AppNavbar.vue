<template>
  <nav class="app-navbar">
    <div class="app-navbar__logo">
      <app-logo />
    </div>
    <div class="app-navbar__tools">
      <app-locales />
      <app-user />
      <logout-button v-if="showLogoutButton" />
      <app-hamburget-button
        v-if="showHamburgerButton"
        @mobile-button-click="(value: boolean) => $emit('mobileButtonClick', value)"
      />
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AppLocales from "../AppLocales/AppLocales.vue";
import AppUser from "../AppUser/AppUser.vue";
import LogoutButton from "../../buttons/LogoutButton/LogoutButton.vue";
import AppLogo from "../AppLogo/AppLogo.vue";
import AppHamburgetButton from "../AppSidebar/AppHamburgetButton.vue";

export default defineComponent({
  emits: ["mobileButtonClick"],
  components: {
    AppLocales,
    AppUser,
    LogoutButton,
    AppLogo,
    AppHamburgetButton,
  },

  data() {
    return {
      showLogoutButton: true,
      showHamburgerButton: false,
    };
  },

  mounted() {
    document.addEventListener("resize", this.onResize);
    this.onResize();
  },

  beforeUnmount() {
    document.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.showLogoutButton = !window.matchMedia("(max-width: 768px)").matches;
      this.showHamburgerButton =
        window.matchMedia("(max-width: 768px)").matches;
    },
  },
});
</script>
<style lang=""></style>
