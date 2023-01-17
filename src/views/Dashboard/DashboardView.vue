<template>
  <app-layout>
    <template #appContent>
      <div class="dashboard-content">
        <h4 class="company-name">AVAtech</h4>
        <h3 class="greeting">Вітаємо, Андрій В’яновський</h3>
        <user-stats />
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import UserStats from "./Stats/UserStats.vue";

export default {
  components: {
    AppLayout,
    UserStats,
  },
};
</script>
<style lang=""></style>
