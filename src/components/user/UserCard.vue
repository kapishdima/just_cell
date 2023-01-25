<template lang="">
  <div class="user-card">
    <div class="user-card__header">
      <img class="user-card__avatar" :src="avatar" :alt="username" />
      <h4 class="user-card__username">{{ username }}</h4>
    </div>
    <div class="user-card__info">
      <div class="user-card__item">
        <img src="@/assets/icons/phone-icon.svg" alt="phone" />
        {{ phone }}
      </div>
      <div class="user-card__item">
        <img src="@/assets/icons/portfolio-icon.svg" alt="portfolio" />
        {{ position }}
      </div>
      <div class="user-card__item">
        <img src="@/assets/icons/branch-icon.svg" alt="branch" />
        {{ branchName }}
      </div>
    </div>
    <div class="user-card__actions">
      <slot name="actions"></slot>
    </div>
    <div class="user-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface UserCardProps {
  avatar: string;
  username: string;
  phone: string;
  position: string;
  branchName: string;
}

defineProps<UserCardProps>();
</script>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
