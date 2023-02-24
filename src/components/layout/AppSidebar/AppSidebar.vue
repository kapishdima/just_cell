<template>
  <aside class="app-sidebar" :class="{ opened: menuOpened }">
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
  props: {
    menuOpened: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    AppMenu,
  },

  watch: {
    menuOpened: {
      immediate: true,
      deep: true,
      handler(opened) {
        console.log("opened", opened);
        if (opened) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      },
    },
  },
});
</script>
<style lang=""></style>
