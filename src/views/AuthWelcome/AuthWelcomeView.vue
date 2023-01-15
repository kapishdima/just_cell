<template>
  <auth-layout>
    <template #auth-link>
      Немає аккаунта?
      <router-link to="signup">Зареєструватись</router-link>
    </template>
    <template #auth-content>
      <div class="auth-welcome">
        <h4 class="auth-welcome__title">Ласкаво просимо!</h4>
        <div class="auth-welcome__services">
          <h3 class="services-title">Оберіть послугу:</h3>
          <div class="services-list">
            <a href="#" class="service">
              <span class="service-text">Замовити торговий термінал</span>
              <div class="service-icon">
                <img
                  src="@/assets/icons/double-arrow-right-filled.svg"
                  alt="Go"
                />
              </div>
            </a>
            <a href="#" class="service">
              <span class="service-text">Замовити програмне рро</span>
              <div class="service-icon">
                <img
                  src="@/assets/icons/double-arrow-right-filled.svg"
                  alt="Go"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </template>
  </auth-layout>
</template>
<script lang="ts">
import AuthLayout from "@/components/AuthLayout/AuthLayout.vue";

export default {
  components: {
    AuthLayout,
  },
};
</script>
<style lang=""></style>
