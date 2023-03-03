<template>
  <app-layout>
    <template #appContent>
      <div class="dashboard-content">
        <h4 class="company-name">JustSell</h4>
        <h3 class="greeting">Вітаємо, {{ $store.state.users.user?.pip }}</h3>
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";

export default {
  components: {
    AppLayout,
  },
};
</script>
<style lang=""></style>
