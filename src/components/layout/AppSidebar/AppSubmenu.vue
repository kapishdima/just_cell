<template>
  <div class="app-menu__subgroup" :class="{ active: opened }">
    <div class="app-menu__group-parent" @click="open">
      <div class="app-menu__item app-menu__item--parent">
        {{ submenu.NAME }}
        <div class="app-menu-subicon">
          <img src="@/assets/icons/chevron-down.svg" alt="Open" />
        </div>
      </div>
    </div>
    <div class="app-menu__subgroup-subchildren">
      <router-link
        v-for="child in submenu.children"
        :key="child.NAME"
        :to="{
          path: `/${child.LINK}`,
          query: { alloc_type: child.alloc_type || '' },
        }"
        class="app-menu__item"
      >
        {{ child.NAME }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["submenu", "index"],
  data(): { opened: boolean } {
    return {
      opened: false,
    };
  },

  mounted() {
    const activeSubmenuIndex = JSON.parse(
      window.localStorage.getItem("activeSubmenu") || "-1"
    );

    this.opened = activeSubmenuIndex === this.index;
  },

  methods: {
    open() {
      if (this.opened) {
        window.localStorage.setItem("activeSubmenu", "-1");
      } else {
        window.localStorage.setItem("activeSubmenu", this.index);
      }
      this.opened = !this.opened;
    },
  },
});
</script>

<style scoped></style>
