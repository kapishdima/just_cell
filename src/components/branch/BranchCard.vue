<template>
  <router-link :to="{ name: route, params: { id, name } }" class="branch-card">
    <h4 class="branch-card__name">{{ name }}</h4>
    <img
      src="@/assets/icons/chevron-right.svg"
      alt=""
      class="branch-card__icon"
    />
  </router-link>
</template>
<script setup lang="ts">
interface BranchCardProps {
  id: string;
  name: string;
  route: string;
}

defineProps<BranchCardProps>();
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang=""></style>
