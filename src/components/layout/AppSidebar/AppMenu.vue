<template>
  <div class="app-menu">
    <div
      v-for="menuGroup in menu"
      :key="menuGroup.title"
      class="app-menu__group"
      :class="{ active: activeIndex === menuGroup.index }"
    >
      <div class="app-menu__group-parent" @click="open(menuGroup.index)">
        <div class="app-menu__item app-menu__item--parent">
          {{ menuGroup.title }}
          <div class="app-menu-icon">
            <img src="@/assets/icons/chevron-down.svg" alt="Open" />
          </div>
        </div>
      </div>
      <div class="app-menu__group-children">
        <div
          class="app-menu__child"
          v-for="(child, index) in menuGroup.children"
          :key="child.NAME"
        >
          <app-submenu
            :submenu="child"
            :index="index"
            v-if="Boolean(child.children)"
          />
          <router-link
            :to="`/${child.LINK}`"
            :class="{ 'app-menu__item--active': $route.path === child.LINK }"
            class="app-menu__item"
            v-else
          >
            {{ child.NAME }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getMenu, MenuView } from "@/api/menu/menu.api";
import AppSubmenu from "./AppSubmenu.vue";

export default defineComponent({
  components: {
    AppSubmenu,
  },
  data(): { activeIndex: number; menu: MenuView[] } {
    return {
      activeIndex: -1,
      menu: [] as MenuView[],
    };
  },

  mounted() {
    this.menu = getMenu();
    this.activeIndex = JSON.parse(
      window.localStorage.getItem("activeMenu") || "-1"
    );
  },

  watch: {
    activeIndex() {
      if (this.activeIndex < 0) {
        window.localStorage.setItem("activeSubmenu", "-1");
      }
      window.localStorage.setItem(
        "activeMenu",
        JSON.stringify(this.activeIndex)
      );
    },
  },

  methods: {
    open(index: number) {
      if (this.activeIndex === index) {
        this.activeIndex = -1;
      } else {
        this.activeIndex = index;
      }
    },
  },
});
</script>
<style lang=""></style>
