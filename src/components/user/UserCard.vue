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
    <div class="user-card__actions" v-if="hasActionsSlot">
      <slot name="actions"></slot>
    </div>
    <div class="user-card__footer" v-if="hasFooterSlot">
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
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    hasActionsSlot(): boolean {
      return Boolean(this.$slots.actions);
    },
    hasFooterSlot(): boolean {
      return Boolean(this.$slots.footer);
    },
  },
});
</script>
<style lang=""></style>
