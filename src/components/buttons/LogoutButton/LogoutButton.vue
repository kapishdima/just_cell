<template>
  <v-button variant="ghost" :hasMaxWidth="false">
    <template #text>Exit</template>
    <template #afterIcon>
      <img src="@/assets/icons/logout_icon.svg" alt="" />
    </template>
  </v-button>
</template>
<script lang="ts">
import VButton from "../BaseButton/BaseButton.vue";
export default {
  components: {
    VButton,
  },
};
</script>
<style lang=""></style>
