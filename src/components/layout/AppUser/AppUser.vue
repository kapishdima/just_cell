<template>
  <div class="app-user">
    <div class="app-user__avatar">
      <img src="@/assets/icons/user_avatar.svg" alt="" />
    </div>
    <div class="app-user__name">{{ $store.state.users.user.sh_name }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang=""></style>
