<template lang="">
  <app-empty>
    <template #emptyTitle>У вас ще немає терміналів</template>
    <template #emptyActions>
      <router-link :to="{ name: 'createTerminal' }" class="terminal-create-btn">
        <v-button :hasMaxWidth="false">
          <template #text>Додати термінал</template>
        </v-button>
      </router-link>
    </template>
  </app-empty>
</template>
<script>
import AppEmpty from "@/components/layout/AppLayout/AppEmpty.vue";
export default {
  components: {
    AppEmpty,
  },
};
</script>
<style lang=""></style>
