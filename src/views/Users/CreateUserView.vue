<template lang="">
  <app-layout>
    <template #appTitle>Додати нового користувача</template>
    <template #appContent>
      <create-user />
    </template>
    <template #appActions>
      <div class="app-layout__caption">* - Поля обов’язкові для заповнення</div>
      <v-button>
        <template #text>Додати користувача</template>
      </v-button>
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import CreateUser from "./CreateUserForm.vue";

export default {
  components: {
    AppLayout,
    CreateUser,
    VButton,
  },
};
</script>
<style lang=""></style>
