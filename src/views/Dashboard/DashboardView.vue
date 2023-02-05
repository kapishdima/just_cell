<template>
  <app-layout>
    <template #appContent>
      <div class="dashboard-content">
        <h4 class="company-name">AVAtech</h4>
        <h3 class="greeting">Вітаємо, {{ $store.state.users.user.pip }}</h3>
        <user-stats />
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import UserStats from "./Stats/UserStats.vue";
import { testSign } from "@/api/test/test";

export default {
  components: {
    AppLayout,
    UserStats,
  },

  mounted() {
    testSign();
  },
};
</script>
<style lang=""></style>
