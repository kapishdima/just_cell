<template lang="">
  <app-layout>
    <template #appTitle>Користувачі</template>
    <template #appContent>
      <app-empty>
        <template #emptyTitle>У вас ще немає користувачів</template>
        <template #emptyActions>
          <router-link :to="{ name: 'usersCreate' }">
            <v-button type="button">
              <template #text>Додати нового користувача</template>
            </v-button>
          </router-link>
        </template>
      </app-empty>
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppEmpty from "@/components/layout/AppLayout/AppEmpty.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default {
  components: {
    AppLayout,
    AppEmpty,
    VButton,
  },
};
</script>
<style lang=""></style>
