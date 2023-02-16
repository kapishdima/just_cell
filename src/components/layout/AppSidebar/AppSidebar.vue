<template>
  <aside class="app-sidebar">
    <app-menu />
    <div class="app-sidebar__footer">
      <div class="app-sidebar__footer">
        <div class="app-sidebar__footer-item">
          <router-link :to="{ name: 'departmentCreate' }">
            Додати нове відділення
            <img src="@/assets/icons/filled_plus_icon.svg" alt="" />
          </router-link>
        </div>

        <div class="app-sidebar__footer-item">
          <router-link :to="{ name: 'usersCreate' }" class="">
            Додати нового користувача
            <img src="@/assets/icons/filled_plus_icon.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import AppMenu from "./AppMenu.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    AppMenu,
  },
});
</script>
<style lang=""></style>
