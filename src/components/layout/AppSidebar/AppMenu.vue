<template>
  <div class="app-menu">
    <div
      v-for="menuGroup in menu"
      :key="menuGroup.title"
      class="app-menu__group"
      :class="{ active: activeIndex === menuGroup.index }"
      @click="open(menuGroup.index)"
    >
      <div class="app-menu__group-parent">
        <div class="app-menu__item app-menu__item--parent">
          <!-- <div class="app-menu__item-icon">
            <img src="@/assets/icons/menu/dashboard_icon.svg" alt="dashboard" />
          </div> -->
          {{ menuGroup.title }}
          <div class="app-menu-icon">
            <img src="@/assets/icons/chevron-down.svg" alt="Open" />
          </div>
        </div>
      </div>
      <div class="app-menu__group-children">
        <router-link
          v-for="child in menuGroup.children"
          :key="child.NAME"
          :to="`/${child.LINK}`"
          class="app-menu__item"
        >
          {{ child.NAME }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getMenu, MenuView } from "@/api/menu/menu.api";

export default defineComponent({
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
      window.localStorage.setItem(
        "activeMenu",
        JSON.stringify(this.activeIndex)
      );
    },
  },

  methods: {
    open(index: number) {
      console.log(index);
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
