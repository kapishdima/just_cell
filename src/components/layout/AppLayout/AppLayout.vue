<template>
  <div class="app-layout">
    <app-navbar @mobileButtonClick="(value: boolean) => menuOpened = value" />
    <div class="app-layout__row">
      <app-sidebar :menuOpened="menuOpened" />
      <div class="app-layout__content">
        <slot name="appLoading" />
        <div class="app-layout__header">
          <div class="app-layout__link">
            <slot name="appLink"></slot>
          </div>
          <div class="app-layout__text">
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
import AppNavbar from "../AppNavbar/AppNavbar.vue";
import AppSidebar from "../AppSidebar/AppSidebar.vue";
export default {
  components: {
    AppNavbar,
    AppSidebar,
  },

  data() {
    return {
      menuOpened: false,
    };
  },
};
</script>
<style lang=""></style>
