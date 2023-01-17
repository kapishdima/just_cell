<template>
  <auth-layout-banking>
    <template #auth-content>
      <div class="signup-banking">
        <div class="signup-banking__header">
          <h4 class="signup-banking__subtitle">
            Ви успішно пройшли реєстрацію!
          </h4>
          <h3 class="signup-banking__title">Оберіть Ваш банк</h3>
          <h5 class="signup-banking__caption">
            *Не знайшли свій банк? <a href="#">Напишіть нам</a>
          </h5>
        </div>
        <div class="signup-banking__list">
          <router-link :to="{ name: 'welcome' }">
            <img src="@/assets/ukrgaz.png" alt="UkrgazBank" />
          </router-link>
        </div>
        <div class="signup-banking__footer">
          <span
            >*Якщо ви не маєте рахунку в цих банках, Ви повинні його
            відкрити</span
          >
          <span>Ви можете зробити це в нашому <a href="#">додатку</a></span>
        </div>
      </div>
    </template>
  </auth-layout-banking>
</template>
<script lang="ts">
import AuthLayoutBanking from "@/components/layout/AuthLayout/AuthLayoutBanking.vue";

export default {
  components: {
    AuthLayoutBanking,
  },
};
</script>
<style lang=""></style>
