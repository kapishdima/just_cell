<template>
  <div class="app-layout">
    <app-navbar @mobileButtonClick="(value: boolean) => menuOpened = value" />
    <div class="app-layout__row">
      <app-sidebar :menuOpened="menuOpened" />
      <div class="app-layout__content">
        <transition>
          <app-loading :loading="routeLoading" />
        </transition>
        <slot name="appLoading" />
        <div class="app-layout__header">
          <div class="app-layout__link" v-if="hasAppLink">
            <slot name="appLink"></slot>
          </div>
          <div class="app-layout__text" v-if="hasAppTitle">
            <h2 class="app-layout__title">
              <slot name="appTitle"></slot>
            </h2>
            <h4 class="app-layout__subtitle">
              <slot name="appSubtitle"></slot>
            </h4>
          </div>
          <div class="app-layout__extra">
            <slot name="appExtra"></slot>
          </div>
        </div>
        <slot name="appContent"></slot>
        <div class="app-layout__actions">
          <slot name="appActions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AppLoading from "../AppLoading/AppLoading.vue";
import AppNavbar from "../AppNavbar/AppNavbar.vue";
import AppSidebar from "../AppSidebar/AppSidebar.vue";

export default defineComponent({
  components: {
    AppNavbar,
    AppSidebar,
    AppLoading,
  },

  data() {
    return {
      menuOpened: false,
    };
  },

  computed: {
    hasAppLink(): boolean {
      return Boolean(this.$slots.appLink);
    },
    hasAppTitle(): boolean {
      return Boolean(this.$slots.appTitle);
    },

    routeLoading(): boolean {
      return this.$store.state.router.loading;
    },
  },
});
</script>
<style lang=""></style>
