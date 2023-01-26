<template lang="">
  <div class="user-statistics-card" :class="`user-statistics-card--${variant}`">
    <h4 class="user-statistics-card__title">{{ title }}</h4>
    <h3 class="user-statistics-card__value">{{ value }}</h3>
  </div>
</template>
<script setup lang="ts">
interface UserStatisticsCardProps {
  title: string;
  value: string;
  variant?: "sm" | "lg";
}

withDefaults(defineProps<UserStatisticsCardProps>(), {
  variant: "sm",
});
</script>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
