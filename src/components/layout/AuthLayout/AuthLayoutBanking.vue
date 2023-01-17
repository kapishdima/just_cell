<template>
  <div class="auth-layout-banking">
    <div class="auth-layout-banking__content">
      <div class="auth-layout-banking__header">
        <div class="auth-layout-banking__logo">
          <img src="@/assets/logo.png" alt="Just sell" />
        </div>
      </div>
      <slot name="auth-content"></slot>
      <div class="auth-layout-banking__footer">
        <app-locales />
        <div class="about">
          <a href="#">Про компанію</a>
        </div>
      </div>
    </div>
    <div class="auth-layout-banking__image">
      <img src="@/assets/auth-banking-img.png" alt="Sign In" />
    </div>
  </div>
</template>
<script lang="ts">
import AppLocales from "@/components/layout/AppLocales/AppLocales.vue";
export default {
  components: {
    AppLocales,
  },
};
</script>
<style lang=""></style>
