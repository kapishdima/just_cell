<template>
  <router-link :to="{ name: 'users' }">
    <v-button type="button" :hasMaxWidth="false">
      <template #afterIcon>
        <img src="@/assets/icons/statistics-icon.svg" alt="" />
        Переглянути статистику
      </template>
    </v-button>
  </router-link>
</template>
<script lang="ts">
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
export default {
  components: {
    VButton,
  },
};
</script>
<style lang=""></style>
