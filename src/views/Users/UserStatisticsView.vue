<template>
  <app-layout>
    <template #appTitle>Статистика</template>
    <template #appContent>
      <div class="user-statistics__content">
        <div class="user-statistics__user">
          <img
            src="@/assets/avatar.png"
            class="user-statistics__user-avatar"
            alt=""
          />
          <p class="user-statistics__user-name">Микола</p>
        </div>
        <div class="user-statistics__row">
          <statistics-card title="Кількість продажів за місяць" value="1543" />
          <statistics-card
            title="Загальна сума продажів за місяць"
            value="3342"
          />
          <statistics-card title="Частота продажів" value="34/день" />
          <statistics-card
            title="Середня кількість продажів на місяць"
            value="2378"
          />
        </div>
        <div class="user-statistics__row">
          <statistics-card
            variant="lg"
            title="Активність користувача"
            value="2378 пошуків/день"
          />
          <statistics-card
            variant="lg"
            title="Відношення пошуків до продажів"
            value="2378/678"
          />
        </div>
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import StatisticsCard from "@/components/user/UserStatisticsCard.vue";
export default {
  components: {
    AppLayout,
    StatisticsCard,
  },
};
</script>
<style lang=""></style>
