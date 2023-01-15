<template>
  <div class="auth-layout">
    <div class="auth-layout__image">
      <img src="@/assets/auth-img.png" alt="Sign In" />
    </div>
    <div class="auth-layout__content">
      <div class="auth-layout__header">
        <div class="auth-layout__logo">
          <img src="@/assets/logo.png" alt="Just sell" />
        </div>
        <div class="auth-layout__header-link">
          <slot name="auth-link"></slot>
        </div>
      </div>
      <slot name="auth-content"></slot>
      <div class="auth-layout__footer">
        <div class="languages">
          <img src="@/assets/flags/uk.svg" alt="UK" />
          Укр
          <img src="@/assets/icons/chevron-down.svg" alt="open" />
        </div>
        <div class="about">
          <a href="#">Про компанію</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
