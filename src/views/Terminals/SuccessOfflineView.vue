<template>
  <app-layout>
    <template #appContent>
      <div class="success-offline-terminal">
        <div class="success-offline-terminal__icon">
          <img src="@/assets/icons/check-icon.svg" />
        </div>
        <h2 class="success-offline-terminal__title">
          Налаштування збережено успішно
        </h2>

        <p class="success-offline-terminal__description">
          Наступний крок - завантажте публічний ключ за посиланням нижче. <br />
          Публічний ключ потрібен для перевірки підпису при повідомленні
          результату транзакції. Увага! Даний ключ є конфіденційною інформацію.
          Він не зберігається на сервері, його не можна скачати повторно (лише
          згенерувати новий). Зберігайте його в надійному місці та не
          передавайте третім особам
        </p>
        <div class="success-offline-terminal__actions">
          <a
            class="success-offline-terminal__link"
            :href="keyFileLink"
            :download="keyFilename"
            >Завантажити публічний ключ</a
          >
        </div>
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";

export default defineComponent({
  components: {
    AppLayout,
  },

  computed: {
    keyFileLink(): string {
      return this.$store.state.terminals.key?.link;
    },
    keyFilename(): string {
      return this.$store.state.terminals.key?.filename;
    },
  },
});
</script>
<style lang=""></style>
